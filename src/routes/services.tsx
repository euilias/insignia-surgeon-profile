import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => meta("Χειρουργικές Υπηρεσίες — Δρ. Ελένη Παρασκευοπούλου", "Λαπαροσκοπική χειρουργική, κηλεοπλαστική, χοληδόχος κύστη, τραύματα και μαλακοί ιστοί."),
  component: Services,
});

const services = [
  ["Λαπαροσκοπική Χειρουργική", "Ελάχιστα επεμβατικές επεμβάσεις με μικρότερες ουλές και ταχύτερη ανάρρωση."],
  ["Κηλεοπλαστική", "Βουβωνοκήλη, ομφαλοκήλη και κοιλιακή κήλη, ανοικτά ή λαπαροσκοπικά."],
  ["Χειρουργική Χοληδόχου Κύστης", "Λαπαροσκοπική αφαίρεση χοληδόχου κύστης για λίθους και φλεγμονές."],
  ["Χειρουργική Τραύματος", "Επείγουσα χειρουργική φροντίδα, με εμπειρία από το στρατιωτικό πεδίο."],
  ["Χειρουργική Μαλακών Ιστών", "Αφαίρεση κύστεων, λιπωμάτων και δερματικών αλλοιώσεων."],
  ["Δεύτερη Γνώμη", "Ειλικρινής αξιολόγηση της διάγνωσης και των θεραπειών σας."],
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
    </SiteLayout>
  );
}
