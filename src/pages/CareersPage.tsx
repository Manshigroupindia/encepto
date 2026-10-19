import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

const visualBlocks = [
  {
    num: '01',
    label: 'Real Problems',
    tag: 'Physical Challenges',
    desc: 'Solve authentic industrial and agricultural challenges: abrasive dust, 55°C heat, power brownouts, and zero cellular connectivity.',
    icon: 'warning',
  },
  {
    num: '02',
    label: 'Hands-on Work',
    tag: 'Silicon & Sensors',
    desc: 'Flash silicon directly, connect oscilloscopes, tune optical lenses, and profile low-power microcontroller memory caches.',
    icon: 'hardware',
  },
  {
    num: '03',
    label: 'Applied Research',
    tag: 'Algorithmic Rigor',
    desc: 'Benchmark novel neural topologies, optimize low-bit quantization loss functions, and experiment with spatial vision.',
    icon: 'science',
  },
  {
    num: '04',
    label: 'Systems Craft',
    tag: 'High Performance',
    desc: 'Write high-throughput zero-copy C++, bare-metal RTOS drivers, and deterministic memory buffer interfaces.',
    icon: 'code',
  },
  {
    num: '05',
    label: 'Field Validation',
    tag: 'Stress Testing',
    desc: 'Subject software and hardware to environmental chambers, vibration test tables, and active customer field trials.',
    icon: 'verified',
  },
];

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
    name: 'AI & Machine Learning',
    tag: 'Quantization & Models',
    focus: 'Designing compact neural architectures and quantization-aware training routines.',
    skills: 'PyTorch · INT8/INT4 QAT · Distillation',
    icon: 'psychology',
  },
  {
    num: '02',
    name: 'Computer Vision',
    tag: 'Spatial Perception',
    focus: 'Real-time spatial perception, sub-pixel defect localization, and optical flow estimation.',
    skills: 'OpenCV · CUDA · Spatial Geometry · MIPI',
    icon: 'visibility',
  },
  {
    num: '03',
    name: 'Embedded AI',
    tag: 'Silicon Compilation',
    focus: 'Compiling neural models directly onto edge NPUs, DSPs, and microcontrollers.',
    skills: 'ARM Cortex · Edge NPU · Tensor Packing',
    icon: 'memory',
  },
  {
    num: '04',
    name: 'Edge Systems',
    tag: 'System Runtimes',
    focus: 'Hardened runtime daemons, zero-copy ring buffers, and deterministic offline execution.',
    skills: 'C++20 · RTOS · Linux Kernel · DMA',
    icon: 'hub',
  },
  {
    num: '05',
    name: 'Systems Software',
    tag: 'Data Pipelines',
    focus: 'Asynchronous streaming pipelines, telemetry brokers, and isolated industrial communications.',
    skills: 'Modern C++ · Rust · Python · CAN Bus',
    icon: 'terminal',
  },
  {
    num: '06',
    name: 'Applied Research',
    tag: 'Academic Rigor',
    focus: 'Investigating mathematical bounds, token pruning, and multi-modal sensor fusion.',
    skills: 'Paper Co-authorship · Mathematical Modeling',
    icon: 'menu_book',
  },
  {
    num: '07',
    name: 'Hardware Prototyping',
    tag: 'Bench Bring-Up',
    focus: 'Carrier board bring-up, sensor wiring, optics focusing, and physical test fixtures.',
    skills: 'Soldering · Oscilloscopes · Logic Analyzers',
    icon: 'build',
  },
  {
    num: '08',
    name: 'Validation & Testing',
    tag: 'Hardware QA',
    focus: 'Chamber stress tests, thermal profiling, brownout fault injection, and auto-recovery.',
    skills: 'Hardware Watchdogs · Chamber Runs · QA',
    icon: 'rule',
  },
];

