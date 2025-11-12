import { Building2, Lightbulb, Lock, Gavel } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Corporate & Commercial Law",
    desc: "Entity formation, contracts, M&A, governance.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    desc: "Patents, trademarks, copyrights, licensing.",
  },
  {
    icon: Lock,
    title: "Tech & Data Compliance",
    desc: "GDPR, CCPA, AI ethics, cybersecurity.",
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    desc: "Litigation, arbitration, mediation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tailored Expertise. Proven Results.
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          From startups to enterprises — we deliver strategic legal solutions that scale.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[var(--card)] p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition card-hover"
            >
              <s.icon className="w-10 h-10 text-[var(--accent)] mb-4" />
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}