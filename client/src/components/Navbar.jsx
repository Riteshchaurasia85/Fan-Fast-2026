import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Perks', href: '#events' },
  { label: 'Eligibility', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Apply', href: '#apply' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.3em] text-white">
          FanFest 2026
        </a>
        
        <a href="#apply" className="hidden rounded-full border border-fuchsia-500/60 bg-red-500 px-4 py-2 text-sm font-medium text-fuchsia-200 transition hover:bg-red-500/20 md:inline-flex">
          Apply Now
        </a>
        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#apply" className="mt-2 inline-flex rounded-full border border-fuchsia-500/60 px-4 py-2 text-sm font-medium text-fuchsia-200" onClick={() => setOpen(false)}>
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
