import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

const coreValues = [
  {
    num: '01',
    title: 'Honesty Over Hype',
    tagline: 'Validate in the field, not just in demos.',
    desc: 'Engineering decisions should be grounded in practical validation. We reject inflated claims and benchmark marketing in favor of measured physical performance under harsh real-world constraints.',
    spec: 'CRITERIA: MEASURED FIELD TRUTH',
  },
  {
    num: '02',
    title: 'Depth Over Breadth',
    tagline: 'Solve fewer problems, completely.',
    desc: 'We focus on mastering high-friction technical challenges across embedded silicon, sensor fusion and computer vision rather than pursuing superficial breadth across unrelated disciplines.',
    spec: 'CRITERIA: APPLIED RIGOR',
  },
  {
    num: '03',
    title: 'Resilience By Design',
    tagline: 'Engineer for hostile environments by default.',
    desc: 'Difficult operating conditions—extreme thermal swings, particulate fouling, voltage brownouts and zero connectivity—are foundational architectural inputs, not afterthought patches.',
    spec: 'CRITERIA: DEFAULT INVARIANCE',
  },
  {
    num: '04',
    title: 'IP Over Services',
    tagline: 'Every engagement builds reusable IP.',
    desc: 'Every field trial, algorithmic calibration and runtime optimization is synthesized into standardized, modular software and hardware assets that empower future deployments.',
    spec: 'CRITERIA: COMPOUNDING IP',
  },
];

