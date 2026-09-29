import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// Collaboration Model Stages
interface CollabStage {
  id: number;
  step: string;
  name: string;
  tagline: string;
  focus: string;
  actions: string[];
  deliverable: string;
}

const collabStages: CollabStage[] = [
  {
    id: 1,
    step: 'STAGE 01',
    name: 'Identify Problem',
    tagline: 'Pinpointing hard technical bottlenecks with real-world significance',
    focus: 'Jointly formulating a concrete physical or algorithmic challenge where academic exploration meets an industrial or deployment hurdle.',
    actions: [
      'Audit physical constraints: thermal, optical, power, and deterministic latency',
      'Review existing academic literature and identify practical deployment gaps',
      'Define clear failure modes and baseline performance metrics',
    ],
    deliverable: 'Joint Problem Formulation Document',
  },
  {
    id: 2,
    step: 'STAGE 02',
    name: 'Define Scope',
    tagline: 'Structuring research milestones, compute targets & IP transparency',
    focus: 'Establishing transparent timelines, computational resource allocations, testing methodologies, and intellectual property terms before beginning work.',
    actions: [
      'Specify target silicon architectures (e.g. ARM Cortex, NPU, DSP, Jetson)',
      'Establish open publication boundaries and scientific integrity guidelines',
      'Allocate student/researcher roles, hardware testbeds, and mentorship checkpoints',
    ],
    deliverable: 'Collaboration Scope & Charter',
  },
  {
    id: 3,
    step: 'STAGE 03',
    name: 'Collaborate',
    tagline: 'Synchronized weekly engineering syncs & shared codebases',
    focus: 'Active side-by-side engineering between Encepto researchers and academic investigators or student teams.',
    actions: [
      'Regular technical syncs focusing on algorithmic proofs and code profiling',
      'Continuous sharing of synthetic test datasets and physical edge sensor logs',
      'Direct peer reviews of model code, kernel optimizations, and mathematics',
    ],
    deliverable: 'Shared Repository & Research Workspace',
  },
  {
    id: 4,
    step: 'STAGE 04',
    name: 'Build / Experiment',
    tagline: 'Algorithmic iteration, model training & bench bring-up',
    focus: 'Developing experimental architectures, training quantization-aware models, and flashing code directly onto physical hardware testbeds.',
    actions: [
      'Implement candidate neural topologies and novel loss functions',
      'Execute hardware-in-the-loop benchmarking on physical carrier boards',
      'Measure cycle counts, SRAM cache misses, and instantaneous milliwatts',
    ],
    deliverable: 'Functional Proof-of-Concept & Benchmark Code',
  },
  {
    id: 5,
    step: 'STAGE 05',
    name: 'Validate',
    tagline: 'Environmental stress testing against real noise and physics',
    focus: 'Testing prototypes beyond pristine laboratory conditions, simulating optical blur, vibration, and thermal fluctuations.',
    actions: [
      'Subject software to environmental chamber testing and sensor jitter',
      'Evaluate model robustness against adversarial and out-of-distribution inputs',
      'Verify deterministic fail-safe triggers and safety watchdog behaviors',
    ],
    deliverable: 'Empirical Validation & Stress Report',
  },
  {
    id: 6,
    step: 'STAGE 06',
    name: 'Learn',
    tagline: 'Synthesizing scientific insights & documenting discoveries',
    focus: 'Distilling experimental outcomes into academic preprints, conference submissions, or internal engineering reference architectures.',
    actions: [
      'Synthesize empirical results into co-authored academic preprints or papers',
      'Conduct institutional knowledge exchange sessions and student presentations',
      'Document unexpected edge-case phenomena and negative results honestly',
    ],
    deliverable: 'Preprint / Whitepaper / Knowledge Base Article',
  },
  {
    id: 7,
    step: 'STAGE 07',
    name: 'Continue / Deploy',
    tagline: 'Transitioning prototypes into production systems or future research',
    focus: 'Charting next-generation research arcs or hardening successful prototypes into field-deployable modular assets.',
    actions: [
      'Transition validated algorithms into Encepto’s production edge runtimes',
      'Formulate subsequent research grants or second-phase capstones',
      'Engage contributing students for extended research fellows or engineers',
    ],
    deliverable: 'Modular Edge Package & Follow-on Roadmap',
  },
];

