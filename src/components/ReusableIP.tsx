import React from 'react';

const loopNodes = [
  { step: '01', name: 'Deployment', desc: 'Field operation on real machinery' },
  { step: '02', name: 'Learning', desc: 'Telemetry aggregation & edge cases' },
  { step: '03', name: 'Reusable IP', desc: 'Modular models, kernels & drivers' },
  { step: '04', name: 'Next System', desc: 'Accelerated, hardened architecture' },
];

const ipAssets = [
  { tag: 'IP ASSET 01', title: 'Knowledge', desc: 'Failure mode taxonomies under non-ideal industrial conditions.' },
  { tag: 'IP ASSET 02', title: 'Models', desc: 'Compact neural blocks tuned for high-noise field environments.' },
  { tag: 'IP ASSET 03', title: 'Runtimes', desc: 'Zero-copy DMA memory patterns avoiding OS latency penalties.' },
  { tag: 'IP ASSET 04', title: 'Patterns', desc: 'Brownout-safe atomic commits and hardware watchdog recovery.' },
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
            Field learning compounds directly into modular, reusable deep-tech IP rather than one-off custom builds.
          </p>
        </div>

        {/* Visual Closed Loop Diagram: Deployment → Learning → Reusable IP → Next System → Deployment */}
        <div className="bg-surface-container-highest/10 border border-on-primary-container/20 p-space-md">
          <div className="font-mono-label text-[10px] text-secondary-container mb-space-sm uppercase font-bold tracking-wider">
            COMPOUNDING IP ARCHITECTURE LOOP
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm items-center text-center font-mono-label">
            {loopNodes.map((node, idx) => (
              <div
                key={node.step}
                className="p-space-sm border border-on-primary-container/30 bg-surface-container-highest/15 flex flex-col items-center justify-between min-h-[110px] relative"
              >
                <div className="w-full flex justify-between items-center text-[10px] text-secondary-container font-bold">
                  <span>STEP {node.step}</span>
                  {idx < loopNodes.length - 1 ? (
                    <span className="text-secondary-container">→</span>
                  ) : (
                    <span className="text-secondary-container">↺ REPEATS</span>
                  )}
                </div>
                <span className="text-body-md text-on-primary font-bold uppercase my-1">
                  {node.name}
                </span>
                <span className="text-[11px] text-on-primary-container">
                  {node.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Compounding IP Assets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          {ipAssets.map((asset) => (
            <div
              key={asset.tag}
              className="border border-on-primary-container/20 p-space-sm bg-surface-container-highest/5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-label text-[10px] text-secondary-container uppercase font-bold">
                  {asset.tag}
                </span>
                <h4 className="font-headline-md text-body-md text-on-primary mt-1 font-bold">
                  {asset.title}
                </h4>
                <p className="font-body-sm text-[11px] text-on-primary-container mt-1 leading-relaxed">
                  {asset.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
