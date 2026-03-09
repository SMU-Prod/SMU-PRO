import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendEnrollmentEmail } from "@/lib/email";
import { createNotification } from "@/lib/actions/notifications";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { courseId } = await req.json();
  if (!courseId) return NextResponse.json({ error: "courseId obrigatório" }, { status: 400 });

  const supabase = createAdminClient();

  // Verificar se o curso é realmente free
  const { data: course } = await supabase
    .from("courses")
    .select("id, tipo, titulo")
    .eq("id", courseId)
    .eq("ativo", true)
    .single();

  if (!course) return NextResponse.json({ error: "Curso não encontrado" }, { status: 404 });
  if (course.tipo !== "free") {
    return NextResponse.json({ error: "Este curso não é gratuito" }, { status: 400 });
  }

  // Resolver UUID do usuário (enrollments.user_id é uuid FK para users.id)
  const { data: userRow } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (!userRow) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

  const userUuid = userRow.id;

  // Upsert enrollment
  const { data: enrollment, error } = await supabase
    .from("enrollments")
    .upsert(
      {
        user_id: userUuid,
        course_id: courseId,
        tipo_acesso: "free",
        status: "ativo",
      },
      { onConflict: "user_id,course_id" }
    )
    .select()
    .single();

  if (error) {
    console.error("[Free Enrollment] Erro:", error);
    return NextResponse.json({ error: "Erro ao processar inscrição" }, { status: 500 });
  }

  // Log de atividade
  await supabase.from("activity_log").insert({
    user_id: userUuid,
    tipo: "enrollment",
    descricao: `Inscrito em ${course.titulo} (gratuito)`,
    metadata: { course_id: courseId, enrollment_id: enrollment.id },
  });

  // Email de confirmação de matrícula
  const { data: userData } = await supabase
    .from("users").select("email, nome").eq("clerk_id", userId).single();
  const { data: courseSlugData } = await supabase
    .from("courses").select("slug").eq("id", courseId).single();

  if (userData?.email && courseSlugData) {
    sendEnrollmentEmail({
      to: userData.email,
      nome: userData.nome,
      courseTitulo: course.titulo,
      courseSlug: courseSlugData.slug,
    }).catch((err) => console.error("[Email] Erro ao enviar matrícula:", err));
  }

  // In-app notification
  createNotification({
    userUuid,
    tipo: "enrollment",
    titulo: `Matrícula confirmada: ${course.titulo}`,
    mensagem: "Você já pode começar a assistir as aulas. Bons estudos!",
    link: courseSlugData ? `/cursos/${courseSlugData.slug}` : "/dashboard/cursos",
  }).catch((err) => console.error("[Notification] Erro:", err));

  return NextResponse.json({ enrollment });
}
