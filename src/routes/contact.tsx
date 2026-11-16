import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Επικοινωνία & Ραντεβού — Δρ. Ελένη Παρασκευοπούλου", "Κλείστε χειρουργική συνεδρία. Τηλέφωνο, email και διεύθυνση κλινικής."),
  component: Contact,
});

const items = [
  { icon: Phone, label: "Τηλέφωνο", value: "6983528105" },
  { icon: Mail, label: "Email", value: "info@my-surgeon.gr" },
  { icon: MapPin, label: "Κλινική", value: "Αθήνα, Ελλάδα" },
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
            <p className="mt-1 font-semibold text-olive-deep">{i.value}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
