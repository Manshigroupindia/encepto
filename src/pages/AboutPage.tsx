import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

interface CoreValue {
  num: string;
  id: string;
  title: string;
  tagline: string;
  explanation: string;
  metric: string;
}

const coreValues: CoreValue[] = [
  {
    num: '01',
    id: 'val-01',
    title: 'Honesty Over Hype',
    tagline: 'Validate in the field, not just in synthetic demos.',
    explanation: 'We reject marketing buzzwords and inflated benchmark claims. Engineering decisions are validated against physical ground truth on real machinery under dust, heat, and vibration.',
    metric: 'Measured Field Truth',
  },
  {
    num: '02',
    id: 'val-02',
    title: 'Depth Over Breadth',
    tagline: 'Solve fewer problems, completely.',
    explanation: 'We focus on mastering high-friction technical challenges across embedded silicon, sensor fusion, and computer vision rather than pursuing superficial breadth across unrelated domains.',
    metric: 'Applied Engineering Rigor',
  },
  {
    num: '03',
    id: 'val-03',
    title: 'Resilience By Design',
    tagline: 'Engineer for hostile environments by default.',
    explanation: 'Abrasive dust, extreme thermal peaks, line brownouts, and zero connectivity are foundational architectural constraints from day one, not afterthought patches.',
    metric: 'Default Fault Tolerance',
  },
  {
    num: '04',
    id: 'val-04',
    title: 'IP Over Services',
    tagline: 'Every engagement builds reusable IP.',
    explanation: 'Every deployment, algorithmic calibration, and runtime optimization compounds into standardized, modular software and hardware assets that empower future customer systems.',
    metric: 'Compounding Software Assets',
  },
];

const realityItems = [
  { label: 'Dust & Debris', spec: 'IP67 sealed enclosures with passive conduction cooling' },
  { label: 'Extreme Heat', spec: 'Passive thermal dissipation rated up to 55°C ambient' },
  { label: 'Power Instability', spec: 'Surge suppression and wide 9–36V isolated regulation' },
  { label: 'Zero Connectivity', spec: '100% autonomous, fully offline on-device execution' },
  { label: 'Target Silicon', spec: 'Cost-optimized edge silicon without expensive GPUs' },
  { label: 'Remote Reliability', spec: 'Dual-boot watchdog auto-recovery without human intervention' },
];

const rdLoopSteps = [
  { step: '01', name: 'Research', desc: 'Mathematical bounds and model quantization trade-offs' },
  { step: '02', name: 'Prototype', desc: 'Hardware-in-the-loop bench testing and sensor wiring' },
  { step: '03', name: 'Validate', desc: 'Stress testing in thermal and vibration chambers' },
  { step: '04', name: 'Deploy', desc: 'Production commissioning on physical customer equipment' },
  { step: '05', name: 'Learn', desc: 'Aggregating local offline logs and real-world failure modes' },
  { step: '06', name: 'Reusable IP', desc: 'Packaging proven neural models, kernels, and drivers' },
  { step: '07', name: 'Next System', desc: 'Accelerated development timeline for subsequent projects' },
];

