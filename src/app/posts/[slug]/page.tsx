import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const postData = await getPostData(slug);


  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* 顶部面包屑与返回导航 */}
      <nav className="mb-10 text-sm">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blog-primary font-medium transition-colors"
        >
          <span>←</span> 返回文章列表
        </Link>
      </nav>

      {/* 文章详情容器 */}
      <article className="pb-16">
        {/* 文章头部信息 */}
        <header className="mb-10 pb-8 border-b border-card-border">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
            {postData.title}
          </h1>
        </header>

        {/* 渲染正文 */}
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        <footer className="mt-16 pt-8 border-t border-dashed border-card-border/60 flex justify-end">
          <time dateTime={postData.date} className="text-sm font-serif italic text-[#2b6641]/90 dark:text-[#61a877]/90">
            写于 {postData.date}
          </time>
        </footer>
      </article>
    </div>
  );
}

// 修复拼写错误 generateMeatadata -> generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: postData.title,
    description: postData.description,
    keywords: postData.keywords ? postData.keywords.split(",") : undefined,
  };
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}