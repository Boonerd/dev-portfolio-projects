export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm">© 2025 LexFlow Legal Solutions. All rights reserved.</p>
        <p className="text-xs mb-4 opacity-80">
          Built by <a href="https://github.com/Boonerd" className="underline hover:text-[var(--accent)]">Patriciah Mbua</a> • 
          <a href="https://www.linkedin.com/in/patriciah-mbua-ba7095241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9jrs89ytTgSrq6mOpLm2bQ%3D%3D" className="underline hover:text-[var(--accent)] ml-2">LinkedIn</a>
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-[var(--accent)] transition">Privacy</a>
          <a href="#" className="hover:text-[var(--accent)] transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}