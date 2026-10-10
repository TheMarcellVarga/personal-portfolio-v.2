import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`page-intro ${className}`}>
      <p className="page-eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-lead">{description}</p>
      {children ? <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div> : null}
    </div>
  );
}
