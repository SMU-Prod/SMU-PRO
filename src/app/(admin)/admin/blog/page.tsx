import { adminGetAllPosts } from "@/lib/actions/blog";
import { Header } from "@/components/layout/header";
import { BlogManager } from "@/components/admin/blog-manager";
import { getServerT } from "@/lib/i18n/server";

export default async function AdminBlogPage() {
  const t = await getServerT();
  let posts: any[] = [];
  let total = 0;
  let error = "";

  try {
    const result = await adminGetAllPosts();
    posts = result.posts;
    total = result.total;
  } catch (e: any) {
    error = e?.message ?? "Erro ao carregar posts";
  }

  if (error && error.includes("does not exist")) {
    return (
      <div className="animate-fade-in">
        <Header title="Blog" subtitle={t("Gerencie artigos e conteúdo SEO")} />
        <div className="p-4 sm:p-6">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6 text-center max-w-lg mx-auto">
            <p className="font-semibold text-amber-300 mb-2">{t("Tabela não encontrada")}</p>
            <p className="text-sm text-amber-400/80 mb-4">
              {t("Execute a migration")} <code className="bg-surface-2 px-1 rounded">20260323_blog_posts.sql</code> {t("no Supabase para criar a tabela de posts.")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Header
        title="Blog"
        subtitle={`${total} ${total !== 1 ? t("artigos cadastrados") : t("artigo cadastrado")}`}
      />
      <div className="p-4 sm:p-6">
        <BlogManager initialPosts={posts} />
      </div>
    </div>
  );
}
