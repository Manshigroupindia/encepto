import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 8 Student Work Disciplines
interface Discipline {
  id: string;
  num: string;
  title: string;
  tagline: string;
  focus: string;
  handsOnTasks: string[];
  toolsAndConcepts: string;
}

const studentDisciplines: Discipline[] = [
  {
    id: 'research',
    num: '01',
    title: 'Research',
    tagline: 'Literature dissection & algorithmic experimentation',
    focus: 'Investigating emerging neural architectures, low-bit numerical representations, and sparsity techniques for constrained hardware.',
    handsOnTasks: [
      'Dissecting preprints in vision-language models and attention pruning',
      'Implementing experimental loss functions and evaluating Pareto trade-offs',
      'Profiling memory access bottlenecks in novel transformer blocks',
    ],
    toolsAndConcepts: 'PyTorch · Model Quantization · Attention Pruning · Theoretical Complexity',
  },
  {
    id: 'computer-vision',
    num: '02',
    title: 'Computer Vision',
    tagline: 'High-speed spatial perception & sub-pixel geometry',
    focus: 'Developing algorithms for high-speed edge defect detection, feature tracking, and multi-camera optical calibration.',
    handsOnTasks: [
      'Building zero-copy frame ingestion pipelines from raw MIPI CSI-2 streams',
      'Writing custom CUDA / OpenCV kernels for sub-pixel boundary detection',
      'Calibrating optical distortion on custom multi-camera mounting rigs',
    ],
    toolsAndConcepts: 'OpenCV · C++ · CUDA · Spatial Geometry · Optical Flow Tracking',
  },
  {
    id: 'aiml',
    num: '03',
    title: 'AI / Machine Learning',
    tagline: 'Quantization-aware training & compact representations',
    focus: 'Training neural networks tailored to specific edge environments, incorporating quantization-aware training and synthetic data pipelines.',
    handsOnTasks: [
      'Training INT8 and INT4 quantized neural networks with minimal accuracy loss',
      'Generating synthetic corner-case edge scenarios to harden model invariance',
      'Evaluating cross-entropy distribution shifts on field telemetry logs',
    ],
    toolsAndConcepts: 'PyTorch · ONNX · TensorRT · Quantization-Aware Training (QAT)',
  },
  {
    id: 'software-eng',
    num: '04',
    title: 'Software Engineering',
    tagline: 'High-throughput pipelines & deterministic execution',
    focus: 'Architecting zero-page-fault runtime software, deterministic IPC mechanisms, and robust embedded telemetry agents.',
    handsOnTasks: [
      'Writing high-performance asynchronous data pipelines in modern C++ and Rust',
      'Implementing circular ring buffers for zero-copy inter-process communication',
      'Developing low-overhead embedded diagnostics and watchdog daemon services',
    ],
    toolsAndConcepts: 'Modern C++20 · Rust · Linux Systems Programming · Zero-Copy IPC · POSIX',
  },
  {
    id: 'embedded-ai',
    num: '05',
    title: 'Embedded / Edge AI',
    tagline: 'Bare-metal silicon kernels & sub-5W runtime budgets',
    focus: 'Mapping neural graphs onto embedded NPUs, micro-DSPs, and low-power microcontrollers with tight memory and power bounds.',
    handsOnTasks: [
      'Profiling SRAM cache misses and DRAM bus contention on edge SoCs',
      'Compiling neural graphs for target silicon acceleration runtimes',
      'Measuring instantaneous current draw during sustained neural inference loops',
    ],
    toolsAndConcepts: 'ARM Cortex-M/A · Edge NPUs · Embedded Linux · RTOS · Thermal Profiling',
  },
  {
    id: 'intelligent-sensing',
    num: '06',
    title: 'Intelligent Sensing',
    tagline: 'Multi-modal synchronization & physical signal conditioning',
    focus: 'Interfacing heterogeneous sensors—optical, radiometric thermopiles, inertial IMUs, and acoustics—with microsecond synchronization.',
    handsOnTasks: [
      'Writing low-level hardware drivers for I2C, SPI, and MIPI CSI-2 bridges',
      'Implementing temporal Kalman filters to fuse optical and inertial streams',
      'Filtering high-frequency electrical and acoustic noise in harsh factory settings',
    ],
    toolsAndConcepts: 'Sensor Drivers · Kalman Filtering · MIPI CSI-2 · CAN Bus · Signal Conditioning',
  },
  {
    id: 'prototyping',
    num: '07',
    title: 'Prototyping',
    tagline: 'Rapid hardware-in-the-loop bring-up & bench testing',
    focus: 'Assembling and flashing operational bench testbeds, integrating camera modules with carrier boards, and verifying end-to-end signal flow.',
    handsOnTasks: [
      'Bringing up custom carrier boards and verifying power rail stability',
      'Fabricating test fixtures and optical alignment jigs for lab validation',
      'Executing automated regression test suites on connected testbed rigs',
    ],
    toolsAndConcepts: 'Hardware-in-the-Loop (HIL) · Oscilloscopes · Logic Analyzers · Test Jigs',
  },
  {
    id: 'testing-validation',
    num: '08',
    title: 'Testing & Validation',
    tagline: 'Environmental stress testing & corner-case verification',
    focus: 'Subjecting edge software and models to simulated real-world stresses: thermal chambers, voltage brownouts, and sensor occlusion.',
    handsOnTasks: [
      'Simulating ambient dust, lighting flickers, and optical vibration on active models',
      'Measuring thermal throttling thresholds in 55°C environmental test chambers',
      'Validating deterministic fail-safe triggers during power supply dropouts',
    ],
    toolsAndConcepts: 'Thermal Chambers · Fault Injection · Automated CI/CD Testing · Stress Profiling',
  },
];

