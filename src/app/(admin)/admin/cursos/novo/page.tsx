import { Header } from "@/components/layout/header";
import { CourseForm } from "@/components/admin/course-form";

export default function NewCoursePage() {
  return (
    <div className="animate-fade-in">
      <Header title="Novo Curso" subtitle="Cadastre um novo curso na plataforma" />
      <div className="p-6 max-w-3xl">
        <CourseForm />
      </div>
    </div>
  );
}
