import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="LexFlow" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          {links.map(link => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <DarkModeToggle dark={dark} setDark={setDark} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${mobileOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <div className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 navbar-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}