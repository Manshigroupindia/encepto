import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 1. Engineering Cycle Stages for Section 06
interface EngineeringStage {
  id: number;
  step: string;
  name: string;
  tagline: string;
  focus: string;
  studentExposure: string;
  deliverables: string;
}

const engineeringCycleStages: EngineeringStage[] = [
  {
    id: 1,
    step: 'STAGE 01',
    name: 'Research',
    tagline: 'Literature dissection, algorithmic formulation & feasibility',
    focus: 'Investigating mathematical models, neural topologies, and edge constraints against theoretical bounds.',
    studentExposure: 'Dissecting academic preprints, reviewing state-of-the-art vision papers, and benchmarking mathematical complexities.',
    deliverables: 'Algorithmic Feasibility Notes & Literature Synthesis',
  },
  {
    id: 2,
    step: 'STAGE 02',
    name: 'Design',
    tagline: 'System architecture, latency budgeting & sensor bus selection',
    focus: 'Mapping data pipelines, calculating memory footprints, and choosing optimal sensor interfaces (MIPI CSI-2, I2C, SPI).',
    studentExposure: 'Calculating SRAM memory budgets, defining zero-copy DMA buffers, and designing modular software interfaces.',
    deliverables: 'Interface Specification & Memory Allocation Map',
  },
  {
    id: 3,
    step: 'STAGE 03',
    name: 'Build',
    tagline: 'Model training, kernel development & pipeline implementation',
    focus: 'Writing zero-page-fault C++, Rust, and PyTorch code for neural models and high-throughput data streams.',
    studentExposure: 'Training quantization-aware neural networks, implementing custom image filtering kernels, and writing asynchronous drivers.',
    deliverables: 'Quantized INT8 Model Checkpoints & Pipeline Code',
  },
  {
    id: 4,
    step: 'STAGE 04',
    name: 'Experiment',
    tagline: 'Hyperparameter sweeps, sparsity pruning & loss formulation',
    focus: 'Iterating on loss functions and pruning schedules to maximize accuracy within low-bit quantization regimes.',
    studentExposure: 'Running model ablation studies, measuring precision vs. recall on rare anomalies, and testing attention pruning.',
    deliverables: 'Empirical Ablation Matrix & Pareto Frontier Curves',
  },
  {
    id: 5,
    step: 'STAGE 05',
    name: 'Test',
    tagline: 'Hardware-in-the-loop bench testing & silicon execution',
    focus: 'Flashing code to target carrier boards (ARM Cortex, Jetson, NPU) and measuring cycle latency and thermals.',
    studentExposure: 'Connecting logic analyzers and oscilloscopes, profiling cache contention, and measuring real-time inference latency.',
    deliverables: 'Bench Latency & Power Measurement Logs',
  },
  {
    id: 6,
    step: 'STAGE 06',
    name: 'Validate',
    tagline: 'Environmental stress testing, noise injection & corner cases',
    focus: 'Subjecting systems to simulated dust, extreme temperatures, optical blur, and electrical voltage dropouts.',
    studentExposure: 'Simulating out-of-distribution optical distortions, conducting chamber stress runs, and verifying fail-safe watchdogs.',
    deliverables: 'Stress Certification & Resilience Test Reports',
  },
  {
    id: 7,
    step: 'STAGE 07',
    name: 'Learn',
    tagline: 'Telemetry distillation, scientific write-ups & compounding IP',
    focus: 'Extracting insights from test outcomes, documenting negative results, and contributing to reusable software assets.',
    studentExposure: 'Co-authoring research preprints, presenting findings to the engineering team, and archiving modular code libraries.',
    deliverables: 'Research Preprints, Whitepapers & Compounding IP',
  },
];

// 2. Eight Core Opportunity Areas for Section 07
interface OpportunityArea {
  id: string;
  num: string;
  title: string;
  tagline: string;
  scope: string;
  representativeTasks: string[];
  techStack: string;
}

