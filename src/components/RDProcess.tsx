import React, { useState } from 'react';
import { MaterialIcon } from './MaterialIcon';

interface Stage {
  id: number;
  stage: string;
  name: string;
  summary: string;
  phase: string;
  title: string;
  desc: string;
  gate: string;
}

const stages: Stage[] = [
  {
    id: 1,
    stage: 'STAGE 01',
    name: 'IDENTIFY',
    summary: 'Define physical constraints, silicon BOM budgets, thermal limits, and sensor optics.',
    phase: 'PHASE: DEFINITION',
    title: '01: IDENTIFY & CHARACTERIZE',
    desc: 'We begin with zero assumptions about connectivity or infinite power. Every project defines maximum peak wattage, ambient dust thresholds, and target device cost bounds before writing a line of code.',
    gate: 'GATE CRITERION: SENSOR PRD LOCKED',
  },
  {
    id: 2,
    stage: 'STAGE 02',
    name: 'RESEARCH',
    summary: 'Benchmark transformer vs CNN topologies, simulate loss functions, explore domain pruning.',
    phase: 'PHASE: ALGORITHMIC',
    title: '02: ALGORITHMIC RESEARCH',
    desc: 'We benchmark candidate architectures against our target silicon runtime, investigating domain-specific attention pruning and specialized loss functions that maximize accuracy under low-bit quantization.',
    gate: 'GATE CRITERION: PARETO FRONTIER MODEL SELECTED',
  },
  {
    id: 3,
    stage: 'STAGE 03',
    name: 'PROTOTYPE',
    summary: 'Hardware-in-the-loop bring-up, silicon quantisation mapping, memory layout tuning.',
    phase: 'PHASE: HARDWARE',
    title: '03: SILICON HARDWARE PROTOTYPE',
    desc: 'Direct integration on target carrier boards. We write bare-metal hardware-in-the-loop firmware drivers, map registers to DMA channels, and profile memory heat signatures.',
    gate: 'GATE CRITERION: SUB-WATT KERNEL EXECUTION',
  },
  {
    id: 4,
    stage: 'STAGE 04',
    name: 'VALIDATE',
    summary: 'Thermal chamber stress testing, brownout vibration cycling, dust box exposure.',
    phase: 'PHASE: HARDENING',
    title: '04: ENVIRONMENTAL STRESS VALIDATION',
    desc: 'Hardware is placed in environmental testing chambers simulating 55°C heat, power supply voltage dropouts, and heavy particulate silicate fog to identify and rectify failure modes.',
    gate: 'GATE CRITERION: 1000-HR CHAMBER RUN WITHOUT TRIP',
  },
  {
    id: 5,
    stage: 'STAGE 05',
    name: 'DEPLOY',
    summary: 'Edge fleet flashing, zero-downtime boots, optical focus calibration on physical rigs.',
    phase: 'PHASE: COMMENCEMENT',
    title: '05: FIELD COMMENCEMENT & FLASHING',
    desc: 'Deployment on client machinery with dual boot partitions for zero-downtime safety. Technicians calibrate optical alignment on active physical mounting rigs.',
    gate: 'GATE CRITERION: FIELD ACCEPTANCE MET',
  },
  {
    id: 6,
    stage: 'STAGE 06',
    name: 'EVOLVE',
    summary: 'Edge telemetry log aggregation, continuous offline fine-tuning, model artifact versioning.',
    phase: 'PHASE: ITERATION',
    title: '06: CONTINUOUS EVOLUTION',
    desc: 'Edge units aggregate non-sensitive telemetry checkpoints locally. Iterative models are fine-tuned offline on synthetic and edge edge-cases, with versioned artifact distribution.',
    gate: 'GATE CRITERION: ARTIFACT VERSION BUMP COMMITTED',
  },
];

export const RDProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
            06 / R&D PROCESS
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
            From research question to field deployment.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A disciplined engineering progression guaranteeing models perform in silicon rather than merely scoring well in academic benchmark notebooks.
          </p>
        </div>

        {/* 6-Stage Timeline Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-space-xs border-y border-outline-variant py-space-sm">
          {stages.map((st) => {
            const isActive = st.id === activeStage;
            return (
              <div
                key={st.id}
                onClick={() => setActiveStage(st.id)}
                className={`cursor-pointer p-space-sm flex flex-col justify-between min-h-[180px] transition-all ${
                  isActive
                    ? 'bg-surface-container border-t-2 border-secondary'
                    : 'bg-surface border-t-2 border-transparent hover:border-outline'
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
                aria-label={`${st.stage}: ${st.name}`}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`font-mono-label text-mono-label font-bold ${
                      isActive ? 'text-secondary' : 'text-on-surface-variant'
                    }`}
                  >
                    {st.stage}
                  </span>
                  <span className="font-headline-md text-body-md text-on-surface font-bold uppercase">
                    {st.name}
                  </span>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                    {st.summary}
                  </p>
                </div>
                <span className="font-mono-label text-[10px] text-on-surface-variant mt-2">
                  {st.phase}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stage Detail Callout */}
        <div className="bg-surface-container p-space-md border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md transition-colors">
          <div className="flex flex-col gap-1">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold">
              STAGE METHODOLOGY FOCUS
            </span>
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              {current.title}
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              {current.desc}
            </p>
          </div>
          <div className="flex items-center gap-space-xs font-mono-label text-body-sm bg-surface-container-high px-space-md py-space-xs border border-outline-variant flex-shrink-0">
            <MaterialIcon name="verified" className="text-[16px] text-secondary" />
            <span className="font-bold">{current.gate}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
