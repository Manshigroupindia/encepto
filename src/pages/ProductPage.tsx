import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 1. Visual Model: 7-Stage Progression
interface ProductModelStage {
  id: number;
  step: string;
  name: string;
  tagline: string;
  deliverable: string;
  focus: string;
}

const productModelStages: ProductModelStage[] = [
  {
    id: 1,
    step: 'STAGE 01',
    name: 'CUSTOMER PROBLEM',
    tagline: 'Audit physical conditions, thermal limits & latency constraints',
    deliverable: 'System Constraint Specification (PRD)',
    focus: 'On-site investigation of physical constraints, dust, power sags and latency requirements.',
  },
  {
    id: 2,
    step: 'STAGE 02',
    name: 'RESEARCH',
    tagline: 'Algorithmic benchmarking & Pareto feasibility',
    deliverable: 'Pareto Model Feasibility Report',
    focus: 'Evaluating neural topologies and low-bit quantization bounds against target compute budgets.',
  },
  {
    id: 3,
    step: 'STAGE 03',
    name: 'SOFTWARE / AI',
    tagline: 'Model distillation, kernel tuning & pipeline design',
    deliverable: 'Quantized INT8/INT4 Model Weights',
    focus: 'Engineering camera ingestion drivers, hardware ISP calibration and deterministic inference engines.',
  },
  {
    id: 4,
    step: 'STAGE 04',
    name: 'PROTOTYPE',
    tagline: 'Hardware-in-the-loop bring-up & bench testing',
    deliverable: 'Functional Bench Prototype System',
    focus: 'Verifying end-to-end signal flow from physical sensors through neural runtime to actuation signals.',
  },
  {
    id: 5,
    step: 'STAGE 05',
    name: 'VALIDATION',
    tagline: 'Environmental stress testing & edge-case cornering',
    deliverable: 'Hardened Production Candidate Code',
    focus: 'Subjecting systems to simulated dust chambers, 55°C heat, voltage drops and optical glare.',
  },
  {
    id: 6,
    step: 'STAGE 06',
    name: 'DEPLOYMENT',
    tagline: 'Production integration & zero-downtime commissioning',
    deliverable: 'Live Edge Node on Target Machinery',
    focus: 'Flashing production machinery with dual-boot fallbacks and calibrated optical focus.',
  },
  {
    id: 7,
    step: 'STAGE 07',
    name: 'PRODUCT EVOLUTION',
    tagline: 'Local telemetry feedback & compounding IP',
    deliverable: 'Modular Compounding Deep-Tech Assets',
    focus: 'Aggregating offline telemetry checkpoints to continuously refine models and reusable IP.',
  },
];

// 2. Six Approved Visual Offerings
interface OfferingCard {
  id: string;
  num: string;
  name: string;
  tagline: string;
  desc: string;
  icon: string;
  capabilities: string[];
}

