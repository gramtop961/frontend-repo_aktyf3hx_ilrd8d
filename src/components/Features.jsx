import { CheckCircle, Sparkles, Shield, Timer } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Deep Clean & Restore',
    desc: 'Professional multi-step cleaning to remove dirt, stains, and yellowing while preserving materials.'
  },
  {
    icon: Shield,
    title: 'Protection Coating',
    desc: 'Hydrophobic protection to repel water and grime, keeping your sneakers fresher for longer.'
  },
  {
    icon: Timer,
    title: 'Fast Turnaround',
    desc: 'Same-week service with options for express cleaning when you need them back ASAP.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Guarantee',
    desc: 'Meticulous hand-finished results with satisfaction guaranteed on every pair.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Why choose Wash shoes</h2>
          <p className="mt-3 text-slate-300">Premium service, modern techniques, and a love for sneakers. We handle your kicks with care.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 ring-1 ring-inset ring-blue-400/30 text-blue-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
