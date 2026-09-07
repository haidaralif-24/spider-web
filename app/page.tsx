import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Decorative subtle background spiderweb accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Delicate Spider Web */}
        <svg className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none -z-10" viewBox="0 0 350 350" fill="none" stroke="currentColor" aria-hidden="true">
          <line x1="350" y1="0" x2="10" y2="0" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.45" />
          <line x1="350" y1="0" x2="30" y2="75" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="350" y1="0" x2="70" y2="160" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.45" />
          <line x1="350" y1="0" x2="130" y2="240" stroke="#8E7CFF" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="350" y1="0" x2="210" y2="305" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.45" />
          <line x1="350" y1="0" x2="285" y2="340" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="350" y1="0" x2="350" y2="350" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.45" />
          <path d="M 305,0 Q 302,24 316,30 Q 328,40 350,42" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.42" fill="none" />
          <path d="M 260,0 Q 255,48 280,62 Q 308,82 350,86" stroke="#8E7CFF" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 2" fill="none" />
          <path d="M 210,0 Q 205,76 242,98 Q 282,132 350,136" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
          <path d="M 160,0 Q 155,108 202,142 Q 252,185 350,192" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="4 3" fill="none" />
          <path d="M 105,0 Q 102,145 160,190 Q 218,245 350,252" stroke="#8E7CFF" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
          <path d="M 50,0 Q 52,188 116,242 Q 182,305 350,318" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.38" strokeDasharray="4 3" fill="none" />
          <line x1="160" y1="190" x2="160" y2="225" stroke="#8E7CFF" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="2 2" />
          <circle cx="160" cy="228" r="3" fill="#8E7CFF" fillOpacity="0.55" />
        </svg>

        {/* Top-Left Background Spider Web */}
        <svg className="absolute top-0 left-0 w-[360px] h-[360px] pointer-events-none -z-10" viewBox="0 0 300 300" fill="none" stroke="currentColor" aria-hidden="true">
          <line x1="0" y1="0" x2="300" y2="0" stroke="#4CAF50" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="0" y1="0" x2="270" y2="75" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="0" y1="0" x2="220" y2="150" stroke="#4CAF50" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="0" y1="0" x2="150" y2="220" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="0" y1="0" x2="75" y2="270" stroke="#4CAF50" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="300" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.3" />
          <path d="M 55,0 Q 48,36 38,46 Q 0,55 0,55" stroke="#4CAF50" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.35" fill="none" />
          <path d="M 110,0 Q 95,72 75,95 Q 48,110 0,110" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.32" fill="none" />
          <path d="M 175,0 Q 150,115 118,148 Q 72,175 0,175" stroke="#4CAF50" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.35" fill="none" />
          <path d="M 245,0 Q 210,160 160,205 Q 98,245 0,245" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
        </svg>

        {/* Mid-page Right Gutter Accent Web */}
        <svg className="absolute top-[48%] -right-8 w-80 h-80 pointer-events-none transform -translate-y-1/2 -z-10" viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden="true">
          <line x1="200" y1="100" x2="25" y2="25" stroke="#8E7CFF" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="200" y1="100" x2="5" y2="100" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="200" y1="100" x2="25" y2="175" stroke="#8E7CFF" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="200" y1="100" x2="85" y2="10" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.28" />
          <line x1="200" y1="100" x2="85" y2="190" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M 160,45 Q 128,100 160,155" stroke="#8E7CFF" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.35" fill="none" />
          <path d="M 115,25 Q 75,100 115,175" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.32" fill="none" />
          <path d="M 70,15 Q 25,100 70,185" stroke="#8E7CFF" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.28" fill="none" />
        </svg>

        {/* Bottom Margin Subtle Web Network */}
        <svg className="absolute bottom-12 -left-10 w-72 h-72 pointer-events-none -z-10" viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M 0,200 L 200,0 M 0,200 L 200,80 M 0,200 L 170,155 M 0,200 L 80,200" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.3" />
          <path d="M 0,150 Q 40,145 60,165 Q 70,185 70,200" stroke="#4CAF50" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.32" fill="none" />
          <path d="M 0,95 Q 75,85 110,125 Q 130,165 135,200" stroke="#B0BEC5" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
        </svg>
      </div>

      {/* ==================== TOP NAVIGATION ==================== */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-paper-line sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
          {/* Brand Logo */}
          <Link href="#" className="flex items-center gap-3.5 group active:scale-98 transition-transform" aria-label="SpiderWeb Home">
            <div className="w-11 h-11 rounded-2xl bg-lab-mist border border-sci-green/30 flex items-center justify-center relative shadow-sm">
              <span className="material-symbols-outlined text-sci-green text-2xl" data-icon="science">science</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-discovery-yellow rounded-full border-2 border-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-2xl tracking-tight text-deep-charcoal group-hover:text-sci-green transition-colors">SpiderWeb</span>
              <span className="text-xs font-normal text-charcoal-muted tracking-normal -mt-1">Curious science for all ages</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-9 font-medium text-sm text-charcoal-muted" aria-label="Main navigation">
            <Link className="hover:text-deep-charcoal hover:font-semibold transition-colors py-1 relative" href="#experiments">Experiments</Link>
            <Link className="hover:text-deep-charcoal hover:font-semibold transition-colors py-1 relative" href="#subjects">Subjects</Link>
            <Link className="hover:text-deep-charcoal hover:font-semibold transition-colors py-1 relative" href="#trivia">Trivia</Link>
            <Link className="hover:text-deep-charcoal hover:font-semibold transition-colors py-1 relative" href="#about">About</Link>
          </nav>

          {/* Trailing Action Button */}
          <div className="flex items-center gap-3">
            <Link className="inline-flex items-center gap-2 bg-lab-mist hover:bg-[#d8edd9] border border-sci-green/40 text-sci-green-dark px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-sm" href="#webby">
              <span className="material-symbols-outlined text-lg" data-icon="cruelty_free" aria-hidden="true">cruelty_free</span>
              <span>Meet Webby</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-16 relative z-10">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-2 lg:pt-6" aria-labelledby="hero-heading">
          {/* Left Column: Copy & Mascot Tip */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Natural Sentence-case Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lab-mist/80 border border-sci-green/25 text-deep-charcoal text-sm">
              <span className="w-2 h-2 rounded-full bg-sci-green" aria-hidden="true" />
              <span className="font-medium text-sci-green-dark">Explore, experiment, and discover</span>
            </div>

            {/* Rounded Friendly Headline */}
            <h1 id="hero-heading" className="font-display font-bold text-5xl sm:text-6xl text-deep-charcoal tracking-tight leading-[1.12]">
              Science is an <span className="text-fun-purple underline decoration-discovery-yellow decoration-wavy decoration-2">adventure!</span>
            </h1>

            {/* One-line Subheading */}
            <p className="font-body text-charcoal-muted text-lg leading-relaxed max-w-xl">
              Hands-on experiments for curious minds, families, and classrooms—guided step-by-step by Webby.
            </p>

            {/* Webby Lab-Notebook Speech Bubble */}
            <div className="relative bg-paper-cream border border-discovery-yellow/80 rounded-2xl rounded-tl-sm p-4 max-w-lg shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-discovery-yellow/30 border border-discovery-yellow text-deep-charcoal flex items-center justify-center shrink-0" aria-hidden="true">
                <span className="material-symbols-outlined text-xl" data-icon="lightbulb">lightbulb</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-deep-charcoal/80 mb-0.5">Webby's lab note</div>
                <p className="text-sm font-normal text-charcoal-muted leading-snug">
                  You don't need a high-tech lab to be a scientist. Kitchen counters and backyards are perfect research stations!
                </p>
              </div>
            </div>

            {/* Single Primary Hero CTA */}
            <div className="pt-1">
              <Link className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-fun-purple hover:bg-fun-purple-dark text-white font-display font-medium text-base tracking-wide shadow-md shadow-fun-purple/20 active:scale-95 transition-all" href="#webby">
                <span className="material-symbols-outlined text-xl" data-icon="cruelty_free" aria-hidden="true">cruelty_free</span>
                <span>Get to Know Webby</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Bespoke Mascot Illustration Lab-Sketch Container */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-md bg-paper-cream lab-grid-pattern border-2 border-dashed border-web-gray rounded-3xl p-8 relative flex flex-col items-center justify-center text-center shadow-sm">
              {/* Notebook corner bookmark tape accent */}
              <div className="absolute -top-3 left-8 bg-discovery-yellow/80 px-4 py-0.5 rounded-sm shadow-xs transform -rotate-2 text-[11px] font-medium text-deep-charcoal/90 border border-discovery-yellow">
                Field Sketch No. 01
              </div>

              {/* Subtle web spider thread framing corner */}
              <svg className="absolute top-2 right-2 w-16 h-16 text-web-gray/40 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 60 60" aria-hidden="true">
                <path d="M 60,0 L 0,0 M 60,0 L 60,60 M 60,0 L 15,45 M 60,0 L 35,55" />
                <path d="M 45,0 Q 55,15 60,15 M 30,0 Q 45,30 60,30 M 15,0 Q 35,45 60,45" strokeDasharray="2 2" />
              </svg>

              {/* Wobbling / Floating mascot container (Isolated Motion) */}
              <div className="webby-mascot-anim relative z-10 my-4 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white border-3 border-discovery-yellow flex items-center justify-center shadow-sm relative group">
                  {/* Spider / Friendly Mascot Character Icon */}
                  <span className="material-symbols-outlined text-sci-green text-6xl" data-icon="cruelty_free" aria-hidden="true">cruelty_free</span>

                  {/* Webby magnifying glass badge */}
                  <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-fun-purple text-white flex items-center justify-center shadow-sm border-2 border-white" aria-hidden="true">
                    <span className="material-symbols-outlined text-base" data-icon="search">search</span>
                  </div>

                  {/* Playful small spider thread dangling down */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-web-gray/60" aria-hidden="true" />
                </div>
              </div>

              {/* Distinct, Natural Reserved Label for Webby */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lab-mist border border-sci-green/30 text-sci-green-dark text-xs font-semibold mb-2">
                <span>Webby the Science Guide</span>
              </div>

              <p className="text-xs text-charcoal-muted max-w-xs leading-relaxed">
                Reserved safe zone for Webby's interactive poses, emotional reactions, and laboratory experiment tips.
              </p>

              {/* Soft Notebook ruled footer indicator */}
              <div className="w-full mt-4 pt-3 border-t border-paper-line flex items-center justify-between text-[11px] text-charcoal-muted">
                <span>Species: Lab Spider</span>
                <span className="font-medium text-fun-purple">Curiosity Level: Maximum</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SUBJECT BENCHES ==================== */}
        <section className="space-y-6 pt-4" id="subjects" aria-labelledby="subjects-heading">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-paper-line pb-3">
            <div>
              <h2 id="subjects-heading" className="font-display font-semibold text-3xl text-deep-charcoal tracking-tight">Explore by discipline</h2>
              <p className="font-body text-charcoal-muted text-sm mt-1">Select a research bench to browse experiments and hands-on activities</p>
            </div>
            <div className="text-xs font-medium text-charcoal-muted">63 activities cataloged</div>
          </div>

          {/* Asymmetrical, Distinct Benches */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Chemistry: Featured Benchmark (5 Cols, Purple Lab Bench) */}
            <div className="md:col-span-5 bg-paper-cream border border-[#DDD5FA] border-l-4 border-l-fun-purple rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#EDE7F6] text-fun-purple flex items-center justify-center" aria-hidden="true">
                      <span className="material-symbols-outlined text-xl" data-icon="science">science</span>
                    </span>
                    <span className="text-xs font-medium text-fun-purple px-2 py-0.5 rounded-md bg-[#EDE7F6]">Reactions and matter</span>
                  </div>
                  <span className="text-xs font-semibold text-charcoal-muted">24 labs</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-deep-charcoal mb-2">Chemistry</h3>
                <p className="font-body text-charcoal-muted text-sm leading-relaxed">
                  Reactions, phase changes, crystal gardens, and safe kitchen concoctions that fizz, change colors, and surprise.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-paper-line">
                <Link className="text-sm font-semibold text-fun-purple hover:text-fun-purple-dark transition-colors inline-block" href="#chemistry">
                  Explore chemistry labs
                </Link>
              </div>
            </div>

            {/* Physics Bench (3.5 Cols, Blue Bench) */}
            <div className="md:col-span-4 bg-paper-cream border border-[#D0E6FC] border-l-4 border-l-curious-blue rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#E3F2FD] text-curious-blue flex items-center justify-center" aria-hidden="true">
                      <span className="material-symbols-outlined text-xl" data-icon="toys">toys</span>
                    </span>
                    <span className="text-xs font-medium text-[#1976D2] px-2 py-0.5 rounded-md bg-[#E3F2FD]">Forces and motion</span>
                  </div>
                  <span className="text-xs font-semibold text-charcoal-muted">18 labs</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-deep-charcoal mb-2">Physics</h3>
                <p className="font-body text-charcoal-muted text-sm leading-relaxed">
                  Motion, light refraction, sound vibrations, and gravity made tangible using household gear.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-paper-line">
                <Link className="text-sm font-semibold text-[#1976D2] hover:text-curious-blue transition-colors inline-block" href="#physics">
                  Explore physics labs
                </Link>
              </div>
            </div>

            {/* Biology Bench (3.5 Cols, Green Bench) */}
            <div className="md:col-span-3 bg-paper-cream border border-[#C8E6C9] border-l-4 border-l-sci-green rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-lab-mist text-sci-green flex items-center justify-center" aria-hidden="true">
                      <span className="material-symbols-outlined text-xl" data-icon="eco">eco</span>
                    </span>
                    <span className="text-xs font-medium text-sci-green-dark px-2 py-0.5 rounded-md bg-lab-mist">Living world</span>
                  </div>
                  <span className="text-xs font-semibold text-charcoal-muted">21 labs</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-deep-charcoal mb-2">Biology</h3>
                <p className="font-body text-charcoal-muted text-sm leading-relaxed">
                  Seed germination, microscopic ecology, and backyard insect behaviors.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-paper-line">
                <Link className="text-sm font-semibold text-sci-green-dark hover:text-sci-green transition-colors inline-block" href="#biology">
                  Explore biology labs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== EXPERIMENT FIELD-GUIDE CARDS ==================== */}
        <section className="space-y-6 pt-2" id="experiments" aria-labelledby="experiments-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-paper-line pb-4">
            <div>
              <h2 id="experiments-heading" className="font-display font-semibold text-3xl text-deep-charcoal tracking-tight">Try these fun experiments</h2>
              <p className="font-body text-charcoal-muted text-sm mt-1">
                Simple household materials, tested safety guidelines, and step-by-step instructions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3.5 py-1.5 rounded-full border border-web-gray/60 bg-white text-xs font-medium text-deep-charcoal hover:bg-paper-cream transition-colors flex items-center gap-1.5" type="button">
                <span className="material-symbols-outlined text-sm" data-icon="filter_list" aria-hidden="true">filter_list</span>
                <span>Filter by age</span>
              </button>
              <button className="px-3.5 py-1.5 rounded-full border border-web-gray/60 bg-white text-xs font-medium text-deep-charcoal hover:bg-paper-cream transition-colors flex items-center gap-1.5" type="button">
                <span className="material-symbols-outlined text-sm" data-icon="schedule" aria-hidden="true">schedule</span>
                <span>Under 20 mins</span>
              </button>
            </div>
          </div>

          {/* 4 Editorial Field-Guide Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Experiment 1: Lemon Battery */}
            <article className="bg-white border border-paper-line rounded-2xl overflow-hidden flex flex-col justify-between field-guide-card hover:border-web-gray transition-colors">
              <div>
                <div className="relative h-44 w-full bg-paper-cream overflow-hidden border-b border-paper-line">
                  <img 
                    alt="Lemon battery experiment setup with zinc nail and copper coin"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMdKoZ7NovnE0xlZyy_enILxEap3PxfISaivEsIEABYFrIOAN2jpS-Pyd_h3h924gAbtvf0k31MuM31kv7bMXAV95mjIg8AwZ8mUmEhQhqGBMrh3m3rj0upwaTMJg5SsNM7Pr_aRCjEhWXeHyLe2nOA6D-3RNBAhWbXItHGKzQH5jDjgjMXt_u6Repz7lENb1Lm24Y4Sp-oqoOmwrC6Mn16Imap0EF1D-9GXOhj3Jaoa1y3g7rOp0A"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-white/95 text-curious-blue border border-curious-blue/20">Physics</div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-deep-charcoal/85 text-white backdrop-blur-xs">15 min</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sci-green" aria-hidden="true" />
                    <span>Easy setup · Kitchen ingredients</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-deep-charcoal leading-snug">DIY Lemon Battery</h3>
                  <p className="font-body text-charcoal-muted text-xs mt-2 leading-relaxed">
                    Convert citrus acid into an electrical circuit that lights a tiny diode clock.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link className="w-full text-center py-2 px-3 rounded-lg bg-lab-mist hover:bg-lab-mist/70 text-sci-green-dark text-xs font-semibold block transition-colors" href="#lemon-battery">
                  Explore experiment
                </Link>
              </div>
            </article>

            {/* Experiment 2: Cabbage Juice */}
            <article className="bg-white border border-paper-line rounded-2xl overflow-hidden flex flex-col justify-between field-guide-card hover:border-web-gray transition-colors">
              <div>
                <div className="relative h-44 w-full bg-paper-cream overflow-hidden border-b border-paper-line">
                  <img 
                    alt="Colorful cabbage juice indicator beakers"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERCgHiqYjUxbM5VZZZhL0HLpgr6uBmbcIuHNMBZOwhZj9cNaPmVkCOzta75T_6Nw6jhRiz9-bpEjdPEvDX-Z9AFHZ3vWkB3TsMD9LvqfxFd7G0PVKKDYILkQm0nWIhI2yDUUbWZxsN-Iq-gaNc2M4fyoYH2-VINBbTy0DyE4mhDdM9k7sP7_WiG4rSf9ZOZO4dl_ZZP8AC9tG5g1FcS4O-iCUNrdP6uCzZNouc8lC4d2XKIrOo2YM"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-white/95 text-fun-purple border border-fun-purple/20">Chemistry</div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-deep-charcoal/85 text-white backdrop-blur-xs">20 min</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-fun-purple" aria-hidden="true" />
                    <span>100% kitchen safe · Color shift</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-deep-charcoal leading-snug">Color-Shifting Cabbage Juice</h3>
                  <p className="font-body text-charcoal-muted text-xs mt-2 leading-relaxed">
                    Discover natural pH indicators with anthocyanins to change violet broth into pink or emerald.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link className="w-full text-center py-2 px-3 rounded-lg bg-[#EDE7F6] hover:bg-[#E3DCF7] text-fun-purple text-xs font-semibold block transition-colors" href="#cabbage-juice">
                  Explore experiment
                </Link>
              </div>
            </article>

            {/* Experiment 3: Sprout in a Glove */}
            <article className="bg-white border border-paper-line rounded-2xl overflow-hidden flex flex-col justify-between field-guide-card hover:border-web-gray transition-colors">
              <div>
                <div className="relative h-44 w-full bg-paper-cream overflow-hidden border-b border-paper-line">
                  <img 
                    alt="Clear garden glove taped to window with sprouting seeds"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBASvEFoYUEM70E2hwxu306jrWE2sNsVRc-X0gmUJBHqnhmLpZwhKervYQivJ1IXhjmSWE2JhiQV3WwoLIz3woXMVi4E07h0swb4D3nJQQpfZnG_6r_hUqU0b4ZVV4iLPiaQiRQ-2FTcVgmOkXhGJsApzwS714rvu75mryPKf6fhbCHRPB9PeAoQ-0ZxCrS3AmRvz2V7qx8L81Ba9VCGeG6BB8yYYY5tsy_eHcWwHA6xIb09Q1pxnDA"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-white/95 text-sci-green border border-sci-green/20">Biology</div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-deep-charcoal/85 text-white backdrop-blur-xs">10 min setup</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sci-green" aria-hidden="true" />
                    <span>Germination · Sunlight watch</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-deep-charcoal leading-snug">Sprout in a Glove</h3>
                  <p className="font-body text-charcoal-muted text-xs mt-2 leading-relaxed">
                    Watch seed coats rupture and tiny roots branch outward inside a window greenhouse.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link className="w-full text-center py-2 px-3 rounded-lg bg-lab-mist hover:bg-lab-mist/70 text-sci-green-dark text-xs font-semibold block transition-colors" href="#sprout-glove">
                  Explore experiment
                </Link>
              </div>
            </article>

            {/* Experiment 4: Balloon Rocket */}
            <article className="bg-white border border-paper-line rounded-2xl overflow-hidden flex flex-col justify-between field-guide-card hover:border-web-gray transition-colors">
              <div>
                <div className="relative h-44 w-full bg-paper-cream overflow-hidden border-b border-paper-line">
                  <img 
                    alt="A yellow balloon rocket on a string across a room"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1KLKK5U7O_sFhnXXztnt-bahdreWG5HIbJMsFjVNHGuDvjz2Dv9cPP32GyX_obv8yJEDYz1IhtVuRRguZHSzhysrNq_1YOkvnPUmBx7hymSBfVgRDG3UBiPYSxszfCoNrVyyLIheqoqTp472B--CQ7OkTyPOfJ9xvZWYM1pgFafOzhu3nkLxPTeWMZuKkyaUJleaeA9OGLdb6s0eHfurpR0i-EAXc-SsqC6LmLC29abOkgsikN4cH"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-white/95 text-curious-blue border border-curious-blue/20">Physics</div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-xs font-medium bg-deep-charcoal/85 text-white backdrop-blur-xs">12 min</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-energy-orange" aria-hidden="true" />
                    <span>Action & reaction · High energy</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-deep-charcoal leading-snug">Balloon Rocket Racer</h3>
                  <p className="font-body text-charcoal-muted text-xs mt-2 leading-relaxed">
                    Harness compressed air and thrust to propel a lightweight rocket down a nylon room line.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link className="w-full text-center py-2 px-3 rounded-lg bg-[#E3F2FD] hover:bg-[#d8eaf9] text-[#1976D2] text-xs font-semibold block transition-colors" href="#balloon-rocket">
                  Explore experiment
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ==================== EDUCATOR / LESSON PACK BANNER ==================== */}
        <section className="bg-paper-cream border border-discovery-yellow rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden" id="educator-packs" aria-labelledby="educator-heading">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-deep-charcoal bg-discovery-yellow/40 px-2.5 py-1 rounded-full border border-discovery-yellow/60">
              <span className="material-symbols-outlined text-sm" data-icon="school" aria-hidden="true">school</span>
              <span>Educator and homeschool packs</span>
            </div>
            <h3 id="educator-heading" className="font-display font-semibold text-2xl text-deep-charcoal">Teaching hands-on science in a classroom?</h3>
            <p className="font-body text-charcoal-muted text-sm leading-relaxed">
              Download printable experiment journals, safety check rubrics, and Webby observation sheets aligned to elementary standards.
            </p>
          </div>
          <div className="shrink-0">
            <Link className="inline-flex items-center gap-2 bg-deep-charcoal hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-all" href="#download-kit">
              <span className="material-symbols-outlined text-lg" data-icon="download" aria-hidden="true">download</span>
              <span>Download Teacher Kit</span>
            </Link>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white border-t border-paper-line mt-16" role="contentinfo">
        <div className="w-full py-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Brand statement */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sci-green flex items-center justify-center text-white" aria-hidden="true">
                <span className="material-symbols-outlined text-base" data-icon="science">science</span>
              </div>
              <span className="font-display font-semibold text-lg text-deep-charcoal tracking-tight">SpiderWeb</span>
            </div>
            <p className="text-xs text-charcoal-muted">
              Explore, experiment, and discover together · Made for curious minds everywhere
            </p>
            <p className="text-xs text-web-gray pt-1">
              © 2024 SpiderWeb Science Lab. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-charcoal-muted" aria-label="Footer navigation">
            <Link className="hover:text-deep-charcoal transition-colors" href="#experiments">Experiments</Link>
            <Link className="hover:text-deep-charcoal transition-colors" href="#subjects">Subjects</Link>
            <Link className="hover:text-deep-charcoal transition-colors" href="#trivia">Trivia</Link>
            <Link className="hover:text-deep-charcoal transition-colors" href="#about">About</Link>
            <Link className="hover:text-deep-charcoal transition-colors" href="#educators">Educators</Link>
            <Link className="hover:text-deep-charcoal transition-colors" href="#privacy">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}