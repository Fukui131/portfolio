import type { ReactNode } from "react";

type SiteSectionProps = {
  children: ReactNode;
  eyebrow: string;
  id: string;
  title: string;
};

export function SiteSection({
  children,
  eyebrow,
  id,
  title,
}: SiteSectionProps) {
  return (
    <section
      className="mx-auto grid w-full max-w-5xl gap-6 px-6 py-16 sm:grid-cols-[14rem_1fr] sm:px-8"
      id={id}
    >
      <div>
        <p className="text-sm font-medium text-teal-700">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950">{title}</h2>
      </div>
      <div className="text-base leading-8 text-slate-700">{children}</div>
    </section>
  );
}
