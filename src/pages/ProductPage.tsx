import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// Product Model Stages
interface ProductModelStage {
  id: number;
  step: string;
  name: string;
  tagline: string;
  deliverable: string;
  focus: string;
  desc: string;
  specs: { label: string; value: string }[];
}

const productModelStages: ProductModelStage[] = [
  {
    id: 1,
    step: 'STAGE 01',
    name: 'Customer Problem',
    tagline: 'Physical environment, thermal limits & latency constraints',
    deliverable: 'Operational Boundary Specification',
    focus: 'On-site investigation of physical conditions, lighting dynamics, sensor optics, and silicon constraints.',
    desc: 'We start directly at the point of physical failure or friction. Rather than prescribing a generic pre-packaged algorithm, we assess the operating envelope—ambient dust, extreme temperatures, power availability, and deterministic timing requirements.',
    specs: [
      { label: 'INPUT', value: 'Field inspection, physical telemetry & edge failure modes' },
      { label: 'OUTPUT', value: 'Formal System Constraint Document (PRD)' },
      { label: 'CRITERIA', value: 'Zero reliance on unconstrained cloud resources' },
    ],
  },
  {
    id: 2,
    step: 'STAGE 02',
    name: 'Research & Discovery',
    tagline: 'Algorithmic benchmarking & Pareto feasibility',
    deliverable: 'Feasibility Report & Neural Topology Selection',
    focus: 'Benchmarking transformer vs. CNN topologies and quantization schemes against target compute envelopes.',
    desc: 'Our research team evaluates mathematical formulations and candidate model topologies. We investigate domain-specific attention pruning, synthetic data augmentation for rare anomalies, and numerical representations that preserve fidelity under low-bit quantization.',
    specs: [
      { label: 'INPUT', value: 'Domain dataset sample & hardware target profile' },
      { label: 'OUTPUT', value: 'Pareto frontier trade-off analysis (accuracy vs. latency)' },
      { label: 'CRITERIA', value: 'Guaranteed execution within silicon memory budgets' },
    ],
  },
  {
    id: 3,
    step: 'STAGE 03',
    name: 'AI / Software Development',
    tagline: 'Model distillation, kernel tuning & pipeline construction',
    deliverable: 'Custom Software Runtimes & Quantized Models',
    focus: 'Training neural networks with hardware-in-the-loop awareness and crafting zero-copy data pipelines.',
    desc: 'We engineer the complete software intelligence stack: from camera/sensor ingestion drivers and hardware ISP tuning to quantized neural models and deterministic runtime execution engines tailored precisely to the problem.',
    specs: [
      { label: 'INPUT', value: 'Validated model architectures & training data' },
      { label: 'OUTPUT', value: 'Compiled INT8/INT4 neural weights & pipeline code' },
      { label: 'CRITERIA', value: 'Zero-copy DMA buffers & sub-watt kernel execution' },
    ],
  },
  {
    id: 4,
    step: 'STAGE 04',
    name: 'Prototype',
    tagline: 'Hardware-in-the-loop integration & bench bring-up',
    deliverable: 'Functional Bench Prototype System',
    focus: 'Verifying end-to-end signal flow from physical sensors through neural runtime to actuation signals.',
    desc: 'The software system is flashed onto target carrier boards or test rigs. We verify microsecond clock synchronization, test MIPI CSI-2 and I2C/SPI bus stability, and measure thermal dissipation under sustained inference loops.',
    specs: [
      { label: 'INPUT', value: 'Carrier board, sensor modules & compiled runtime' },
      { label: 'OUTPUT', value: 'Live telemetry traces & hardware-in-the-loop validation logs' },
      { label: 'CRITERIA', value: 'Deterministic latency verified on real silicon' },
    ],
  },
  {
    id: 5,
    step: 'STAGE 05',
    name: 'Validation',
    tagline: 'Environmental stress testing & edge-case cornering',
    deliverable: 'Hardened Production Candidate Software',
    focus: 'Subjecting the software system to simulated voltage dips, optical lens degradation, and extreme temperatures.',
    desc: 'Real deployment environments are hostile. We stress-test the software pipeline against corner cases: sensor saturation from direct sunlight, acoustic interference, brownouts, and physical vibrations to guarantee fail-safe behaviors.',
    specs: [
      { label: 'INPUT', value: '1,000+ hours of continuous testbed stress runs' },
      { label: 'OUTPUT', value: 'Resilience certification & fault containment metrics' },
      { label: 'CRITERIA', value: 'Zero unhandled runtime panics or watchdog trips' },
    ],
  },
  {
    id: 6,
    step: 'STAGE 06',
    name: 'Deployment',
    tagline: 'Production integration & zero-downtime commissioning',
    deliverable: 'Production Deployment & Calibration Rig',
    focus: 'Flashing production machinery with dual-partition fallbacks and live field optical calibration.',
    desc: 'The custom software solution is commissioned onto operational machinery or edge clusters. Dual boot partitions ensure bulletproof update safety, while our deployment tools enable technicians to perform rapid optical and sensor alignment.',
    specs: [
      { label: 'INPUT', value: 'Production edge nodes & machinery mounting points' },
      { label: 'OUTPUT', value: 'Live running edge intelligence node' },
      { label: 'CRITERIA', value: 'Full field acceptance sign-off' },
    ],
  },
  {
    id: 7,
    step: 'STAGE 07',
    name: 'Product Evolution',
    tagline: 'Local telemetry feedback, continuous learning & reusable IP',
    deliverable: 'Compounding Architecture & Versioned Assets',
    focus: 'Distilling edge operational telemetry into refined models and reusable core intellectual property.',
    desc: 'Deployment is not the end of engineering. Field units aggregate non-sensitive telemetry signatures of unknown anomalies. These corner cases inform subsequent model iterations, compounding into robust, reusable deep-tech software assets.',
    specs: [
      { label: 'INPUT', value: 'Offline anomaly telemetry vectors' },
      { label: 'OUTPUT', value: 'Versioned algorithmic releases & compounding IP modules' },
      { label: 'CRITERIA', value: 'Measurable accuracy gain across edge-case distributions' },
    ],
  },
];

