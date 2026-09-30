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
  latencyBudget: string;
  hardwareTarget: string;
}

const systemArchitectureLayers: SystemArchLayer[] = [
  {
    id: 1,
    num: '01',
    label: 'Sensing',
    subLabel: 'Signal Ingestion & Sync',
    explanation: 'Multi-modal optical CMOS arrays, radiometric thermopiles, inertial IMUs, and acoustic probes.',
    signalFlow: 'ANALOG & MIPI CSI-2 INTAKE',
    telemetryTag: 'BUS // CSI-2 / I2C / SPI',
    details: 'Physical signals are conditioned at the silicon perimeter with microsecond clock synchronization, preventing phase jitter across sensor modalities.',
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
    details: 'Extracts spatial structure and cancels atmospheric scattering directly in zero-copy memory buffers, presenting de-noised visual tensors.',
    latencyBudget: '< 1.8 ms',
    hardwareTarget: 'Hardware ISP / Zero-Copy SRAM DMA',
  },
  {
    id: 3,
    num: '03',
    label: 'Edge Compute',
    subLabel: 'Hardware-Aware Execution',
    explanation: 'Sub-5W deterministic tensor execution units and bare-metal runtime kernels operating with zero OS paging overhead.',
    signalFlow: 'NPU TENSOR CORES / BARE-METAL RTOS',
    telemetryTag: 'SUB-WATT RUNTIME KERNELS',
    details: 'Hardware-aware execution eliminates thermal throttling in 55°C ambient conditions through passive conductive cooling architectures.',
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
    latencyBudget: '< 5.5 ms',
    hardwareTarget: 'Dedicated Neural Acceleration Units (NPU/DSP)',
  },
  {
    id: 5,
    num: '05',
    label: 'VLM Reasoning',
    subLabel: 'Multimodal Context Synthesis',
    explanation: 'On-device vision-language models synthesizing visual perception and multi-modal signals into contextual state diagnostics.',
    signalFlow: 'MULTIMODAL TOKEN REASONING',
    telemetryTag: 'TOKEN-PRUNED LOCAL VLM',
    details: 'Prunes perceptual tokens dynamically to interpret complex physical scenes into natural-language safety metrics and fault classifications.',
    latencyBudget: '< 9.0 ms',
    hardwareTarget: 'Quantized Transformer Execution Unit',
  },
  {
    id: 6,
    num: '06',
    label: 'Actionable Intelligence',
    subLabel: 'Deterministic Control',
    explanation: 'Closed-loop hardware relay actuation, isolated CAN bus broadcasts and fail-safe automated equipment shutdown trips.',
    signalFlow: 'LOCAL ACTUATION & TRIP SIGNALS',
    telemetryTag: 'ISOLATED GPIO / CAN BUS RELAY',
    details: 'Deterministic local actuation executes without waiting for cloud round-trips, ensuring instantaneous safety responses on active machinery.',
    latencyBudget: '< 0.8 ms',
    hardwareTarget: 'Optically-Isolated Industrial Relays / CAN Transceivers',
  },
];

interface TechPillar {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: string;
  summary: string;
  flowSteps: string[];
  capabilities: { name: string; desc: string; tag: string }[];
  deepDetails: {
    heading: string;
    text: string;
    specs: { label: string; value: string }[];
  };
}

