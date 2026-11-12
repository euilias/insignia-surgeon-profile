import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => meta("Surgical Services — My Surgeon", "Laparoscopic surgery, hernia repair, gallbladder, trauma and soft tissue surgery."),
  component: Services,
});

const services = [
  ["Laparoscopic Surgery", "Minimally invasive procedures with smaller scars and quicker recovery."],
  ["Hernia Repair", "Inguinal, umbilical and incisional hernias, open or laparoscopic."],
  ["Gallbladder Surgery", "Laparoscopic cholecystectomy for gallstones and inflammation."],
  ["Trauma Surgery", "Emergency surgical care backed by military field experience."],
  ["Soft Tissue Surgery", "Removal of cysts, lipomas and skin lesions."],
  ["Second Opinion", "Honest review of your diagnosis and treatment options."],
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Services" title="What we treat" intro="Comprehensive general surgery, from first consultation to full recovery." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-soft">
            <div className="h-1 w-10 rounded bg-silver" />
            <h3 className="mt-4 text-2xl text-olive-deep">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
