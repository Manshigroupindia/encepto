import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// System Architecture Step definitions
interface SystemArchLayer {
  id: number;
  num: string;
  label: string;
  subLabel: string;
  explanation: string;
  signalFlow: string;
  telemetryTag: string;
  details: string;
  inputSpec: string;
  outputSpec: string;
  latencyBudget: string;
  hardwareTarget: string;
}

const systemArchitectureLayers: SystemArchLayer[] = [
  {
    id: 1,
    num: '01',
    label: 'Sensing',
    subLabel: 'Signal Ingestion & Sync',
    explanation: 'Multi-modal optical CMOS arrays, radiometric thermopiles, inertial IMUs, and acoustic probes capturing raw environmental signals.',
    signalFlow: 'ANALOG & MIPI CSI-2 INTAKE',
    telemetryTag: 'BUS // CSI-2 / I2C / SPI',
    details: 'Physical signals are conditioned at the silicon perimeter with microsecond clock synchronization, preventing phase jitter across diverse physical sensor modalities.',
    inputSpec: 'Raw optical photons, microvolts, 6-axis acceleration',
    outputSpec: 'Synchronized digital frame tensors & telemetry vectors',
    latencyBudget: '< 0.5 ms',
    hardwareTarget: 'Perimeter Sensor Hub / MIPI CSI-2 Bridge',
  },
  {
    id: 2,
    num: '02',
    label: 'Perception',
    subLabel: 'Spatial Feature Extraction',
    explanation: 'Hardware spatial filtering, optical flow tracking, ROI framing, and environmental scatter cancellation.',
    signalFlow: 'HARDWARE ISP & FLOW TENSORS',
    telemetryTag: 'DIRECT DMA MEMORY BUFFERS',
    details: 'Extracts spatial structure and cancels atmospheric scattering directly in zero-copy memory buffers, presenting de-noised visual tensors to downstream models.',
    inputSpec: 'Raw digital video frames & synchronized sensor streams',
    outputSpec: 'Denoised spatial tensors & optical motion flow fields',
    latencyBudget: '< 1.8 ms',
    hardwareTarget: 'Hardware ISP / Zero-Copy SRAM DMA',
  },
  {
    id: 3,
    num: '03',
    label: 'Edge / Embedded Compute',
    subLabel: 'Hardware-Aware Execution',
    explanation: 'Sub-5W deterministic tensor execution units and bare-metal runtime kernels operating with zero OS paging overhead.',
    signalFlow: 'NPU TENSOR CORES / BARE-METAL RTOS',
    telemetryTag: 'SUB-WATT RUNTIME KERNELS',
    details: 'Hardware-aware execution eliminates thermal throttling in 55°C ambient conditions through passive conductive cooling architectures.',
    inputSpec: 'Denoised feature tensors & unified state matrices',
    outputSpec: 'Quantized INT8 intermediate activation graphs',
    latencyBudget: '< 3.2 ms',
    hardwareTarget: 'Embedded NPU / Bare-Metal RTOS Core',
  },
  {
    id: 4,
    num: '04',
    label: 'AI Models',
    subLabel: 'Quantized Neural Inference',
    explanation: 'Compact quantized neural blocks (INT4 / INT8) trained for extreme environmental invariance and spatial classification.',
    signalFlow: 'INT8/INT4 QUANTIZED INFERENCE',
    telemetryTag: 'ON-CHIP SRAM CACHE PACKING',
    details: 'Weights and activation graphs are compressed into micro-megabyte footprints, ensuring rapid on-silicon execution without external DRAM power penalties.',
    inputSpec: 'Normalized intermediate tensor activations',
    outputSpec: 'Object bounding vectors, segmentation masks, defect classes',
    latencyBudget: '< 5.5 ms',
    hardwareTarget: 'Dedicated Neural Acceleration Units (NPU/DSP)',
  },
  {
    id: 5,
    num: '05',
    label: 'Vision-Language Reasoning',
    subLabel: 'Multimodal Context Synthesis',
    explanation: 'On-device vision-language models synthesizing visual perception and multi-modal signals into contextual state diagnostics.',
    signalFlow: 'MULTIMODAL TOKEN REASONING',
    telemetryTag: 'TOKEN-PRUNED LOCAL VLM',
    details: 'Prunes perceptual tokens dynamically to interpret complex physical scenes into natural-language safety metrics and fault classifications.',
    inputSpec: 'Visual semantic tokens + environmental state telemetry',
    outputSpec: 'Contextual anomaly diagnosis & natural language assertions',
    latencyBudget: '< 9.0 ms',
    hardwareTarget: 'Quantized Transformer Execution Unit',
  },
  {
    id: 6,
    num: '06',
    label: 'Actionable Intelligence',
    subLabel: 'Deterministic Closed-Loop Control',
    explanation: 'Closed-loop hardware relay actuation, isolated CAN bus broadcasts and fail-safe automated equipment shutdown trips.',
    signalFlow: 'LOCAL ACTUATION & TRIP SIGNALS',
    telemetryTag: 'ISOLATED GPIO / CAN BUS RELAY',
    details: 'Deterministic local actuation executes without waiting for cloud round-trips, ensuring instantaneous safety responses on active machinery.',
    inputSpec: 'Validated diagnostic assertions & threshold boundaries',
    outputSpec: 'Optocoupled GPIO relays, isolated CAN bus trip frames',
    latencyBudget: '< 0.8 ms',
    hardwareTarget: 'Optically-Isolated Industrial Relays / CAN Transceivers',
  },
];

