import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/ep-logo.jpg.asset.json";

const nav = [
  { to: "/", label: "Αρχική" },
  { to: "/about", label: "Σχετικά" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="Λογότυπο ΕΠ" className="h-11 w-11 rounded-full object-cover" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-2xl text-olive-deep">my-surgeon.gr</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">ΕΛΕΝΗ ΠΑΡΑΣΚΕΥΟΠΟΥΛΟΥ<br />MD, MSC</span>
            </span>
          </Link>
          <nav className="flex gap-1 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-olive-deep font-semibold" }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-olive-deep text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm sm:flex-row sm:justify-between">
          <span className="font-display text-xl">Ελένη Παρασκευοπούλου MD, MSc — Γενική & Στρατιωτική Χειρουργός</span>
          <span className="opacity-80">© {new Date().getFullYear()} my-surgeon.gr</span>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-hero text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] opacity-80">{eyebrow}</p>
        <h1 className="mt-3 text-5xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg opacity-90">{intro}</p>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
