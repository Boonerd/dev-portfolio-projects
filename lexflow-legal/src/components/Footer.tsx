// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center text-[var(--footer-text)]">
        <p className="mb-2 text-sm">© 2025 LexFlow Legal Solutions. All rights reserved.</p>
        <p className="text-xs mb-4 opacity-80">
          Built by <a href="https://github.com/yourname" className="underline hover:text-[var(--accent)]">Patriciah Mbua</a> • 
          <a href="https://linkedin.com/in/yourname" className="underline hover:text-[var(--accent)] ml-2">LinkedIn</a>
        </p>
        <p className="text-xs mb-4 opacity-60 italic">
          *This is a fictional portfolio project for demonstration purposes only. No legal services are offered.*
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-[var(--accent)] transition">Privacy</a>
          <a href="#" className="hover:text-[var(--accent)] transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}