export const AboutPage: React.FC = () => {
  const [expandedValues, setExpandedValues] = useState<Record<string, boolean>>({});

  const toggleValue = (id: string) => {
    setExpandedValues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* SECTION 01 — HERO */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 lg:py-20 border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="tracking-widest uppercase text-secondary font-bold">ABOUT ENCEPTO</span>
              <span className="text-outline">|</span>
              <span>APPLIED DEEP-TECH ENGINEERING</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded text-xs font-semibold">
                EMBEDDED AI &amp; SENSING
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                Building AI for the world <br className="hidden sm:inline" />
                <span className="text-secondary">beyond the lab.</span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto is an R&amp;D-led deep-tech engineering lab developing embedded AI, computer vision, intelligent sensing and vision-language models designed to operate reliably in physical environments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="px-5 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
                  to="/contact"
                >
                  <span>Discuss Your Project</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-5 py-2.5 bg-surface-container text-on-surface border border-outline-variant rounded text-sm font-semibold hover:bg-surface-container-high transition-colors"
                  to="/technology"
                >
                  Explore Technology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — MISSION & VISION */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface-container-low transition-colors" id="mission-vision">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-surface rounded-xl border border-outline-variant p-6 lg:p-8 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-on-surface">
                  Bridge the gap between AI research and real deployment.
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  We translate advanced perceptual algorithms out of controlled research notebooks into hardened software that executes reliably and deterministically on physical edge silicon.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/60 text-xs text-on-surface-variant font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>Applied Hardware Determinism</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-surface rounded-xl border border-outline-variant p-6 lg:p-8 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-on-surface">
                  AI that works reliably anywhere in the physical world.
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  Intelligent systems must function where conditions cannot be controlled: enduring abrasive dust, 55°C heat, power fluctuations, and complete absence of cellular connectivity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/60 text-xs text-on-surface-variant font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>Autonomous Offline Operation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — CORE VALUES */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface transition-colors" id="values">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-2xl border-b border-outline-variant pb-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
              CORE VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Engineering values that govern our lab.
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Principles grounded in practical deployment rather than generic corporate slogans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((v) => {
              const isExpanded = !!expandedValues[v.id];
              return (
                <div
                  key={v.num}
                  className="bg-surface-container rounded-xl border border-outline-variant p-6 lg:p-8 flex flex-col justify-between hover:border-secondary/60 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-secondary font-bold">VALUE {v.num}</span>
                      <span className="text-on-surface-variant font-medium">{v.metric}</span>
                    </div>

                    <h3 className="text-xl font-bold text-on-surface">
                      {v.title}
                    </h3>

                    <p className="text-sm font-semibold text-secondary">
                      "{v.tagline}"
                    </p>

                    {isExpanded && (
                      <div className="mt-2 p-3 bg-surface rounded-lg border border-outline-variant/60 text-xs text-on-surface-variant leading-relaxed animate-in fade-in duration-200">
                        {v.explanation}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-outline-variant/60 text-xs flex items-center justify-between">
                    <button
                      onClick={() => toggleValue(v.id)}
                      className="text-secondary font-semibold hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                      type="button"
                    >
                      <MaterialIcon name={isExpanded ? 'expand_less' : 'expand_more'} className="text-[16px]" />
                      <span>{isExpanded ? 'Show Less' : 'Read Methodology'}</span>
                    </button>
                    <span className="text-on-surface-variant text-[11px] font-medium">{v.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04 — BUILT FOR INDIA */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface-container-low transition-colors" id="built-for-india">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                REAL-WORLD RIGOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                Built for India. Ready for the world.
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              Demanding environmental constraints are treated as primary engineering requirements, not secondary afterthoughts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {realityItems.map((item) => (
              <div
                key={item.label}
                className="bg-surface rounded-xl border border-outline-variant p-5 flex flex-col justify-between hover:border-secondary/40 transition-colors"
              >
                <div>
                  <span className="text-base font-bold text-on-surface block">
                    {item.label}
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1.5">
                    {item.spec}
                  </p>
                </div>
                <div className="text-[11px] text-secondary font-semibold pt-3 mt-3 border-t border-outline-variant/60">
                  Resilient by Design
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-xl border-l-4 border-secondary p-5 text-sm font-medium text-on-surface shadow-sm">
            "What thrives under demanding real-world conditions is ready for deployment anywhere."
          </div>
        </div>
      </section>

      {/* SECTION 05 — R&D CYCLE */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 border-b border-outline-variant bg-surface transition-colors" id="rd-cycle">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                COMPOUNDING INNOVATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                Research → Build → Deploy → Reusable IP
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md">
              Every customer deployment contributes modular, reusable IP assets that accelerate the next system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {rdLoopSteps.map((s, idx) => (
              <div
                key={s.step}
                className="bg-surface-container rounded-xl border border-outline-variant p-4 flex flex-col justify-between hover:border-secondary/60 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-secondary font-bold">
                    <span>{s.step}</span>
                    {idx < rdLoopSteps.length - 1 && <span className="text-on-surface-variant hidden lg:inline">→</span>}
                  </div>
                  <h4 className="text-sm font-bold mt-2 text-on-surface">
                    {s.name}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — FINAL CTA */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto rounded-2xl border border-outline-variant bg-surface p-8 lg:p-12 flex flex-col items-center text-center gap-4 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>NEXT STEPS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface max-w-2xl tracking-tight">
            Have a problem worth solving?
          </h2>

          <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
            Let's explore how AI, computer vision and intelligent sensing can help solve your engineering bottlenecks.
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

