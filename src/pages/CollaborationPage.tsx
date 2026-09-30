import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 4 Participant Categories
const participants = [
  { name: 'ACADEMIA', desc: 'Universities & engineering departments', icon: 'school' },
  { name: 'RESEARCHERS', desc: 'Principal investigators & doctoral fellows', icon: 'science' },
  { name: 'INSTITUTIONS', desc: 'Polytechnics & applied technology labs', icon: 'account_balance' },
  { name: 'STUDENTS', desc: 'Undergraduate & postgraduate engineers', icon: 'person' },
];

// 4 Pipeline Progression Stages
const progressionStages = [
  { step: '01', name: 'COLLABORATION', desc: 'Align on physical problem statements and open research boundaries.' },
  { step: '02', name: 'EXPERIMENTATION', desc: 'Iterate on mathematical formulations, token pruning and loss functions.' },
  { step: '03', name: 'PROTOTYPING', desc: 'Flash candidate models onto physical silicon carrier boards.' },
  { step: '04', name: 'REAL-WORLD VALIDATION', desc: 'Benchmark against environmental noise in chambers and field rigs.' },
];

// 3 Core Collaboration Programs
const programs = [
  {
    num: '01',
    title: 'Academic Institutions',
    tagline: 'Bridging engineering curricula with edge silicon reality.',
    points: ['Guest seminars on embedded AI and zero-copy computer vision', 'Access to authentic field constraint datasets', 'Laboratory bench setup advisory'],
  },
  {
    num: '02',
    title: 'Research Collaboration',
    tagline: 'Joint exploration of low-bit quantization and sensor fusion.',
    points: ['Co-investigation of attention pruning and sub-watt execution', 'Joint co-authorship on academic preprints', 'Benchmarking novel math on physical edge NPUs'],
  },
  {
    num: '03',
    title: 'Student Programs',
    tagline: 'Hands-on systems craftsmanship, not vanity certificates.',
    points: ['Direct exposure to MIPI sensor streams and compiled runtimes', 'Mentorship from active deep-tech engineers', 'Pathways to research fellowships'],
  },
];

export const CollaborationPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — COLLABORATION HERO                                           */}
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
              <span>// ACADEMIC &amp; RESEARCH PARTNERSHIPS</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span>ETHOS: OPEN SCIENTIFIC INTEGRITY</span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Collaborate with <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">our engineering lab.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We partner with academic institutions, researchers and students to investigate hard technical bottlenecks in physical systems.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <a
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  href="mailto:collab@encepto.ai"
                >
                  <span>Propose Collaboration</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </a>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/research"
                >
                  Research Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — VISUAL COLLABORATION FLOW                                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="flow">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / HOW IT FLOWS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              The Collaborative Pipeline
            </h2>
          </div>

          {/* Top: 4 Participant Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs font-mono-label">
            {participants.map((p) => (
              <div
                key={p.name}
                className="bg-surface border border-outline-variant p-space-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-secondary">
                  <span className="text-[10px] font-bold">{p.name}</span>
                  <MaterialIcon name={p.icon} className="text-[18px]" />
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center text-secondary font-mono-metric text-headline-md my-0">
            ↓
          </div>

          {/* Bottom: 4 Progression Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs font-mono-label">
            {progressionStages.map((st) => (
              <div
                key={st.step}
                className="bg-surface-container border border-outline-variant p-space-sm flex flex-col justify-between min-h-[120px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-secondary font-bold">STEP // {st.step}</span>
                  </div>
                  <h4 className="font-headline-md text-body-md text-on-surface font-bold mt-1 uppercase">
                    {st.name}
                  </h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — THREE CORE COLLABORATION PROGRAMS                            */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="programs">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / ENGAGEMENT PROGRAMS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Engagement Frameworks
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-secondary font-bold">
              OPEN INQUIRIES // ROLLING ADMISSIONS
            </span>
          </div>

          {/* 3 Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {programs.map((p) => (
              <div
                key={p.num}
                className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <span className="font-mono-label text-[10px] text-secondary font-bold">
                    PROGRAM // {p.num}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 group-hover:text-secondary transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body-sm text-secondary font-bold">
                    "{p.tagline}"
                  </p>

                  <ul className="flex flex-col gap-1.5 pt-space-xs font-mono-label text-[11px] text-on-surface-variant">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-1.5">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px]">
                  <a href="mailto:collab@encepto.ai" className="text-secondary font-bold hover:underline flex items-center gap-1">
                    <span>Contact About {p.title} →</span>
                  </a>
                </div>
              </div>
            ))}
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
            <span>DIRECT RESEARCH INTAKE</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Propose a research initiative.
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Let's discuss how your lab or research team can collaborate with Encepto.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
            <a
              className="px-space-xl py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center gap-space-xs font-bold"
              href="mailto:collab@encepto.ai"
            >
              <span>Email: collab@encepto.ai</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
