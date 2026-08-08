import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const allPosts = await getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3); // 展示最新的 3 篇文章

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Hero Section / 介绍 */}
      <section className="mb-20 text-left max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight mb-6 text-blog-primary">
          Hi
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed mb-8">
          我在这里记录一些曾困扰我的问题，希望能帮助到跟我一样遇到这些问题的人
        </p>

      </section>



      {/* 最近更新文章 */}
      <section>
        <div className="flex items-center justify-between mb-8 border-b border-card-border pb-4">
          <h2 className="text-xl font-serif font-bold tracking-tight">最近手稿</h2>
          <a
            href="/posts"
            className="text-sm font-serif font-bold text-blog-primary hover:text-blog-secondary transition-colors"
          >
            全部手稿 ({allPosts.length}) →
          </a>
        </div>

        <div className="flex flex-col gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 py-4 border-b border-dashed border-card-border"
            >
              <div className="flex-1">
                <a
                  href={`/posts/${post.slug}`}
                  className="inline-block text-lg font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:text-blog-primary transition-colors mb-2"
                >
                  {post.title}
                </a>
                <div
                  className="text-sm text-slate-500 dark:text-slate-400 font-serif leading-relaxed max-w-3xl prose-description"
                  dangerouslySetInnerHTML={{ __html: post.descriptionHtml }}
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-serif text-slate-400 shrink-0">
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