const opportunityAreas: OpportunityArea[] = [
  {
    id: 'ai-ml',
    num: '01',
    title: 'Artificial Intelligence / Machine Learning',
    tagline: 'Quantization-aware architectures & compact models',
    scope: 'Tailoring neural networks to operate within constrained edge compute envelopes, focusing on model distillation, structured pruning, and low-bit representations.',
    representativeTasks: [
      'Training INT8 and INT4 quantized neural networks with minimal accuracy degradation',
      'Developing domain-specific loss functions aligned with physical cost matrices',
      'Generating synthetic corner-case edge scenarios for high-stakes verification',
    ],
    techStack: 'PyTorch · ONNX · TensorRT · Quantization-Aware Training (QAT)',
  },
  {
    id: 'computer-vision',
    num: '02',
    title: 'Computer Vision',
    tagline: 'Sub-pixel spatial perception & high-speed feature tracking',
    scope: 'Engineering algorithms for microscopic surface defect localization, optical flow tracking, and multi-camera spatial calibration on low-power silicon.',
    representativeTasks: [
      'Building zero-copy frame ingestion pipelines from raw MIPI CSI-2 sensor streams',
      'Writing custom CUDA and OpenCV kernels for sub-pixel boundary detection',
      'Calibrating optical lens distortion and homography on physical mounting rigs',
    ],
    techStack: 'OpenCV · C++20 · CUDA · Spatial Geometry · Zero-Copy Pipelines',
  },
  {
    id: 'embedded-ai',
    num: '03',
    title: 'Embedded AI',
    tagline: 'Direct silicon mapping & deterministic edge execution',
    scope: 'Compiling neural models directly onto dedicated NPUs, DSPs, and microcontrollers without heavy operating system overheads.',
    representativeTasks: [
      'Profiling SRAM cache misses and memory bus contention on edge SoCs',
      'Compiling neural graphs for target silicon acceleration engines',
      'Measuring instantaneous current draw during sustained inference loops',
    ],
    techStack: 'ARM Cortex-M/A · Edge NPUs · Embedded Linux · RTOS · Thermal Profiling',
  },
  {
    id: 'edge-computing',
    num: '04',
    title: 'Edge Computing',
    tagline: 'Hardware-in-the-loop execution & low-latency runtimes',
    scope: 'Developing hardened system-level runtime services, circular buffer IPC mechanisms, and robust fault-tolerant daemon processes.',
    representativeTasks: [
      'Implementing circular ring buffers for zero-copy inter-process communication',
      'Developing low-overhead embedded diagnostics and watchdog daemon services',
      'Managing flash partition boots and remote firmware update fail-safes',
    ],
    techStack: 'Modern C++ · Rust · Linux Systems Programming · POSIX · Systemd',
  },
  {
    id: 'intelligent-sensing',
    num: '05',
    title: 'Intelligent Sensing',
    tagline: 'Multi-modal sensor fusion & physical signal conditioning',
    scope: 'Interfacing heterogeneous sensors—optical, radiometric thermopiles, inertial IMUs, and acoustics—with microsecond synchronization.',
    representativeTasks: [
      'Writing low-level hardware drivers for I2C, SPI, and MIPI CSI-2 bridges',
      'Implementing temporal Kalman filters to fuse optical and inertial streams',
      'Filtering high-frequency electrical and acoustic noise in harsh factory settings',
    ],
    techStack: 'Sensor Drivers · Kalman Filtering · MIPI CSI-2 · CAN Bus · Signal Conditioning',
  },
  {
    id: 'software-engineering',
    num: '06',
    title: 'Software Engineering',
    tagline: 'High-throughput pipelines & deterministic execution',
    scope: 'Architecting zero-page-fault runtime software, deterministic IPC mechanisms, and robust embedded telemetry agents.',
    representativeTasks: [
      'Writing high-performance asynchronous data pipelines in modern C++ and Rust',
      'Developing automated build matrices and cross-compilation toolchains',
      'Building offline analysis tools to parse and visualize field telemetry dumps',
    ],
    techStack: 'C++20 · Rust · Python · CMake · Docker · Linux Toolchains',
  },
  {
    id: 'research-prototyping',
    num: '07',
    title: 'Research & Prototyping',
    tagline: 'Rapid proof-of-concept bring-up & bench testbeds',
    scope: 'Assembling functional bench testbeds, integrating custom camera modules with carrier boards, and verifying end-to-end signal flow.',
    representativeTasks: [
      'Bringing up custom carrier boards and verifying power rail stability',
      'Fabricating test fixtures and optical alignment jigs for lab validation',
      'Executing automated regression test suites on connected testbed rigs',
    ],
    techStack: 'Hardware-in-the-Loop (HIL) · Oscilloscopes · Logic Analyzers · Test Jigs',
  },
  {
    id: 'testing-validation',
    num: '08',
    title: 'Testing & Validation',
    tagline: 'Environmental stress testing & corner-case verification',
    scope: 'Subjecting edge software and models to simulated real-world stresses: thermal chambers, voltage brownouts, and sensor occlusion.',
    representativeTasks: [
      'Simulating ambient dust, lighting flickers, and optical vibration on active models',
      'Measuring thermal throttling thresholds in 55°C environmental test chambers',
      'Validating deterministic fail-safe triggers during power supply dropouts',
    ],
    techStack: 'Thermal Chambers · Fault Injection · Automated CI/CD Testing · Stress Profiling',
  },
];

