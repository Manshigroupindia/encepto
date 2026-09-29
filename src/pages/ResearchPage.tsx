import React, { useState } from 'react';
import { MaterialIcon } from '../components/MaterialIcon';

// 8 Research Areas
interface ResearchAreaItem {
  id: string;
  num: string;
  title: string;
  summary: string;
  details: string;
  technicalVisual: string;
}

const researchAreas: ResearchAreaItem[] = [
  {
    id: 'embedded-ai',
    num: '01',
    title: 'Embedded AI',
    summary: 'Intelligence designed to operate within constrained physical systems.',
    details: 'Investigating mixed INT4/INT8 quantization regimes and bare-metal microcontroller kernels to execute deep inference on sub-watt silicon without operating system latency.',
    technicalVisual: 'INT8 QUANT // ZERO-COPY DMA',
  },
  {
    id: 'computer-vision',
    num: '02',
    title: 'Computer Vision',
    summary: 'Perception and visual understanding for physical environments.',
    details: 'Developing spatio-temporal de-noising filters and sub-pixel edge tracking that preserve scene features through heavy airborne silicate dust and optical glare.',
    technicalVisual: 'SPATIAL COHERENCE // FLOW 60FPS',
  },
  {
    id: 'intelligent-sensing',
    num: '03',
    title: 'Intelligent Sensing',
    summary: 'Combining signals and context to understand the real world.',
    details: 'Asynchronous multi-modal sensor fusion binding optical arrays, radiometric thermopiles, 6-DoF IMUs and acoustic probes into a unified Extended Kalman state space.',
    technicalVisual: 'EKF MATRIX // MICROSECOND JITTER',
  },
  {
    id: 'vlms',
    num: '04',
    title: 'Vision-Language Models',
    summary: 'Multimodal visual understanding and language-based reasoning.',
    details: 'Dynamic perceptual token pruning in visual decoders, compressing KV-cache footprints by 74% to perform on-device contextual scene reasoning.',
    technicalVisual: 'TOKEN PRUNING // LOCAL CONTEXT',
  },
  {
    id: 'edge-computing',
    num: '05',
    title: 'Edge Computing',
    summary: 'Computing and inference closer to where data is generated.',
    details: 'Decentralized compute topologies capable of complete air-gapped autonomy, processing multi-channel high-rate sensors without cloud backhauls.',
    technicalVisual: 'AIR-GAPPED // LOCAL BUS ARBITRATION',
  },
  {
    id: 'industrial-ai',
    num: '06',
    title: 'Industrial AI',
    summary: 'AI systems designed around physical industrial environments.',
    details: 'Hardened algorithm design resilient against violent 10G mechanical vibration harmonics, radiant forge temperatures and continuous electromagnetic noise.',
    technicalVisual: '10G MECHANICAL HARMONIC INVARIANCE',
  },
  {
    id: 'ai-hardware',
    num: '07',
    title: 'AI Hardware',
    summary: 'Hardware-aware approaches to deploying intelligent systems.',
    details: 'Co-designing algorithms alongside silicon memory layouts, voltage regulators and passive conductive cooling blocks to prevent thermal throttling at 55°C.',
    technicalVisual: 'PASSIVE CONDUCTION // -40°C TO +85°C',
  },
  {
    id: 'field-deployment',
    num: '08',
    title: 'Field Deployment',
    summary: 'Understanding how intelligent systems behave outside controlled environments.',
    details: 'Empirical telemetry aggregation, fail-safe dual boot flash partitioning and autonomous self-healing watchdogs built for remote unattended sites.',
    technicalVisual: 'DUAL BOOT PARTITIONS // WATCHDOG',
  },
];

// 7-Step R&D Pipeline
interface PipelineStepItem {
  num: string;
  name: string;
  headline: string;
  explanation: string;
}

