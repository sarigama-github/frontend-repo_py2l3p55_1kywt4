import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="slide-1" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <p className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-blue-200/80 mb-4">
          <span className="h-px w-8 bg-blue-300/50" /> Présentation • Sciences
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Mesurer la Terre
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-blue-100/90">
          Comment nous avons calculé son rayon et sa masse
        </p>
        <p className="mt-2 text-base sm:text-lg text-blue-200/80">
          De l’Antiquité aux satellites modernes
        </p>
      </div>
    </section>
  )
}

export default Hero
