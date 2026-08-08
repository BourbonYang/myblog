import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我",
  description: "关于作者的学术研究方向、工程技术实践和社交联系方式。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* 标题 */}
      <header className="mb-12 border-b border-card-border pb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold tracking-tight mb-2 text-blog-primary">
          关于作者
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-serif text-sm">
          对物理仿真与刚体控制抱有热忱的探索者
        </p>
      </header>

      {/* 个人故事 */}
      <section className="space-y-6 text-slate-700 dark:text-slate-300 font-serif leading-relaxed mb-12">
        <p>
          欢迎来到这里。我是一名专注于物理世界计算模拟与工程数学交叉点的开发者。
        </p>
        <p>
          此博客是我个人的数字化“手抄本”。我深爱文艺复兴时期那些充满奇思妙想、密密麻麻写满推导和手绘草图的科学家手稿（如达芬奇、伽利略的手札）。在这个信息碎片化、视觉噪音过载的时代，我希望能保留一个如牛皮纸般沉静、温润的专注空间，用来系统性地整理我在多自由度（6-DOF）刚体仿真、空间旋转、以及应用数学中沉淀下的知识。
        </p>
        <p>
          如果这些整理碰巧能解决你在相关推导或工程实现中的疑问，或者为你带来了一丝启发，我将深感荣幸。
        </p>
      </section>

      {/* 研究与兴趣方向 */}
      <section className="mb-12">
        <h2 className="text-lg font-serif font-bold mb-6 border-b border-card-border pb-2 text-slate-800 dark:text-slate-200">
          核心探索方向 / FIELDS
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="text-2xl shrink-0">🚀</div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                多自由度(6-DOF)刚体模拟
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-serif leading-relaxed">
                专注于飞行器、火箭及航天器的姿态与运动方程求解。深入研究辛几何积分器（Symplectic Integrators）以及龙格-库塔方法在刚体动力学解算中的精度。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl shrink-0">📐</div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                三维空间坐标系与变换矩阵
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-serif leading-relaxed">
                研究四元数（Quaternions）、欧拉角与旋转矩阵之间的转换与防死锁（Gimbal Lock）解法，致力于提供稳健的姿态解算与仿真渲染基底。
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl shrink-0">💻</div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
                高性能仿真渲染与数值计算
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-serif leading-relaxed">
                利用现代前端架构与 WebGL、WebAssembly 技术，实现在浏览器中流畅呈现科学级物理动力学仿真的图表与三维场景。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="p-6 bg-card-bg rounded-2xl border border-card-border">
        <h2 className="text-base font-serif font-bold mb-4 text-slate-900 dark:text-slate-100">
          保持联系 / CONNECT
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-serif leading-relaxed mb-6">
          如果你对我的博客内容感兴趣，或者希望就某篇博文中的数学公式、算法优化进行讨论，随时欢迎通过以下方式与我取得联系：
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-serif font-bold">
          <a
            href="mailto:your-email@example.com"
            className="px-4 py-2 rounded-xl bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-800/40 dark:hover:bg-slate-700/40 text-slate-800 dark:text-slate-200 transition-colors"
          >
            📧 电子邮箱
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-800/40 dark:hover:bg-slate-700/40 text-slate-800 dark:text-slate-200 transition-colors"
          >
            🐙 GitHub 主页
          </a>
        </div>
      </section>
    </div>
  );
}
