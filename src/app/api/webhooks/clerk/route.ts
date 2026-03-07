import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/email";
import type { UserInsert } from "@/types/database";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    return new Response("Missing webhook secret", { status: 500 });
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  const supabase = createAdminClient();

  switch (evt.type) {
    case "user.created": {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;
      const email = email_addresses[0]?.email_address;
      const nome = [first_name, last_name].filter(Boolean).join(" ") || email;

      const userData: UserInsert = {
        id: id,
        clerk_id: id,
        nome: nome || "Usuário",
        email: email || "",
        avatar_url: image_url || null,
        bio: null,
        role: "trainee",
        projeto_cultural: false,
        nivel_atual: "trainee",
        telefone: null,
        cidade: null,
        estado: null,
        ativo: true,
        ultimo_acesso: null,
      };

      const { error } = await supabase.from("users").upsert(userData, { onConflict: "clerk_id" });
      if (error) {
        console.error("Error creating user in Supabase:", error);
        return new Response("Error creating user", { status: 500 });
      }

      // Log de atividade
      await supabase.from("activity_log").insert({
        user_id: id,
        tipo: "login",
        descricao: "Novo usuário criado via Clerk",
        metadata: { clerk_id: id },
      });

      // Email de boas-vindas (não bloqueia a resposta)
      if (email) {
        sendWelcomeEmail({ to: email, nome: nome || "Usuário" }).catch((err) =>
          console.error("[Email] Erro ao enviar boas-vindas:", err)
        );
      }

      break;
    }

    case "user.updated": {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;
      const email = email_addresses[0]?.email_address;
      const nome = [first_name, last_name].filter(Boolean).join(" ") || email;

      await supabase
        .from("users")
        .update({
          nome: nome || "Usuário",
          email: email || "",
          avatar_url: image_url || null,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_id", id);

      break;
    }

    case "user.deleted": {
      const { id } = evt.data;
      await supabase.from("users").update({ ativo: false }).eq("clerk_id", id as string);
      break;
    }

    case "session.created": {
      const { user_id } = evt.data;
      await supabase
        .from("users")
        .update({ ultimo_acesso: new Date().toISOString() })
        .eq("clerk_id", user_id);
      break;
    }
  }

  return new Response("OK", { status: 200 });
}
