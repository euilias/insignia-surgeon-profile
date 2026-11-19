import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Επικοινωνία & Ραντεβού — Δρ. Ελένη Παρασκευοπούλου", "Κλείστε χειρουργική συνεδρία. Τηλέφωνο, email και διεύθυνση κλινικής."),
  component: Contact,
});

const items = [
  { icon: Phone, label: "Τηλέφωνο", value: "6983528105", href: "tel:+306983528105" },
  { icon: Mail, label: "Email", value: "info@my-surgeon.gr", href: "mailto:info@my-surgeon.gr" },
  { icon: MapPin, label: "ΙΑΤΡΕΙΟ", value: "Λεωφ.Κηφισίας 312Α\nΧαλάνδρι, 15232\n2ο Όροφος", href: "" },
];

const socials = [
  { icon: Facebook, label: "Facebook", handle: "my-surgeon.gr", href: "https://www.facebook.com/my-surgeon.gr" },
  { icon: Instagram, label: "Instagram", handle: "@my_surgeon.gr", href: "https://www.instagram.com/my_surgeon.gr" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Επικοινωνία" title="Κλείστε ραντεβού" intro={"Καλέστε μας ή στείλτε email για να κλείσετε το ραντεβού σας.\u00a0\nΤα επείγοντα περιστατικά εξετάζονται το συντομότερο δυνατό."} />
      <section className="mx-auto grid max-w-4xl gap-6 px-6 py-20 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.label} className="rounded-lg border border-border bg-card p-8 text-center shadow-soft">
            <i.icon className="mx-auto h-7 w-7 text-secondary" />
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{i.label}</p>
            {i.href ? (
              <a href={i.href}
                className="mt-1 block font-semibold text-olive-deep underline-offset-4 transition-opacity hover:opacity-70 hover:underline">
                {i.value}
              </a>
            ) : (
              <p className="mt-1 whitespace-pre-line font-semibold text-olive-deep">{i.value}</p>
            )}
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Ακολουθήστε μας</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-6 shadow-soft transition-colors hover:border-secondary">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted">
                <s.icon className="h-5 w-5 text-secondary" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</span>
                <span className="font-semibold text-olive-deep">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