const rdPipelineStages = [
  'Research',
  'Prototype',
  'Validate',
  'Deploy',
  'Learn',
  'Reusable IP',
  'Next System',
];

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — ABOUT HERO                                                   */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="tracking-widest uppercase font-bold text-secondary">01 / ABOUT ENCEPTO</span>
              <span>// R&amp;D-LED DEEP-TECH LAB</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span>DISCIPLINE: EMBEDDED AI &amp; INTELLIGENT SENSING</span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Building AI for the world <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">beyond the lab.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto is an R&amp;D-led deep-tech engineering lab developing embedded AI, computer vision, intelligent sensing and vision-language models for real-world deployment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/contact"
                >
                  <span>Start a Conversation</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/technology"
                >
                  Explore Technology
                </Link>
              </div>
              <span className="font-mono-label text-[10px] text-on-surface-variant">
                FRONTIER SILICON PARADIGM · BARE-METAL DETERMINISM
              </span>
            </div>
          </div>

          {/* Technical Laboratory Architecture Visual */}
          <div className="mt-space-md w-full bg-surface-container-lowest border border-outline-variant p-space-sm lg:p-space-md relative overflow-hidden font-mono-label">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

            <div className="relative z-10 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  LAB MANIFESTO &amp; SYSTEMIC PARADIGM
                </span>
                <span className="text-on-surface-variant">OPERATING PROFILE: HOSTILE OPERATIONAL CONDITIONS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-space-xs pt-1">
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">01 // VISION</span>
                  <span className="text-body-sm font-bold text-on-surface">COMPUTER VISION</span>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">OPTICAL FLOW &amp; SPATIAL DEFECTS</p>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">02 // SENSING</span>
                  <span className="text-body-sm font-bold text-on-surface">INTELLIGENT SENSING</span>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">MULTIMODAL EXTENDED KALMAN</p>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">03 // REASONING</span>
                  <span className="text-body-sm font-bold text-on-surface">VLM MODELS</span>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">COMPACT QUANTIZED ON-DEVICE</p>
                </div>
                <div className="bg-surface-container-high p-2 border border-secondary">
                  <span className="text-[10px] text-secondary font-bold block">04 // SILICON</span>
                  <span className="text-body-sm font-bold text-on-surface">EDGE COMPUTE</span>
                  <p className="text-[10px] text-secondary mt-0.5">PASSIVE SUB-5W EXECUTION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — ABOUT ENCEPTO (COMPANY OVERVIEW)                             */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="overview">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                02 / COMPANY OVERVIEW
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Bridging research and real-world deployment.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Encepto works to bridge the gap between AI research and real-world deployment. We believe artificial intelligence must move beyond air-conditioned server farms and hyper-scale clouds into the physical substrates where human industry functions.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The company builds modular embedded AI systems combining Computer Vision, Intelligent Sensing, Vision-Language Models, and Edge / Embedded Computing. The goal is to create systems that can adapt across real-world domains without rebuilding everything from scratch.
              </p>
            </div>

            {/* Modular Synthesis Formula Schematic */}
            <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-sm font-mono-label">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold">MODULAR INTELLIGENCE STACK</span>
                <span className="text-on-surface-variant">CROSS-DOMAIN COUPLING</span>
              </div>

              <div className="flex flex-col gap-2 pt-space-xs">
                <div className="bg-surface-container p-2 border border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm font-bold text-on-surface">COMPUTER VISION</span>
                  <span className="text-[10px] text-secondary">SPATIAL EXTRACTION</span>
                </div>
                <div className="text-center text-secondary font-bold text-xs">+</div>
                <div className="bg-surface-container p-2 border border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm font-bold text-on-surface">INTELLIGENT SENSING</span>
                  <span className="text-[10px] text-secondary">MULTI-MODAL GROUND TRUTH</span>
                </div>
                <div className="text-center text-secondary font-bold text-xs">+</div>
                <div className="bg-surface-container p-2 border border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm font-bold text-on-surface">VISION-LANGUAGE MODELS</span>
                  <span className="text-[10px] text-secondary">LOCAL CONTEXTUAL SYNTHESIS</span>
                </div>
                <div className="text-center text-secondary font-bold text-xs">+</div>
                <div className="bg-surface-container p-2 border border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm font-bold text-on-surface">EDGE / EMBEDDED COMPUTING</span>
                  <span className="text-[10px] text-secondary">SUB-5W DETERMINISTIC RTOS</span>
                </div>
                <div className="text-center text-secondary font-bold text-xs">↓</div>
                <div className="bg-primary text-on-primary p-2 border border-primary flex items-center justify-between font-bold">
                  <span className="text-body-sm uppercase">ADAPTABLE FIELD-READY INTELLIGENCE</span>
                  <span className="text-[10px] text-secondary-container">REAL WORLD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — MISSION & VISION                                             */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="mission-vision">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Mission */}
            <div className="bg-surface-container border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  FOUNDATION // 01
                </span>
                <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                  Our Mission
                </h3>
                <p className="font-body-lg text-body-lg text-secondary font-bold mt-1">
                  "Bridge the gap between AI research and real deployment."
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2">
                  We focus on taking advanced perceptual algorithms out of synthetic academic testbeds and translating them into hardened, reliable code executing deterministically on physical edge silicon attached to operating machinery.
                </p>
              </div>
              <div className="mt-space-lg pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                DISCIPLINE: APPLIED HARDWARE DETERMINISM
              </div>
            </div>

            {/* Vision */}
            <div className="bg-surface-container border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  FOUNDATION // 02
                </span>
                <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                  Our Vision
                </h3>
                <p className="font-body-lg text-body-lg text-secondary font-bold mt-1">
                  "AI that works beyond the lab."
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2">
                  Systems must be architected from day one for environments where conditions cannot be managed. We design around the physical realities of abrasive dust, extreme ambient heat, electrical power variability, cost constraints, unreliable connectivity and remote field locations.
                </p>
              </div>
              <div className="mt-space-lg pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                HORIZON: AUTONOMOUS SOVEREIGN OPERATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — CORE VALUES                                                  */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="values">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / CORE VALUES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Engineering values that govern our lab.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Principles grounded in practical deployment rather than generic corporate buzzwords:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {coreValues.map((v) => (
              <div
                key={v.num}
                className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-mono-label">
                    <span className="text-secondary font-bold">VALUE // {v.num}</span>
                    <span className="text-on-surface-variant text-[10px]">{v.spec}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
                    {v.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary font-bold">
                    "{v.tagline}"
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-1">
                    {v.desc}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  PRACTICAL DISCIPLINE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — BUILT FOR INDIA                                              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="built-for-india">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                05 / OPERATING REALITY
              </span>
              <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface tracking-tight">
                Built for India. <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">Ready for the world.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Indian operating environments provide the most demanding engineering conditions on Earth. Heat, dust, voltage brownouts, multi-frequency electrical noise, cost sensitivities and remote terrain test physical systems to their breaking point.
              </p>
              <div className="border-l-2 border-secondary pl-space-md py-1">
                <p className="font-body-md text-body-md text-on-surface font-bold italic">
                  "India is the laboratory; what survives here should work anywhere."
                </p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We treat these conditions not as edge-case exceptions, but as our primary design baseline. Systems hardened for Indian conditions possess inherent resilience for any international deployment.
              </p>
            </div>

            {/* Environmental Stress Factors Matrix */}
            <div className="lg:col-span-5 bg-surface-container border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-sm font-mono-label">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold">PHYSICAL STRESS FACTORS</span>
                <span className="text-on-surface-variant">BASELINE DESIGN INVARIANTS</span>
              </div>

              <div className="grid grid-cols-2 gap-space-xs pt-1">
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">HARSH HEAT</span>
                  <span className="text-[11px] text-on-surface font-bold">55°C AMBIENT PEAKS</span>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">AIRBORNE DUST</span>
                  <span className="text-[11px] text-on-surface font-bold">FINE SILICATE FOULING</span>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">POWER LINES</span>
                  <span className="text-[11px] text-on-surface font-bold">BROWNOUTS &amp; DROPS</span>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">CONNECTIVITY</span>
                  <span className="text-[11px] text-on-surface font-bold">ZERO CELLULAR COVERAGE</span>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">BOM TARGETS</span>
                  <span className="text-[11px] text-on-surface font-bold">PRAGMATIC EDGE COST</span>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">SERVICING</span>
                  <span className="text-[11px] text-on-surface font-bold">REMOTE AUTONOMOUS UPTIME</span>
                </div>
              </div>

              <div className="pt-space-xs border-t border-outline-variant text-[10px] text-secondary font-bold flex justify-between">
                <span>PARADIGM: RESILIENCE BY DEFAULT</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — WHAT WE BUILD (TECHNOLOGY PILLARS CONNECT)                   */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="what-we-build">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                06 / WHAT WE BUILD
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Four pillars of intelligent systems.
              </h2>
            </div>
            <Link
              to="/technology"
              className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
            >
              Explore Full Technology Architecture →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <Link
              to="/technology"
              className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
            >
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  PILLAR 01
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Embedded AI
                </h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Sub-5W deterministic inference kernels and quantized tensor execution on edge silicon.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                <span>View Details</span>
                <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </div>
            </Link>

            <Link
              to="/technology"
              className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
            >
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  PILLAR 02
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Computer Vision
                </h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Real-time perception, spatial defect detection, line inspection, and temporal monitoring.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                <span>View Details</span>
                <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </div>
            </Link>

            <Link
              to="/technology"
              className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
            >
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  PILLAR 03
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Intelligent Sensing
                </h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Multi-modal fusion uniting cameras, thermopiles, IMUs, and ambient sensors.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                <span>View Details</span>
                <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </div>
            </Link>

            <Link
              to="/technology"
              className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between hover:border-secondary transition-colors group"
            >
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  PILLAR 04
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Vision-Language
                </h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Multimodal token embeddings and on-device causal reasoning for explainable actions.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary flex items-center gap-1 font-bold">
                <span>View Details</span>
                <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — APPLICATION DOMAINS                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="domains">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                07 / APPLICATION DOMAINS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Deployed across four domains.
              </h2>
            </div>
            <Link
              to="/applications"
              className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
            >
              View Full Applications Overview →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm font-mono-label">
            <Link
              to="/applications"
              className="bg-surface-container p-space-md border border-outline-variant hover:border-secondary transition-colors flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-[10px] text-secondary font-bold">DOMAIN // 01</span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">Agriculture</span>
              <span className="text-[10px] text-on-surface-variant">CANOPY &amp; CROPS</span>
            </Link>
            <Link
              to="/applications"
              className="bg-surface-container p-space-md border border-outline-variant hover:border-secondary transition-colors flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-[10px] text-secondary font-bold">DOMAIN // 02</span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">Industrial</span>
              <span className="text-[10px] text-on-surface-variant">INSPECTION &amp; AUTOMATION</span>
            </Link>
            <Link
              to="/applications"
              className="bg-surface-container p-space-md border border-outline-variant hover:border-secondary transition-colors flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-[10px] text-secondary font-bold">DOMAIN // 03</span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">Infrastructure</span>
              <span className="text-[10px] text-on-surface-variant">BRIDGES &amp; RAIL CORRIDORS</span>
            </Link>
            <Link
              to="/applications"
              className="bg-surface-container p-space-md border border-outline-variant hover:border-secondary transition-colors flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-[10px] text-secondary font-bold">DOMAIN // 04</span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">Energy</span>
              <span className="text-[10px] text-on-surface-variant">SUBSTATIONS &amp; RADIOMETRY</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — R&D → DEPLOYMENT → IP LOOP                                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="pipeline-loop">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              08 / THE R&amp;D COMPOUNDING LOOP
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              From research to reusable IP.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every stage feeds directly into our long-term engineering foundation:
            </p>
          </div>

          {/* Connected Loop Schematic */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs font-mono-label text-center">
            {rdPipelineStages.map((stage, idx) => (
              <div
                key={stage}
                className={`p-space-sm border flex flex-col justify-between min-h-[110px] ${
                  stage === 'Reusable IP' || stage === 'Next System'
                    ? 'bg-surface-container-high border-secondary font-bold'
                    : 'bg-surface border-outline-variant'
                }`}
              >
                <span className="text-[10px] text-secondary font-bold">0{idx + 1}</span>
                <span className="text-body-sm font-bold text-on-surface uppercase">{stage}</span>
                <span className="text-[10px] text-secondary font-bold">{idx < 6 ? '→' : '↺'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — TEAM (CMS-READY ARCHITECTURE)                                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="team">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                09 / ENGINEERING LEADERSHIP
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Engineering &amp; Research Team
              </h2>
            </div>
            <div className="font-mono-label text-body-sm text-on-surface-variant">
              TEAM PROFILES PUBLISHED AS DOSSIER RELEASES AUTHORIZE
            </div>
          </div>

          {/* CMS-Ready Placeholder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md font-mono-label">
            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between text-[10px] border-b border-outline-variant/60 pb-1">
                  <span className="text-secondary font-bold">ROLE: CORE RESEARCH</span>
                  <span className="text-on-surface-variant">DISCIPLINE: VLM / CV</span>
                </div>
                <div className="w-12 h-12 bg-surface border border-outline-variant my-space-sm flex items-center justify-center">
                  <MaterialIcon name="person" className="text-on-surface-variant text-[24px]" />
                </div>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Research Lead</h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                  Specializing in compact neural quantization, token pruning, and on-device multimodal reasoning.
                </p>
              </div>
              <div className="pt-space-xs border-t border-outline-variant/60 text-[10px] text-secondary font-bold">
                PROFILE STATUS: PENDING DIRECTORY RELEASE
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between text-[10px] border-b border-outline-variant/60 pb-1">
                  <span className="text-secondary font-bold">ROLE: EMBEDDED SYSTEMS</span>
                  <span className="text-on-surface-variant">DISCIPLINE: NPU / RTOS</span>
                </div>
                <div className="w-12 h-12 bg-surface border border-outline-variant my-space-sm flex items-center justify-center">
                  <MaterialIcon name="memory" className="text-on-surface-variant text-[24px]" />
                </div>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Hardware Systems Architect</h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                  Focused on bare-metal kernels, direct DMA buffers, and sub-watt passive thermal envelopes.
                </p>
              </div>
              <div className="pt-space-xs border-t border-outline-variant/60 text-[10px] text-secondary font-bold">
                PROFILE STATUS: PENDING DIRECTORY RELEASE
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between text-[10px] border-b border-outline-variant/60 pb-1">
                  <span className="text-secondary font-bold">ROLE: SENSOR FUSION</span>
                  <span className="text-on-surface-variant">DISCIPLINE: EKF / TELEMETRY</span>
                </div>
                <div className="w-12 h-12 bg-surface border border-outline-variant my-space-sm flex items-center justify-center">
                  <MaterialIcon name="sensors" className="text-on-surface-variant text-[24px]" />
                </div>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Sensor Integration Engineer</h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                  Focusing on multi-sensor synchronization, thermopile arrays, and environmental state invariance.
                </p>
              </div>
              <div className="pt-space-xs border-t border-outline-variant/60 text-[10px] text-secondary font-bold">
                PROFILE STATUS: PENDING DIRECTORY RELEASE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — FINAL CTA                                                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>FRONTIER PARTNERSHIP INQUIRY</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Building something that needs to work beyond the lab?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Tell us about your environment, your hardware constraints, and the problem you need solved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
              to="/applications"
            >
              Explore Applications →
            </Link>
          </div>

          <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant pt-space-md border-t border-outline-variant w-full justify-center flex-wrap">
            <span>R&amp;D</span>
            <span>//</span>
            <span>ENGINEERING</span>
            <span>//</span>
            <span>FIELD VALIDATION</span>
            <span>//</span>
            <span>REUSABLE IP</span>
          </div>
        </div>
      </section>
    </div>
  );
};
