export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Gavel Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="/gavel.svg" className="absolute top-20 left-20 w-32 h-32 animate-pulse" />
        <img src="/gavel.svg" className="absolute bottom-20 right-20 w-40 h-40 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Legal Excellence,<br className="hidden sm:block" />Simplified.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Strategic counsel for the digital age. From IP protection to regulatory compliance —{' '}
          <span className="text-[#d4af37] font-semibold">we scale with your vision</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="btn-primary">Book a Consultation</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-500">
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