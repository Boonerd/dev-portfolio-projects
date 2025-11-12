import { Scale, Shield, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Scale, label: "Cases Won", value: "500+" },
  { icon: Shield, label: "Client Trust", value: "98%" },
  { icon: Clock, label: "Avg. Response", value: "<2 hrs" },
  { icon: Users, label: "Expert Attorneys", value: "24/7" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Where Law Meets Innovation</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          At LexFlow, we don’t just practice law — we <span className="text-[var(--accent)] font-bold">redefine it</span>. Our tech-enabled approach delivers faster resolutions, transparent pricing, and predictive outcomes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[var(--card)] p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition"
            >
              <s.icon className="w-12 h-12 mx-auto mb-4 text-[var(--accent)]" />
              <p className="text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
              <p className="text-3xl font-bold text-[var(--primary)]">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}