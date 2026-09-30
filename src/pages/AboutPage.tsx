import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 4 Core Values with expandable detail
interface CoreValue {
  num: string;
  id: string;
  title: string;
  tagline: string;
  explanation: string;
  spec: string;
}

const coreValues: CoreValue[] = [
  {
    num: '01',
    id: 'val-01',
    title: 'Honesty Over Hype',
    tagline: 'Validate in the field, not just in demos.',
    explanation: 'We reject benchmark marketing and inflated claims. Engineering decisions are validated against physical ground truth on real machinery under dust, heat and vibration.',
    spec: 'CRITERIA: MEASURED FIELD TRUTH',
  },
  {
    num: '02',
    id: 'val-02',
    title: 'Depth Over Breadth',
    tagline: 'Solve fewer problems, completely.',
    explanation: 'We focus on mastering high-friction technical challenges across embedded silicon, sensor fusion and computer vision rather than pursuing superficial breadth across unrelated domains.',
    spec: 'CRITERIA: APPLIED RIGOR',
  },
  {
    num: '03',
    id: 'val-03',
    title: 'Resilience By Design',
    tagline: 'Engineer for hostile environments by default.',
    explanation: 'Abrasive dust, extreme thermal peaks, line brownouts and zero connectivity are foundational architectural constraints from day one, not afterthought patches.',
    spec: 'CRITERIA: DEFAULT INVARIANCE',
  },
  {
    num: '04',
    id: 'val-04',
    title: 'IP Over Services',
    tagline: 'Every engagement builds reusable IP.',
    explanation: 'Every deployment, algorithmic calibration and runtime optimization compounds into standardized, modular software and hardware assets that empower future systems.',
    spec: 'CRITERIA: COMPOUNDING IP ASSETS',
  },
];

// Physical constraints for Built for India
const realityItems = [
  { label: 'DUST', spec: 'IP67 SEALED // CONDUCTION COOLED' },
  { label: 'HEAT', spec: '55°C PASSIVE // INDUSTRIAL DIE' },
  { label: 'POWER', spec: '9-36V ISOLATED REGULATION' },
  { label: 'CONNECTIVITY', spec: '100% AIR-GAPPED BY DESIGN' },
  { label: 'COST', spec: 'SUB-$100 EDGE SILICON BOM' },
  { label: 'REMOTE', spec: 'DUAL-BOOT WATCHDOG RECOVERY' },
];

// 7-Step Cycle: R&D -> DEPLOYMENT -> IP
const rdLoopSteps = [
  { step: '01', name: 'RESEARCH', desc: 'Algorithmic bounds & Pareto modeling' },
  { step: '02', name: 'PROTOTYPE', desc: 'Hardware-in-the-loop bench bring-up' },
  { step: '03', name: 'VALIDATE', desc: 'Stress testing in thermal & dust chambers' },
  { step: '04', name: 'DEPLOY', desc: 'Production commissioning on physical rigs' },
  { step: '05', name: 'LEARN', desc: 'Aggregating offline edge telemetry logs' },
  { step: '06', name: 'REUSABLE IP', desc: 'Compounding models, kernels and drivers' },
  { step: '07', name: 'NEXT SYSTEM', desc: 'Accelerated architecture for subsequent cycles' },
];

