import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => meta("Σχετικά — Δρ. Ελένη Παρασκευοπούλου", "Βιογραφικό, εκπαίδευση και στρατιωτική θητεία της Δρ. Ελένης Παρασκευοπούλου, γενικής χειρουργού."),
  component: About,
});

const timeline = [
  ["Ιατρική Σχολή", "Πτυχίο Ιατρικής με διάκριση."],
  ["Στρατιωτική Θητεία", "Χειρουργός στο ιατρικό σώμα των Ελληνικών Ενόπλων Δυνάμεων."],
  ["Ειδικότητα", "Ειδίκευση στη Γενική Χειρουργική και τίτλος ειδικότητας."],
  ["Σήμερα", "Ιδιωτική πρακτική και νοσοκομειακή χειρουργική σε όλη την Ελλάδα."],
];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Σχετικά" title="Δρ. Ελένη Παρασκευοπούλου" intro="Γενική χειρουργός με στρατιωτική εκπαίδευση. Έμαθε να διατηρεί την ψυχραιμία υπό πίεση, να αποφασίζει με διαύγεια και να μην συμβιβάζεται ποτέ στο επίπεδο της φροντίδας." />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <ol className="space-y-10 border-l-2 border-primary pl-8">
          {timeline.map(([t, d]) => (
            <li key={t}>
              <h3 className="text-3xl text-olive-deep">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