const rdPipeline: PipelineStepItem[] = [
  {
    num: '01',
    name: 'QUESTION',
    headline: 'Identify Fundamental Bottlenecks',
    explanation: 'Define real-world environmental failure modes: optical dust fouling, voltage drops, silicon thermal limits and air-gapped latency bounds before writing code.',
  },
  {
    num: '02',
    name: 'RESEARCH',
    headline: 'Theoretical & Algorithmic Rigor',
    explanation: 'Benchmark candidate architectures, investigate attention pruning bounds, simulate loss functions and model mathematical quantization bounds.',
  },
  {
    num: '03',
    name: 'PROTOTYPE',
    headline: 'Hardware-in-the-Loop Bring-up',
    explanation: 'Bare-metal carrier board integration. Map registers directly to DMA channels and profile memory heat signatures under simulated power budgets.',
  },
  {
    num: '04',
    name: 'FIELD TEST',
    headline: 'Environmental Stress Testing',
    explanation: 'Place physical silicon into environmental test chambers simulating sustained 55°C heat, power brownouts and particulate silicate fog.',
  },
  {
    num: '05',
    name: 'VALIDATION',
    headline: 'Deterministic Hardening',
    explanation: 'Subject nodes to long-duration continuous execution to prove fail-safe autonomous watchdog recovery and zero memory leakage.',
  },
  {
    num: '06',
    name: 'DEPLOYMENT',
    headline: 'Physical Field Commencement',
    explanation: 'Flash dual-boot partitions on target machinery rigs with calibrated optical focus and isolated industrial relay integration.',
  },
  {
    num: '07',
    name: 'REUSABLE IP',
    headline: 'Compounding Knowledge Substrate',
    explanation: 'Codify deployment telemetry into failure mode taxonomies and persistent firmware patterns that accelerate subsequent client deployments.',
  },
];

// 8 Topic Articles (CMS-Ready Placeholders)
const topicArticles = [
  {
    category: 'EMBEDDED AI',
    title: 'Quantization Strategies for Sub-5W Visual Transformers',
    desc: 'Investigating mixed INT4/INT8 precision bounds in self-attention matrices on ARM Cortex and RISC-V edge vector registers.',
    date: '2026.Q2',
  },
  {
    category: 'COMPUTER VISION',
    title: 'Mitigating Atmospheric Particle Occlusion in Low-Cost Optics',
    desc: 'Algorithmic optical restoration using spatio-temporal coherence kernels to cancel silicate dust scattering in agricultural rigs.',
    date: '2026.Q2',
  },
  {
    category: 'INTELLIGENT SENSING',
    title: 'Microsecond Multi-Modal Jitter Synchronization Across Asymmetric Busses',
    desc: 'Hardware interrupt arbitration patterns linking I2C, SPI and MIPI CSI-2 sensor streams into a unified Extended Kalman state vector.',
    date: '2026.Q3',
  },
  {
    category: 'VISION-LANGUAGE',
    title: 'Context Compression for On-Device Multi-Modal Reasoning',
    desc: 'Dynamic pruning of perceptual tokens in visual-language decoders, reducing KV-cache RAM footprint by 74% while preserving defect taxonomy.',
    date: '2026.Q3',
  },
  {
    category: 'EDGE COMPUTING',
    title: 'Zero-Downtime Deterministic Firmware Flashing in Remote Nodes',
    desc: 'A dual-bank flash memory partition scheme enabling atomic fallback during brownout interruptions on solar-powered monitoring arrays.',
    date: '2026.Q4',
  },
  {
    category: 'INDUSTRIAL AI',
    title: 'Mechanical Harmonic Decoupling in High-Shock Stamping Lines',
    desc: 'Accelerometer filtering patterns that isolate genuine bearing degradation frequencies from benign 10G mechanical presses.',
    date: '2026.Q4',
  },
  {
    category: 'AI HARDWARE',
    title: 'Passive Aluminum Thermal Conduction Under 55°C Ambient Solar Soak',
    desc: 'Finite-element thermodynamic design patterns eliminating rotating fans in high-particulate outdoor installations.',
    date: '2027.Q1',
  },
  {
    category: 'FIELD DEPLOYMENT',
    title: 'Autonomous Dual Hardware Watchdog Trees in Air-Gapped Systems',
    desc: 'Coprocessor supervision topologies designed to reset frozen peripheral busses without disrupting operating machinery cycles.',
    date: '2027.Q1',
  },
];

