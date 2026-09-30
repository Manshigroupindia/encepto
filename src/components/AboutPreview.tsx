import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const AboutPreview: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="homepage-about">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg border-b border-outline-variant pb-space-lg items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-xs">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              10 / ABOUT ENCEPTO
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Building AI that survives the real world.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-space-xs">
              Encepto is an R&amp;D-led deep-tech engineering lab developing embedded AI, computer vision, intelligent sensing and vision-language models for real-world deployment.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-space-sm">
            <Link
              to="/about"
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
            >
              <span>Learn More About Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        </div>

        {/* 3 Concise Focus Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md font-mono-label">
          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-secondary font-bold">PILLAR 01</span>
              <h4 className="font-headline-md text-body-md text-on-surface font-bold">R&amp;D-LED RIGOR</h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Applied mathematical formulation and neural quantization rooted in physical silicon constraints.
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant">
              DISCIPLINE: APPLIED DETERMINISM
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-secondary font-bold">PILLAR 02</span>
              <h4 className="font-headline-md text-body-md text-on-surface font-bold">HARDWARE-AWARE</h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Co-design across memory registers, tensor cores and thermal envelopes for sub-5W passive operation.
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant">
              DISCIPLINE: ZERO-COPY DMA
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-secondary font-bold">PILLAR 03</span>
              <h4 className="font-headline-md text-body-md text-on-surface font-bold">FIELD INVARIANCE</h4>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                Engineered for dust, 55°C heat, power fluctuations and zero cellular connectivity from day one.
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs border-t border-outline-variant/60 text-[10px] text-on-surface-variant">
              DISCIPLINE: AIR-GAPPED BY DEFAULT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
