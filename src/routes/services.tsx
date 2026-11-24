import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => meta("Χειρουργικές Υπηρεσίες — Δρ. Ελένη Παρασκευοπούλου", "Λαπαροσκοπική χειρουργική, κηλεοπλαστική, χοληδόχος κύστη, τραύματα και μαλακοί ιστοί."),
  component: Services,
});

const services = [
  ["Αντιμετώπιση χειρουργικών παθήσεων λεπτού και παχέος εντέρου.", "\n"],
  ["Αποκατάσταση κηλών του πρόσθιου κοιλιακού τοιχώματος με ανοιχτή και λαπαροσκοπική προσέγγιση.", "\n"],
  ["Χειρουργική Ενδοκρινών Αδένων", "Χειρουργική αντιμετώπιση παθήσεων θυροειδούς αδένα και επινεφριδίων."],
  ["Λαπαροσκοπική χολοκυστεκτομή", "με ακριβή προσδιορισμό των χειρουργικών ενδείξεων."],
  ["Παθήσεις πρωκτού", "Αντιμετώπιση χειρουργικά και με χρήση σύγχρονων εφαρμογών laser."],
  ["Χειρουργική μαλακών μορίων", "εκτομή κύστεων, λιπωμάτων και δερματικών αλλοιώσεων, ονυχεκτομές"],
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Υπηρεσίες" title="Τι αντιμετωπίζουμε" intro="Ολοκληρωμένη ιατρική περίθαλψη από την πρώτη επίσκεψη έως την πλήρη ανάρρωση." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-soft">
            <div className="h-1 w-10 rounded bg-silver" />
            <h3 className="mt-4 text-2xl text-olive-deep">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-20">
          <h2 className="text-3xl text-olive-deep md:text-4xl">
            Βάση μας παραμένει η παραδοσιακή χειρουργική, ώστε σταθερά να προχωρούμε σε καινοτόμες χειρουργικές τεχνικές.
          </h2>
        </div>
      </section>
    </SiteLayout>
  );
}