const techPillars: TechPillar[] = [
  {
    id: 'embedded-ai',
    num: '01',
    title: 'Embedded AI',
    tagline: 'Intelligence at the edge.',
    icon: 'memory',
    summary: 'Hardware-aware neural inference executing directly on sub-watt edge silicon with zero reliance on cloud round-trips.',
    flowSteps: ['RAW INPUT', 'DMA ZERO-COPY', 'INT8 INFERENCE', 'DETERMINISTIC ACTION'],
    capabilities: [
      { name: 'Edge Inference', desc: 'Inference executes at data origin, eliminating latency and cloud bandwidth.', tag: 'LOCAL NPU' },
      { name: 'Local Processing', desc: 'Sovereign on-device uptime and data isolation with zero external dependencies.', tag: 'ZERO-CLOUD' },
      { name: 'Deterministic Latency', desc: 'Sub-millisecond responsiveness guaranteed for safety trips and machinery interlocks.', tag: '< 12ms LOOP' },
      { name: 'Air-Gapped Connectivity', desc: 'Continuous autonomous operation in shielded facilities and remote field locations.', tag: '100% AIR-GAPPED' },
      { name: 'Hardware-Aware AI', desc: 'Neural architectures shaped around target silicon registers and thermal limits.', tag: 'SUB-5W PASSIVE' },
    ],
    deepDetails: {
      heading: 'Silicon-Level Architectural Invariants',
      text: 'Our bare-metal inference kernels bypass traditional Linux OS scheduling jitter. Weights are quantized to INT8 and INT4 precision and packed into on-chip SRAM to circumvent high-power external DRAM access, keeping thermal output below 5 Watts in 55°C ambient temperatures.',
      specs: [
        { label: 'RUNTIME', value: 'Bare-metal C++ / RTOS Kernel' },
        { label: 'QUANTIZATION', value: 'Symmetric INT8 / Asymmetric INT4' },
        { label: 'MEMORY BUS', value: 'Zero-Copy Direct DMA to SRAM' },
        { label: 'THERMAL ENVELOPE', value: 'Passive Conduction (-40°C to +85°C)' },
      ],
    },
  },
  {
    id: 'computer-vision',
    num: '02',
    title: 'Computer Vision',
    tagline: 'Machines that see.',
    icon: 'visibility',
    summary: 'High-speed spatial perception and optical feature extraction robust against dust, glare, and changing ambient lighting.',
    flowSteps: ['RAW FRAME', 'OPTICAL ISP', 'SPATIAL DETECTION', 'FLOW TRACKING'],
    capabilities: [
      { name: 'Perception', desc: 'Real-time scene geometry extraction under extreme dynamic range and solar wash.', tag: 'HDR DYNAMIC' },
      { name: 'Detection', desc: 'Sub-pixel localization of microscopic defects and structural boundary anomalies.', tag: 'SUB-PIXEL' },
      { name: 'Inspection', desc: 'Continuous defect classification at line speeds up to 120 FPS on constrained silicon.', tag: '120 FPS' },
      { name: 'Optical Flow', desc: 'Hardware-accelerated motion vector estimation for predictive mechanical tracking.', tag: 'VECTOR FLOW' },
      { name: 'De-Scattering', desc: 'Spatio-temporal filtering that digitally cancels airborne dust and particulate glare.', tag: 'DUST-INVARIANT' },
    ],
    deepDetails: {
      heading: 'Hardware-Integrated Optical Pipeline',
      text: 'Pixel data streams directly from MIPI CSI-2 receivers into a customized hardware image signal processor (ISP). Specialized mathematical transforms compensate for optical lens fouling without moving wiper mechanisms, feeding clean spatial tensors to downstream neural models.',
      specs: [
        { label: 'SENSOR BUS', value: 'MIPI CSI-2 (4-Lane Direct)' },
        { label: 'FRAME RATE', value: '42–120 FPS Real-Time Intake' },
        { label: 'OPTICAL CORRECTION', value: 'Dynamic Spatio-Temporal De-Scattering' },
        { label: 'FEATURE RUNTIME', value: 'Custom SIMD/NEON Accelerated Kernels' },
      ],
    },
  },
  {
    id: 'intelligent-sensing',
    num: '03',
    title: 'Intelligent Sensing',
    tagline: 'Understand the environment.',
    icon: 'sensors',
    summary: 'Multimodal sensor fusion binding optical arrays, thermal radiometric thermopiles, 6-DoF IMUs and acoustic probes.',
    flowSteps: ['MULTI-SIGNALS', 'SYNC CLOCK', 'EKF MATRIX', 'UNIFIED STATE'],
    capabilities: [
      { name: 'Sensors', desc: 'Heterogeneous integration of optics, radiometric thermal, IMU and acoustics.', tag: 'MULTIMODAL' },
      { name: 'Context', desc: 'Fusing physical cues to maintain situational awareness when visual feeds degrade.', tag: 'FAIL-SAFE' },
      { name: 'Physical Systems', desc: 'Direct coupling with mechanical bearings, transformer coils and structural joints.', tag: 'HARDENED' },
      { name: 'EKF Fusion', desc: 'Extended Kalman Filtering reconciling high-frequency vibration with spatial telemetry.', tag: 'EKF STATE' },
      { name: 'Clock Sync', desc: 'Microsecond-accurate hardware time-stamping preventing sensor phase jitter.', tag: '< 2μs JITTER' },
    ],
    deepDetails: {
      heading: 'Unified Physical State-Space Modeling',
      text: 'Single-modality perception inevitably fails under hostile conditions. When optical lenses encounter heavy smoke or dust, radiometric thermopiles track thermal gradients while acoustic transducers register harmonic frequency shifts, ensuring uninterrupted telemetry.',
      specs: [
        { label: 'SAMPLING RATE', value: 'Up to 20 kHz (Acoustic / Vibration)' },
        { label: 'FUSION ALGORITHM', value: 'Asynchronous Extended Kalman Filter (EKF)' },
        { label: 'TIME BASE', value: 'Microsecond Synchronized Hardware Timers' },
        { label: 'INTERFACES', value: 'I2C / SPI / Isolated CAN / Modbus RTU' },
      ],
    },
  },
  {
    id: 'vision-language-models',
    num: '04',
    title: 'Vision-Language Models',
    tagline: 'See. Understand. Reason.',
    icon: 'psychology',
    summary: 'Compressed multimodal foundation models synthesizing visual tokens and telemetry into on-device contextual decisions.',
    flowSteps: ['PIXELS & TELEMETRY', 'TOKEN PRUNING', 'CONTEXT REASONING', 'ACTION TRIGGER'],
    capabilities: [
      { name: 'Multimodal', desc: 'Unified representation bridging visual frame tokens and environmental telemetry.', tag: 'UNIFIED TOKENS' },
      { name: 'Visual Understanding', desc: 'Semantic understanding of physical scenes, hazard boundaries and anomaly contexts.', tag: 'SEMANTIC' },
      { name: 'Reasoning', desc: 'Zero-cloud deduction explaining root causes rather than simple class labels.', tag: 'ON-DEVICE' },
      { name: 'Token Pruning', desc: 'Dynamic compression of perceptual tokens reducing KV-cache RAM footprint by 74%.', tag: '-74% RAM' },
      { name: 'Local Action', desc: 'Direct output to industrial CAN bus relays without natural language latency lag.', tag: 'INSTANT TRIP' },
    ],
    deepDetails: {
      heading: 'Compressed On-Device Foundation Architecture',
      text: 'Instead of transmitting high-bandwidth video back to remote cloud LLMs, our quantized vision-language models run locally on edge NPUs. By aggressively pruning redundant spatial tokens, the system synthesizes complex diagnostics into structured state asserts.',
      specs: [
        { label: 'ARCHITECTURE', value: 'Token-Pruned Lightweight Vision-Language Model' },
        { label: 'CACHE SAVINGS', value: '74% Reduction in KV-Cache Memory Footprint' },
        { label: 'EXECUTION TARGET', value: 'Local Edge NPU Vector Registers' },
        { label: 'OUTPUT FORMAT', value: 'Structured JSON / Discrete Hardware Relays' },
      ],
    },
  },
];

