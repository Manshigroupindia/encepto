import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

const participants = [
  { name: 'Universities & Academia', desc: 'Faculty, engineering departments, and research labs', icon: 'school' },
  { name: 'Researchers & PIs', desc: 'Principal investigators and doctoral fellows', icon: 'science' },
  { name: 'Technical Institutes', desc: 'Applied engineering centers and polytechnics', icon: 'account_balance' },
  { name: 'Engineering Students', desc: 'Undergraduate and postgraduate builders', icon: 'person' },
];

const progressionStages = [
  { step: '01', name: 'Identify a Problem', desc: 'Define authentic physical bottlenecks and clear engineering questions.' },
  { step: '02', name: 'Align & Scope', desc: 'Align across faculty, researchers, and Encepto engineers on technical goals.' },
  { step: '03', name: 'Experiment', desc: 'Iterate on mathematical formulations, token pruning, and model quantization.' },
  { step: '04', name: 'Prototype', desc: 'Flash candidate runtimes onto physical edge silicon and sensor test fixtures.' },
  { step: '05', name: 'Validate', desc: 'Stress-test algorithms against real environmental noise and measured field truth.' },
];

const programs = [
  {
    num: '01',
    title: 'Academic Institutions',
    tagline: 'Bridging engineering curricula with edge silicon reality.',
    points: [
      'Guest lectures on embedded AI and real-time computer vision',
      'Access to real-world edge constraint datasets',
      'Laboratory test bench setup advisory and guidance',
    ],
  },
  {
    num: '02',
    title: 'Joint Research',
    tagline: 'Joint exploration of low-bit quantization and sensor fusion.',
    points: [
      'Co-investigation of attention pruning and sub-watt neural execution',
      'Joint co-authorship on academic papers and preprints',
      'Benchmarking novel mathematics on physical edge NPUs',
    ],
  },
  {
    num: '03',
    title: 'Student Fellowships',
    tagline: 'Hands-on systems craftsmanship, not vanity certificates.',
    points: [
      'Direct exposure to camera sensor pipelines and compiled runtimes',
      '1-on-1 mentorship from active deep-tech engineers',
      'Pathways to long-term research fellowships and full-time roles',
    ],
  },
];

export const CollaborationPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* SECTION 01 — HERO */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 lg:py-20 border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="tracking-widest uppercase text-secondary font-bold">COLLABORATION</span>
              <span className="text-outline">|</span>
              <span>ACADEMIC &amp; RESEARCH PARTNERSHIPS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded text-xs font-semibold">
                OPEN SCIENTIFIC INITIATIVES
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                Collaborate with <br className="hidden sm:inline" />
                <span className="text-secondary">our engineering lab.</span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We partner with academic institutions, university researchers, and engineering students to solve authentic technical challenges in physical edge systems.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="px-5 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
                  href="mailto:collab@encepto.ai"
                >
                  <span>Propose Collaboration</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </a>
                <Link
                  className="px-5 py-2.5 bg-surface-container text-on-surface border border-outline-variant rounded text-sm font-semibold hover:bg-surface-container-high transition-colors"
                  to="/research"
                >
                  Research Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — THE COLLABORATIVE PIPELINE */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface-container-low transition-colors" id="flow">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-2xl border-b border-outline-variant pb-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              The Collaborative Pipeline
            </h2>
            <p className="text-sm text-on-surface-variant">
              How we partner with academia and independent researchers from initial question to validated physical deployment.
            </p>
          </div>

          {/* Participant Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {participants.map((p) => (
              <div
                key={p.name}
                className="bg-surface rounded-xl border border-outline-variant p-5 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between text-secondary">
                  <span className="text-sm font-bold text-on-surface">{p.name}</span>
                  <MaterialIcon name={p.icon} className="text-[20px]" />
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Flow Indicator */}
          <div className="flex justify-center text-secondary text-2xl my-1">
            ↓
          </div>

          {/* 5 Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {progressionStages.map((st) => (
              <div
                key={st.step}
                className="bg-surface-container rounded-xl border border-outline-variant p-4 flex flex-col justify-between hover:border-secondary/60 transition-all"
              >
                <div>
                  <span className="text-xs text-secondary font-bold">STEP {st.step}</span>
                  <h4 className="text-sm font-bold text-on-surface mt-1.5">
                    {st.name}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — COLLABORATION PROGRAMS */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface transition-colors" id="programs">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                PROGRAMS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                Engagement Frameworks
              </h2>
            </div>
            <span className="text-xs font-semibold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded">
              ROLLING ADMISSIONS &amp; INQUIRIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.num}
                className="bg-surface-container rounded-xl border border-outline-variant p-6 lg:p-8 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    PROGRAM {p.num}
                  </span>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm font-semibold text-secondary">
                    "{p.tagline}"
                  </p>

                  <ul className="flex flex-col gap-2 pt-2 text-xs text-on-surface-variant">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/60 text-xs">
                  <a href="mailto:collab@encepto.ai" className="text-secondary font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Contact About {p.title}</span>
                    <MaterialIcon name="arrow_forward" className="text-[14px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — FINAL CTA */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto rounded-2xl border border-outline-variant bg-surface p-8 lg:p-12 flex flex-col items-center text-center gap-4 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>RESEARCH INTAKE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface max-w-2xl tracking-tight">
            Propose a research initiative.
          </h2>

          <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
            Let's discuss how your lab, academic department, or research team can collaborate with Encepto.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              className="px-6 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
              to="/contact"
            >
              <span>Contact Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-6 py-2.5 bg-surface text-on-surface border border-outline-variant rounded text-sm font-semibold hover:bg-surface-container-high transition-colors"
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

