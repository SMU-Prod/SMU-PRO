import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AdminEditCoursePage({ params }: Props) {
  const { id } = await params;
  redirect(`/admin/cursos/${id}?tab=informacoes`);
}
