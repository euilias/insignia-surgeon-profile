import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, HeartPulse, Stethoscope } from "lucide-react";
import portrait from "@/assets/surgeon-portrait.jpg.asset.json";
import { SiteLayout, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => meta("Δρ. Ελένη Παρασκευοπούλου — Γενική & Στρατιωτική Χειρουργός στην Ελλάδα", "Ακριβής και έμπιστη χειρουργική φροντίδα από χειρουργό με στρατιωτική εκπαίδευση. Κλείστε ραντεβού."),
  component: Index,
});

const pillars = [
  { icon: Shield, title: "Στρατιωτική πειθαρχία", text: "Εκπαίδευση σύμφωνα με τους υψηλότερους κανόνες του ιατρικού σώματος των Ενόπλων Δυνάμεων." },
  { icon: Stethoscope, title: "Χειρουργική ακρίβεια", text: "Σύγχρονες, ελάχιστα επεμβατικές τεχνικές για ταχύτερη ανάρρωση." },
  { icon: HeartPulse, title: "Ανθρώπινη φροντίδα", text: "Ξεκάθαρες εξηγήσεις και προσωπική παρακολούθηση σε κάθε βήμα." },
];

function Index() {
  return (
    <SiteLayout>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-80">ΓΕΝΙΚΗ ΧΕΙΡΟΥΡΓΟΣ</p>
            <p className="mt-4 font-display text-3xl leading-none md:text-4xl">Ελένη Παρασκευοπούλου<br />MD, MSc</p>
            <h1 className="mt-3 text-5xl leading-tight md:text-7xl">Σταθερό χέρι.<br /><em>Έμπιστη φροντίδα.</em></h1>
            <p className="mt-6 max-w-md text-lg opacity-90">
              Χειρουργός με στρατιωτική εκπαίδευση — ψυχραιμία, ακρίβεια και αφοσίωση σε κάθε ασθενή.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-md bg-silver px-6 py-3 font-semibold text-olive-deep shadow-soft transition-transform hover:-translate-y-0.5">Κλείστε ραντεβού</Link>
              <Link to="/services" className="rounded-md border border-primary-foreground/50 px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground/10">Υπηρεσίες</Link>
            </div>
          </div>
          <img src={portrait.url} alt="Δρ. Ελένη Παρασκευοπούλου, χειρουργός" className="mx-auto w-full max-w-md rounded-full object-cover shadow-soft aspect-square" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <p.icon className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 text-2xl text-olive-deep">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl text-olive-deep md:text-5xl">«Κάθε ασθενής αξίζει τη φροντίδα που θα έδινα σε έναν συμπολεμιστή.»</h2>
          <Link to="/about" className="mt-8 inline-block font-semibold text-secondary underline-offset-4 hover:underline">Η ιστορία της →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