// Core Capability Categories
interface CapabilityItem {
  id: string;
  num: string;
  name: string;
  tagline: string;
  scope: string;
  desc: string;
  technicalCapabilities: string[];
  deliverables: string[];
}

const capabilityCategories: CapabilityItem[] = [
  {
    id: 'computer-vision',
    num: '01',
    name: 'Computer Vision',
    tagline: 'High-speed spatial perception & deterministic defect detection',
    scope: 'Real-time spatial inspection, optical flow tracking, sub-pixel defect localization, and multi-camera spatial tracking on constrained edge processors.',
    desc: 'Our computer vision software operates directly on raw sensor pixels without passing through heavy operating system frameworks. We design specialized convolutional and vision-transformer feature extractors that detect microscopic defects, measure dimensional variances, and track rapid physical motions at up to 120 FPS.',
    technicalCapabilities: [
      'Sub-pixel surface flaw classification and boundary segmentation',
      'Zero-copy frame ingest via MIPI CSI-2 and USB3 Vision protocols',
      'Optical motion flow estimation under severe motion blur',
      'Dynamic exposure compensation and lens distortion rectification',
    ],
    deliverables: [
      'Target-optimized vision runtime libraries (C++ / Rust / CUDA / OpenVINO)',
      'Custom-trained visual inspection neural models',
      'Automated optical calibration and verification tools',
    ],
  },
  {
    id: 'embedded-ai',
    num: '02',
    name: 'Embedded / Edge AI',
    tagline: 'Quantized neural inference within sub-5W thermal envelopes',
    scope: 'Deploying sophisticated neural networks directly onto bare-metal MCUs, DSPs, NPUs, and compact SoCs without external cloud roundtrips.',
    desc: 'We engineer models for the physical silicon they run on. By leveraging INT8, INT4, and structured sparsity, we squeeze heavy neural architectures into tightly budgeted on-chip SRAM caches, avoiding power-hungry off-chip DRAM memory transfers and thermal throttling.',
    technicalCapabilities: [
      'Quantization-Aware Training (QAT) with post-quantization calibration',
      'Layer fusion, memory tiling, and zero-page-fault runtime kernels',
      'Deterministic execution guarantees for safety-critical systems',
      'Thermal-aware throttling and power-state management',
    ],
    deliverables: [
      'Hardware-specific compiled inference graphs',
      'Bare-metal RTOS / Linux edge execution runtimes',
      'Memory profile and latency benchmark verification suites',
    ],
  },
  {
    id: 'intelligent-sensing',
    num: '03',
    name: 'Intelligent Sensing Software',
    tagline: 'Microsecond multi-modal sensor synchronization & fusion',
    scope: 'Software conditioning, noise rejection, and sensor fusion for optical, radiometric, inertial, acoustic, and environmental transducers.',
    desc: 'Physical phenomena are rarely visible through a single sensor. Our intelligent sensing software synchronizes heterogeneous data streams at the microsecond level, applying adaptive Kalman filters and temporal attention networks to synthesize holistic environmental awareness.',
    technicalCapabilities: [
      'Heterogeneous clock synchronization across CSI-2, I2C, SPI, and CAN',
      'Radiometric thermal-to-optical spatial alignment matrices',
      'Spectral filtering for harsh lighting and particulate scatter',
      'Continuous sensor drift calibration and fault self-test',
    ],
    deliverables: [
      'Multi-sensor driver and synchronization middleware',
      'Signal conditioning and feature extraction pipelines',
      'Fault-tolerant fail-safe sensor fallback logic',
    ],
  },
  {
    id: 'vlm',
    num: '04',
    name: 'Vision-Language Capabilities',
    tagline: 'On-device contextual reasoning and physical state narration',
    scope: 'Compact, token-pruned multimodal models that bridge perceptual sensor streams with natural language assertions and diagnostic reasoning.',
    desc: 'Moving beyond bounding boxes, our vision-language software enables edge equipment to interpret complex physical scenes contextually. By distilling large multimodal models into compact edge architectures, systems can evaluate safety compliance, identify unprecedented failure sequences, and describe physical anomalies.',
    technicalCapabilities: [
      'Dynamic visual token pruning for transformer runtime reduction',
      'Zero-shot physical state query answering on edge hardware',
      'Contextual hazard identification based on operational guidelines',
      'Structured diagnostic generation for human-in-the-loop escalation',
    ],
    deliverables: [
      'Edge-distilled vision-language neural models',
      'Local prompt-driven query and inspection runtimes',
      'Context synthesis engines for complex industrial scene logs',
    ],
  },
  {
    id: 'monitoring-analysis',
    num: '05',
    name: 'Monitoring & Analysis Systems',
    tagline: 'Continuous state telemetry, drift detection & offline audit trails',
    scope: 'Embedded operational diagnostics, model accuracy drift monitoring, and tamper-resistant local audit trails for mission-critical deployments.',
    desc: 'Edge systems must be auditable and observable even when isolated from the internet. We develop low-overhead background monitoring agents that log inference confidence distributions, detect data distribution drift, and record verifiable audit logs for compliance.',
    technicalCapabilities: [
      'Statistical distribution drift detection on unlabelled edge data',
      'Tamper-resistant local circular telemetry logging buffers',
      'Automated health telemetry for optics, memory, and thermal state',
      'Bandwidth-efficient opportunistic telemetry synchronization',
    ],
    deliverables: [
      'Embedded telemetry and diagnostics agent',
      'Edge health reporting and watchdog management interfaces',
      'Offline diagnostic analysis and replay tooling',
    ],
  },
  {
    id: 'custom-ai',
    num: '06',
    name: 'Customer-Specific AI Solutions',
    tagline: 'Tailored neural architectures trained for bespoke operational envelopes',
    scope: 'Customized deep-tech software solutions designed around the specific mechanical, optical, and operational realities of your machinery.',
    desc: 'Off-the-shelf models fail when faced with unique optical perspectives, novel machinery geometries, or bespoke production lines. We partner with your engineering teams to develop proprietary AI software systems tailored specifically to your physical deployment challenges.',
    technicalCapabilities: [
      'Custom dataset curation and automated synthetic corner-case generation',
      'Domain-adapted loss functions aligned with operational failure costs',
      'Integration with proprietary field protocols, PLCs, and SCADA buses',
      'Long-term algorithmic stewardship and iterative accuracy improvements',
    ],
    deliverables: [
      'Proprietary customer-trained model weights and codebases',
      'End-to-end integration and verification documentation',
      'Turnkey edge container or bare-metal deployment images',
    ],
  },
];

