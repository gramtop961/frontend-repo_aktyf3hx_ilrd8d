import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">W</span>
            <span className="text-white font-semibold tracking-tight">Wash shoes</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-200 hover:text-white transition">Features</a>
            <a href="#process" className="text-sm text-slate-200 hover:text-white transition">Process</a>
            <a href="#pricing" className="text-sm text-slate-200 hover:text-white transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#book" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow ring-1 ring-inset ring-blue-500/40 hover:bg-blue-500 transition">Book a Clean</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2 pt-2">
              <a href="#features" className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10 hover:text-white">Features</a>
              <a href="#process" className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10 hover:text-white">Process</a>
              <a href="#pricing" className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10 hover:text-white">Pricing</a>
              <a href="#book" className="block rounded-md px-3 py-2 bg-blue-600 text-white hover:bg-blue-500">Book a Clean</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
