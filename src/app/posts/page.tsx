import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
      {/* 页面头部 */}
      <header className="mb-16 border-b border-card-border pb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold tracking-tight mb-4 text-blog-primary">
          所有手稿
        </h1>
      </header>

      {/* 文章卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="blog-card flex flex-col justify-between p-6 md:p-8 bg-card-bg rounded-2xl border border-card-border"
          >
            <div>
              {/* 日期与标签 */}
              <div className="flex items-center gap-2 mb-4 text-xs font-serif font-bold text-slate-400 dark:text-slate-500">
                <time dateTime={post.date}>{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span>手稿记录</span>
              </div>

              {/* 标题 */}
              <h2 className="text-lg md:text-xl font-serif font-bold mb-3 tracking-tight text-slate-900 dark:text-slate-100">
                <Link href={`/posts/${post.slug}`} className="hover:text-blog-primary transition-colors">
                  {post.title}
                </Link>
              </h2>

              {/* 简介描述 */}
              <div
                className="text-slate-500 dark:text-slate-400 font-serif text-sm leading-relaxed mb-6 prose-description"
                dangerouslySetInnerHTML={{ __html: post.descriptionHtml }}
              />
            </div>


          </article>
        ))}
      </div>
    </div>
  );
}