const offerings: OfferingCard[] = [
  {
    id: 'computer-vision',
    num: '01',
    name: 'Computer Vision',
    tagline: 'Spatial perception & defect detection',
    desc: 'Real-time spatial inspection and defect classification at line speeds up to 120 FPS.',
    icon: 'visibility',
    capabilities: ['Sub-pixel surface defect classification', 'Zero-copy MIPI CSI-2 frame intake', 'Optical dust scatter cancellation'],
  },
  {
    id: 'edge-ai',
    num: '02',
    name: 'Edge AI',
    tagline: 'Deterministic local inference',
    desc: 'Hardware-aware neural runtimes executing quantized models with sub-millisecond predictability.',
    icon: 'memory',
    capabilities: ['Symmetric INT8 / INT4 quantization', 'Bare-metal RTOS execution kernels', 'Zero external cloud reliance'],
  },
  {
    id: 'intelligent-sensing',
    num: '03',
    name: 'Intelligent Sensing',
    tagline: 'Multimodal sensor fusion',
    desc: 'Combining optical, radiometric thermopiles, 6-DoF IMUs and acoustics into unified state telemetry.',
    icon: 'sensors',
    capabilities: ['Extended Kalman Filter (EKF) matrix', 'Microsecond clock jitter sync', 'Physical asset state tracking'],
  },
  {
    id: 'vlms',
    num: '04',
    name: 'Vision-Language Models',
    tagline: 'On-device contextual reasoning',
    desc: 'Compact multimodal models explaining physical scene anomalies and triggering safety interlocks.',
    icon: 'psychology',
    capabilities: ['Dynamic perceptual token pruning', '-74% KV-cache memory compression', 'Discrete hardware relay dispatch'],
  },
  {
    id: 'monitoring-analysis',
    num: '05',
    name: 'Monitoring & Analysis',
    tagline: 'Continuous asset state telemetry',
    desc: 'Automated physical health telemetry logging vibration FFT, thermal drift and strain profiles.',
    icon: 'query_stats',
    capabilities: ['Subsurface fracture detection', 'Radiometric thermal runaway tracking', 'Brownout-safe atomic state commits'],
  },
  {
    id: 'custom-ai-systems',
    num: '06',
    name: 'Custom AI Systems',
    tagline: 'End-to-end engineered solutions',
    desc: 'Tailored software, R&D and hardware-aware optimization for proprietary physical machinery.',
    icon: 'build',
    capabilities: ['Problem-specific silicon compilation', 'Custom carrier board driver design', 'Isolated industrial bus integration'],
  },
];

