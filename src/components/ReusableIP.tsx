import React from 'react';

const loopSteps = [
  { step: 'STEP 01', name: 'FIELD PROBLEM', isHighlight: false },
  { step: 'STEP 02', name: 'R&D RIGOR', isHighlight: false },
  { step: 'STEP 03', name: 'DEPLOYMENT', isHighlight: false },
  { step: 'STEP 04', name: 'TELEMETRY', isHighlight: false },
  { step: 'STEP 05', name: 'REUSABLE IP', isHighlight: true },
  { step: 'STEP 06', name: 'NEXT SYSTEM', isHighlight: false },
];

const coreAssets = [
  {
    tag: 'CORE ASSET 01',
    title: 'Knowledge',
    desc: 'Deep failure mode taxonomies under non-ideal industrial conditions.',
  },
  {
    tag: 'CORE ASSET 02',
    title: 'Models',
    desc: 'Custom lightweight neural blocks pre-trained on high-noise real-world imagery.',
  },
  {
    tag: 'CORE ASSET 03',
    title: 'Architecture',
    desc: 'Direct memory register patterns that circumvent operating system latency.',
  },
  {
    tag: 'CORE ASSET 04',
    title: 'Design Patterns',
    desc: 'Brownout-safe state commit workflows and autonomous hardware watchdog trees.',
  },
  {
    tag: 'CORE ASSET 05',
    title: 'Patented IP',
    desc: 'Novel multi-modal quantization algorithms and sensor fusion state topologies.',
  },
];

export const ReusableIP: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-primary-container text-on-primary transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-on-primary-container/30 pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary-container uppercase font-bold tracking-widest">
              07 / REUSABLE INTELLIGENCE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-primary">
              Every deployment builds the next system.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container max-w-md">
            Encepto operates as a deep-tech IP engine rather than a traditional professional services bureau. Every deployment reinforces our persistent modular substrate.
          </p>
        </div>

        {/* Compounding Knowledge Loop Diagram */}
        <div className="bg-surface-container-highest/10 border border-on-primary-container/20 p-space-md">
          <div className="font-mono-label text-mono-label text-secondary-container mb-space-md uppercase font-bold tracking-wider">
            COMPOUNDING IP ARCHITECTURE LOOP // v4.2
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-space-sm items-center text-center font-mono-label">
            {loopSteps.map((s) => (
              <div
                key={s.step}
                className={`p-space-xs border transition-colors ${
                  s.isHighlight
                    ? 'bg-secondary-container/20 border-secondary-container text-secondary-container font-bold'
                    : 'bg-surface-container-highest/15 border-on-primary-container/30'
                }`}
              >
                <span className={`text-[10px] block ${s.isHighlight ? '' : 'text-on-primary-container'}`}>
                  {s.step}
                </span>
                <span className={`text-body-sm font-bold ${s.isHighlight ? '' : 'text-on-primary'}`}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Visualized Engineering IP Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-space-sm">
          {coreAssets.map((asset) => (
            <div
              key={asset.tag}
              className="border border-on-primary-container/30 p-space-sm bg-surface-container-highest/5"
            >
              <span className="font-mono-label text-[10px] text-secondary-container uppercase font-bold">
                {asset.tag}
              </span>
              <h4 className="font-headline-md text-body-lg text-on-primary mt-1 font-bold">
                {asset.title}
              </h4>
              <p className="font-body-sm text-[11px] text-on-primary-container mt-1 leading-relaxed">
                {asset.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