// 5 Collaboration Areas
const collaborationAreas = [
  {
    num: '01',
    title: 'Academic Institutions',
    tagline: 'Industry-academia collaboration around applied AI and engineering',
    desc: 'We partner with universities, polytechnics, and engineering departments to connect theoretical coursework with physical edge deployments. We participate in departmental seminars, advise on practical deep-tech curricula, and sponsor hands-on student technical initiatives.',
    pillars: [
      'Departmental guest lectures on embedded AI and zero-copy computer vision',
      'Access to real-world edge problem statements for academic study',
      'Advisory on laboratory equipment and edge compute bench setups',
    ],
  },
  {
    num: '02',
    title: 'Research Collaboration',
    tagline: 'Joint exploration of technical problems and applied research',
    desc: 'For faculty members, principal investigators, and doctoral researchers pursuing breakthroughs in low-bit neural quantization, multimodal vision-language models, and sensor fusion, we offer real-world testbeds, field data, and hardware acceleration co-investigation.',
    pillars: [
      'Co-investigation of attention pruning and sub-watt transformer execution',
      'Joint preparation of peer-reviewed preprints and research papers',
      'Silicon benchmarking of novel mathematical formulations on edge hardware',
    ],
  },
  {
    num: '03',
    title: 'Student Programs',
    tagline: 'Internships, hands-on projects and practical exposure',
    desc: 'We welcome passionate undergraduate and postgraduate students into our lab for intensive technical internships. Students work directly with production sensor streams and compiled neural runtimes, building genuine systems craftsmanship rather than collecting vanity certificates.',
    pillars: [
      'Hands-on internships working directly on target silicon carrier boards',
      'One-on-one technical mentorship from deep-tech software and AI engineers',
      'Direct exposure to physical environment constraints: dust, thermals, and jitter',
    ],
  },
  {
    num: '04',
    title: 'Technical Projects',
    tagline: 'Capstone projects, prototypes and real-world engineering challenges',
    desc: 'We mentor student teams working on final-year engineering capstones, bachelor theses, and robotics club competitions. We provide problem definitions grounded in physical realities, code reviews, and testing hardware access.',
    pillars: [
      'Mentorship for capstone teams in computer vision, robotics, and edge AI',
      'Guidance on hardware-in-the-loop validation and reproducible testing',
      'Support for open-source technical student robotics and vision projects',
    ],
  },
  {
    num: '05',
    title: 'Workshops & Knowledge Exchange',
    tagline: 'Technical sessions, demonstrations and collaborative learning',
    desc: 'We conduct hands-on technical masterclasses for students and researchers. Topics include bare-metal RTOS inference, zero-copy MIPI CSI-2 frame ingestion, quantization-aware training in PyTorch, and deterministic systems programming in C++ and Rust.',
    pillars: [
      'Live code-and-compile workshops on edge developer kits',
      'Technical deep dives into real-world failure modes and post-mortems',
      'Interactive demonstrations of optical alignment and radiometric calibration',
    ],
  },
];

