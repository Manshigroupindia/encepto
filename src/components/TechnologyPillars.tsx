import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

const pillars = [
  {
    tag: '01 // COMPUTE',
    icon: 'memory',
    title: 'Embedded AI',
    tagline: 'Intelligence at the edge.',
    keywords: ['Edge Inference', 'Local Processing', 'Hardware-Aware'],
    spec: 'SUB-WATT RUNTIME KERNELS',
  },
  {
    tag: '02 // PERCEPTION',
    icon: 'visibility',
    title: 'Computer Vision',
    tagline: 'Machines that see.',
    keywords: ['Perception', 'Detection', 'Inspection'],
    spec: 'ZERO-COPY ISP FLOW',
  },
  {
    tag: '03 // TELEMETRY',
    icon: 'sensors',
    title: 'Intelligent Sensing',
    tagline: 'Understand the environment.',
    keywords: ['Sensors', 'Context', 'Physical Systems'],
    spec: 'MULTI-MODAL EKF FUSION',
  },
  {
    tag: '04 // REASONING',
    icon: 'psychology',
    title: 'Vision-Language Models',
    tagline: 'See. Understand. Reason.',
    keywords: ['Multimodal', 'Visual Understanding', 'Reasoning'],
    spec: 'ON-DEVICE TOKEN REASONING',
  },
];

export const TechnologyPillars: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="what-we-build">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              02 / WHAT WE BUILD
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Four layers of intelligent systems.
            </h2>
          </div>
          <Link
            to="/technology"
            className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
          >
            Explore Full Technology Stack →
          </Link>
        </div>

        {/* 4 Connected Modular Scannable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between group hover:border-secondary transition-colors"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-body-sm">
                  <span className="text-secondary font-bold">{pillar.tag}</span>
                  <MaterialIcon name={pillar.icon} className="text-[20px] text-on-surface-variant group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{pillar.title}</h3>
                  <p className="font-body-md text-secondary font-bold mt-1">"{pillar.tagline}"</p>
                </div>
                
                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-space-xs">
                  {pillar.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="bg-surface px-2 py-1 border border-outline-variant font-mono-label text-[11px] text-on-surface font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex items-center justify-between mt-space-md">
                <span>SPEC // {pillar.spec}</span>
                <span className="text-secondary font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