// Why Work With Encepto Principles
const philosophyPrinciples = [
  {
    num: '01',
    title: 'Real Problems',
    tagline: 'Practical engineering over toy benchmarks.',
    desc: 'You will work on messy, physical-world challenges—where lighting shifts violently, dust obscures lenses, and power budgets are tight. No sanitized synthetic benchmark exercises.',
  },
  {
    num: '02',
    title: 'Hands-On Experience',
    tagline: 'Build, flash, and test directly on silicon.',
    desc: 'True engineering intuition is built with oscilloscopes, memory debuggers, target carrier boards, and physical cameras, not by passively watching lectures.',
  },
  {
    num: '03',
    title: 'Research Meets Deployment',
    tagline: 'Bridge algorithmic theory with physical execution.',
    desc: 'Learn how mathematical papers translate into deterministic INT8 instructions executing within sub-5W power budgets under real physical constraints.',
  },
  {
    num: '04',
    title: 'Learn By Building',
    tagline: 'Deep intuition through active craftsmanship.',
    desc: 'We value curious minds who want to write code, profile bottlenecks, dismantle failure modes, and iteratively refine physical and algorithmic systems.',
  },
  {
    num: '05',
    title: 'Build Reusable Knowledge',
    tagline: 'Contribute to lasting engineering artifacts.',
    desc: 'Work on foundational software modules, experimental benchmarks, and open research insights that endure and compound over time.',
  },
];