export const TechnologyPage: React.FC = () => {
  const [activeArchIndex, setActiveArchIndex] = useState<number>(0);
  const activeArchLayer = systemArchitectureLayers[activeArchIndex];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — TECHNOLOGY HERO                                              */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / TECHNOLOGY</span>
              <span>// INNER ARCHITECTURE</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">LAYER_SYNTHESIS: ACTIVE</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                SUB-5W EDGE PARADIGM
              </span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-space-xs">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Engineering intelligence <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">for the edge.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Encepto develops embedded AI systems combining computer vision, intelligent sensing and vision-language models for real-world deployment.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/applications"
                >
                  <span>Explore Applications</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/contact"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>

            {/* Right: Technical Engineering System Visual */}
            <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-space-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>
              
              <div className="relative z-10 flex flex-col gap-space-sm font-mono-label">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    EDGE PROCESSING PIPELINE
                  </span>
                  <span className="text-on-surface-variant">STATE: DETERMINISTIC</span>
                </div>

                {/* Vertical Engineering Cascade Showing All 6 Stages */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="bg-surface p-2 border border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-secondary font-bold">01</span>
                      <span className="text-body-sm font-bold text-on-surface">SENSING</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant">RAW WAVEFORMS &amp; MIPI</span>
                  </div>

                  <div className="flex justify-center text-secondary text-[10px]">↓</div>

                  <div className="bg-surface p-2 border border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-secondary font-bold">02</span>
                      <span className="text-body-sm font-bold text-on-surface">PERCEPTION</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant">HARDWARE ISP &amp; OPTICAL FLOW</span>
                  </div>

                  <div className="flex justify-center text-secondary text-[10px]">↓</div>

                  <div className="bg-surface p-2 border border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-secondary font-bold">03</span>
                      <span className="text-body-sm font-bold text-on-surface">EDGE / EMBEDDED COMPUTE</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant">SUB-5W DIRECT TENSOR DMA</span>
                  </div>

                  <div className="flex justify-center text-secondary text-[10px]">↓</div>

                  <div className="bg-surface p-2 border border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-secondary font-bold">04</span>
                      <span className="text-body-sm font-bold text-on-surface">AI MODELS</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant">INT8 QUANTIZED WEIGHTS</span>
                  </div>

                  <div className="flex justify-center text-secondary text-[10px]">↓</div>

                  <div className="bg-surface p-2 border border-outline-variant flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-secondary font-bold">05</span>
                      <span className="text-body-sm font-bold text-on-surface">VISION-LANGUAGE REASONING</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant">ON-DEVICE CONTEXT SYNTHESIS</span>
                  </div>

                  <div className="flex justify-center text-secondary text-[10px]">↓</div>

                  <div className="bg-surface-container-high p-2 border border-secondary flex items-center justify-between font-bold">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-secondary">06</span>
                      <span className="text-body-sm text-on-surface">ACTIONABLE INTELLIGENCE</span>
                    </div>
                    <span className="text-[10px] text-secondary">CLOSED-LOOP ACTUATION</span>
                  </div>
                </div>

                <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex justify-between">
                  <span>LATENCY: DETERMINISTIC &lt; 12ms</span>
                  <span>BUS: HARDENED ON-SILICON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — TECHNOLOGY OVERVIEW                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / TECHNOLOGY OVERVIEW
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Four technologies. One intelligent system.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Modular capabilities designed to operate individually or unify into cohesive autonomous perception and reasoning architectures.
            </p>
          </div>

          {/* 4 Large Editorial Technology Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Module 01: Embedded AI */}
            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-mono-label">
                  <span className="font-mono-metric text-headline-md text-secondary font-bold">01</span>
                  <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold uppercase text-[10px]">
                    ON-DEVICE INFERENCE
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Embedded AI</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Intelligence designed to operate close to where data is generated, enabling responsive and deployment-conscious systems that respect hardware limits.
                </p>

                {/* Micro Data Flow */}
                <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[10px] mt-space-xs">
                  <span className="text-secondary font-bold block mb-1">LOCAL FLOW:</span>
                  <div className="flex items-center justify-between text-center font-bold gap-1">
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">INPUT</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">EDGE SOC</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">INT8 INFER</span>
                    <span>→</span>
                    <span className="bg-primary text-on-primary px-1.5 py-1 flex-1">OUTPUT</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex justify-between">
                <span>INSPECTION: HARDWARE-AWARE</span>
                <span className="text-secondary font-bold">DETAILED SECTION BELOW ↓</span>
              </div>
            </div>

            {/* Module 02: Computer Vision */}
            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-mono-label">
                  <span className="font-mono-metric text-headline-md text-secondary font-bold">02</span>
                  <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold uppercase text-[10px]">
                    SPATIAL UNDERSTANDING
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Computer Vision</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Transforms visual information from cameras and optical sensors into structured physical understanding under changing and unmanaged illumination.
                </p>

                {/* Micro Data Flow */}
                <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[10px] mt-space-xs">
                  <span className="text-secondary font-bold block mb-1">VISION PIPELINE:</span>
                  <div className="flex items-center justify-between text-center font-bold gap-1">
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">FRAME</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">PERCEPTION</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">DETECTION</span>
                    <span>→</span>
                    <span className="bg-primary text-on-primary px-1.5 py-1 flex-1">TRACKING</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex justify-between">
                <span>INSPECTION: OPTICAL COHERENCE</span>
                <span className="text-secondary font-bold">DETAILED SECTION BELOW ↓</span>
              </div>
            </div>

            {/* Module 03: Intelligent Sensing */}
            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-mono-label">
                  <span className="font-mono-metric text-headline-md text-secondary font-bold">03</span>
                  <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold uppercase text-[10px]">
                    MULTI-MODAL FUSION
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Intelligent Sensing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Combines physical signals across thermal, acoustic, inertial and ambient boundaries to construct context beyond single-point optical failures.
                </p>

                {/* Micro Data Flow */}
                <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[10px] mt-space-xs">
                  <span className="text-secondary font-bold block mb-1">FUSION STACK:</span>
                  <div className="flex items-center justify-between text-center font-bold gap-1">
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">SIGNALS</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">SYNC CLOCK</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">EKF MATRIX</span>
                    <span>→</span>
                    <span className="bg-primary text-on-primary px-1.5 py-1 flex-1">STATE</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex justify-between">
                <span>INSPECTION: COMPOSITE CONTEXT</span>
                <span className="text-secondary font-bold">DETAILED SECTION BELOW ↓</span>
              </div>
            </div>

            {/* Module 04: Vision-Language Models */}
            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-mono-label">
                  <span className="font-mono-metric text-headline-md text-secondary font-bold">04</span>
                  <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold uppercase text-[10px]">
                    ON-DEVICE REASONING
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Vision-Language Models</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Connects visual scene representations with language-based contextual reasoning, allowing edge devices to explain anomalies and synthesize action triggers.
                </p>

                {/* Micro Data Flow */}
                <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[10px] mt-space-xs">
                  <span className="text-secondary font-bold block mb-1">VLM PIPELINE:</span>
                  <div className="flex items-center justify-between text-center font-bold gap-1">
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">PIXELS</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">TOKEN EMBED</span>
                    <span>→</span>
                    <span className="bg-surface px-1.5 py-1 border border-outline-variant/60 flex-1">REASONING</span>
                    <span>→</span>
                    <span className="bg-primary text-on-primary px-1.5 py-1 flex-1">DECISION</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex justify-between">
                <span>INSPECTION: SEMANTIC ACTION</span>
                <span className="text-secondary font-bold">DETAILED SECTION BELOW ↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — EMBEDDED AI (DEDICATED SECTION)                              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="embedded-ai">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-md">
            <div className="lg:col-span-6 flex flex-col gap-space-xs">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / EMBEDDED AI
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Intelligence closer to the edge.
              </h2>
            </div>
            <p className="lg:col-span-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Embedded AI brings intelligence closer to where data is generated, enabling systems to process information locally and operate with full awareness of latency, connectivity and hardware constraints.
            </p>
          </div>

          {/* 5 Core Engineering Concepts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CONCEPT // 01
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Edge Inference</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Inference executes immediately in the physical environment where raw data originates, eliminating remote transmission delays and bandwidth costs.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TARGET: LOCAL NPU CORES
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CONCEPT // 02
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Local Processing</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Eliminates dependence on external cloud servers, guaranteeing continuous sovereign uptime and data privacy directly at the device edge.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TARGET: ZERO EXTERNAL CLOUD
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CONCEPT // 03
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Latency Considerations</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Deterministic on-chip processing ensures sub-millisecond responsiveness critical for machinery interlocks and industrial safety trips.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TARGET: SUB-12ms CLOSED LOOP
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CONCEPT // 04
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Connectivity Considerations</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Systems function uninterrupted across shielded factory floors, tunnels, and remote field deployments completely isolated from cellular networks.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TARGET: 100% AIR-GAPPED BY DESIGN
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CONCEPT // 05
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Hardware-Aware AI</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Neural architectures are shaped around the exact memory registers, DMA channels, and thermal envelopes of edge silicon targets.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TARGET: THERMALLY PASSIVE SUB-5W
              </div>
            </div>
          </div>

          {/* Technical Diagram */}
          <div className="bg-surface-container p-space-md border border-outline-variant font-mono-label">
            <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
              <span className="text-secondary font-bold">DATAFLOW ARCHITECTURE: SENSOR TO LOCAL INTELLIGENCE</span>
              <span className="text-on-surface-variant">HARDWARE-AWARE EXECUTION GRAPH</span>
            </div>

            <div className="py-space-md grid grid-cols-1 sm:grid-cols-5 gap-space-xs items-center text-center font-bold">
              <div className="bg-surface p-space-sm border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">SOURCE</span>
                <span className="text-body-sm text-on-surface">CAMERA / SENSOR</span>
              </div>
              <div className="bg-surface p-space-sm border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">STREAM</span>
                <span className="text-body-sm text-on-surface">LOCAL DATA</span>
              </div>
              <div className="bg-surface p-space-sm border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">COMPUTE</span>
                <span className="text-body-sm text-on-surface">EDGE DEVICE</span>
              </div>
              <div className="bg-surface p-space-sm border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">INFERENCE</span>
                <span className="text-body-sm text-on-surface">MODEL INFERENCE</span>
              </div>
              <div className="bg-primary text-on-primary p-space-sm border border-primary">
                <span className="text-[10px] text-secondary-container block uppercase font-normal">RESULT</span>
                <span className="text-body-sm">LOCAL INTELLIGENCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — COMPUTER VISION (DEDICATED SECTION)                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="computer-vision">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-md">
            <div className="lg:col-span-6 flex flex-col gap-space-xs">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                04 / COMPUTER VISION
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Turning visual data into understanding.
              </h2>
            </div>
            <p className="lg:col-span-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Encepto engineers computer vision pipelines that structure optical information into discrete semantic understanding across Perception, Detection, Inspection, Monitoring and Visual Analysis.
            </p>
          </div>

          {/* 5 Distinct Pillars of Computer Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CV DISCIPLINE // 01
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Perception</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Extracts spatial geometry, depth cues, and light scattering cancellation directly from raw sensor streams, overcoming dust and lens glare.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                FOCUS: SPATIAL STRUCTURE
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CV DISCIPLINE // 02
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Detection</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Real-time multi-class object localization and bounding volume estimation running concurrently at line speed on low-power silicon.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                FOCUS: MULTI-OBJECT LOCALIZATION
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CV DISCIPLINE // 03
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Inspection</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  High-precision automated quality auditing and micro-defect verification capable of recognizing manufacturing anomalies down to sub-millimeter scales.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                FOCUS: MICRO-DEFECT AUDIT
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CV DISCIPLINE // 04
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Monitoring</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Continuous temporal tracking and perimeter surveillance that maintains identity consistency and operational posture across prolonged duty cycles.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                FOCUS: TEMPORAL TRACKING
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  CV DISCIPLINE // 05
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Visual Analysis</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-relaxed">
                  Extracts structured behavioral metrics, operational flow statistics, and event-driven signals to guide upstream supervisory control systems.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                FOCUS: BEHAVIORAL METRICS
              </div>
            </div>
          </div>

          {/* Sophisticated Camera Vision HUD Interface */}
          <div className="bg-surface border border-outline-variant p-space-md flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-mono-label">
              <div className="flex items-center gap-space-md">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  VISION PIPELINE ACTIVE
                </span>
                <span className="text-on-surface-variant">FRAME: 04281</span>
                <span className="text-error font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-error inline-block animate-ping"></span>
                  DETECTION RUNNING
                </span>
              </div>
              <span className="text-on-surface-variant">MODE: CONTINUOUS SPATIAL ANALYSIS</span>
            </div>

            {/* Visual Pipeline Progression Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-xs font-mono-label text-center text-body-sm font-bold">
              <div className="bg-surface-container p-2 border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">STAGE 01</span>
                <span>CAMERA INPUT</span>
              </div>
              <div className="bg-surface-container p-2 border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">STAGE 02</span>
                <span>VISUAL PERCEPTION</span>
              </div>
              <div className="bg-surface-container p-2 border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">STAGE 03</span>
                <span>DETECTION</span>
              </div>
              <div className="bg-surface-container p-2 border border-outline-variant">
                <span className="text-[10px] text-on-surface-variant block uppercase font-normal">STAGE 04</span>
                <span>INSPECTION &amp; ANALYSIS</span>
              </div>
              <div className="bg-primary text-on-primary p-2 border border-primary col-span-2 sm:col-span-1">
                <span className="text-[10px] text-secondary-container block uppercase font-normal">STAGE 05</span>
                <span>UNDERSTANDING</span>
              </div>
            </div>

            {/* Spatial Frame Simulation with Bounding Boxes & Tracking Vectors */}
            <div className="relative bg-surface-container-highest min-h-[280px] p-space-md border border-outline-variant flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

              {/* Top Telemetry Labels */}
              <div className="relative z-10 flex justify-between font-mono-label text-[11px]">
                <span className="bg-surface/90 px-2 py-1 border border-outline-variant backdrop-blur-sm text-secondary font-bold">
                  ROI // TARGET_QUADRANT_A1
                </span>
                <span className="bg-surface/90 px-2 py-1 border border-outline-variant backdrop-blur-sm text-on-surface-variant">
                  COORDINATES: [X: 412.4, Y: 189.0, Z: 8.2]
                </span>
              </div>

              {/* Dynamic Bounding Box Demonstration */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-md py-space-sm">
                <div className="border border-secondary bg-secondary/10 p-space-xs max-w-sm">
                  <div className="bg-secondary text-on-secondary px-1 text-[9px] font-mono-label uppercase font-bold inline-block">
                    PERCEPTION: STRUCTURAL DEFECT [LOCKED]
                  </div>
                  <div className="font-mono-label text-body-sm text-on-surface mt-1 flex justify-between">
                    <span>TRACKING PATH: VECTOR_ALPHA</span>
                    <span className="text-secondary font-bold">CONFIDENCE: HIGH</span>
                  </div>
                </div>

                <div className="border border-outline bg-surface/80 p-space-xs max-w-sm sm:ml-auto">
                  <div className="bg-primary text-on-primary px-1 text-[9px] font-mono-label uppercase font-bold inline-block">
                    INSPECTION: SURFACE OCCLUSION
                  </div>
                  <div className="font-mono-label text-body-sm text-on-surface mt-1 flex justify-between">
                    <span>FILTER: SCATTER CANCEL</span>
                    <span className="text-on-surface-variant">STATE: VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Frame Telemetry */}
              <div className="relative z-10 flex justify-between font-mono-label text-[10px] text-on-surface-variant border-t border-outline-variant/60 pt-2">
                <span>OPTICAL FLOW // TEMPORAL CONTINUITY MAINTAINED</span>
                <span>SUB-PIXEL COHERENCE VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — INTELLIGENT SENSING (DEDICATED SECTION)                      */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="intelligent-sensing">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-md">
            <div className="lg:col-span-6 flex flex-col gap-space-xs">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                05 / INTELLIGENT SENSING
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Understand the environment through more than one signal.
              </h2>
            </div>
            <p className="lg:col-span-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Intelligent sensing combines cameras, sensors and contextual data to create richer understanding of physical environments, ensuring systems never rely on a single vulnerable sensing channel.
            </p>
          </div>

          {/* Multi-Signal Convergence Architecture Visual */}
          <div className="bg-surface-container border border-outline-variant p-space-md lg:p-space-lg">
            <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px] mb-space-md">
              <span className="text-secondary font-bold">SIGNAL CONVERGENCE TOPOLOGY</span>
              <span className="text-on-surface-variant">MULTI-MODAL STATE SYNCHRONIZATION</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
              {/* Left: Input Channels */}
              <div className="lg:col-span-4 flex flex-col gap-space-xs font-mono-label text-body-sm">
                <div className="bg-surface p-space-sm border border-outline-variant flex items-center justify-between">
                  <span className="font-bold text-on-surface">CAMERA (VISUAL)</span>
                  <span className="text-[10px] text-secondary font-bold">OPTICAL MATRIX</span>
                </div>
                <div className="bg-surface p-space-sm border border-outline-variant flex items-center justify-between">
                  <span className="font-bold text-on-surface">TEMPERATURE (THERMAL)</span>
                  <span className="text-[10px] text-secondary font-bold">RADIOMETRIC</span>
                </div>
                <div className="bg-surface p-space-sm border border-outline-variant flex items-center justify-between">
                  <span className="font-bold text-on-surface">MOTION (INERTIAL)</span>
                  <span className="text-[10px] text-secondary font-bold">6-AXIS IMU</span>
                </div>
                <div className="bg-surface p-space-sm border border-outline-variant flex items-center justify-between">
                  <span className="font-bold text-on-surface">ENVIRONMENT (AMBIENT)</span>
                  <span className="text-[10px] text-secondary font-bold">BAROMETRIC</span>
                </div>
              </div>

              {/* Middle: Convergence Flow */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-space-md border border-dashed border-outline-variant bg-surface">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase mb-1">
                  SYNCHRONIZED BUS
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  CONTEXT FUSION
                </span>
                <p className="font-body-sm text-[11px] text-on-surface-variant text-center mt-2 leading-relaxed">
                  Microsecond clock synchronization and Extended Kalman Filtering unify disparate physical waveforms into a continuous state vector.
                </p>
              </div>

              {/* Right: Intelligence Outcome */}
              <div className="lg:col-span-4 bg-primary text-on-primary p-space-md border border-primary flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="font-mono-label text-[10px] text-secondary-container uppercase font-bold block mb-1">
                    SYNTHESIS OUTPUT
                  </span>
                  <h4 className="font-headline-md text-headline-md font-bold">INTELLIGENCE</h4>
                  <p className="font-body-sm text-[12px] text-on-primary-container mt-2 leading-relaxed">
                    Resilient operational understanding that persists even when optical lenses are obscured by steam or mechanical vibration spikes abruptly.
                  </p>
                </div>
                <div className="pt-space-xs border-t border-on-primary-container/30 font-mono-label text-[10px] text-secondary-container font-bold">
                  STATUS: CONTINUOUS STATE INVARIANCE
                </div>
              </div>
            </div>
          </div>

          {/* Three Complementary Modality Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  MODALITY 01 // OPTICAL CAMERAS
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Rich Spatial Detail</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  High-resolution optical streams capture detailed surface textures, boundaries, geometry, and color discrepancies across the physical scene.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                INGESTION: MIPI CSI-2 HIGH-SPEED
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  MODALITY 02 // PHYSICAL SENSORS
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Environmental Ground Truth</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Thermopiles, accelerometers, and acoustic microphones provide physical telemetry unaffected by pitch darkness, smoke, steam, or visual occlusion.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                INGESTION: ISOLATED SPI / I2C / ADC
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  MODALITY 03 // CONTEXTUAL DATA
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Operational Framing</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Machine state baselines, historical boundaries, and environmental thresholds resolve ambiguous sensor readings before action triggers.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                INGESTION: LOCAL RTOS TELEMETRY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — VISION-LANGUAGE MODELS (DEDICATED SECTION)                   */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="vlm">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-md">
            <div className="lg:col-span-6 flex flex-col gap-space-xs">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                06 / VISION-LANGUAGE MODELS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                When perception meets reasoning.
              </h2>
            </div>
            <p className="lg:col-span-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Vision-language models connect visual information with language-based reasoning, enabling AI systems to interpret richer and more complex physical environments beyond simple binary classification.
            </p>
          </div>

          {/* VLM Pipeline Visual */}
          <div className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
              <span className="text-secondary font-bold">ON-DEVICE REASONING CASCADE</span>
              <span className="text-on-surface-variant">QUANTIZED TOKEN COMPRESSION</span>
            </div>

            {/* 5 Sequential Architecture Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-space-xs font-mono-label">
              <div className="bg-surface-container p-space-sm border border-outline-variant flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[10px] text-secondary font-bold block mb-1">INPUT 01</span>
                  <span className="text-body-sm text-on-surface font-bold uppercase">VISUAL INPUT + CONTEXT</span>
                </div>
                <span className="text-[10px] text-on-surface-variant">PIXEL &amp; SENSOR TENSORS</span>
              </div>

              <div className="bg-surface-container p-space-sm border border-outline-variant flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[10px] text-secondary font-bold block mb-1">CORE 02</span>
                  <span className="text-body-sm text-on-surface font-bold uppercase">VLM MODEL</span>
                </div>
                <span className="text-[10px] text-on-surface-variant">PRUNED EMBEDDINGS</span>
              </div>

              <div className="bg-surface-container p-space-sm border border-outline-variant flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[10px] text-secondary font-bold block mb-1">PHASE 03</span>
                  <span className="text-body-sm text-on-surface font-bold uppercase">INTERPRETATION</span>
                </div>
                <span className="text-[10px] text-on-surface-variant">SCENE CONTEXT MAP</span>
              </div>

              <div className="bg-surface-container p-space-sm border border-outline-variant flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[10px] text-secondary font-bold block mb-1">PHASE 04</span>
                  <span className="text-body-sm text-on-surface font-bold uppercase">REASONING</span>
                </div>
                <span className="text-[10px] text-on-surface-variant">SEMANTIC INFERENCE</span>
              </div>

              <div className="bg-primary text-on-primary p-space-sm border border-primary flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="text-[10px] text-secondary-container font-bold block mb-1">OUTPUT 05</span>
                  <span className="text-body-sm font-bold uppercase">ACTIONABLE UNDERSTANDING</span>
                </div>
                <span className="text-[10px] text-secondary-container">CLOSED-LOOP DISPATCH</span>
              </div>
            </div>
          </div>

          {/* Three Core VLM Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  VLM CAPABILITY // 01
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Multimodal Visual Understanding</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Translates heterogeneous visual features, spatial geometry, and thermal heatmaps into unified dense token representations on edge hardware.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TECH: TOKEN-PRUNED ATTENTION
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  VLM CAPABILITY // 02
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Language-Based Reasoning</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Performs structured causal evaluation and rule-based diagnostic logic locally, going beyond rigid labels to explain anomalies in human-readable terms.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TECH: LOCAL CAUSAL GRAPH EVALUATION
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase block mb-1">
                  VLM CAPABILITY // 03
                </span>
                <h4 className="font-headline-md text-body-lg text-on-surface font-bold">Visual &amp; Contextual Synthesis</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Synthesizes immediate visual observations with operating machine manuals and telemetry history to make safe, context-aware decisions automatically.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                TECH: OPERATING POLICY ALIGNMENT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — SYSTEM ARCHITECTURE (FULL-WIDTH FLAGSHIP)                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="architecture">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                07 / SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                From sensing to actionable intelligence.
              </h2>
            </div>
            <div className="font-mono-label text-body-sm text-on-surface-variant flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse inline-block"></span>
              <span>SELECT ANY NODE TO INSPECT SILICON TELEMETRY</span>
            </div>
          </div>

          {/* Interactive Engineering Schematic Flow */}
          <div className="bg-surface-container border border-outline-variant p-space-md relative overflow-hidden">
            {/* Background Engineering Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

            <div className="relative z-10 flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  END-TO-END SIGNAL PIPELINE ARCHITECTURE
                </span>
                <span className="text-on-surface-variant">SYNCHRONOUS DETERMINISTIC PIPELINE</span>
              </div>

              {/* Connected 6-Stage Diagram Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-xs relative">
                {systemArchitectureLayers.map((layer, idx) => {
                  const isSelected = idx === activeArchIndex;
                  return (
                    <div key={layer.num} className="flex flex-col relative">
                      <button
                        onClick={() => setActiveArchIndex(idx)}
                        className={`cursor-pointer p-space-sm flex flex-col justify-between min-h-[220px] text-left transition-all relative ${
                          isSelected
                            ? 'bg-surface-container-high border-2 border-secondary shadow-md'
                            : 'bg-surface border border-outline-variant hover:border-on-surface'
                        }`}
                        type="button"
                      >
                        <div className="flex flex-col gap-space-xs">
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-mono-label text-mono-label font-bold ${
                                isSelected ? 'text-secondary' : 'text-on-surface-variant'
                              }`}
                            >
                              STAGE // {layer.num}
                            </span>
                            <span className="font-mono-label text-[9px] bg-surface-container px-1 py-0.5 text-on-surface">
                              {layer.latencyBudget}
                            </span>
                          </div>
                          <h4 className="font-headline-md text-body-lg text-on-surface font-bold uppercase">
                            {layer.label}
                          </h4>
                          <span className="font-mono-label text-[10px] text-secondary">
                            {layer.subLabel}
                          </span>
                          <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed line-clamp-3">
                            {layer.explanation}
                          </p>
                        </div>

                        <div className="pt-space-xs border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant flex items-center justify-between">
                          <span className="truncate">{layer.signalFlow.split('/')[0]}</span>
                          <span className={`text-[10px] font-bold ${isSelected ? 'text-secondary' : 'text-on-surface-variant'}`}>
                            {idx < 5 ? '→' : '●'}
                          </span>
                        </div>
                      </button>

                      {/* Directional Indicator Between Cards */}
                      {idx < 5 && (
                        <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-surface border border-secondary text-secondary items-center justify-center text-[10px] font-bold">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Active Layer Detailed Inspector Panel */}
              <div className="bg-surface border-2 border-secondary p-space-md lg:p-space-lg flex flex-col gap-space-md transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-mono-label">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 bg-secondary text-on-secondary flex items-center justify-center font-bold">
                      {activeArchLayer.num}
                    </span>
                    <span className="text-headline-md text-on-surface font-bold">
                      {activeArchLayer.label} — {activeArchLayer.subLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm text-[11px]">
                    <span className="bg-surface-container px-2 py-1 text-on-surface">
                      TARGET: {activeArchLayer.hardwareTarget}
                    </span>
                    <span className="bg-surface-container-high px-2 py-1 text-secondary font-bold">
                      BUDGET: {activeArchLayer.latencyBudget}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                  <div className="lg:col-span-8 flex flex-col gap-space-xs">
                    <span className="font-mono-label text-[10px] text-secondary font-bold uppercase">
                      FUNCTIONAL EXECUTION PROFILE
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {activeArchLayer.details}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-mono-label text-[11px]">
                      <div className="bg-surface-container p-space-xs border border-outline-variant">
                        <span className="text-secondary font-bold block mb-0.5">INPUT PAYLOAD:</span>
                        <span className="text-on-surface">{activeArchLayer.inputSpec}</span>
                      </div>
                      <div className="bg-surface-container p-space-xs border border-outline-variant">
                        <span className="text-secondary font-bold block mb-0.5">OUTPUT PAYLOAD:</span>
                        <span className="text-on-surface">{activeArchLayer.outputSpec}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-surface-container p-space-md border border-outline-variant flex flex-col justify-between font-mono-label text-body-sm">
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase block mb-1">
                        BUS PROTOCOL &amp; INTERFACE
                      </span>
                      <div className="text-body-sm font-bold text-on-surface mb-2">
                        {activeArchLayer.telemetryTag}
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        STATE: DETERMINISTIC RTOS EXECUTION
                      </div>
                    </div>
                    <div className="pt-space-xs border-t border-outline-variant/60 text-[10px] text-secondary font-bold mt-space-sm">
                      VERIFIED: AIR-GAPPED HARDWARE INVARIANT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — ENGINEERING PRINCIPLES                                       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              08 / ENGINEERING PRINCIPLES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Built around four principles.
            </h2>
          </div>

          {/* 4 Large Editorial Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[11px] text-secondary font-bold">FOUNDATION // 01</span>
                <h3 className="font-display-hero text-headline-lg text-on-surface uppercase">EFFICIENT</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Systems should make thoughtful use of available compute, energy and infrastructure. We reject bloated cloud frameworks in favor of tight bare-metal tensor pipelines that operate within strict electrical budgets.
                </p>
              </div>
              <div className="mt-space-lg pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: SUB-WATT DETERMINISM
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[11px] text-secondary font-bold">FOUNDATION // 02</span>
                <h3 className="font-display-hero text-headline-lg text-on-surface uppercase">RESILIENT</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Systems should be designed for demanding real-world conditions. Brownouts, particulate fouling, thermal spikes and network severances are architectural invariants accounted for from day one.
                </p>
              </div>
              <div className="mt-space-lg pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: NON-IDEAL OPERATIONAL CONTINUITY
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[11px] text-secondary font-bold">FOUNDATION // 03</span>
                <h3 className="font-display-hero text-headline-lg text-on-surface uppercase">MODULAR</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Technology should be adaptable and reusable across different environments. Decoupled sensing, perception and reasoning layers assemble cleanly into customized configurations without rebuilding core models.
                </p>
              </div>
              <div className="mt-space-lg pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: COMPOSABLE SUBSTRATE
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[11px] text-secondary font-bold">FOUNDATION // 04</span>
                <h3 className="font-display-hero text-headline-lg text-on-surface uppercase">DEPLOYABLE</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-2">
                  Research should ultimately be engineered with real deployment in mind. Scientific models must survive outside academic benchmark suites on physical silicon attached to operating industrial machinery.
                </p>
              </div>
              <div className="mt-space-lg pt-space-xs border-t border-outline-variant font-mono-label text-[10px] text-on-surface-variant">
                CRITERIA: FIELD VERIFIED SILICON
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — TECHNOLOGY CTA                                               */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>SYSTEM EXPLORATION</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Ready to explore the technology?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Tell us about the environment, the constraints and the intelligence you need.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
            <Link
              className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
              to="/applications"
            >
              Explore Applications →
            </Link>
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>

          <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant pt-space-md border-t border-outline-variant w-full justify-center flex-wrap">
            <span>SENSING</span>
            <span>//</span>
            <span>PERCEPTION</span>
            <span>//</span>
            <span>EDGE COMPUTE</span>
            <span>//</span>
            <span>AI MODELS</span>
            <span>//</span>
            <span>REASONING</span>
            <span>//</span>
            <span>INTELLIGENCE</span>
          </div>
        </div>
      </section>
    </div>
  );
};