export const CollaborationPage: React.FC = () => {
  const [activeModelId, setActiveModelId] = useState<number>(1);
  const currentStage = collabStages.find((s) => s.id === activeModelId) || collabStages[0];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO                                                         */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / COLLABORATION</span>
              <span>// ACADEMIA, INSTITUTIONS &amp; RESEARCH</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">ETHOS: SCIENTIFIC INTEGRITY</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                OPEN RESEARCH EXCHANGE
              </span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 font-mono-label text-[11px] text-secondary font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                Encepto + Academia + Institutions + Researchers + Students
              </div>

              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Building together <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">
                  beyond the lab.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Deep-tech innovation accelerates when theoretical academic rigor connects with real-world engineering constraints. Encepto collaborates with universities, research institutions, faculty investigators, and students to solve applied AI and embedded sensing challenges together.
              </p>

              {/* Multi-Party Equation Banner */}
              <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col gap-2 font-mono-label">
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">
                  COLLABORATIVE ECOSYSTEM
                </span>
                <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-on-surface py-1">
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Encepto</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Academia</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Institutions</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Researchers</span>
                  <span className="text-secondary">+</span>
                  <span className="bg-surface px-2 py-1 border border-outline-variant">Students</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Transparent, mutually beneficial partnerships centered on reproducible code, rigorous validation, and compounding technical knowledge.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/contact"
                >
                  <span>Collaborate With Us</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/careers"
                >
                  Explore Careers &amp; Internships
                </Link>
              </div>
            </div>

            {/* Right: Technical Collaboration Diagram */}
            <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-space-md relative overflow-hidden font-mono-label">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

              <div className="relative z-10 flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                  <span className="text-secondary font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    COLLABORATION INTERFACE ARCHITECTURE
                  </span>
                  <span className="text-on-surface-variant">MUTUAL VALUE</span>
                </div>

                <div className="flex flex-col gap-2 pt-1 text-body-sm">
                  <div className="bg-surface p-2.5 border border-outline-variant flex flex-col gap-0.5">
                    <div className="flex items-center justify-between text-[10px] text-secondary font-bold">
                      <span>ACADEMIC FOUNDATION</span>
                      <span>THEORETICAL RIGOR</span>
                    </div>
                    <div className="font-bold text-on-surface">Mathematical &amp; Algorithmic Research</div>
                    <div className="text-[10px] text-on-surface-variant">Novel attention formulations, loss theorems &amp; doctoral theses</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↕ (Bi-Directional Exchange)</div>

                  <div className="bg-surface p-2.5 border border-secondary flex flex-col gap-0.5">
                    <div className="flex items-center justify-between text-[10px] text-secondary font-bold">
                      <span>ENCEPTO ENGINEERING LAB</span>
                      <span>SILICON INTEGRATION</span>
                    </div>
                    <div className="font-bold text-on-surface">Physical Testbeds &amp; Edge Hardware</div>
                    <div className="text-[10px] text-on-surface-variant">Thermal chambers, optical benches, INT8 compilers &amp; real field data</div>
                  </div>

                  <div className="flex justify-center text-secondary text-[11px] font-bold">↕ (Applied Outcome)</div>

                  <div className="bg-surface p-2.5 border border-outline-variant flex flex-col gap-0.5">
                    <div className="flex items-center justify-between text-[10px] text-on-surface-variant">
                      <span className="font-bold text-on-surface">COMPOUNDING RESULTS</span>
                      <span>MEASURED IMPACT</span>
                    </div>
                    <div className="font-bold text-on-surface">Publications, Prototypes &amp; Trained Talent</div>
                    <div className="text-[10px] text-on-surface-variant">Preprints, capstone artifacts, open benchmarks &amp; field-ready systems</div>
                  </div>
                </div>

                <div className="pt-space-xs border-t border-outline-variant text-[10px] text-on-surface-variant flex justify-between">
                  <span>IP TERMS: TRANSPARENT &amp; FAIR</span>
                  <span className="text-secondary font-bold">OPEN ENGAGEMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — COLLABORATION AREAS                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / ENGAGEMENT TRACKS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Five Areas of Collaboration
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We structure institutional and academic engagements around five core areas, tailored to the goals of researchers, faculty members, and student engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {collaborationAreas.map((area) => (
              <div
                key={area.num}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">{area.num} // ENGAGEMENT TRACK</span>
                    <span className="bg-surface-container px-1.5 py-0.5 text-on-surface-variant font-bold uppercase">
                      ACTIVE
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    {area.title}
                  </h3>

                  <p className="font-mono-label text-[11px] text-secondary font-bold">
                    {area.tagline}
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {area.desc}
                  </p>

                  <div className="pt-space-sm border-t border-outline-variant/60 flex flex-col gap-1.5 font-mono-label text-[10px] text-on-surface">
                    <span className="text-secondary font-bold uppercase">KEY ENGAGEMENT ELEMENTS:</span>
                    {area.pillars.map((pil, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-secondary">›</span>
                        <span>{pil}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 flex items-center justify-between font-mono-label text-[10px]">
                  <span className="text-on-surface-variant">INSTITUTIONAL PATH</span>
                  <Link
                    to="/contact"
                    className="text-secondary font-bold uppercase hover:underline flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <MaterialIcon name="arrow_forward" className="text-[12px]" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Academic Integrity Callout */}
            <div className="bg-surface-container border border-dashed border-outline p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-on-surface-variant font-bold uppercase">
                  TRANSPARENCY NOTE
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Scientific Integrity
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We do not manufacture artificial partnerships, claim non-existent institutional endorsements, or treat academic collaborations as marketing ploys. Every engagement is evaluated on mutual technical rigor, student learning outcomes, and reproducible engineering truth.
                </p>
              </div>
              <div className="pt-space-sm mt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface font-bold">
                EVALUATION BASED ON RIGOR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — COLLABORATION MODEL (VISUAL FLOW)                             */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / COLLABORATION MODEL
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              The Collaborative R&amp;D Progression
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              How academic inquiry and deep-tech engineering align systematically—from initial problem discovery through joint validation and scientific dissemination.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs border-y border-outline-variant py-space-sm">
            {collabStages.map((stage) => {
              const isSelected = stage.id === activeModelId;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveModelId(stage.id)}
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
                      setActiveModelId(stage.id);
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

          {/* Detailed Stage Card */}
          <div className="bg-surface-container border border-outline-variant p-space-lg flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant pb-space-sm font-mono-label text-mono-label">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-bold">{currentStage.step} // STAGE SPEC</span>
                <span className="text-on-surface-variant">/</span>
                <span className="text-on-surface font-bold uppercase">{currentStage.name}</span>
              </div>
              <span className="bg-surface px-space-xs py-0.5 text-on-surface font-bold text-[10px]">
                OUTPUT: {currentStage.deliverable}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-6 flex flex-col gap-space-sm">
                <span className="font-mono-label text-mono-label text-secondary font-bold uppercase">
                  {currentStage.tagline}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {currentStage.focus}
                </h3>
                <div className="mt-space-sm bg-surface p-space-md border border-outline-variant flex flex-col gap-1 font-mono-label">
                  <span className="text-[10px] text-secondary font-bold uppercase">
                    COLLABORATION GATE DELIVERABLE
                  </span>
                  <span className="text-body-sm text-on-surface font-medium">
                    {currentStage.deliverable}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md flex flex-col gap-space-sm">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs font-mono-label text-[10px]">
                  <span className="text-secondary font-bold">KEY ACTIONS &amp; METHODOLOGY</span>
                  <span className="text-on-surface-variant">JOINT EXECUTION</span>
                </div>

                <ul className="flex flex-col gap-2.5 font-mono-label text-[11px] text-on-surface pt-1">
                  {currentStage.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">›</span>
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — WHY COLLABORATE WITH ENCEPTO                                  */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              04 / MUTUAL VALUE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Why Collaborate With Encepto?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We provide what typical academic settings often lack—access to hardened physical edge hardware, harsh field telemetry, and the discipline of deploying systems that cannot rely on cloud connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">01 // HARDWARE ACCESS</span>
                <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Real Silicon Testbeds</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We give researchers and student teams direct access to target carrier boards, edge NPUs, MIPI CSI-2 optical rigs, and thermal testing instrumentation.
                </p>
              </div>
              <div className="pt-2 mt-4 border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant">
                PHYSICAL COMPUTING ENVELOPES
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">02 // FIELD REALITIES</span>
                <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Real Physical Constraints</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Experience firsthand how algorithms behave when exposed to 55°C heat, particulate dust, severe optical vibrations, and brownouts on active machinery.
                </p>
              </div>
              <div className="pt-2 mt-4 border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant">
                BEYOND PRISTINE BENCHMARKS
              </div>
            </div>

            <div className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold">03 // SHARED KNOWLEDGE</span>
                <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Compounding Knowledge</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We believe in building lasting engineering artifacts, co-authoring scientific preprints, and developing foundational software that benefits the wider technical ecosystem.
                </p>
              </div>
              <div className="pt-2 mt-4 border-t border-outline-variant/60 font-mono-label text-[9px] text-on-surface-variant">
                SCIENTIFIC &amp; INDUSTRIAL IMPACT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — COLLABORATION CTA                                            */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container border-b border-outline-variant transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              05 / GET IN TOUCH
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Have an idea worth building together?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether you are an academic researcher proposing an applied AI inquiry, a faculty head interested in workshops, or a student team with an ambitious capstone, our lab is open to serious technical collaboration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm">
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Collaborate With Us</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-high transition-colors font-bold"
              to="/careers"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