export const AboutPage: React.FC = () => {
  const [expandedValues, setExpandedValues] = useState<Record<string, boolean>>({});

  const toggleValue = (id: string) => {
    setExpandedValues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — ABOUT HERO                                                   */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / ABOUT ENCEPTO</span>
              <span>// R&amp;D-LED DEEP-TECH LAB</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span>DISCIPLINE: EMBEDDED AI &amp; INTELLIGENT SENSING</span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Building AI for the world <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">beyond the lab.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto is an R&amp;D-led deep-tech engineering lab developing embedded AI, computer vision, intelligent sensing and vision-language models for real-world deployment.
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
      {/* SECTION 02 — MISSION & VISION                                             */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="mission-vision">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Mission */}
            <div className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  FOUNDATION // 01
                </span>
                <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                  Our Mission
                </h3>
                <p className="font-body-md text-body-md text-secondary font-bold mt-1">
                  "Bridge the gap between AI research and real deployment."
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  We translate advanced perceptual algorithms out of synthetic benchmark notebooks into hardened code executing deterministically on physical edge silicon.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                DISCIPLINE: APPLIED HARDWARE DETERMINISM
              </div>
            </div>

            {/* Vision */}
            <div className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col justify-between hover:border-secondary transition-colors">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                  FOUNDATION // 02
                </span>
                <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold">
                  Our Vision
                </h3>
                <p className="font-body-md text-body-md text-secondary font-bold mt-1">
                  "AI that works beyond the lab."
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  Systems must function indefinitely where conditions cannot be managed: enduring abrasive dust, 55°C heat, power fluctuations and zero cellular backhaul.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant">
                HORIZON: AUTONOMOUS SOVEREIGN OPERATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — CORE VALUES (VISUAL CARDS WITH EXPANDABLE SPEC)              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="values">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / CORE VALUES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Engineering values that govern our lab.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Principles grounded in practical deployment rather than generic corporate buzzwords.
            </p>
          </div>

          {/* 4 Cards with strong title, short 1-line statement, optional expandable explanation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {coreValues.map((v) => {
              const isExpanded = !!expandedValues[v.id];
              return (
                <div
                  key={v.num}
                  className="bg-surface-container border border-outline-variant p-space-md lg:p-space-lg flex flex-col justify-between hover:border-secondary transition-colors"
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between font-mono-label text-[10px]">
                      <span className="text-secondary font-bold">VALUE // {v.num}</span>
                      <span className="text-on-surface-variant">{v.spec}</span>
                    </div>

                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
                      {v.title}
                    </h3>

                    <p className="font-body-md text-body-md text-secondary font-bold">
                      "{v.tagline}"
                    </p>

                    {/* Expandable Explanation */}
                    {isExpanded && (
                      <div className="mt-space-sm p-space-sm bg-surface border border-outline-variant/60 font-body-sm text-[12px] text-on-surface-variant leading-relaxed animate-in fade-in duration-200">
                        {v.explanation}
                      </div>
                    )}
                  </div>

                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] flex items-center justify-between">
                    <button
                      onClick={() => toggleValue(v.id)}
                      className="text-secondary font-bold hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                      type="button"
                    >
                      <MaterialIcon name={isExpanded ? 'expand_less' : 'expand_more'} className="text-[16px]" />
                      <span>{isExpanded ? 'Show Less' : 'Read Methodology'}</span>
                    </button>
                    <span className="text-on-surface-variant">{v.spec}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — BUILT FOR INDIA (VISUAL CONSTRAINT GRID)                     */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="built-for-india">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                04 / FIELD ENGINEERING
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Built for India. Ready for the world.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Real-world constraints are treated as engineering requirements.
            </p>
          </div>

          {/* 6 Visual Constraint Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs font-mono-label">
            {realityItems.map((item) => (
              <div
                key={item.label}
                className="bg-surface border border-outline-variant p-space-sm flex flex-col justify-between min-h-[110px]"
              >
                <div>
                  <span className="font-display-hero text-body-lg font-bold text-on-surface">
                    {item.label}
                  </span>
                </div>
                <div className="text-[9px] text-secondary font-bold pt-space-xs border-t border-outline-variant/60 uppercase">
                  {item.spec}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface border-l-4 border-secondary p-space-md font-mono-label text-body-sm text-on-surface">
            "What survives demanding field conditions here is ready for deployment anywhere."
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — R&D → DEPLOYMENT → IP (COMPOUNDING CYCLE)                    */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="rd-cycle">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                05 / COMPOUNDING ASSETS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                R&amp;D → Deployment → Reusable IP
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Every deployment builds the next system.
            </p>
          </div>

          {/* 7-Step Cycle Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs font-mono-label">
            {rdLoopSteps.map((s, idx) => (
              <div
                key={s.step}
                className="bg-surface-container border border-outline-variant p-space-sm flex flex-col justify-between min-h-[120px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-secondary font-bold">{s.step}</span>
                    {idx < rdLoopSteps.length - 1 && <span className="text-[10px] text-on-surface-variant hidden lg:inline">→</span>}
                  </div>
                  <h4 className="font-headline-md text-body-sm font-bold uppercase mt-1 text-on-surface">
                    {s.name}
                  </h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — FINAL CTA                                                    */}
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
