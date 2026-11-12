import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact & Appointments — My Surgeon", "Book a surgical consultation. Phone, email and clinic address."),
  component: Contact,
});

const items = [
  { icon: Phone, label: "Phone", value: "+30 210 000 0000" },
  { icon: Mail, label: "Email", value: "info@my-surgeon.gr" },
  { icon: MapPin, label: "Clinic", value: "Athens, Greece" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Book a consultation" intro="Call or email to arrange an appointment. Emergencies are seen as soon as possible." />
      <section className="mx-auto grid max-w-4xl gap-6 px-6 py-20 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.label} className="rounded-lg border border-border bg-card p-8 text-center shadow-soft">
            <i.icon className="mx-auto h-7 w-7 text-secondary" />
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{i.label}</p>
            <p className="mt-1 font-semibold text-olive-deep">{i.value}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