// Target Application Domains
const applicationDomains = [
  {
    title: 'Industrial & Manufacturing',
    tag: 'HIGH-SPEED DEFECTS · SUB-5W RUNTIME',
    desc: 'High-speed automated surface inspection, assembly verification, and predictive vibration/thermal monitoring on active production lines.',
    route: '/applications',
  },
  {
    title: 'Agriculture & Biosystems',
    tag: 'CANOPY HEALTH · RUGGEDIZED SENSING',
    desc: 'Multi-spectral canopy assessment, crop stress early warning, and autonomous machinery vision operating under direct sunlight and dust.',
    route: '/applications',
  },
  {
    title: 'Infrastructure & Utilities',
    tag: 'STRUCTURAL INTEGRITY · CRACK TRACKING',
    desc: 'Continuous structural monitoring, crack propagation tracking, and utility corridor inspection in remote, unpowered environments.',
    route: '/applications',
  },
  {
    title: 'Energy & Power Distribution',
    tag: 'THERMAL ANOMALY · HIGH-VOLTAGE SAFETY',
    desc: 'Radiometric transformer inspection, sub-station switchyard thermal monitoring, and renewable generation asset integrity.',
    route: '/applications',
  },
];

export const ProductPage: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [selectedCapability, setSelectedCapability] = useState<string>('computer-vision');

  const currentStage = productModelStages.find((s) => s.id === activeStageId) || productModelStages[0];
  const activeCap = capabilityCategories.find((c) => c.id === selectedCapability) || capabilityCategories[0];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO & IMMEDIATE POSITIONING                                 */}
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
              <span>// SYSTEM ARCHITECTURE</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">OFFERING: SOFTWARE-FIRST</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                ROADMAP: INTEGRATED HARDWARE SYSTEMS
              </span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
            {/* Left Column: Heading & Core Positioning */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 font-mono-label text-[11px] text-secondary font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                Software Systems · Custom R&amp;D · Real-World Deployment
              </div>

              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Intelligence built for <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">
                  real-world applications.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto develops AI-driven software systems for real-world applications, combining embedded AI, computer vision, intelligent sensing and vision-language capabilities with customer-specific R&amp;D and customization.
              </p>

              {/* Dual Timeframe Cards: Today vs. Future */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                {/* TODAY CARD */}
                <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-mono-label text-[10px]">
                      <span className="text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 bg-secondary inline-block"></span>
                        TODAY // PRIMARY OFFERING
                      </span>
                      <span className="bg-secondary/10 text-secondary px-1.5 py-0.5 font-bold">COMMERCIAL</span>
                    </div>
                    <span className="font-headline-md text-body-md font-bold text-on-surface pt-1">
                      Software-First Systems
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Embedded AI runtimes, custom computer vision algorithms, multi-sensor conditioning pipelines, and tailored AI models deployed on your target silicon.
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex items-center justify-between">
                    <span>STATUS: ACTIVE ENGAGEMENT</span>
                    <span className="text-secondary font-bold">READY TO DEPLOY</span>
                  </div>
                </div>

                {/* FUTURE CARD */}
                <div className="bg-surface-container-low border border-dashed border-outline p-space-md flex flex-col justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-mono-label text-[10px]">
                      <span className="text-on-surface-variant font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 border border-outline inline-block"></span>
                        FUTURE // RESEARCH ROADMAP
                      </span>
                      <span className="bg-surface-container-highest text-on-surface-variant px-1.5 py-0.5 font-bold">ROADMAP</span>
                    </div>
                    <span className="font-headline-md text-body-md font-bold text-on-surface pt-1">
                      Integrated Systems
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Expanding into unified hardware + software enclosures combining bespoke optical modules, hardened edge compute, and integrated sensors.
                    </p>
                  </div>
                  <div className="pt-space-sm border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex items-center justify-between">
                    <span>STATUS: IN RESEARCH</span>
                    <span className="text-on-surface-variant italic">NOT COMMERCIALLY LAUNCHED</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
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
                  Explore Applications
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Paradigm Panel */}
            <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-space-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

              <div className="relative z-10 flex flex-col gap-space-sm font-mono-label">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    ENGINEERING COUPLING ARCHITECTURE
                  </span>
                  <span className="text-on-surface-variant">SPEC // V4.2</span>
                </div>

                {/* Technical Cascade Diagram */}
                <div className="flex flex-col gap-2 pt-1 text-body-sm">
                  {/* Layer 1: Problem Definition */}
                  <div className="bg-surface p-2.5 border border-outline-variant">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span className="font-bold text-secondary">01 / DISCOVERY</span>
                      <span>FIELD RECONNAISSANCE</span>
                    </div>
                    <div className="font-bold text-on-surface text-body-sm mt-0.5">Physical Constraints &amp; Targets</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Optics, thermal envelopes, latency bounds &amp; failure modes</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↓</div>

                  {/* Layer 2: Algorithmic Software R&D */}
                  <div className="bg-surface p-2.5 border border-secondary shadow-sm">
                    <div className="flex items-center justify-between text-[10px] text-secondary font-bold">
                      <span>02 / SOFTWARE ENGINE</span>
                      <span>CURRENT CAPABILITY</span>
                    </div>
                    <div className="font-bold text-on-surface text-body-sm mt-0.5">Embedded AI &amp; CV Runtimes</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Quantized models, multi-sensor fusion, vision-language context</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↓</div>

                  {/* Layer 3: Hardware Target Integration */}
                  <div className="bg-surface p-2.5 border border-outline-variant">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span>03 / DEPLOYMENT TARGET</span>
                      <span>SILICON EXECUTION</span>
                    </div>
                    <div className="font-bold text-on-surface text-body-sm mt-0.5">Customer Silicon &amp; Edge Hardware</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">ARM Cortex, NVIDIA Jetson, Intel NPUs, Bare-Metal DSPs</div>
                  </div>

                  <div className="flex justify-center text-on-surface-variant text-[11px] font-bold">↓ (Future Horizon)</div>

                  {/* Layer 4: Integrated Hardware Horizon */}
                  <div className="bg-surface-container-high p-2.5 border border-dashed border-outline">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span className="font-bold">04 / HARDWARE EVOLUTION</span>
                      <span className="italic">FUTURE HORIZON</span>
                    </div>
                    <div className="font-bold text-on-surface text-body-sm mt-0.5">Integrated Hardware + Software Enclosures</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Bespoke optics, custom sensor nodes, hardened computing platforms</div>
                  </div>
                </div>

                <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex justify-between">
                  <span>COUPLING: COMPOSABLE</span>
                  <span>IP: REUSABLE &amp; PROPRIETARY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — WHAT ENCEPTO OFFERS: SOFTWARE FIRST. HARDWARE READY          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / CURRENT OFFERING
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Software First. Hardware Ready.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We deliver engineered AI software systems built to execute deterministically on real-world edge devices. We do not sell generic off-the-shelf software or fictional SaaS products; our capabilities are categorized by functional engineering domains.
            </p>
          </div>

          {/* Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {capabilityCategories.map((cap) => (
              <div
                key={cap.id}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">{cap.num} // CAPABILITY</span>
                    <span className="bg-surface-container px-1.5 py-0.5 text-on-surface-variant font-bold uppercase">
                      SOFTWARE
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    {cap.name}
                  </h3>

                  <p className="font-mono-label text-[11px] text-secondary font-bold">
                    {cap.tagline}
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {cap.scope}
                  </p>
                </div>

                <div className="mt-space-md pt-space-sm border-t border-outline-variant/60 flex items-center justify-between">
                  <span className="font-mono-label text-[10px] text-on-surface-variant uppercase">
                    MODULAR DEPLOYMENT
                  </span>
                  <button
                    onClick={() => {
                      setSelectedCapability(cap.id);
                      const el = document.getElementById('software-deep-dive');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-mono-label text-[10px] text-secondary font-bold uppercase flex items-center gap-1 hover:underline"
                    type="button"
                  >
                    <span>View Technical Scope</span>
                    <MaterialIcon name="arrow_forward" className="text-[12px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — CUSTOMER-SPECIFIC R&D: BUILT AROUND THE PROBLEM             */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / ENGAGEMENT PHILOSOPHY
            </span>
            <h2 className="font-display-hero-mobile sm:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Built Around the Problem.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Encepto does not sell rigid, one-size-fits-all boxed software. Real deep-tech deployments require combining proven product architecture with customer-specific R&amp;D and customization. We are a specialized deep-tech engineering partner, not a generic software agency.
            </p>
          </div>

          {/* Ten Core Customer Engagement Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
            {[
              { num: '01', title: 'Problem Discovery', desc: 'Detailed on-site audits of physical environmental stresses, lighting jitter, and failure modes.' },
              { num: '02', title: 'Technical Research', desc: 'Evaluating neural topologies and loss functions against hardware compute and memory limits.' },
              { num: '03', title: 'System Design', desc: 'Architecting zero-copy data pipelines, sensor synchronization, and deterministic fail-safe states.' },
              { num: '04', title: 'AI Model Development', desc: 'Custom training, dataset synthesis, and quantization-aware compression for high accuracy.' },
              { num: '05', title: 'Computer Vision Dev', desc: 'Low-latency spatial filtering, optical flow tracking, and sub-pixel defect classification algorithms.' },
              { num: '06', title: 'Sensing Integration', desc: 'Clock-aligned ingestion across optical, radiometric, inertial, acoustic, and CAN/industrial buses.' },
              { num: '07', title: 'Prototyping', desc: 'Rapid bench bring-up and hardware-in-the-loop validation on client target carrier boards.' },
              { num: '08', title: 'Validation', desc: 'Chamber testing, thermal cycling, power brownout injection, and multi-hour burn-in stress.' },
              { num: '09', title: 'Deployment', desc: 'Production flashing with fail-safe dual-partition bootloaders and field optical calibration.' },
              { num: '10', title: 'Further Iteration', desc: 'Offline anomaly ingestion, model re-training on corner cases, and compounding reusable IP.' },
            ].map((p) => (
              <div
                key={p.num}
                className="bg-surface-container border border-outline-variant p-space-sm flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">{p.num}</span>
                  <span className="font-headline-md text-body-md font-bold text-on-surface">{p.title}</span>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-2 mt-2 border-t border-outline-variant/40 font-mono-label text-[9px] text-on-surface-variant">
                  DELIVERY STAGE
                </div>
              </div>
            ))}
          </div>

          {/* Positioning Summary Callout */}
          <div className="bg-surface-container-high border-l-2 border-secondary p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1 max-w-3xl">
              <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                CORE VALUE PROPOSITION // PRODUCT + R&amp;D + CUSTOMIZATION
              </span>
              <p className="font-body-md text-body-md text-on-surface">
                We combine established proprietary algorithmic modules (Product) with custom domain exploration (R&amp;D) and hardware-tailored integration (Customization) to solve problems that off-the-shelf software cannot touch.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider font-bold whitespace-nowrap hover:bg-surface-container-highest hover:text-on-surface transition-colors"
            >
              Consult an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — PRODUCT MODEL (VISUAL ENGINEERING FLOW)                      */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / PRODUCT MODEL
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              The Progression: Problem to Evolution
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              How an operational challenge transforms systematically into deployed edge intelligence and compounding technological capability.
            </p>
          </div>

          {/* Horizontal Flow Progression Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs border-y border-outline-variant py-space-sm">
            {productModelStages.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`cursor-pointer p-space-sm flex flex-col justify-between min-h-[140px] transition-all ${
                    isSelected
                      ? 'bg-surface border-t-2 border-secondary shadow-sm'
                      : 'bg-surface-container border-t-2 border-transparent hover:border-outline'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStageId(stage.id);
                    }
                  }}
                  aria-pressed={isSelected}
                  aria-label={`${stage.step}: ${stage.name}`}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className={`font-mono-label text-[10px] font-bold ${
                        isSelected ? 'text-secondary' : 'text-on-surface-variant'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className="font-headline-md text-body-md text-on-surface font-bold uppercase leading-tight">
                      {stage.name}
                    </span>
                  </div>
                  <span className="font-mono-label text-[9px] text-on-surface-variant mt-2 truncate">
                    {stage.deliverable}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Selected Stage Detail Card */}
          <div className="bg-surface border border-outline-variant p-space-lg flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-bold">{currentStage.step} // DEEP INSPECTION</span>
                <span className="text-on-surface-variant">/</span>
                <span className="text-on-surface font-bold uppercase">{currentStage.name}</span>
              </div>
              <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold text-[10px]">
                DELIVERABLE: {currentStage.deliverable}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <span className="font-mono-label text-mono-label text-secondary font-bold uppercase">
                  {currentStage.tagline}
                </span>
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">
                  {currentStage.focus}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-1">
                  {currentStage.desc}
                </p>
              </div>

              <div className="lg:col-span-5 bg-surface-container border border-outline-variant p-space-md flex flex-col gap-space-sm font-mono-label">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold">STAGE CRITERIA &amp; METRICS</span>
                  <span className="text-on-surface-variant">GATE REVIEW</span>
                </div>

                <div className="flex flex-col gap-space-sm pt-1">
                  {currentStage.specs.map((sp, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-on-surface-variant font-bold">{sp.label}</span>
                      <span className="text-body-sm text-on-surface bg-surface p-2 border border-outline-variant/60 font-medium">
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — SOFTWARE TODAY: CAPABILITY DEEP DIVE                         */}
      {/* ========================================================================= */}
      <section id="software-deep-dive" className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              05 / CAPABILITY SPECIFICATIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Software Capabilities Today
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Explore the engineering specifics of our core software offering. Every capability is built to operate with minimal power, predictable latency, and zero dependency on unconstrained cloud networks.
            </p>
          </div>

          {/* Interactive Capability Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-space-xs border-b border-outline-variant pb-space-sm">
            {capabilityCategories.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setSelectedCapability(cap.id)}
                type="button"
                className={`px-space-sm py-1.5 font-mono-label text-[11px] uppercase transition-all ${
                  selectedCapability === cap.id
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {cap.name}
              </button>
            ))}
          </div>

          {/* Detailed Capability Panel */}
          <div className="bg-surface-container border border-outline-variant p-space-lg flex flex-col gap-space-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              {/* Left Column: Scope & Overview */}
              <div className="lg:col-span-6 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs font-mono-label text-[10px] text-secondary font-bold">
                  <span>{activeCap.num} // DOMAIN OVERVIEW</span>
                  <span>·</span>
                  <span className="uppercase text-on-surface-variant">SOFTWARE FIRST</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">
                  {activeCap.name}
                </h3>
                <p className="font-mono-label text-body-sm text-secondary font-bold">
                  {activeCap.tagline}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {activeCap.desc}
                </p>
              </div>

              {/* Right Column: Technical Capabilities & Deliverables */}
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                {/* Technical Features */}
                <div className="bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">TECHNICAL MECHANICS</span>
                    <span className="text-on-surface-variant">SUB-ROUTINES</span>
                  </div>
                  <ul className="flex flex-col gap-2 font-mono-label text-[11px] text-on-surface">
                    {activeCap.technicalCapabilities.map((tech, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary font-bold">›</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tangible Deliverables */}
                <div className="bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">ENGAGEMENT DELIVERABLES</span>
                    <span className="text-on-surface-variant">SOFTWARE ASSETS</span>
                  </div>
                  <ul className="flex flex-col gap-2 font-mono-label text-[11px] text-on-surface-variant">
                    {activeCap.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-on-surface font-bold">✓</span>
                        <span className="text-on-surface font-medium">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — FUTURE HARDWARE + SOFTWARE (FROM SOFTWARE TO INTELLIGENT SYSTEMS) */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <div className="flex items-center gap-space-xs font-mono-label text-mono-label">
              <span className="text-on-surface-variant uppercase font-bold tracking-widest">
                06 / RESEARCH ROADMAP
              </span>
              <span className="bg-surface-container-highest px-space-xs py-0.5 text-on-surface-variant font-bold text-[10px] uppercase">
                FORWARD-LOOKING
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              From Software to Intelligent Systems.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Encepto’s long-term engineering trajectory moves systematically from software runtimes executing on third-party silicon toward tightly integrated, bespoke physical intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Left: Deep explanation of Roadmap */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="bg-surface border-l-2 border-secondary p-space-md flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  ROADMAP STATEMENT // UNIFIED INTELLIGENT SYSTEMS
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  While our commercial offering today is software-first, algorithmic performance in the physical world is ultimately constrained by sensor optics, thermal conductances, and bus topologies. Our R&amp;D lab is actively exploring the unification of physical hardware and software kernels.
                </p>
              </div>

              {/* 5-Element Synthesis Equation */}
              <div className="bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm font-mono-label">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider border-b border-outline-variant pb-1">
                  SYSTEM SYNTHESIS EQUATION
                </span>
                <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-on-surface py-2">
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Software</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Embedded AI</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Sensors &amp; Cameras</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface-container px-2 py-1 border border-outline-variant">Edge Compute</span>
                  <span className="text-secondary">=</span>
                  <span className="bg-primary text-on-primary px-2.5 py-1">Integrated Intelligent Systems</span>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant pt-1 leading-relaxed">
                  Notice: Hardware integration programs are currently experimental and in active R&amp;D. We do not represent unreleased hardware as off-the-shelf commercial stock.
                </p>
              </div>
            </div>

            {/* Right: Technical Research Horizon Grid */}
            <div className="lg:col-span-5 bg-surface-container border border-outline-variant p-space-md flex flex-col gap-space-sm font-mono-label">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold">R&amp;D HORIZONS</span>
                <span className="text-on-surface-variant">LAB EXPLORATION</span>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                {[
                  {
                    title: 'Bespoke Optical Modules',
                    desc: 'Designing custom lens mounts with integrated narrow-band optical filters tuned for specific industrial inspection wavelengths.',
                  },
                  {
                    title: 'Conductive Thermal Enclosures',
                    desc: 'Fanless, passively cooled aluminum chassis designed to maintain sub-50°C silicon temperatures in 55°C dusty environments.',
                  },
                  {
                    title: 'Perimeter Sensor Nodes',
                    desc: 'Sub-watt remote sensor pods with onboard micro-NPUs for continuous vibration, thermal, and acoustic inference.',
                  },
                  {
                    title: 'Unified Field Computers',
                    desc: 'Heterogeneous compute nodes combining low-power RTOS supervisors with high-throughput neural accelerator blocks.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-surface p-2.5 border border-outline-variant/60 flex flex-col gap-0.5">
                    <span className="text-body-sm text-on-surface font-bold">{item.title}</span>
                    <span className="text-[11px] text-on-surface-variant leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — WHO IT IS FOR: APPLICATION DOMAINS                           */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              07 / APPLICATION DOMAINS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Engineered for Critical Environments
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our software systems and R&amp;D engagements target sectors where failures carry high real-world costs and operational conditions defy generic software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {applicationDomains.map((dom, i) => (
              <div
                key={i}
                className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    {dom.tag}
                  </span>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {dom.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                    {dom.desc}
                  </p>
                </div>
                <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 flex items-center justify-between">
                  <span className="font-mono-label text-[10px] text-on-surface-variant">DOMAIN BRIEF</span>
                  <Link
                    to={dom.route}
                    className="font-mono-label text-[10px] text-secondary font-bold uppercase flex items-center gap-1 hover:underline"
                  >
                    <span>Inspect</span>
                    <MaterialIcon name="arrow_forward" className="text-[12px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — PRODUCT CTA                                                  */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container border-b border-outline-variant transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              08 / NEXT STEP
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Have a problem worth solving?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tell us about your physical environment, target hardware, optical setup, and performance constraints. Let’s evaluate the feasibility together.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm">
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-high transition-colors font-bold"
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
