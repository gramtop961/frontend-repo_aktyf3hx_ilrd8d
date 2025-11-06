export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 shadow-xl ring-1 ring-white/10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Ready to refresh your sneakers?</h3>
              <p className="mt-2 text-slate-300">Book a professional clean in minutes. Pick up & delivery options available in select areas.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-inset ring-blue-500/40 hover:bg-blue-500 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
