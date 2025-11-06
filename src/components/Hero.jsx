import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-400/30">Premium Sneaker Care</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Shine brighter with Wash shoes
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-200">
            We bring your favorite pairs back to life with professional deep-cleaning, whitening, and protection. Fast turnaround, eco-friendly solutions, and meticulous care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-inset ring-blue-500/40 hover:bg-blue-500 transition">Book a Clean</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-inset ring-white/20 hover:bg-white/10 transition">See Features</a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
    </section>
  );
}
