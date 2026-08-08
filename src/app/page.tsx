import { SiteSection } from "@/components/site-section";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8"
        >
          <a className="text-sm font-semibold" href="#top">
            Portfolio
          </a>
          <div className="flex flex-wrap justify-end gap-4 text-sm text-slate-600">
            {navItems.map((item) => (
              <a
                className="transition hover:text-slate-950"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[68vh] w-full max-w-5xl flex-col justify-center px-6 py-20 sm:px-8">
          <p className="text-sm font-medium text-teal-700">Portfolio</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
            Thoughtful web experiences, built with care.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            プロジェクト、スキル、連絡先を整理して育てていくためのシンプルな
            ポートフォリオです。
          </p>
        </section>

        <SiteSection eyebrow="01" id="about" title="About">
          <p>
            制作物の背景、得意領域、仕事への向き合い方をここに追加していきます。
            まずは読みやすく拡張しやすい土台だけを用意しています。
          </p>
        </SiteSection>

        <SiteSection eyebrow="02" id="projects" title="Projects">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-950">
              Selected work
            </h3>
            <p className="mt-3">
              公開できる制作実績やケーススタディを、後から少しずつ追加できます。
            </p>
          </div>
        </SiteSection>

        <SiteSection eyebrow="03" id="skills" title="Skills">
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </SiteSection>

        <SiteSection eyebrow="04" id="contact" title="Contact">
          <p>
            お問い合わせ先やSNSリンクは、公開する情報が決まり次第ここに追加します。
          </p>
        </SiteSection>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Portfolio</p>
          <p>Built for steady iteration.</p>
        </div>
      </footer>
    </div>
  );
}
