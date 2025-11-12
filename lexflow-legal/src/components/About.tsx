// src/components/About.tsx
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-[var(--card)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Why LexFlow?</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <CheckCircle className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">98% Win Rate</h3>
            <p className="text-muted mb-4">Proven results in IP, compliance, and disputes.</p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-muted mb-4">15+ countries. One trusted partner.</p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
            <p className="text-muted mb-4">Faster contracts. Smarter strategy.</p>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500 dark:text-gray-400 italic">
          *Fictional portfolio project. No legal services offered.*
        </p>
      </div>
    </section>
  );
}