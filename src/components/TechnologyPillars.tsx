import React from 'react';
import { MaterialIcon } from './MaterialIcon';

const pillars = [
  {
    tag: '01 // COMPUTE',
    icon: 'memory',
    title: 'Embedded AI',
    desc: 'Custom local compute kernels, NPU INT8/FP4 quantization, bare-metal microcontroller inference runtime, and edge tensor memory packing without operating system bloat.',
    specs: ['INT8 Quantization Engine', 'Zero-Copy Direct Tensor DMA'],
  },
  {
    tag: '02 // PERCEPTION',
    icon: 'visibility',
    title: 'Computer Vision',
    desc: 'Real-time optical flow estimation, extreme low-light spatial enhancement, domain-specific lightweight object detection, and robust sub-millisecond edge visual tracking.',
    specs: ['42+ FPS Real-Time Multi-Object', 'Exposure-Compensated Flow'],
  },
  {
    tag: '03 // TELEMETRY',
    icon: 'sensors',
    title: 'Intelligent Sensing',
    desc: 'Multi-modal sensor fusion binding 6-axis IMUs, thermopile arrays, spatial LiDAR, acoustic vibration microphones, and ambient barometric sensors into a unified state space.',
    specs: ['Extended Kalman Filtering (EKF)', 'Microsecond Jitter Synchronization'],
  },
  {
    tag: '04 // REASONING',
    icon: 'psychology',
    title: 'Vision-Language',
    desc: 'Compact multi-modal foundation models compressed for on-device execution. Translates visual scene embeddings into structured natural-language telemetry and autonomous control triggers.',
    specs: ['Edge Context Window Quantization', 'Autonomous State Synthesis'],
  },
];

export const TechnologyPillars: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="what-we-build">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
            02 / WHAT WE BUILD
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
            Four layers of intelligent systems.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Modular, hardware-agnostic, and co-designed across the silicon-to-software stack to achieve deterministic intelligence in resource-constrained hardware.
          </p>
        </div>

        {/* 4 Connected Modular Cards with Buslines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between relative group hover:border-secondary transition-colors"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-body-sm">
                  <span className="text-secondary font-bold">{pillar.tag}</span>
                  <MaterialIcon name={pillar.icon} className="text-[20px] text-on-surface-variant" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">{pillar.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex flex-col gap-1 mt-space-md">
                <span className="text-on-surface font-bold">TECH SPEC:</span>
                {pillar.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
