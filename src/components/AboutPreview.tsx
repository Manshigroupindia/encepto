import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  'Honesty over hype',
  'Depth over breadth',
  'Resilience by design',
  'IP over bespoke services',
];

export const AboutPreview: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="homepage-about">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-lg">
          <div className="lg:col-span-6 flex flex-col gap-space-xs">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              10 / ABOUT ENCEPTO
            </span>
            <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface">
              Building AI that survives the real world.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Encepto is an embedded AI and frontier engineering lab. We believe artificial intelligence must move beyond air-conditioned server farms and hyper-scale clouds into the physical substrates where human industry actually functions.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-2 pt-space-xs">
              <p className="font-body-md text-body-md">
                By unifying computer vision, intelligent sensor fusion, and on-silicon vision-language models, we build resilient, self-contained systems.
              </p>
              <Link
                to="/about"
                className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
              >
                Learn More About Encepto →
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Precision Visual Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {/* Mission */}
          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
                PILLAR 01 // MISSION
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Bridge the gap between research and real deployment.
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Translate advanced perceptual models from theoretical ML papers into hardened, deterministic code executing reliably on sub-watt silicon.
              </p>
            </div>
            <div className="mt-space-md font-mono-label text-[10px] text-on-surface-variant pt-space-xs border-t border-outline-variant/60">
              FOCUS: APPLIED DETERMINISM
            </div>
          </div>

          {/* Vision */}
          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
                PILLAR 02 // VISION
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Endure beyond controlled environments.
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Establish a new baseline where edge intelligence functions autonomously indefinitely without constant cloud umbilical cords.
              </p>
            </div>
            <div className="mt-space-md font-mono-label text-[10px] text-on-surface-variant pt-space-xs border-t border-outline-variant/60">
              FOCUS: AUTONOMOUS SOVEREIGNTY
            </div>
          </div>

          {/* Values */}
          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-space-sm">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
                PILLAR 03 // CORE VALUES
              </span>
              <ul className="flex flex-col gap-space-xs font-mono-label text-body-sm text-on-surface pt-space-xs">
                {values.map((val) => (
                  <li key={val} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    <strong>{val}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-md font-mono-label text-[10px] text-on-surface-variant pt-space-xs border-t border-outline-variant/60">
              FOCUS: ENGINEERING RIGOR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
