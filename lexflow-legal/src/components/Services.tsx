import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: "IP Protection",
    desc: "Patents, trademarks, copyrights — we secure your ideas.",
    details: "98% approval rate • 200+ filings • 15+ countries",
    icon: "©"
  },
  {
    title: "Data Privacy",
    desc: "GDPR, CCPA, audits — stay compliant, avoid fines.",
    details: "Zero fines for 50+ clients • Full audit in 14 days",
    icon: "🔒"
  },
  {
    title: "Corporate Law",
    desc: "M&A, contracts, governance — scale without risk.",
    details: "$500M+ in deals closed • 45-day average",
    icon: "📋"
  },
  {
    title: "Dispute Resolution",
    desc: "Litigation, arbitration — win fast, win clean.",
    details: "95% settlement rate • $50M+ recovered",
    icon: "⚖"
  }
];

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--card)] p-8 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => setSelected(i)}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted mb-4">{s.desc}</p>
              <p className="text-sm text-[var(--accent)] font-medium flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </p>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selected !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[var(--card)] p-8 rounded-xl max-w-lg w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">{services[selected].title}</h3>
              <p className="text-lg mb-6">{services[selected].desc}</p>
              <div className="space-y-2 mb-6">
                {services[selected].details.split(" • ").map((stat, i) => (
                  <p key={i} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-[var(--accent)] mr-2" />
                    {stat}
                  </p>
                ))}
              </div>
              <button className="btn-primary w-full">
                Book Consultation
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}