export const ResearchPage: React.FC = () => {
  const [activePipelineIndex, setActivePipelineIndex] = useState<number>(0);
  const activePipelineStep = rdPipeline[activePipelineIndex];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — RESEARCH HERO                                                */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / RESEARCH</span>
              <span>// R&amp;D LABORATORY &amp; PREPRINTS</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">LAB_STATUS: INVESTIGATIVE // EMPIRICAL</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                GUIDED BY DEPLOYMENT CONSTRAINTS
              </span>
            </div>
          </div>

          {/* Headline & Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Research that <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">survives reality.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto explores the technologies required to make intelligent systems work beyond controlled environments — with research guided by real deployment constraints.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <a
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  href="mailto:contact@encepto.ai"
                >
                  <span>Start a Conversation</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </a>
              </div>
              <span className="font-mono-label text-[10px] text-on-surface-variant">
                EMPIRICAL LABORATORY · SILICON-LEVEL VERIFICATION
              </span>
            </div>
          </div>

          {/* Research Visual Interface */}
          <div className="mt-space-md w-full bg-surface-container-lowest border border-outline-variant p-space-sm lg:p-space-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

            <div className="relative z-10 flex flex-col gap-space-sm font-mono-label">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  R&amp;D INSTRUMENTATION READOUT
                </span>
                <span className="text-on-surface-variant">SUBSYSTEM BLOCKS: SYNCHRONIZED</span>
              </div>

              {/* Research Architecture Fragments */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xs text-body-sm pt-1">
                <div className="bg-surface p-space-sm border border-outline-variant flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-secondary font-bold block mb-1">01 // MODEL ARCHITECTURE</span>
                    <span className="text-on-surface font-bold">Quantized Self-Attention</span>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Asymmetric INT4/INT8 vector register bounds.
                    </p>
                  </div>
                  <span className="text-[9px] text-on-surface-variant border-t border-outline-variant/60 pt-1 mt-2">
                    STATUS: THEOREM VERIFIED
                  </span>
                </div>

                <div className="bg-surface p-space-sm border border-outline-variant flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-secondary font-bold block mb-1">02 // SENSOR SIGNALS</span>
                    <span className="text-on-surface font-bold">Microsecond Phase Bus</span>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Optical + thermal + acoustic stream sync.
                    </p>
                  </div>
                  <span className="text-[9px] text-on-surface-variant border-t border-outline-variant/60 pt-1 mt-2">
                    STATUS: CLOCK LOCKED
                  </span>
                </div>

                <div className="bg-surface p-space-sm border border-outline-variant flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-secondary font-bold block mb-1">03 // EDGE COMPUTE</span>
                    <span className="text-on-surface font-bold">Sub-5W Tensor Runtime</span>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Zero-copy memory register allocation.
                    </p>
                  </div>
                  <span className="text-[9px] text-on-surface-variant border-t border-outline-variant/60 pt-1 mt-2">
                    STATUS: BARE-METAL READY
                  </span>
                </div>

                <div className="bg-surface p-space-sm border border-outline-variant flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-secondary font-bold block mb-1">04 // RESEARCH NOTES</span>
                    <span className="text-on-surface font-bold">Field Degradation Logs</span>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Empirical failure mode taxonomy codification.
                    </p>
                  </div>
                  <span className="text-[9px] text-on-surface-variant border-t border-outline-variant/60 pt-1 mt-2">
                    STATUS: REUSABLE IP LOOP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — RESEARCH AREAS (8 RESEARCH AREAS)                            */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="areas">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                02 / RESEARCH AREAS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Exploring the technologies behind deployment.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Eight distinct research pillars addressing physical, mathematical and hardware constraints outside the laboratory.
            </p>
          </div>

          {/* 8 Research Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="font-mono-metric text-headline-md text-secondary font-bold">
                      {area.num}
                    </span>
                    <span className="text-on-surface-variant">{area.technicalVisual}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                    {area.title}
                  </h3>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                    {area.summary}
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant/80 mt-1">
                    {area.details}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[9px] text-secondary font-bold uppercase">
                  INVESTIGATION // ACTIVE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — R&D PIPELINE (7-STEP INTERACTIVE TIMELINE)                   */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="pipeline">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / R&amp;D PIPELINE
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                From question to reusable intelligence.
              </h2>
            </div>
            <div className="font-mono-label text-body-sm text-on-surface-variant">
              CLICK ANY STAGE TO REVEAL METHODOLOGY
            </div>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="w-full overflow-x-auto pb-space-sm">
            <div className="min-w-[1040px] grid grid-cols-7 gap-space-xs relative">
              <div className="col-span-7 h-0.5 bg-outline-variant my-space-xs relative">
                <div className="absolute left-0 top-0 h-0.5 bg-secondary w-full animate-pulse"></div>
              </div>

              {rdPipeline.map((step, idx) => {
                const isSelected = idx === activePipelineIndex;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActivePipelineIndex(idx)}
                    className={`cursor-pointer p-space-sm flex flex-col justify-between min-h-[160px] text-left transition-all ${
                      isSelected
                        ? 'bg-surface-container-high border-2 border-secondary'
                        : 'bg-surface-container border border-outline-variant hover:border-on-surface'
                    }`}
                    type="button"
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        className={`font-mono-label text-mono-label font-bold ${
                          isSelected ? 'text-secondary' : 'text-on-surface-variant'
                        }`}
                      >
                        STAGE // {step.num}
                      </span>
                      <h4 className="font-headline-md text-body-md text-on-surface font-bold uppercase">
                        {step.name}
                      </h4>
                    </div>
                    <div className="pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                      GATE: VERIFIED
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Explanation */}
          <div className="bg-surface-container border border-outline-variant p-space-md lg:p-space-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md transition-colors">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-mono-metric text-headline-md flex-shrink-0 font-bold">
                {activePipelineStep.num}
              </div>
              <div className="flex flex-col">
                <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
                  ACTIVE PHASE: {activePipelineStep.name}
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  {activePipelineStep.headline}
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed mt-1">
                  {activePipelineStep.explanation}
                </span>
              </div>
            </div>
            <div className="bg-surface px-space-md py-space-xs border border-outline-variant font-mono-label text-body-sm text-secondary font-bold flex-shrink-0">
              PHASE // LOCKED
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — FEATURED RESEARCH (CMS-READY IN PROGRESS)                     */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / FEATURED RESEARCH
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Research in progress.
            </h2>
          </div>

          {/* Featured Article Card */}
          <div className="bg-surface border border-outline-variant p-space-md lg:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Visual Panel */}
            <div className="lg:col-span-7 bg-surface-container-highest p-space-md border border-outline-variant flex flex-col gap-space-sm font-mono-label">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold">PREPRINT // IN PROGRESS</span>
                <span>STATUS: EMPIRICAL HARDENING</span>
              </div>
              <div className="py-space-md flex flex-col gap-2">
                <div className="flex justify-between items-center text-body-sm">
                  <span>KV-CACHE FOOTPRINT PRUNING:</span>
                  <span className="text-secondary font-bold font-mono-metric">74% REDUCTION</span>
                </div>
                <div className="w-full bg-surface h-2 border border-outline-variant overflow-hidden">
                  <div className="bg-secondary h-full w-[74%]"></div>
                </div>
                <div className="flex justify-between items-center text-body-sm pt-2">
                  <span>THERMAL RUNTIME AT 55°C AMBIENT:</span>
                  <span className="text-on-surface font-bold font-mono-metric">3.2W PASSIVE</span>
                </div>
                <div className="w-full bg-surface h-2 border border-outline-variant overflow-hidden">
                  <div className="bg-primary h-full w-[40%]"></div>
                </div>
              </div>
              <span className="text-[10px] text-on-surface-variant border-t border-outline-variant/60 pt-1">
                HARDWARE TARGET: RISC-V &amp; ARM CORTEX VECTOR SILICON
              </span>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col gap-space-sm">
              <div className="flex items-center gap-2 font-mono-label text-[10px] text-secondary font-bold uppercase">
                <span>CATEGORY: VISION-LANGUAGE MODELS</span>
                <span>·</span>
                <span>2026.Q3</span>
              </div>
              <h3 className="font-display-hero text-headline-lg text-on-surface font-bold">
                Dynamic Perceptual Token Pruning in Embedded Decoders
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Investigating spatial entropy thresholds to dynamically discard uninformative background pixels before vision-language cross-attention layers on low-power edge SoCs.
              </p>
              <div className="font-mono-label text-[11px] text-on-surface-variant">
                TAGS: TOKEN_PRUNING // LOW_BIT_VLM // SUB_5W
              </div>
              <div className="pt-space-sm">
                <span className="inline-flex items-center gap-2 px-space-md py-space-xs bg-surface-container text-on-surface font-mono-label text-mono-label uppercase tracking-wider border border-outline-variant font-bold">
                  <span>Research coming soon</span>
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — RESEARCH & INSIGHTS (8 RESEARCH TOPICS GRID)                 */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="insights">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                05 / RESEARCH &amp; INSIGHTS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Technical preprints &amp; architectural notes.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Peer preprints and empirical research notes published as investigations pass physical validation.
            </p>
          </div>

          {/* 8 Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xs">
            {topicArticles.map((art) => (
              <div
                key={art.title}
                className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-on-surface transition-colors"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="bg-surface px-space-xs py-0.5 text-on-surface font-bold uppercase">
                      {art.category}
                    </span>
                    <span className="text-secondary font-bold">{art.date}</span>
                  </div>
                  <h3 className="font-headline-md text-body-md text-on-surface font-bold mt-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 flex items-center justify-between font-mono-label text-[10px]">
                  <span className="text-on-surface-variant">PREPRINT</span>
                  <span className="text-secondary font-bold uppercase flex items-center gap-1">
                    <span>READ →</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — RESEARCH PHILOSOPHY                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-md items-end">
            <div className="lg:col-span-7 flex flex-col gap-space-xs">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                06 / RESEARCH PHILOSOPHY
              </span>
              <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface">
                Research is evaluated with real deployment in mind.
              </h2>
            </div>
            <div className="lg:col-span-5 font-body-lg text-body-lg text-on-surface font-medium border-l-2 border-secondary pl-space-md">
              "The goal is not simply to demonstrate that a model works under controlled conditions. Research must move toward systems that can operate within the constraints of the physical world."
            </div>
          </div>

          {/* 4 Supporting Ideas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-mono-label text-secondary font-bold block mb-1">01</span>
                <h4 className="font-headline-md text-headline-md text-on-surface">
                  Reality over demos
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Evaluate technology against real conditions. Controlled benchmarks mask vulnerability to heat, dust and electrical noise.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: UNMANAGED CONDITIONS
              </div>
            </div>

            <div className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-mono-label text-secondary font-bold block mb-1">02</span>
                <h4 className="font-headline-md text-headline-md text-on-surface">
                  Constraints from day one
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Account for deployment requirements early. Peak milliwatts, silicon BOM cost and memory envelopes shape our algorithmic proofs.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: UPFRONT PHYSICAL BOUNDS
              </div>
            </div>

            <div className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-mono-label text-secondary font-bold block mb-1">03</span>
                <h4 className="font-headline-md text-headline-md text-on-surface">
                  Field feedback
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Use deployment to generate learning. Edge failure modes and anomalous corner cases provide authentic empirical feedback loops.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: EMPIRICAL TELEMETRY
              </div>
            </div>

            <div className="bg-surface p-space-md border border-outline-variant flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-mono-label text-secondary font-bold block mb-1">04</span>
                <h4 className="font-headline-md text-headline-md text-on-surface">
                  Reusable knowledge
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Convert learning into future engineering capability. Every physical test compounds into persistent modular software IP.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: COMPOUNDING ASSETS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — RESEARCH → IP (VISUAL COMPOUNDING LOOP)                       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-primary-container text-on-primary transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-on-primary-container/30 pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary-container uppercase font-bold tracking-widest">
                07 / COMPOUNDING INTELLECTUAL PROPERTY
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-primary">
                Every experiment should make the next system smarter.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container max-w-md">
              We convert research breakthroughs and empirical field learnings into persistent modular building blocks that compound across systems.
            </p>
          </div>

          {/* Visual Compounding Cycle Flow */}
          <div className="bg-surface-container-highest/10 border border-on-primary-container/20 p-space-md">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-space-xs items-center text-center font-mono-label text-body-sm">
              <div className="p-space-xs bg-surface-container-highest/15 border border-on-primary-container/30">
                <span className="text-[10px] text-on-primary-container block">01</span>
                <span className="font-bold text-on-primary">RESEARCH</span>
              </div>
              <div className="p-space-xs bg-surface-container-highest/15 border border-on-primary-container/30">
                <span className="text-[10px] text-on-primary-container block">02</span>
                <span className="font-bold text-on-primary">KNOWLEDGE</span>
              </div>
              <div className="p-space-xs bg-surface-container-highest/15 border border-on-primary-container/30">
                <span className="text-[10px] text-on-primary-container block">03</span>
                <span className="font-bold text-on-primary">PROTOTYPE</span>
              </div>
              <div className="p-space-xs bg-surface-container-highest/15 border border-on-primary-container/30">
                <span className="text-[10px] text-on-primary-container block">04</span>
                <span className="font-bold text-on-primary">FIELD TEST</span>
              </div>
              <div className="p-space-xs bg-surface-container-highest/15 border border-on-primary-container/30">
                <span className="text-[10px] text-on-primary-container block">05</span>
                <span className="font-bold text-on-primary">DEPLOYMENT</span>
              </div>
              <div className="p-space-xs bg-surface-container-highest/15 border border-on-primary-container/30">
                <span className="text-[10px] text-on-primary-container block">06</span>
                <span className="font-bold text-on-primary">LEARNING</span>
              </div>
              <div className="p-space-xs bg-secondary-container/20 border border-secondary-container text-secondary-container font-bold col-span-2 md:col-span-1">
                <span className="text-[10px] block">07</span>
                <span>REUSABLE IP ↺</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — RESEARCH CTA                                                 */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>R&amp;D COLLABORATION INQUIRY</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Have a question worth investigating?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Bring us the problem, the environment and the constraints.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-sm">
            <a
              className="px-space-xl py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center gap-space-xs font-bold"
              href="mailto:contact@encepto.ai"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>

          <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant pt-space-md border-t border-outline-variant w-full justify-center flex-wrap">
            <span>RESEARCH</span>
            <span>//</span>
            <span>PROTOTYPE</span>
            <span>//</span>
            <span>VALIDATE</span>
            <span>//</span>
            <span>DEPLOY</span>
          </div>
        </div>
      </section>
    </div>
  );
};