// 3. CMS-Ready Opening Data Structure (Empty State)
export interface JobOpening {
  id: string;
  position: string;
  type: 'Internship' | 'Fellowship' | 'Research Project' | 'Full-Time';
  area: string;
  location: string;
  description: string;
  requirements: string[];
  applyAction: string;
  status: 'Open' | 'Upcoming' | 'Filled';
}

// Current vacancies are strictly empty per user requirement (CMS ready)
const currentOpenings: JobOpening[] = [];

export const CareersPage: React.FC = () => {
  const [activeCycleStageId, setActiveCycleStageId] = useState<number>(1);
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<string>('computer-vision');

  const currentCycleStage =
    engineeringCycleStages.find((s) => s.id === activeCycleStageId) || engineeringCycleStages[0];
  const selectedOpportunity =
    opportunityAreas.find((o) => o.id === selectedOpportunityId) || opportunityAreas[1];

  const scrollToOpportunities = () => {
    const el = document.getElementById('opportunities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 04 — HERO SECTION                                                 */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / CAREERS &amp; RESEARCH TALENT</span>
              <span>// ACADEMIA &amp; STUDENT COLLABORATION</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">ETHOS: REAL-WORLD CRAFT</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                BEYOND CERTIFICATES
              </span>
            </div>
          </div>

          {/* Hero Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 font-mono-label text-[11px] text-secondary font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                Hands-On Engineering · Applied AI · Real Physical Constraints
              </div>

              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Build. Research. <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">
                  Learn. Deploy.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Work on real-world AI and engineering problems alongside a team building technology beyond the lab.
              </p>

              {/* Ethos Statement Box */}
              <div className="bg-surface-container border-l-2 border-secondary p-space-md flex flex-col gap-1.5">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  OUR PHILOSOPHY ON TALENT &amp; COLLABORATION
                </span>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  We are not a generic corporate hiring board, nor do we run certificate mills. We offer students and researchers immersive exposure to practical deep-tech engineering—where you get your hands dirty with real sensor feeds, quantized neural architectures, and embedded edge silicon.
                </p>
                <div className="font-mono-label text-[10px] text-on-surface-variant pt-1">
                  CORE TENET: MEASURED TECHNICAL MERIT OVER EMPTY CREDENTIALS.
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <button
                  onClick={scrollToOpportunities}
                  type="button"
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                >
                  <span>Explore Opportunities</span>
                  <MaterialIcon name="arrow_downward" className="text-[16px]" />
                </button>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold flex items-center gap-space-xs"
                  to="/collaboration"
                >
                  <span>Collaborate With Us</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </div>

            {/* Right: Technical Visual Environment */}
            <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-space-md relative overflow-hidden font-mono-label">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

              <div className="relative z-10 flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    STUDENT ENGINEERING ENVIRONMENT
                  </span>
                  <span className="text-on-surface-variant">ACTIVE LAB RUNTIME</span>
                </div>

                <div className="flex flex-col gap-2 pt-1 text-body-sm">
                  <div className="bg-surface p-2.5 border border-outline-variant">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span className="text-secondary font-bold">STAGE 01: SENSORS</span>
                      <span>ENV: EDGE LINUX / RTOS</span>
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">Physical Sensor Streams</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">MIPI CSI-2 Cameras · Micro-IMUs · Radiometric Thermopiles</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↓ (Direct Code Access)</div>

                  <div className="bg-surface p-2.5 border border-secondary">
                    <div className="flex items-center justify-between text-[10px] text-secondary font-bold">
                      <span>STAGE 02: INFERENCE</span>
                      <span>INT8 / INT4 QAT</span>
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">Hardware-Aware Neural Kernels</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Zero-copy ring buffers · Layer fusion · Memory layout tuning</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↓ (Bench Verification)</div>

                  <div className="bg-surface p-2.5 border border-outline-variant">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span className="font-bold">STAGE 03: HARNESS</span>
                      <span>FIELD CONDITIONS</span>
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">Thermal &amp; Power Invariance</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Sustained burn-in at 55°C · Voltage dropouts · Optical blur</div>
                  </div>
                </div>

                <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex justify-between">
                  <span>GOAL: ENGINEERING MASTERY</span>
                  <span className="text-secondary font-bold">MEASURED TRUTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — WHY ENCEPTO: MORE THAN AN INTERNSHIP                         */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / WHY ENCEPTO
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              More Than an Internship.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Encepto’s approach is centered around meaningful technical exposure and hands-on work. We do not manufacture busywork or offer paper certificates; we immerse you in real deep-tech engineering.
            </p>
          </div>

          {/* Four Core Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">
                  01 // REAL PROBLEMS
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Work on Real Problems
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  Students get exposure to practical AI and engineering challenges rather than purely theoretical exercises. You will deal with real noise, physical lighting shifts, and harsh edge constraints.
                </p>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                BEYOND TOY BENCHMARKS
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">
                  02 // ACTIVE CRAFT
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Learn by Building
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  Emphasize implementation, experimentation, testing and iteration. We value writing actual code, profiling memory access, diagnosing hardware faults, and iterating until it works.
                </p>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                HANDS-ON ITERATION
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">
                  03 // APPLIED RIGOR
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Research Meets Reality
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  Understand how ideas move from research papers and mathematical prototypes toward real-world applications running deterministically under sub-5W power and 55°C ambient heat.
                </p>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                THEORY TO SILICON
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">
                  04 // LASTING IMPACT
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                  Build Reusable Knowledge
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  Contribute to technical work that can evolve into reusable systems, engineering knowledge, and future projects. Your experiments and benchmarks form permanent stepping stones for the lab.
                </p>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                COMPOUNDING VALUE
              </div>
            </div>
          </div>

          {/* Candor Statement Note */}
          <div className="bg-surface border border-dashed border-outline p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md font-mono-label text-[11px]">
            <div className="flex items-center gap-2 text-on-surface">
              <span className="w-2 h-2 bg-secondary inline-block"></span>
              <span>HONEST PERSPECTIVE: WE DO NOT PROMISE GUARANTEED JOBS, PLACEMENTS, OR ARTIFICIAL CAREER SHORTCUTS. WE OFFER REAL ENGINEERING DEPTH.</span>
            </div>
            <Link
              to="/about"
              className="text-secondary font-bold uppercase hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              <span>Our Principles</span>
              <MaterialIcon name="arrow_forward" className="text-[12px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — HANDS-ON EXPERIENCE: EXPERIENCE THE FULL ENGINEERING CYCLE  */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / FULL-CYCLE ENGINEERING
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Experience the Full Engineering Cycle.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Students and researchers get exposure to different stages of real technical development depending on their project and discipline—from mathematical formulation through bench validation and continuous learning.
            </p>
          </div>

          {/* 7-Stage Interactive Engineering Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs border-y border-outline-variant py-space-sm">
            {engineeringCycleStages.map((st) => {
              const isSelected = st.id === activeCycleStageId;
              return (
                <div
                  key={st.id}
                  onClick={() => setActiveCycleStageId(st.id)}
                  className={`cursor-pointer p-space-sm flex flex-col justify-between min-h-[140px] transition-all ${
                    isSelected
                      ? 'bg-surface-container border-t-2 border-secondary shadow-sm'
                      : 'bg-surface border-t-2 border-transparent hover:border-outline'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCycleStageId(st.id);
                    }
                  }}
                  aria-pressed={isSelected}
                  aria-label={`${st.step}: ${st.name}`}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className={`font-mono-label text-[10px] font-bold ${
                        isSelected ? 'text-secondary' : 'text-on-surface-variant'
                      }`}
                    >
                      {st.step}
                    </span>
                    <span className="font-headline-md text-body-md text-on-surface font-bold uppercase leading-tight">
                      {st.name}
                    </span>
                  </div>
                  <span className="font-mono-label text-[9px] text-on-surface-variant mt-2 truncate">
                    {st.deliverables}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Selected Stage Detail Inspector */}
          <div className="bg-surface-container border border-outline-variant p-space-lg flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-bold">{currentCycleStage.step} // STAGE DETAIL</span>
                <span className="text-on-surface-variant">/</span>
                <span className="text-on-surface font-bold uppercase">{currentCycleStage.name}</span>
              </div>
              <span className="bg-surface px-space-xs py-0.5 text-on-surface font-bold text-[10px]">
                DELIVERABLE: {currentCycleStage.deliverables}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-6 flex flex-col gap-space-sm">
                <span className="font-mono-label text-mono-label text-secondary font-bold uppercase">
                  {currentCycleStage.tagline}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {currentCycleStage.focus}
                </h3>
                <div className="mt-space-sm bg-surface p-space-md border border-outline-variant flex flex-col gap-1 font-mono-label">
                  <span className="text-[10px] text-secondary font-bold uppercase">
                    STAGE ENGINEERING DELIVERABLE
                  </span>
                  <span className="text-body-sm text-on-surface font-medium">
                    {currentCycleStage.deliverables}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">STUDENT &amp; RESEARCHER EXPOSURE</span>
                  <span className="text-on-surface-variant">HANDS-ON TASKS</span>
                </div>

                <p className="font-body-md text-body-md text-on-surface leading-relaxed pt-1">
                  {currentCycleStage.studentExposure}
                </p>

                <div className="pt-space-xs mt-space-sm border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex items-center justify-between">
                  <span>METHOD: DIRECT PARTICIPATION</span>
                  <span className="text-secondary font-bold">FIELD TESTED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — AREAS OF OPPORTUNITY: WHERE YOU CAN CONTRIBUTE               */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / OPPORTUNITY AREAS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Where You Can Contribute
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              These are technical capability domains where students, interns, and academic fellows collaborate with our engineering team. These are opportunity areas, not guaranteed vacancies.
            </p>
          </div>

          {/* 8 Opportunity Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {opportunityAreas.map((opp) => (
              <div
                key={opp.id}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">{opp.num} // DOMAIN</span>
                    <span className="bg-surface-container px-1.5 py-0.5 text-on-surface-variant font-bold uppercase">
                      ACTIVE
                    </span>
                  </div>

                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface group-hover:text-secondary transition-colors mt-1">
                    {opp.title}
                  </h3>

                  <p className="font-mono-label text-[11px] text-secondary font-bold">
                    {opp.tagline}
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                    {opp.scope}
                  </p>
                </div>

                <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 flex items-center justify-between">
                  <span className="font-mono-label text-[10px] text-on-surface-variant">EXPLORE AREA</span>
                  <button
                    onClick={() => {
                      setSelectedOpportunityId(opp.id);
                      const el = document.getElementById('contribute-deep-dive');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-mono-label text-[10px] text-secondary font-bold uppercase flex items-center gap-1 hover:underline"
                    type="button"
                  >
                    <span>View Tasks</span>
                    <MaterialIcon name="arrow_forward" className="text-[12px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Opportunity Detailed Inspector */}
          <div id="contribute-deep-dive" className="bg-surface border border-outline-variant p-space-lg flex flex-col gap-space-md mt-space-sm">
            <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-bold">{selectedOpportunity.num} // TECHNICAL FOCUS</span>
                <span className="text-on-surface-variant">/</span>
                <span className="text-on-surface font-bold uppercase">{selectedOpportunity.title}</span>
              </div>
              <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold text-[10px]">
                {selectedOpportunity.tagline}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-6 flex flex-col gap-space-sm">
                <span className="font-mono-label text-mono-label text-secondary font-bold uppercase">
                  DOMAIN OVERVIEW &amp; SCOPE
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {selectedOpportunity.scope}
                </p>
                <div className="mt-space-sm bg-surface-container p-space-md border border-outline-variant flex flex-col gap-1 font-mono-label">
                  <span className="text-[10px] text-secondary font-bold uppercase">
                    ASSOCIATED TOOLCHAIN &amp; CONCEPTS
                  </span>
                  <span className="text-body-sm text-on-surface font-medium">
                    {selectedOpportunity.techStack}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-surface-container border border-outline-variant p-space-md flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">REPRESENTATIVE CONTRIBUTION TASKS</span>
                  <span className="text-on-surface-variant">HANDS-ON WORK</span>
                </div>

                <ul className="flex flex-col gap-2.5 font-mono-label text-[11px] text-on-surface pt-1">
                  {selectedOpportunity.representativeTasks.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">›</span>
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — STUDENT INTERNSHIPS: REAL HANDS-ON EXPERIENCE                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              05 / INTERNSHIP PHILOSOPHY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Internships With Real Hands-On Experience.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Encepto's internship philosophy is to give students meaningful exposure to actual technical work, experimentation, and problem-solving rather than making the internship primarily about receiving a certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {[
              {
                num: '01',
                title: 'Practical Implementation',
                desc: 'Write code that executes directly on target carrier boards and interfaces with physical sensor hardware, not just synthetic simulator scripts.',
              },
              {
                num: '02',
                title: 'Technical Mentorship',
                desc: 'Collaborate one-on-one with senior deep-tech engineers who review your code architecture, mathematical formulations, and profiling results.',
              },
              {
                num: '03',
                title: 'Active Experimentation',
                desc: 'Run hypothesis-driven experiments on model quantization, layer pruning, optical flow, and sensor fusion, analyzing failure modes rigorously.',
              },
              {
                num: '04',
                title: 'Problem Solving',
                desc: 'Tackle unresolved physical problems where off-the-shelf code breaks down—dealing with optical vibration, low lux, and tight latency budgets.',
              },
              {
                num: '05',
                title: 'Research Exposure',
                desc: 'Engage with peer-reviewed literature, reproduce cutting-edge vision-language models, and test experimental techniques on edge hardware.',
              },
              {
                num: '06',
                title: 'Project Contribution',
                desc: 'Leave an indelible mark on our codebase through tested software libraries, verified benchmark suites, or co-authored technical preprints.',
              },
            ].map((p) => (
              <div
                key={p.num}
                className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    {p.num} // EMPHASIS
                  </span>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                    {p.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-2 mt-3 border-t border-outline-variant/40 font-mono-label text-[9px] text-on-surface-variant">
                  CORE TENET
                </div>
              </div>
            ))}
          </div>

          {/* Candid Expectations Callout */}
          <div className="bg-surface border-l-2 border-secondary p-space-md flex flex-col gap-1 font-mono-label text-[11px]">
            <span className="text-secondary font-bold uppercase tracking-wider">
              ETHICAL CLARIFICATION // NO UNSUPPORTED PROMISES
            </span>
            <p className="text-on-surface leading-relaxed">
              We do not make unsupported claims regarding guaranteed conversion, fixed stipends, rigid durations, or job placement guarantees. Every technical engagement is shaped individually based on project scope, mutual availability, and demonstrated engineering craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — ACADEMIA & INSTITUTIONS: WHERE ACADEMIA MEETS INDUSTRY       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              06 / ACADEMIC PARTNERSHIPS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Where Academia Meets Industry.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Encepto seeks active, transparent collaboration with universities, colleges, research institutions, faculty members, and student engineering communities. We connect mathematical theory with physical field deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* Left: Who We Collaborate With */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm font-mono-label">
                <span className="text-secondary font-bold text-[11px] uppercase tracking-wider border-b border-outline-variant pb-1">
                  INSTITUTIONAL ENGAGEMENT TARGETS
                </span>
                <ul className="flex flex-col gap-2.5 text-body-sm text-on-surface pt-1">
                  {[
                    'Universities & Technical Institutes',
                    'Engineering Colleges & Polytechnics',
                    'Research Institutions & Laboratories',
                    'Faculty Investigators & Principal PIs',
                    'Student Technical Communities',
                    'Robotics, AI & Electronics Clubs',
                    'Academic Researchers & Doctoral Candidates',
                  ].map((target, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-secondary font-bold">›</span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-container border border-dashed border-outline p-space-sm flex flex-col gap-1 font-mono-label text-[11px]">
                <span className="text-on-surface font-bold">INTEGRITY COMMITMENT</span>
                <p className="text-on-surface-variant leading-relaxed">
                  We do not fabricate institutional partner logos or publish unapproved endorsements. We evaluate collaborative opportunities transparently based on technical curiosity and clear scientific scope.
                </p>
              </div>
            </div>

            {/* Right: 8 Collaboration Formats */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              {[
                {
                  title: 'Student Internships',
                  desc: 'Hands-on technical internships working directly alongside our engineering team on active research and software challenges.',
                },
                {
                  title: 'Academic Projects',
                  desc: 'Structured curriculum-aligned technical inquiries bridging theoretical assignments with real physical edge constraints.',
                },
                {
                  title: 'Final-Year / Capstone Projects',
                  desc: 'Technical mentorship and problem formulation for undergraduate and master’s engineering theses.',
                },
                {
                  title: 'Applied Research',
                  desc: 'Joint exploration of low-bit quantization, edge neural acceleration, and sensor fusion algorithms.',
                },
                {
                  title: 'Industry-Academia Projects',
                  desc: 'Collaborative applied engineering translating university laboratory breakthroughs into physical prototypes.',
                },
                {
                  title: 'Technical Workshops',
                  desc: 'Hands-on masterclasses on embedded AI, quantization-aware training, and zero-copy computer vision pipelines.',
                },
                {
                  title: 'Research Collaboration',
                  desc: 'Co-investigation of challenging academic problems and joint authoring of peer-reviewed preprints.',
                },
                {
                  title: 'Prototyping Initiatives',
                  desc: 'Joint bench bring-up and hardware-in-the-loop testbed verification for ambitious academic teams.',
                },
              ].map((format, idx) => (
                <div
                  key={idx}
                  className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-label text-[10px] text-secondary font-bold">
                      FORMAT {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                      {format.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                      {format.desc}
                    </p>
                  </div>
                  <div className="pt-2 mt-3 border-t border-outline-variant/40 font-mono-label text-[9px] text-on-surface-variant uppercase">
                    COLLABORATION TRACK
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — STUDENT PROJECTS: BUILD SOMETHING THAT MATTERS                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              07 / STUDENT PROJECTS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Build Something That Matters.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We want to give students the tools, mentorship, and physical hardware needed to build significant technical artifacts. Depending on your interest and background, you may contribute to:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
            {[
              {
                title: 'Computer Vision',
                desc: 'Sub-pixel edge localization, optical flow tracking, multi-camera spatial sync.',
              },
              {
                title: 'AI / ML',
                desc: 'Quantization-aware training, model distillation, synthetic corner-case generators.',
              },
              {
                title: 'Edge AI',
                desc: 'Bare-metal neural compilation, sub-5W power profiles, zero-copy memory tiling.',
              },
              {
                title: 'Embedded Systems',
                desc: 'RTOS micro-kernels, register-level SPI/I2C drivers, hardware watchdog timers.',
              },
              {
                title: 'Intelligent Sensing',
                desc: 'Radiometric thermal arrays, IMU sensor fusion, acoustic noise cancellation.',
              },
              {
                title: 'Software',
                desc: 'High-throughput C++ pipelines, asynchronous POSIX daemons, telemetry loggers.',
              },
              {
                title: 'Research',
                desc: 'Attention pruning mathematics, preprint literature analysis, theoretical complexity.',
              },
              {
                title: 'Prototyping',
                desc: 'Hardware-in-the-loop testbeds, optical lens mounts, thermal burn-in jigs.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    DOMAIN {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h3 className="font-headline-md text-body-md font-bold text-on-surface">
                    {p.title}
                  </h3>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-2 mt-2 border-t border-outline-variant/40 font-mono-label text-[9px] text-on-surface-variant uppercase">
                  CONTRIBUTION SCOPE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — COLLABORATION CONNECTION (VISUAL CASCADE)                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              08 / THE COLLABORATIVE CASCADE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              How Careers Connects to Collaboration
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Careers and institutional collaboration are not isolated silos at Encepto. They form a unified, continuous cycle from academic inquiry to physical field validation.
            </p>
          </div>

          {/* Visual Step Sequence */}
          <div className="bg-surface border border-outline-variant p-space-lg flex flex-col gap-space-md">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm items-center">
              {/* Step 1 */}
              <div className="bg-surface-container p-space-md border border-outline-variant flex flex-col gap-1">
                <span className="font-mono-label text-[10px] text-secondary font-bold">STAGE 01 // INPUT</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">
                  Students + Researchers + Institutions + Encepto
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Collaborative formulation of challenging physical problems.
                </span>
              </div>

              <div className="hidden md:flex justify-center text-secondary font-bold text-xl">→</div>

              {/* Step 2 */}
              <div className="bg-surface-container p-space-md border border-outline-variant flex flex-col gap-1">
                <span className="font-mono-label text-[10px] text-secondary font-bold">STAGE 02 // LAB</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">
                  Research &amp; Experimentation
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Algorithmic benchmarks, neural tuning, and literature proofs.
                </span>
              </div>

              <div className="hidden md:flex justify-center text-secondary font-bold text-xl">→</div>

              {/* Step 3 */}
              <div className="bg-surface-container p-space-md border border-outline-variant flex flex-col gap-1">
                <span className="font-mono-label text-[10px] text-secondary font-bold">STAGE 03 // SILICON</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">
                  Prototype Bring-up
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Flashing code onto target carrier boards and testbed rigs.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm items-center pt-space-xs">
              <div className="md:col-start-2 bg-surface-container p-space-md border border-outline-variant flex flex-col gap-1">
                <span className="font-mono-label text-[10px] text-secondary font-bold">STAGE 04 // HARSH TEST</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">
                  Real-World Validation
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Chamber stress, voltage brownouts, and physical dust exposure.
                </span>
              </div>

              <div className="hidden md:flex justify-center text-secondary font-bold text-xl">→</div>

              <div className="bg-surface-container p-space-md border border-secondary flex flex-col gap-1">
                <span className="font-mono-label text-[10px] text-secondary font-bold">STAGE 05 // OUTCOME</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">
                  Knowledge &amp; Reusable Technology
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Co-authored preprints, compounding IP, and trained engineers.
                </span>
              </div>
            </div>

            <div className="pt-space-md border-t border-outline-variant flex flex-wrap items-center justify-between gap-space-md">
              <span className="font-mono-label text-[11px] text-on-surface-variant">
                WANT TO STRUCTURE A FORMAL INSTITUTIONAL COLLABORATION?
              </span>
              <Link
                to="/collaboration"
                className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider font-bold hover:bg-surface-container-highest hover:text-on-surface transition-colors flex items-center gap-1"
              >
                <span>Explore Collaboration Page</span>
                <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 — WHO SHOULD APPLY / CONNECT                                   */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              09 / CANDIDATE &amp; PARTNER PROFILES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Who Should Connect With Us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We look for individuals and institutions driven by technical curiosity, hands-on craft, and a desire to build real systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Students */}
            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">PROFILE 01</span>
                  <span className="bg-surface px-1.5 py-0.5 text-on-surface font-bold uppercase">
                    STUDENTS
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Students Who:
                </h3>
                <ul className="flex flex-col gap-2 font-mono-label text-[11px] text-on-surface-variant pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Enjoy building physical and software things</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Are interested in AI, computer vision, and engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want hands-on technical experience beyond textbooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Enjoy active experimentation and iterative problem solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want exposure to real-world edge applications</span>
                  </li>
                </ul>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface font-bold">
                DRIVEN BY CRAFTSMANSHIP
              </div>
            </div>

            {/* Researchers / Faculty */}
            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">PROFILE 02</span>
                  <span className="bg-surface px-1.5 py-0.5 text-on-surface font-bold uppercase">
                    RESEARCHERS
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Researchers / Faculty Who:
                </h3>
                <ul className="flex flex-col gap-2 font-mono-label text-[11px] text-on-surface-variant pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want applied research opportunities on real hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want structured industry-academia collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want to explore real-world AI problems and field data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Seek co-authorship on high-impact technical preprints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Desire access to specialized testing bench facilities</span>
                  </li>
                </ul>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface font-bold">
                SCIENTIFIC RIGOR
              </div>
            </div>

            {/* Institutions */}
            <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">PROFILE 03</span>
                  <span className="bg-surface px-1.5 py-0.5 text-on-surface font-bold uppercase">
                    INSTITUTIONS
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Institutions Who:
                </h3>
                <ul className="flex flex-col gap-2 font-mono-label text-[11px] text-on-surface-variant pt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want meaningful, authentic industry interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want hands-on project opportunities for their students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Want collaborative technical seminars and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Seek industry guidance for capstone project mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">›</span>
                    <span>Value transparent, mutually beneficial research IP terms</span>
                  </li>
                </ul>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface font-bold">
                INSTITUTIONAL PARTNERSHIP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13 — OPPORTUNITIES / OPENINGS (CMS-READY EMPTY STATE)             */}
      {/* ========================================================================= */}
      <section id="opportunities" className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <div className="flex items-center gap-space-xs font-mono-label text-mono-label">
              <span className="text-secondary uppercase font-bold tracking-widest">
                10 / LISTINGS &amp; INQUIRIES
              </span>
              <span className="bg-surface px-space-xs py-0.5 text-on-surface font-bold text-[10px] uppercase">
                CMS-READY
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Current Opportunities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We list specific student internships, research fellowships, and technical project positions as new experimental cycles open.
            </p>
          </div>

          {/* CMS Render Loop / Polished Empty State */}
          {currentOpenings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {currentOpenings.map((op) => (
                <div key={op.id} className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-label text-[10px] text-secondary font-bold uppercase">{op.type} · {op.area}</span>
                    <h3 className="font-headline-md text-body-lg font-bold text-on-surface">{op.position}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{op.description}</p>
                  </div>
                  <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 flex items-center justify-between">
                    <span className="font-mono-label text-[10px] text-on-surface-variant">{op.location}</span>
                    <Link to="/contact" className="font-mono-label text-[10px] text-secondary font-bold uppercase hover:underline">Apply</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-outline-variant p-space-xl flex flex-col items-center justify-center text-center gap-space-md font-mono-label">
              <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center text-secondary">
                <MaterialIcon name="folder_open" className="text-[24px]" />
              </div>
              <div className="flex flex-col gap-1 max-w-lg">
                <span className="text-body-md text-on-surface font-bold uppercase tracking-wider">
                  Opportunities will be listed here as they become available.
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed font-normal">
                  Our lab takes in students and research collaborators in focused, high-attention cohorts. If you are an exceptional student or researcher interested in embedded AI, computer vision, or sensing systems, you do not need to wait for a public vacancy.
                </p>
              </div>

              <div className="pt-space-xs flex flex-wrap items-center justify-center gap-space-sm">
                <Link
                  to="/contact"
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider font-bold hover:bg-surface-container-highest hover:text-on-surface transition-colors flex items-center gap-1"
                >
                  <span>Send an Enquiry</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </Link>
                <Link
                  to="/collaboration"
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider font-bold hover:bg-surface-container-highest transition-colors"
                >
                  Institutional Inquiries
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 14 — FINAL CTA                                                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container border-b border-outline-variant transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              11 / GET INVOLVED
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Ready to build beyond the lab?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether you're a student, researcher or institution, let's explore what we can build together.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm">
            <button
              onClick={scrollToOpportunities}
              type="button"
              className="px-space-md py-space-sm bg-surface text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-high transition-colors font-bold flex items-center gap-1"
            >
              <span>Explore Opportunities</span>
              <MaterialIcon name="arrow_downward" className="text-[14px]" />
            </button>
            <Link
              className="px-space-md py-space-sm bg-surface-container-high text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
              to="/collaboration"
            >
              Collaborate With Encepto
            </Link>
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Contact Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Also export as Careers for flexible naming convention
export const Careers = CareersPage;
export default CareersPage;
