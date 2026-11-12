import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, meta } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => meta("About — My Surgeon", "Background, training and military service of our general surgeon."),
  component: About,
});

const timeline = [
  ["Medical School", "Degree in Medicine, with distinction."],
  ["Military Service", "Surgeon in the Hellenic Armed Forces medical corps."],
  ["Specialisation", "General Surgery residency and board certification."],
  ["Today", "Private practice and hospital surgery across Greece."],
];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About" title="A surgeon in uniform" intro="Years of service as a military surgeon taught her to stay calm under pressure, decide with clarity and never compromise on care." />
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
