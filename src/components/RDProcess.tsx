import React, { useState } from 'react';
import { MaterialIcon } from './MaterialIcon';

const stages = [
  {
    id: 1,
    num: '01',
    name: 'IDENTIFY',
    sentence: 'Define physical operating constraints, silicon BOM limits and sensor optics.',
    gate: 'SENSOR PRD LOCKED',
  },
  {
    id: 2,
    num: '02',
    name: 'RESEARCH',
    sentence: 'Benchmark model topologies and formulate low-bit quantization bounds.',
    gate: 'PARETO MODEL SELECTED',
  },
  {
    id: 3,
    num: '03',
    name: 'PROTOTYPE',
    sentence: 'Bare-metal bring-up and hardware-in-the-loop driver integration on silicon.',
    gate: 'SUB-WATT VERIFIED',
  },
  {
    id: 4,
    num: '04',
    name: 'VALIDATE',
    sentence: 'Stress-test in chambers simulating 55°C heat, particulate fog and voltage sags.',
    gate: 'STRESS TEST PASSED',
  },
  {
    id: 5,
    num: '05',
    name: 'DEPLOY',
    sentence: 'Field commencement on operational rigs with dual-boot zero-downtime safety.',
    gate: 'FIELD ACCEPTANCE MET',
  },
  {
    id: 6,
    num: '06',
    name: 'EVOLVE',
    sentence: 'Aggregate telemetry checkpoints offline to compound into reusable IP.',
    gate: 'IP ASSET COMMITTED',
  },
];

export const RDProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              06 / R&D PROCESS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              From research question to field deployment.
            </h2>
          </div>
          <span className="font-mono-label text-body-sm text-secondary font-bold">
            STAGE-GATED ENGINEERING PIPELINE
          </span>
        </div>

        {/* Connected Technical Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-outline-variant z-0">
            <div className="h-0.5 bg-secondary w-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-xs relative z-10">
            {stages.map((st) => {
              const isActive = st.id === activeStage;
              return (
                <div
                  key={st.id}
                  onClick={() => setActiveStage(st.id)}
                  className={`cursor-pointer p-space-sm bg-surface border transition-all flex flex-col justify-between min-h-[170px] ${
                    isActive
                      ? 'border-secondary shadow-sm ring-1 ring-secondary'
                      : 'border-outline-variant hover:border-on-surface'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStage(st.id);
                    }
                  }}
                  aria-pressed={isActive}
                  aria-label={`Stage ${st.num}: ${st.name}`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono-metric text-body-sm font-bold ${
                        isActive ? 'bg-secondary text-on-secondary' : 'bg-surface-container text-on-surface'
                      }`}>
                        {st.num}
                      </span>
                      <span className="font-mono-label text-[9px] text-on-surface-variant font-bold">
                        STEP {st.id}/6
                      </span>
                    </div>

                    <h4 className="font-headline-md text-body-md text-on-surface font-bold uppercase mt-1">
                      {st.name}
                    </h4>

                    <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                      {st.sentence}
                    </p>
                  </div>

                  <div className="mt-space-xs pt-space-xs border-t border-outline-variant/60 font-mono-label text-[9px] text-secondary font-bold truncate">
                    {st.gate}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Callout */}
        <div className="bg-surface-container p-space-md border border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono-label text-body-sm">
          <div className="flex items-center gap-space-sm">
            <span className="w-2.5 h-2.5 bg-secondary inline-block"></span>
            <span className="font-bold text-on-surface">STAGE {current.num} // {current.name}:</span>
            <span className="text-on-surface-variant">{current.sentence}</span>
          </div>
          <div className="flex items-center gap-1 text-secondary font-bold text-[11px] flex-shrink-0">
            <MaterialIcon name="verified" className="text-[16px]" />
            <span>GATE: {current.gate}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