export const ProductPage: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const activeStage = productModelStages.find((s) => s.id === activeStageId) || productModelStages[0];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — PRODUCT HERO                                                  */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / PRODUCT &amp; OFFERINGS</span>
              <span>// DEPLOYMENT MODEL</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">ENGAGEMENT MODEL: DEEP-TECH CO-DESIGN</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                SOFTWARE-FIRST
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Software-first intelligence. <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">Hardware-aware systems.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We develop edge software, quantized neural runtimes and custom deep-tech engineering for physical machinery.
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
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — THREE HORIZONS (TODAY · CUSTOMER WORK · FUTURE)               */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="horizons">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / OUR PARADIGM
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Where we are today &amp; where we are going.
            </h2>
          </div>

          {/* 3 Prominent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md font-mono-label">
            {/* TODAY */}
            <div className="bg-surface border-2 border-secondary p-space-md lg:p-space-lg flex flex-col justify-between relative shadow-sm">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-secondary font-bold uppercase tracking-wider">CURRENT STATE // 01</span>
                  <span className="bg-secondary text-on-secondary px-2 py-0.5 font-bold uppercase text-[9px]">ACTIVE</span>
                </div>
                <h3 className="font-display-hero text-headline-md lg:text-headline-lg text-on-surface font-bold mt-2">
                  TODAY
                </h3>
                <span className="font-headline-md text-body-md text-secondary font-bold">
                  Software-First.
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                  Quantized neural models, bare-metal inference runtimes, zero-copy DMA drivers and edge computer vision running on commercial silicon.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface font-bold">
                FOCUS: PRODUCTION SOFTWARE ON EDGE SILICON
              </div>
            </div>

            {/* CUSTOMER WORK */}
            <div className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col justify-between relative hover:border-on-surface transition-colors">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-secondary font-bold uppercase tracking-wider">ENGAGEMENTS // 02</span>
                  <span className="bg-surface-container px-2 py-0.5 text-on-surface font-bold uppercase text-[9px]">COLLABORATIVE</span>
                </div>
                <h3 className="font-display-hero text-headline-md lg:text-headline-lg text-on-surface font-bold mt-2">
                  CUSTOMER WORK
                </h3>
                <span className="font-headline-md text-body-md text-secondary font-bold">
                  Software + R&amp;D + Customization.
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                  Partnering with organizations on domain bottlenecks: sensor integration, specialized algorithmic pruning and physical hardware adaptation.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface font-bold">
                FOCUS: TAILORED DEEP-TECH ENGINEERING
              </div>
            </div>

            {/* FUTURE */}
            <div className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col justify-between relative hover:border-on-surface transition-colors">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-secondary font-bold uppercase tracking-wider">HORIZON // 03</span>
                  <span className="bg-surface-container px-2 py-0.5 text-on-surface-variant font-bold uppercase text-[9px]">R&amp;D ROADMAP</span>
                </div>
                <h3 className="font-display-hero text-headline-md lg:text-headline-lg text-on-surface font-bold mt-2">
                  FUTURE
                </h3>
                <span className="font-headline-md text-body-md text-secondary font-bold">
                  Hardware + Software Systems.
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-2">
                  Integrated turnkey physical intelligent systems: sealed, ruggedized silicon carrier boards co-designed with custom optics and neural IP.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface font-bold">
                FOCUS: TURNKEY HARDENED INTELLIGENT SYSTEMS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — VISUAL MODEL: 7-STEP PROGRESSION                              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="pipeline">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / DELIVERY PIPELINE
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                From Customer Problem to Product Evolution
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-secondary font-bold">
              7-STAGE END-TO-END METHODOLOGY
            </span>
          </div>

          {/* 7-Step Horizontal Visual Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs font-mono-label">
            {productModelStages.map((stage, idx) => {
              const isSelected = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-space-sm border flex flex-col justify-between text-left transition-all min-h-[140px] ${
                    isSelected
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container text-on-surface border-outline-variant hover:border-on-surface'
                  }`}
                  type="button"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-bold ${isSelected ? 'text-secondary-container' : 'text-secondary'}`}>
                      0{stage.id}
                    </span>
                    {idx < productModelStages.length - 1 && (
                      <span className={`text-[10px] hidden lg:inline ${isSelected ? 'text-secondary-container' : 'text-on-surface-variant'}`}>
                        →
                      </span>
                    )}
                  </div>
                  <span className="font-headline-md text-body-sm font-bold uppercase my-1 truncate">
                    {stage.name}
                  </span>
                  <span className={`text-[9px] ${isSelected ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                    {stage.deliverable}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Callout */}
          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono-label text-body-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 bg-secondary inline-block"></span>
              <span className="font-bold text-on-surface">{activeStage.step} // {activeStage.name}:</span>
              <span className="text-on-surface-variant">{activeStage.focus}</span>
            </div>
            <span className="text-secondary font-bold text-[11px] flex-shrink-0">
              DELIVERABLE: {activeStage.deliverable}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — SIX VISUAL OFFERING CARDS                                     */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="offerings">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / OFFERINGS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Core Capabilities &amp; Software Systems
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Modular solutions engineered around real physical environments.
            </p>
          </div>

          {/* 6 Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {offerings.map((item) => (
              <div
                key={item.id}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">CAPABILITY // {item.num}</span>
                    <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <MaterialIcon name={item.icon} className="text-[20px]" />
                    </div>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body-sm text-secondary font-bold">
                    "{item.tagline}"
                  </p>
                  <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed mt-1">
                    {item.desc}
                  </p>

                  <div className="mt-space-sm pt-space-xs border-t border-outline-variant/60 flex flex-col gap-1 font-mono-label text-[10px] text-on-surface">
                    <span className="text-on-surface-variant font-bold uppercase">KEY CAPABILITIES:</span>
                    {item.capabilities.map((c) => (
                      <span key={c} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-secondary inline-block"></span>
                        <span>{c}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-space-md pt-space-xs border-t border-outline-variant/40 flex items-center justify-between font-mono-label text-[10px]">
                  <span className="text-on-surface-variant">MODULAR &amp; AIR-GAPPED</span>
                  <Link to="/contact" className="text-secondary font-bold hover:underline flex items-center gap-1">
                    <span>Discuss Scope →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — FINAL CTA                                                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>NEXT STEPS</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Have a problem worth solving?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Let's explore what we can build together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
            <Link
              className="px-space-xl py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-lg py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest transition-colors font-bold"
              to="/technology"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
