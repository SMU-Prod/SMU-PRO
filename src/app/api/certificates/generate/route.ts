import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { sendCertificateEmail } from "@/lib/email";
import { createNotification } from "@/lib/actions/notifications";
import { rateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { success } = await rateLimit(`cert:${userId}`, 5, 60000);
  if (!success) return NextResponse.json({ error: "Muitas requisições. Aguarde 1 minuto." }, { status: 429 });

  const { courseId } = await req.json();
  if (!courseId) return NextResponse.json({ error: "courseId obrigatório" }, { status: 400 });

  const supabase = createAdminClient();

  // Resolver UUID do usuário
  const { data: userRow } = await supabase.from("users").select("id, projeto_cultural, email, nome").eq("clerk_id", userId).single();
  if (!userRow) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  const userUuid = userRow.id;

  // Verificar se o certificado já existe
  const { data: existing } = await supabase
    .from("certificates")
    .select("*")
    .eq("user_id", userUuid)
    .eq("course_id", courseId)
    .single();

  if (existing) {
    return NextResponse.json({ certificate: existing });
  }

  // Verificar progresso: 100% das aulas concluídas
  const { data: course, error: courseError } = await (supabase as any)
    .from("courses")
    .select(`*, modules(*, lessons(*))`)
    .eq("id", courseId)
    .single();

  if (courseError || !course) {
    console.error("[Certificate] Erro ao buscar curso:", courseError?.message);
    return NextResponse.json({ error: "Curso não encontrado" }, { status: 404 });
  }

  const allLessons = (course.modules ?? []).flatMap((m: any) => m.lessons ?? []);
  const { data: progress } = await supabase
    .from("progress")
    .select("*")
    .eq("user_id", userUuid)
    .eq("concluido", true);

  const completedIds = new Set((progress ?? []).map((p) => p.lesson_id));
  const allCompleted = allLessons.every((l: any) => completedIds.has(l.id));

  if (!allCompleted) {
    return NextResponse.json({ error: "Curso ainda não concluído" }, { status: 400 });
  }

  // Calcular nota média dos quizzes DO CURSO (filtrando por course_id)
  const quizIds = allLessons
    .filter((l: any) => l.tem_quiz)
    .map((l: any) => l.id);

  let notaMedia = 100;
  if (quizIds.length > 0) {
    const { data: quizzes } = await supabase
      .from("quizzes")
      .select("id")
      .in("lesson_id", quizIds);

    if (quizzes?.length) {
      const { data: attempts } = await supabase
        .from("quiz_attempts")
        .select("nota")
        .eq("user_id", userUuid)
        .eq("aprovado", true)
        .in("quiz_id", quizzes.map((q) => q.id));

      if (attempts?.length) {
        notaMedia = Math.round(
          attempts.reduce((acc: number, b: { nota: number }) => acc + b.nota, 0) / attempts.length
        );
      }
    }
  }

  // Criar certificado
  const { data: cert, error } = await supabase
    .from("certificates")
    .insert({
      user_id: userUuid,
      course_id: courseId,
      nota_final: notaMedia,
      carga_horaria: course.carga_horaria,
      projeto_cultural: userRow.projeto_cultural ?? false,
    })
    .select()
    .single();

  if (error) {
    // ON CONFLICT = trigger já criou, buscar existente
    if (error.code === "23505") {
      const { data: existingCert } = await supabase
        .from("certificates")
        .select("*")
        .eq("user_id", userUuid)
        .eq("course_id", courseId)
        .single();
      if (existingCert) return NextResponse.json({ certificate: existingCert });
    }
    console.error("[Certificate] Erro ao criar:", error);
    return NextResponse.json({ error: "Erro ao gerar certificado" }, { status: 500 });
  }

  // Log de atividade
  await supabase.from("activity_log").insert({
    user_id: userUuid,
    tipo: "certificate_issued",
    descricao: `Certificado emitido para ${course.titulo}`,
    metadata: { certificate_id: cert.id, course_id: courseId },
  });

  // Email de certificado
  if (userRow.email) {
    sendCertificateEmail({
      to: userRow.email,
      nome: userRow.nome,
      courseTitulo: course.titulo,
      notaFinal: cert.nota_final,
      cargaHoraria: cert.carga_horaria,
      codigoVerificacao: cert.codigo_verificacao,
    }).catch((err) => console.error("[Email] Erro ao enviar certificado:", err));
  }

  // In-app notification
  createNotification({
    userUuid,
    tipo: "certificate",
    titulo: `Certificado emitido: ${course.titulo}`,
    mensagem: `Nota final: ${cert.nota_final}%. Código: ${cert.codigo_verificacao}`,
    link: `/certificado/${cert.codigo_verificacao}`,
  }).catch((err) => console.error("[Certificate Notification Error]", err));

  return NextResponse.json({ certificate: cert });
}