export const CareersPage: React.FC = () => {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('computer-vision');

  const selectedDiscipline =
    studentDisciplines.find((d) => d.id === selectedDisciplineId) || studentDisciplines[1];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO: TALENT, ACADEMIA & STUDENT COLLABORATION               */}
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
              <span>// ACADEMIC &amp; STUDENT COLLABORATION</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">ETHOS: REAL-WORLD CRAFT</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                BEYOND CERTIFICATES
              </span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 font-mono-label text-[11px] text-secondary font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                Hands-On Engineering · Applied AI · Real Constraints
              </div>

              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Build. Research. <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">
                  Learn. Deploy.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto creates opportunities for students, researchers, and aspiring engineers to work on real-world AI engineering problems—bridging algorithmic exploration with actual hardware-constrained deployment.
              </p>

              {/* Ethos Statement Box */}
              <div className="bg-surface-container border-l-2 border-secondary p-space-md flex flex-col gap-1.5">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  OUR PHILOSOPHY ON TALENT &amp; INTERNSHIPS
                </span>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  We are not a generic corporate recruiter, nor do we run certificate factories. We offer hands-on immersion into practical AI and deep-tech engineering—where you get your hands dirty with real sensor feeds, quantized neural architectures, and embedded edge compute.
                </p>
                <div className="font-mono-label text-[10px] text-on-surface-variant pt-1">
                  CORE TENET: MEASURED TECHNICAL MERIT OVER EMPTY CREDENTIALS.
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/contact"
                >
                  <span>Explore Opportunities</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/collaboration"
                >
                  Institutional Collaboration
                </Link>
              </div>
            </div>

            {/* Right: Technical Engineering Visual Panel */}
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
                      <span className="text-secondary font-bold">MODE: APPLIED LAB</span>
                      <span>ENV: EDGE LINUX / RTOS</span>
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">Physical Sensor Streams</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">MIPI CSI-2 Cameras · Micro-IMUs · Radiometric Thermopiles</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↓ (Direct Code Access)</div>

                  <div className="bg-surface p-2.5 border border-secondary">
                    <div className="flex items-center justify-between text-[10px] text-secondary font-bold">
                      <span>INFERENCE COMPRESSION</span>
                      <span>INT8 / INT4 QAT</span>
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">Hardware-Aware Neural Kernels</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Zero-copy ring buffers · Layer fusion · Memory layout tuning</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↓ (Bench Verification)</div>

                  <div className="bg-surface p-2.5 border border-outline-variant">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span className="font-bold">BENCH STRESS HARNESS</span>
                      <span>FIELD CONDITIONS</span>
                    </div>
                    <div className="font-bold text-on-surface mt-0.5">Thermal &amp; Power Invariance</div>
                    <div className="text-[10px] text-on-surface-variant mt-0.5">Sustained burn-in at 55°C · Voltage dropouts · Optical blur</div>
                  </div>
                </div>

                <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex justify-between">
                  <span>GOAL: ENGINEERING MASTERY</span>
                  <span className="text-secondary font-bold">GENUINE IMPACT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — WHY WORK WITH ENCEPTO (PHILOSOPHY)                           */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / ENGINEERING PHILOSOPHY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Why Work With Encepto
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We operate as a deep-tech engineering lab. We do not promise guaranteed corporate placements or automated certifications; we offer a rigorous, honest environment where engineers and students learn how real-world deep technology is built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {philosophyPrinciples.map((item) => (
              <div
                key={item.num}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    {item.num} // CORE PRINCIPLE
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono-label text-[11px] text-secondary font-bold">
                    {item.tagline}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                  ENGINEERING MINDSET
                </div>
              </div>
            ))}

            {/* Note on Expectations */}
            <div className="bg-surface-container border border-dashed border-outline p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-on-surface-variant font-bold uppercase">
                  IMPORTANT CLARIFICATION
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Honest Expectations
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We do not promise guaranteed full-time employment, placement guarantees, or standardized certificate milestones. What we promise is access to hard technical problems, direct mentorship from deep-tech engineers, and a space to build real capability.
                </p>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface font-bold">
                CANDOR OVER MARKETING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — ACADEMIA & INSTITUTIONAL COLLABORATION                       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / ACADEMIC CONNECTIONS
            </span>
            <h2 className="font-display-hero-mobile sm:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Where Academia Meets Real-World Engineering.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We bridge theoretical academia with real-world deployment constraints. We actively seek meaningful collaboration with universities, colleges, research labs, faculty members, and student engineering communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* Left: Who We Collaborate With */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col gap-space-sm font-mono-label">
                <span className="text-secondary font-bold text-[11px] uppercase tracking-wider border-b border-outline-variant pb-1">
                  WHO WE COLLABORATE WITH
                </span>
                <ul className="flex flex-col gap-2.5 text-body-sm text-on-surface pt-1">
                  {[
                    'Universities & Technical Institutes',
                    'Engineering Colleges & Polytechnics',
                    'Research Laboratories & Faculty Investigators',
                    'Student Robotics & AI Clubs',
                    'Postgraduate & Doctoral Researchers',
                    'Student Technical Communities',
                  ].map((target, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-secondary font-bold">›</span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-container-high border-l-2 border-secondary p-space-sm flex flex-col gap-1 font-mono-label text-[11px]">
                <span className="text-secondary font-bold">ETHICAL PARTNERSHIP NOTE</span>
                <p className="text-on-surface-variant leading-relaxed">
                  We do not fabricate institutional logos or claim partnerships that do not exist. We evaluate collaborative opportunities transparently based on mutual technical curiosity and clear research scope.
                </p>
              </div>
            </div>

            {/* Right: Collaboration Formats */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              {[
                {
                  title: 'Student Internships',
                  desc: 'Hands-on technical internships working directly alongside our engineering team on active research and software challenges.',
                },
                {
                  title: 'Joint Research Projects',
                  desc: 'Collaborative applied research evaluating novel quantization, sensor fusion, and on-device VLM architectures.',
                },
                {
                  title: 'Industry-Academia Projects',
                  desc: 'Structured applied engineering initiatives translating university research breakthroughs into field-tested prototypes.',
                },
                {
                  title: 'Technical Workshops',
                  desc: 'Deep-dive masterclasses on embedded AI, quantization-aware training, and zero-copy computer vision pipelines.',
                },
                {
                  title: 'Capstone / Final-Year Projects',
                  desc: 'Technical mentorship and problem formulation for undergraduate and master’s engineering theses.',
                },
                {
                  title: 'Applied AI Experimentation',
                  desc: 'Open testbed experimentation validating algorithmic behavior on real physical edge sensor feeds.',
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
      {/* SECTION 04 — STUDENT INTERNSHIPS: REAL HANDS-ON EXPERIENCE                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / STUDENT OPPORTUNITIES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Internships With Real Hands-On Experience.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our internships are engineered around genuine technical contributions. You will write code that touches physical sensors, optimize neural kernels that fit inside constrained SRAM, and witness how models behave when subjected to environmental noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              {
                num: '01',
                title: 'Code on Real Silicon',
                desc: 'Flash code onto physical edge processors—ARM Cortex, NVIDIA Jetson, Intel NPUs—and profile memory, latency, and thermals.',
              },
              {
                num: '02',
                title: 'Direct Mentorship',
                desc: 'Work directly with senior engineers and researchers who care about low-level system design and algorithmic rigor.',
              },
              {
                num: '03',
                title: 'Actual Physical Sensors',
                desc: 'Capture and process raw pixels from MIPI CSI-2 cameras, IMUs, and radiometric arrays rather than pre-packaged CSV files.',
              },
              {
                num: '04',
                title: 'Engineering Rigor',
                desc: 'Learn how to write deterministic, fault-tolerant C++, Rust, and Python that can survive unattended in harsh physical environments.',
              },
            ].map((card) => (
              <div
                key={card.num}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    {card.num} // REAL EXPERIENCE
                  </span>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                    {card.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-2 mt-3 border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant">
                  NO BUSYWORK · DIRECT SYSTEM WORK
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface border border-outline-variant p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md font-mono-label text-[11px]">
            <div className="flex items-center gap-2 text-on-surface">
              <span className="w-2 h-2 bg-secondary inline-block"></span>
              <span>SELECTION BASIS: DEMONSTRATED TECHNICAL CURIOSITY, SOLID CODE BASICS &amp; DESIRE TO BUILD.</span>
            </div>
            <Link
              to="/contact"
              className="text-secondary font-bold uppercase hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              <span>Submit Profile &amp; Project Links</span>
              <MaterialIcon name="arrow_forward" className="text-[12px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — WHAT STUDENTS CAN WORK ON (CAPABILITY GRID)                  */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              05 / CAPABILITY DOMAINS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              What Students &amp; Researchers Can Work On
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Explore the technical disciplines where interns and research collaborators contribute actively. Click any discipline to inspect specific tasks and tooling.
            </p>
          </div>

          {/* Discipline Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-xs border-y border-outline-variant py-space-xs">
            {studentDisciplines.map((d) => {
              const active = d.id === selectedDisciplineId;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDisciplineId(d.id)}
                  type="button"
                  className={`p-2 text-left font-mono-label text-[10px] uppercase transition-all flex flex-col justify-between min-h-[64px] ${
                    active
                      ? 'bg-primary text-on-primary font-bold'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  <span className={active ? 'text-secondary-fixed' : 'text-secondary font-bold'}>{d.num}</span>
                  <span className="truncate font-bold">{d.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Discipline Deep Dive */}
          <div className="bg-surface-container border border-outline-variant p-space-lg flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-bold">{selectedDiscipline.num} // DOMAIN FOCUS</span>
                <span className="text-on-surface-variant">/</span>
                <span className="text-on-surface font-bold uppercase">{selectedDiscipline.title}</span>
              </div>
              <span className="bg-surface px-space-xs py-0.5 text-on-surface font-bold text-[10px]">
                {selectedDiscipline.tagline}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-6 flex flex-col gap-space-sm">
                <span className="font-mono-label text-mono-label text-secondary font-bold uppercase">
                  OVERVIEW &amp; CHALLENGES
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {selectedDiscipline.focus}
                </h3>
                <div className="mt-space-sm bg-surface p-space-md border border-outline-variant flex flex-col gap-1 font-mono-label">
                  <span className="text-[10px] text-secondary font-bold uppercase">
                    TYPICAL CONCEPTS &amp; TOOLCHAIN
                  </span>
                  <span className="text-body-sm text-on-surface font-medium">
                    {selectedDiscipline.toolsAndConcepts}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">REPRESENTATIVE HANDS-ON TASKS</span>
                  <span className="text-on-surface-variant">TECHNICAL SCOPE</span>
                </div>

                <ul className="flex flex-col gap-3 font-mono-label text-[11px] text-on-surface pt-1">
                  {selectedDiscipline.handsOnTasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-secondary mt-1.5 inline-block shrink-0"></span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — CAREERS / COLLABORATION DUAL CTA                             */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container border-b border-outline-variant transition-colors">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* For Students Card */}
          <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                FOR STUDENTS &amp; ASPIRING ENGINEERS
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">
                Ready to build real systems?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                If you have a strong grasp of fundamentals, curiosity about edge computing and computer vision, and a desire to build things that work in the physical world, tell us about yourself.
              </p>
            </div>
            <div className="pt-space-lg">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider font-bold hover:bg-surface-container-highest hover:text-on-surface transition-colors"
              >
                <span>Explore Opportunities</span>
                <MaterialIcon name="arrow_forward" className="text-[16px] ml-1" />
              </Link>
            </div>
          </div>

          {/* For Institutions Card */}
          <div className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                FOR UNIVERSITIES &amp; FACULTY
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">
                Collaborate with our lab
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We partner with academic institutions for student projects, joint applied research, capstones, and technical workshops. Let’s connect theory with physical field deployment.
              </p>
            </div>
            <div className="pt-space-lg">
              <Link
                to="/collaboration"
                className="inline-flex items-center justify-center px-space-md py-space-sm bg-surface-container-high text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider font-bold hover:bg-surface-container-highest transition-colors"
              >
                <span>Collaborate With Encepto</span>
                <MaterialIcon name="arrow_forward" className="text-[16px] ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
