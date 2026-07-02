import { Header } from "@/components/layout/header";
import { CourseForm } from "@/components/admin/course-form";
import { getServerT } from "@/lib/i18n/server";

export default async function NewCoursePage() {
  const t = await getServerT();
  return (
    <div className="animate-fade-in">
      <Header title={t("Novo Curso")} subtitle={t("Cadastre um novo curso na plataforma")} />
      <div className="p-4 sm:p-6 max-w-3xl">
        <CourseForm />
      </div>
    </div>
  );
}
