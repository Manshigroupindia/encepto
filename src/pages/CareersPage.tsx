import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 5 Visual Blocks
const visualBlocks = [
  {
    num: '01',
    label: 'REAL PROBLEMS',
    tag: 'PHYSICAL HURDLES',
    desc: 'Solve authentic industrial and agricultural bottlenecks: abrasive dust, 55°C heat, power sags and zero connectivity.',
    icon: 'warning',
  },
  {
    num: '02',
    label: 'HANDS-ON EXPERIENCE',
    tag: 'HARDWARE-IN-THE-LOOP',
    desc: 'Flash silicon directly, connect oscilloscopes, profile SRAM cache lines and inspect physical optics.',
    icon: 'hardware',
  },
  {
    num: '03',
    label: 'RESEARCH',
    tag: 'ALGORITHMIC RIGOR',
    desc: 'Dissect preprints, benchmark neural topologies and design novel low-bit quantization loss functions.',
    icon: 'science',
  },
  {
    num: '04',
    label: 'BUILDING',
    tag: 'SYSTEMS CRAFT',
    desc: 'Write high-throughput zero-copy C++, bare-metal RTOS drivers and direct DMA memory interfaces.',
    icon: 'code',
  },
  {
    num: '05',
    label: 'VALIDATION',
    tag: 'FIELD STRESS',
    desc: 'Subject code to environmental chambers, harmonic vibration tables and live machinery installations.',
    icon: 'verified',
  },
];

// 8 Opportunity Grid Areas
interface OpportunityItem {
  num: string;
  name: string;
  tag: string;
  focus: string;
  skills: string;
  icon: string;
}

const opportunityGrid: OpportunityItem[] = [
  {
    num: '01',
    name: 'AI / ML',
    tag: 'QUANTIZATION & MODELS',
    focus: 'Designing compact neural architectures and quantization-aware training routines.',
    skills: 'PyTorch · INT8/INT4 QAT · Distillation',
    icon: 'psychology',
  },
  {
    num: '02',
    name: 'Computer Vision',
    tag: 'SPATIAL EXTRACTION',
    focus: 'Real-time spatial perception, sub-pixel defect localization and optical flow.',
    skills: 'OpenCV · CUDA · Spatial Geometry · MIPI',
    icon: 'visibility',
  },
  {
    num: '03',
    name: 'Embedded AI',
    tag: 'SILICON COMPILATION',
    focus: 'Compiling neural models directly onto edge NPUs, DSPs and microcontrollers.',
    skills: 'ARM Cortex · Edge NPU · Tensor Packing',
    icon: 'memory',
  },
  {
    num: '04',
    name: 'Edge Computing',
    tag: 'SYSTEM RUNTIMES',
    focus: 'Hardened runtime daemons, zero-copy ring buffers and air-gapped determinism.',
    skills: 'C++20 · RTOS · Linux Kernel · DMA',
    icon: 'hub',
  },
  {
    num: '05',
    name: 'Software Engineering',
    tag: 'HIGH-THROUGHPUT PIPELINES',
    focus: 'Asynchronous streaming pipelines, telemetry brokers and isolated industrial busing.',
    skills: 'Modern C++ · Rust · Python · CAN Bus',
    icon: 'terminal',
  },
  {
    num: '06',
    name: 'Research',
    tag: 'THEORETICAL EXPLORATION',
    focus: 'Investigating mathematical bounds, token pruning and multi-modal EKF fusion.',
    skills: 'Preprint Co-authorship · Math Modeling',
    icon: 'menu_book',
  },
  {
    num: '07',
    name: 'Prototyping',
    tag: 'BENCH BRING-UP',
    focus: 'Carrier board bring-up, sensor wiring, optics focusing and physical test rigs.',
    skills: 'Soldering · Oscilloscopes · Logic Analyzers',
    icon: 'build',
  },
  {
    num: '08',
    name: 'Testing',
    tag: 'ENVIRONMENTAL HARDENING',
    focus: 'Chamber stress tests, thermal profiling, brownout fault injection and recovery.',
    skills: 'Hardware Watchdogs · Chamber Runs · QA',
    icon: 'rule',
  },
];

export const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — CAREERS HERO                                                  */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / CAREERS</span>
              <span>// DEEP-TECH ENGINEERING LAB</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span>CULTURE: CRAFTSMANSHIP OVER BUZZWORDS</span>
            </div>
          </div>

          {/* Headline & Core Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Build. Research. <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">Learn. Deploy.</span>
              </h1>
              <p className="font-headline-md text-headline-md text-secondary font-bold">
                "Real hands-on experience, not just certificates."
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We work directly with silicon, optics, high-noise sensor streams and physical machinery. If you want to solve authentic edge-intelligence bottlenecks, we'd like to hear from you.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <a
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  href="mailto:careers@encepto.ai"
                >
                  <span>Apply to the Lab</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </a>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/collaboration"
                >
                  Student Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — FIVE VISUAL PILLARS                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="pillars">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / HOW YOU ENGAGE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              What you will actually do here.
            </h2>
          </div>

          {/* 5 Visual Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-xs font-mono-label">
            {visualBlocks.map((b) => (
              <div
                key={b.num}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group min-h-[200px]"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-secondary font-bold">{b.num}</span>
                    <MaterialIcon name={b.icon} className="text-[18px] text-on-surface-variant group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="font-headline-md text-body-md text-on-surface font-bold uppercase mt-1">
                    {b.label}
                  </h3>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[9px] text-secondary font-bold">
                  {b.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — EIGHT OPPORTUNITY GRID AREAS                                  */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="opportunities">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / OPPORTUNITIES
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Opportunity Grid
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-secondary font-bold">
              OPEN INQUIRIES &amp; RESEARCH FELLOWSHIPS
            </span>
          </div>

          {/* 8 Opportunity Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {opportunityGrid.map((item) => (
              <div
                key={item.num}
                className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">DISCIPLINE // {item.num}</span>
                    <MaterialIcon name={item.icon} className="text-[18px] text-on-surface-variant group-hover:text-secondary transition-colors" />
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    {item.tag}
                  </span>

                  <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed mt-1">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex flex-col gap-0.5">
                  <span className="font-bold text-on-surface">KEY TOOLS:</span>
                  <span className="truncate">{item.skills}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — APPLICATION INSTRUCTIONS & CTA                                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>HOW TO APPLY</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Ready to build for the real world?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Send an email to <a href="mailto:careers@encepto.ai" className="text-secondary font-bold hover:underline">careers@encepto.ai</a> with:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs font-mono-label text-[11px] max-w-2xl w-full text-left">
            <div className="bg-surface-container p-2 border border-outline-variant">
              <span className="text-secondary font-bold block">01 // CODE</span>
              <span className="text-on-surface">GitHub or technical code samples</span>
            </div>
            <div className="bg-surface-container p-2 border border-outline-variant">
              <span className="text-secondary font-bold block">02 // PROBLEM</span>
              <span className="text-on-surface">A hard technical hurdle you tackled</span>
            </div>
            <div className="bg-surface-container p-2 border border-outline-variant">
              <span className="text-secondary font-bold block">03 // DOMAIN</span>
              <span className="text-on-surface">Your specific area of interest</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
            <a
              className="px-space-xl py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center gap-space-xs font-bold"
              href="mailto:careers@encepto.ai"
            >
              <span>Email: careers@encepto.ai</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Careers = CareersPage;
export default CareersPage;


