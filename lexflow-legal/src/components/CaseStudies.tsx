import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: "IP Victory for AI Startup",
    client: "Tech Innovator Inc.",
    challenge: "Patent infringement by competitor.",
    solution: "Federal litigation + prior art defense.",
    outcome: "Secured $1.5M settlement + exclusive rights.",
    stat: "$1.5M Recovered",
    category: "Intellectual Property"
  },
  {
    id: 2,
    title: "GDPR Compliance Overhaul",
    client: "FinTech Scale-Up",
    challenge: "EU data breach exposed 50K users.",
    solution: "Full audit + policy rewrite.",
    outcome: "Zero fines; expanded to Europe.",
    stat: "100% Compliance",
    category: "Data Privacy"
  },
  {
    id: 3,
    title: "M&A Deal Acceleration",
    client: "SaaS Company Y",
    challenge: "Merger stalled by contract disputes.",
    solution: "AI-assisted clause review.",
    outcome: "Closed $20M deal in 45 days.",
    stat: "$20M Closed",
    category: "Corporate Law"
  },
  {
    id: 4,
    title: "Arbitration Win",
    client: "Property Developer Z",
    challenge: "Breach delayed $10M project.",
    solution: "Mediation + evidence strategy.",
    outcome: "Full recovery; project resumed.",
    stat: "100% Recovery",
    category: "Dispute Resolution"
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Track Record</h1>
          <p className="text-muted-xl mb-8">
            Real cases. Real results. 500+ clients served.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500 text-muted mb-4">
            <span>98% Success Rate</span>
            <span>•</span>
            <span>$50M+ Recovered</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--card)] p-6 rounded-xl shadow-sm hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-[var(--accent)] font-medium mb-4">Client: {c.client}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Challenge:</strong> {c.challenge}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Solution:</strong> {c.solution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4"><strong>Outcome:</strong> {c.outcome}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[var(--accent)]">{c.stat}</span>
                <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded">{c.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
     <a href="#contact" className="btn-primary inline-flex items-center">
      Your Case Starts Here
        <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        </motion.div>
      </div>
    </section>
  );
}