import type { ReactNode } from "react";
import Link from "next/link";

export default function PageHero({
  label,
  title,
  description,
  children,
  backToEvents = false,
}: {
  label: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  backToEvents?: boolean;
}) {
  return (
    <section className="site-hero">
      <div className="site-hero-orbit" aria-hidden="true" />
      <div className="home-shell">
        {backToEvents && (
          <Link href="/events" className="site-breadcrumb">
            ← All events
          </Link>
        )}
        <p className="home-label">{label}</p>
        <h1>{title}</h1>
        <p className="site-hero-description">{description}</p>
        {children && <div className="home-actions">{children}</div>}
      </div>
    </section>
  );
}
