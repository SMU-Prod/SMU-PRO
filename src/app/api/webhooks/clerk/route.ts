import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/email";
import { createNotification, notifyAdmins } from "@/lib/actions/notifications";
import type { UserInsert } from "@/types/database";

export async function POST(req: Request) {
  console.log("[Clerk Webhook] ▶ Recebido request");

  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    console.error("[Clerk Webhook] ✗ CLERK_WEBHOOK_SECRET não configurado");
    return new Response("Missing webhook secret", { status: 500 });
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("[Clerk Webhook] ✗ Headers svix ausentes:", { svix_id: !!svix_id, svix_timestamp: !!svix_timestamp, svix_signature: !!svix_signature });
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
    console.log("[Clerk Webhook] ✓ Assinatura verificada, evento:", evt.type);
  } catch (err) {
    console.error("[Clerk Webhook] ✗ Falha na verificação da assinatura:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  const supabase = createAdminClient();

  try {
    switch (evt.type) {
      case "user.created": {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data;
        const email = email_addresses[0]?.email_address;
        const nome = [first_name, last_name].filter(Boolean).join(" ") || email;

        console.log("[Clerk Webhook] user.created:", { clerk_id: id, email, nome });

        const userData = {
          clerk_id: id,
          nome: nome || "Usuário",
          email: email || "",
          avatar_url: image_url || null,
          bio: null,
          role: "trainee" as const,
          projeto_cultural: false,
          nivel_atual: "trainee" as const,
          telefone: null,
          cidade: null,
          estado: null,
          ativo: true,
          ultimo_acesso: null,
        };

        // Use insert (not upsert) to avoid overwriting role/other fields if user already exists
        const { data: existing } = await supabase
          .from("users")
          .select("id")
          .eq("clerk_id", id)
          .limit(1);

        if (existing && existing.length > 0) {
          console.log("[Clerk Webhook] User already exists, skipping insert:", existing[0].id);
          break;
        }

        const { data: newUser, error } = await supabase
          .from("users")
          .insert(userData)
          .select("id")
          .single();

        if (error) {
          console.error("[Clerk Webhook] ✗ Erro Supabase ao criar user:", JSON.stringify(error));
          return new Response("Error creating user", { status: 500 });
        }

        console.log("[Clerk Webhook] ✓ User criado no Supabase:", newUser?.id);

        // Log de atividade
        if (newUser) {
          await supabase.from("activity_log").insert({
            user_id: newUser.id,
            tipo: "login",
            descricao: "Novo usuário criado via Clerk",
            metadata: { clerk_id: id },
          });
        }

        // Email de boas-vindas (não bloqueia a resposta)
        if (email) {
          sendWelcomeEmail({ to: email, nome: nome || "Usuário" }).catch((err) =>
            console.error("[Clerk Webhook] ✗ Erro ao enviar email:", err)
          );
        }

        // Welcome notification
        if (newUser) {
          createNotification({
            userUuid: newUser.id,
            tipo: "welcome",
            titulo: "Bem-vindo à SMU PRO!",
            mensagem: "Explore nossos cursos de sonorização, iluminação, DJ e VJ. Comece pelo nível Trainee!",
            link: "/dashboard/cursos",
          }).catch((err) => console.error("[Notification] Erro:", err));

          // Admin alert
          notifyAdmins({
            titulo: `Novo aluno: ${nome || "Usuário"}`,
            mensagem: email ?? undefined,
            link: "/admin/usuarios",
          }).catch((err) => console.error("[Clerk Webhook Admin Notification Error]", err));
        }

        break;
      }

    case "user.updated": {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;
      const email = email_addresses[0]?.email_address;
      const nome = [first_name, last_name].filter(Boolean).join(" ") || email;
      console.log("[Clerk Webhook] user.updated:", { clerk_id: id, email });

      const { error: updateErr } = await supabase
        .from("users")
        .update({
          nome: nome || "Usuário",
          email: email || "",
          avatar_url: image_url || null,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_id", id);

      if (updateErr) console.error("[Clerk Webhook] ✗ Erro ao atualizar user:", JSON.stringify(updateErr));
      else console.log("[Clerk Webhook] ✓ User atualizado");
      break;
    }

    case "user.deleted": {
      const { id } = evt.data;
      console.log("[Clerk Webhook] user.deleted:", id);
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

    default:
      console.log("[Clerk Webhook] Evento não tratado:", evt.type);
    }
  } catch (err) {
    console.error("[Clerk Webhook] ✗ Erro inesperado:", err);
    return new Response("Internal error", { status: 500 });
  }

  console.log("[Clerk Webhook] ✓ Processado com sucesso");
  return new Response("OK", { status: 200 });
}
