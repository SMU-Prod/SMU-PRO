import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string; lessonId: string }>;
}

// Rota legada — redireciona para o URL canônico sob /dashboard
export default async function LessonPageLegacy({ params }: Props) {
  const { slug, lessonId } = await params;
  redirect(`/dashboard/cursos/${slug}/aulas/${lessonId}`);
}