export const TechnologyPage: React.FC = () => {
  const [activeArchIndex, setActiveArchIndex] = useState<number>(0);
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({});

  const togglePillarDetail = (id: string) => {
    setExpandedPillars((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
              <span>// SYSTEM ARCHITECTURE</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">DETERMINISTIC RTOS // &lt; 12ms LATENCY</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                SUB-5W PASSIVE SILICON
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
                Embedded AI systems combining computer vision, intelligent sensing and vision-language models for real-world deployment.
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

            {/* Right: Technical Engineering System Visual Cascade */}
            <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-space-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>
              
              <div className="relative z-10 flex flex-col gap-space-sm font-mono-label">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    EDGE PROCESSING PIPELINE
                  </span>
                  <span className="text-on-surface-variant">DETERMINISTIC RTOS</span>
                </div>

                {/* 6 Stage Cascade */}
                <div className="flex flex-col gap-1 pt-1">
                  {systemArchitectureLayers.map((layer, idx) => (
                    <React.Fragment key={layer.num}>
                      <div className="bg-surface p-2 border border-outline-variant flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-secondary font-bold">{layer.num}</span>
                          <span className="text-body-sm font-bold text-on-surface uppercase">{layer.label}</span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant truncate max-w-[170px]">{layer.signalFlow}</span>
                      </div>
                      {idx < systemArchitectureLayers.length - 1 && (
                        <div className="flex justify-center text-secondary text-[10px] leading-none my-0.5">↓</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex justify-between">
                  <span>TOTAL LATENCY: &lt; 12ms</span>
                  <span className="text-secondary font-bold">ZERO CLOUD STREAMING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — FOUR MAJOR TECHNOLOGIES (SCANNABLE + EXPANDABLE)              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="pillars">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / CORE TECHNOLOGIES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Four technologies. One intelligent system.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hardware-aware layers designed to operate individually or unify into cohesive autonomous architectures.
            </p>
          </div>

          {/* 4 Major Technology Sections with Scannable Cards & Expandable Architecture Drawers */}
          <div className="flex flex-col gap-space-lg">
            {techPillars.map((pillar) => {
              const isExpanded = !!expandedPillars[pillar.id];
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-md transition-colors"
                >
                  {/* Technology Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-sm border-b border-outline-variant pb-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center font-bold text-secondary flex-shrink-0">
                        <MaterialIcon name={pillar.icon} className="text-[24px]" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-label text-[10px] text-secondary font-bold">
                            LAYER // {pillar.num}
                          </span>
                          <span className="text-on-surface-variant text-[10px] font-mono-label uppercase">
                            // ON-DEVICE PARADIGM
                          </span>
                        </div>
                        <h3 className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold">
                          {pillar.title}
                        </h3>
                        <p className="font-body-md text-body-md text-secondary font-bold mt-0.5">
                          "{pillar.tagline}"
                        </p>
                      </div>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Technical Visual: Dataflow Diagram */}
                  <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[11px]">
                    <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                      <span className="text-secondary font-bold uppercase">{pillar.title} DATA PIPELINE</span>
                      <span className="text-on-surface-variant">DETERMINISTIC BUS</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs text-center font-bold">
                      {pillar.flowSteps.map((step, sIdx) => (
                        <div
                          key={step}
                          className={`p-2 border ${
                            sIdx === pillar.flowSteps.length - 1
                              ? 'bg-primary text-on-primary border-primary'
                              : 'bg-surface text-on-surface border-outline-variant'
                          }`}
                        >
                          <span className="text-[9px] text-on-surface-variant block font-normal">
                            0{sIdx + 1}
                          </span>
                          <span className="text-[11px] truncate block">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5 Scannable Key Capabilities */}
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-mono-label text-[10px] text-on-surface uppercase font-bold tracking-wider">
                      KEY CAPABILITIES:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-xs">
                      {pillar.capabilities.map((cap) => (
                        <div
                          key={cap.name}
                          className="bg-surface-container-low border border-outline-variant p-space-sm flex flex-col justify-between"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="font-mono-label text-[9px] text-secondary font-bold">
                              {cap.tag}
                            </span>
                            <h4 className="font-headline-md text-body-md text-on-surface font-bold">
                              {cap.name}
                            </h4>
                            <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                              {cap.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Deep Technical Architecture Drawer */}
                  <div className="pt-space-xs">
                    <button
                      onClick={() => togglePillarDetail(pillar.id)}
                      className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary hover:underline cursor-pointer bg-transparent border-0 p-0 font-bold uppercase"
                      type="button"
                    >
                      <MaterialIcon
                        name={isExpanded ? 'expand_less' : 'expand_more'}
                        className="text-[18px]"
                      />
                      <span>{isExpanded ? 'Hide Deep Architecture Details' : 'View Deep Architecture Details'}</span>
                    </button>

                    {isExpanded && (
                      <div className="mt-space-sm p-space-md bg-surface-container border border-outline-variant flex flex-col gap-space-md animate-in fade-in duration-200 font-mono-label">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-secondary font-bold uppercase">
                            DEEP ARCHITECTURAL SPECIFICATION
                          </span>
                          <h4 className="font-headline-md text-body-lg text-on-surface font-bold">
                            {pillar.deepDetails.heading}
                          </h4>
                          <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed mt-1">
                            {pillar.deepDetails.text}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs pt-space-xs border-t border-outline-variant/60">
                          {pillar.deepDetails.specs.map((spec) => (
                            <div key={spec.label} className="bg-surface p-2 border border-outline-variant">
                              <span className="text-[9px] text-on-surface-variant block uppercase">{spec.label}</span>
                              <span className="text-body-sm font-bold text-on-surface font-mono-metric text-[12px]">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — INTERACTIVE ARCHITECTURE INSPECTOR                           */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="system-architecture">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Interactive Layer Inspection
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-secondary font-bold">
              CLICK ANY NODE TO INSPECT BUS &amp; LATENCY
            </span>
          </div>

          {/* Pipeline Node Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs font-mono-label">
            {systemArchitectureLayers.map((layer, index) => {
              const isSelected = activeArchIndex === index;
              return (
                <button
                  key={layer.num}
                  onClick={() => setActiveArchIndex(index)}
                  className={`p-space-sm border flex flex-col justify-between text-left transition-all ${
                    isSelected
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container text-on-surface border-outline-variant hover:border-on-surface'
                  }`}
                  type="button"
                >
                  <span className={`text-[10px] font-bold ${isSelected ? 'text-secondary-container' : 'text-secondary'}`}>
                    LAYER // {layer.num}
                  </span>
                  <span className="text-body-sm font-bold uppercase my-1 truncate">
                    {layer.label}
                  </span>
                  <span className={`text-[9px] ${isSelected ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
                    {layer.latencyBudget}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Dossier */}
          <div className="bg-surface-container border border-outline-variant p-space-md lg:p-space-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md font-mono-label">
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center font-mono-metric text-headline-md font-bold flex-shrink-0">
                {activeArchLayer.num}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-secondary font-bold uppercase">{activeArchLayer.telemetryTag}</span>
                  <span className="text-on-surface-variant text-[10px]">// {activeArchLayer.subLabel}</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface font-bold">
                  {activeArchLayer.label}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                  {activeArchLayer.details}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-xs text-[11px] flex-shrink-0">
              <span className="bg-surface px-space-xs py-1 border border-outline-variant text-on-surface">
                TARGET: {activeArchLayer.hardwareTarget}
              </span>
              <span className="bg-surface px-space-xs py-1 border border-outline-variant text-secondary font-bold">
                BUDGET: {activeArchLayer.latencyBudget}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — FINAL CTA                                                    */}
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
              to="/applications"
            >
              Explore Applications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