export const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* SECTION 01 — HERO */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 lg:py-20 border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="tracking-widest uppercase text-secondary font-bold">CAREERS</span>
              <span className="text-outline">|</span>
              <span>JOIN THE ENGINEERING LAB</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded text-xs font-semibold">
                OPEN FELLOWSHIPS &amp; ROLES
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                Build. Research. <br className="hidden sm:inline" />
                <span className="text-secondary">Learn. Deploy.</span>
              </h1>
              <p className="text-lg font-semibold text-secondary">
                "Real hands-on experience solving physical engineering bottlenecks."
              </p>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We work directly with silicon, optics, high-noise sensor streams, and physical machinery. If you want to solve authentic edge-intelligence bottlenecks, we'd like to hear from you.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="px-5 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
                  href="mailto:careers@encepto.ai"
                >
                  <span>Apply to the Lab</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </a>
                <Link
                  className="px-5 py-2.5 bg-surface-container text-on-surface border border-outline-variant rounded text-sm font-semibold hover:bg-surface-container-high transition-colors"
                  to="/collaboration"
                >
                  Student Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — HOW YOU ENGAGE */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface-container-low transition-colors" id="pillars">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-2xl border-b border-outline-variant pb-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
              HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              What you will actually do here.
            </h2>
            <p className="text-sm text-on-surface-variant">
              Every day at Encepto combines rigorous mathematical inquiry with physical bench-level engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {visualBlocks.map((b) => (
              <div
                key={b.num}
                className="bg-surface rounded-xl border border-outline-variant p-5 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary font-bold">{b.num}</span>
                    <MaterialIcon name={b.icon} className="text-[18px] text-on-surface-variant group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-on-surface mt-1">
                    {b.label}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/60 text-[11px] text-secondary font-semibold">
                  {b.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — OPPORTUNITIES GRID */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface transition-colors" id="opportunities">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                Opportunity Grid
              </h2>
            </div>
            <span className="text-xs font-semibold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded">
              OPEN ROLES &amp; RESEARCH FELLOWSHIPS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {opportunityGrid.map((item) => (
              <div
                key={item.num}
                className="bg-surface-container rounded-xl border border-outline-variant p-5 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary font-bold">AREA {item.num}</span>
                    <MaterialIcon name={item.icon} className="text-[18px] text-on-surface-variant group-hover:text-secondary transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs text-secondary font-medium">
                    {item.tag}
                  </span>

                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/60 text-xs text-on-surface-variant flex flex-col gap-0.5">
                  <span className="font-semibold text-on-surface text-[11px]">Key Skills:</span>
                  <span className="text-[11px] truncate">{item.skills}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — APPLICATION INSTRUCTIONS & CTA */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto rounded-2xl border border-outline-variant bg-surface p-8 lg:p-12 flex flex-col items-center text-center gap-4 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>HOW TO APPLY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface max-w-2xl tracking-tight">
            Ready to build for the real world?
          </h2>

          <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
            Send an email directly to our engineering team at <a href="mailto:careers@encepto.ai" className="text-secondary font-semibold hover:underline">careers@encepto.ai</a> with:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs max-w-2xl w-full text-left my-2">
            <div className="bg-surface-container p-3.5 rounded-lg border border-outline-variant">
              <span className="text-secondary font-bold block text-xs uppercase mb-1">1. Your Code</span>
              <span className="text-on-surface leading-relaxed">GitHub repository, technical portfolio, or code samples</span>
            </div>
            <div className="bg-surface-container p-3.5 rounded-lg border border-outline-variant">
              <span className="text-secondary font-bold block text-xs uppercase mb-1">2. A Problem</span>
              <span className="text-on-surface leading-relaxed">A hard engineering challenge you solved and how you tackled it</span>
            </div>
            <div className="bg-surface-container p-3.5 rounded-lg border border-outline-variant">
              <span className="text-secondary font-bold block text-xs uppercase mb-1">3. Your Interest</span>
              <span className="text-on-surface leading-relaxed">The specific domain or discipline you want to work on</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              className="px-6 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
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
