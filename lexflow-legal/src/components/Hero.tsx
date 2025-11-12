// src/components/Hero.tsx
import CourthouseIcon from './icons/CourthouseIcon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[var(--bg)] overflow-hidden">
      {/* LEFT COURTHOUSE */}
      <CourthouseIcon 
        className="absolute top-16 left-12 w-48 h-48 text-[#d4af37] opacity-70"
      />

      {/* RIGHT COURTHOUSE */}
      <CourthouseIcon 
        className="absolute bottom-16 right-12 w-56 h-56 text-[#d4af37] opacity-70 rotate-12"
      />

      {/* CONTENT */}
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Legal Excellence,<br className="hidden sm:block" /> Simplified.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          <span className="text-[#d4af37]">IP. Compliance. Growth.</span> We scale with your vision.
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="btn-primary">Book a Consultation</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>

        <div className="flex justify-center gap-8 text-sm text-muted mb-4">
          <span>500+ Clients</span>
          <span>•</span>
          <span>98% Success</span>
          <span>•</span>
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
}