import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 我的个人博客",
    default: "我的个人博客 - 专注物理仿真与技术分享",
  },
  description: "基于文艺复兴手稿美学设计的个人空间，记录关于刚体力学、物理模拟及数学算法的系统性总结。",
  keywords: ["博客", "个人网站", "物理模拟", "6-DOF", "线性代数", "牛皮纸风格", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">

        {/* 顶部滚动进度条 */}
        <ScrollProgress />

        {/* 精致毛玻璃顶部导航栏 */}
        <header className="sticky top-0 z-50 w-full border-b border-card-border bg-white/40 backdrop-blur-md dark:bg-[#17120e]/60 transition-all">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="tracking-tight transition-all duration-300 hover:opacity-85">
              <span className="font-serif italic font-extrabold text-xl text-[#2b6641] dark:text-[#61a877] drop-shadow-sm">
                Binlog.
              </span>
            </Link>
            <nav className="flex gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Link href="/" className="nav-link hover:text-blog-primary transition-colors">
                首页
              </Link>
              <Link href="/posts" className="nav-link hover:text-blog-primary transition-colors">
                文章
              </Link>
              <Link href="/about" className="nav-link hover:text-blog-primary transition-colors">
                关于
              </Link>
            </nav>
          </div>
        </header>

        {/* 页面内容主体 */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* 简约页脚 */}
        <footer className="w-full border-t border-card-border/80 bg-white/10 dark:bg-black/5 py-8 text-center text-xs text-slate-500 dark:text-slate-500">
          <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif">© {new Date().getFullYear()} Binlog. 写于羊皮纸上。</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
