import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// 8 Research Areas
interface ResearchAreaItem {
  id: string;
  num: string;
  title: string;
  summary: string;
  technicalVisual: string;
  icon: string;
}

const researchAreas: ResearchAreaItem[] = [
  {
    id: 'embedded-ai',
    num: '01',
    title: 'Embedded AI',
    summary: 'Mixed INT4/INT8 quantization and bare-metal runtime kernels on sub-watt silicon.',
    technicalVisual: 'INT8 QUANT // ZERO-COPY DMA',
    icon: 'memory',
  },
  {
    id: 'computer-vision',
    num: '02',
    title: 'Computer Vision',
    summary: 'Optical flow and sub-pixel edge tracking preserving features through dust and glare.',
    technicalVisual: 'SPATIAL COHERENCE // FLOW 60FPS',
    icon: 'visibility',
  },
  {
    id: 'intelligent-sensing',
    num: '03',
    title: 'Intelligent Sensing',
    summary: 'Multimodal sensor fusion binding optical arrays, thermal IR and acoustic probes.',
    technicalVisual: 'EKF MATRIX // MICROSECOND JITTER',
    icon: 'sensors',
  },
  {
    id: 'vlms',
    num: '04',
    title: 'Vision-Language Models',
    summary: 'Dynamic token pruning in visual decoders, compressing KV-cache footprints for local execution.',
    technicalVisual: 'TOKEN PRUNING // LOCAL CONTEXT',
    icon: 'psychology',
  },
  {
    id: 'edge-computing',
    num: '05',
    title: 'Edge Computing',
    summary: 'Decentralized compute topologies capable of complete air-gapped autonomy.',
    technicalVisual: 'AIR-GAPPED // LOCAL BUS',
    icon: 'hub',
  },
  {
    id: 'industrial-ai',
    num: '06',
    title: 'Industrial AI',
    summary: 'Algorithm design resilient against 10G mechanical vibration and radiant forge heat.',
    technicalVisual: '10G MECHANICAL INVARIANCE',
    icon: 'precision_manufacturing',
  },
  {
    id: 'ai-hardware',
    num: '07',
    title: 'AI Hardware',
    summary: 'Co-designing algorithms alongside silicon memory layouts and passive conduction chassis.',
    technicalVisual: 'PASSIVE CONDUCTION // 55°C DIE',
    icon: 'developer_board',
  },
  {
    id: 'field-deployment',
    num: '08',
    title: 'Field Deployment',
    summary: 'Empirical telemetry aggregation, dual-boot partitions and self-healing watchdogs.',
    technicalVisual: 'DUAL-BOOT // FAIL-SAFE RTOS',
    icon: 'settings_remote',
  },
];

// 7-Step R&D Pipeline
interface PipelineStepItem {
  num: string;
  name: string;
  headline: string;
}

const rdPipeline: PipelineStepItem[] = [
  { num: '01', name: 'QUESTION', headline: 'Define physical environmental bottlenecks before writing code.' },
  { num: '02', name: 'RESEARCH', headline: 'Benchmark architectures and model mathematical quantization bounds.' },
  { num: '03', name: 'PROTOTYPE', headline: 'Bare-metal carrier board integration and DMA register mapping.' },
  { num: '04', name: 'FIELD TEST', headline: 'Stress-test silicon in chambers with 55°C heat and particulate fog.' },
  { num: '05', name: 'VALIDATION', headline: 'Continuous execution proving fail-safe autonomous watchdog recovery.' },
  { num: '06', name: 'DEPLOYMENT', headline: 'Flash dual-boot partitions on target machinery with calibrated optics.' },
  { num: '07', name: 'REUSABLE IP', headline: 'Codify deployment telemetry into modular reusable deep-tech assets.' },
];

// 4 Featured Research Notes (Article Cards)
const featuredNotes = [
  {
    category: 'EMBEDDED AI',
    title: 'Quantization Strategies for Sub-5W Visual Transformers',
    desc: 'Investigating mixed INT4/INT8 precision bounds in self-attention matrices on ARM Cortex and RISC-V edge registers.',
    code: 'ENC-RN-2026-08',
    status: 'Preprint Forthcoming',
  },
  {
    category: 'COMPUTER VISION',
    title: 'Mitigating Atmospheric Dust Occlusion in Low-Cost Optics',
    desc: 'Spatio-temporal coherence kernels canceling particulate scatter in unshielded field cameras.',
    code: 'ENC-RN-2026-09',
    status: 'Preprint Forthcoming',
  },
  {
    category: 'EMBEDDED SYSTEMS',
    title: 'Zero-Downtime Deterministic Firmware Flashing in Remote Nodes',
    desc: 'Dual-bank flash memory partitions enabling atomic fallback during grid brownouts on solar arrays.',
    code: 'ENC-RN-2026-10',
    status: 'Preprint Forthcoming',
  },
  {
    category: 'VISION-LANGUAGE',
    title: 'Context Compression for On-Device Multi-Modal Reasoning',
    desc: 'Dynamic token pruning in visual decoders, compressing KV-cache footprints by 74% for local execution.',
    code: 'ENC-RN-2026-11',
    status: 'Preprint Forthcoming',
  },
];

export const ResearchPage: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('embedded-ai');
  const activeArea = researchAreas.find((a) => a.id === selectedAreaId) || researchAreas[0];

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* ========================================================================= */}
      {/* SECTION 01 — RESEARCH HERO (R&D DASHBOARD STYLE)                          */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / RESEARCH &amp; INSIGHTS</span>
              <span>// R&amp;D DASHBOARD</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">LAB_TRACKS: 8 ACTIVE // SILICON: HARDENED</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                OPEN METHODOLOGY
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                R&amp;D Dashboard &amp; <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">Engineering Insights.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Investigating low-bit quantization bounds, optical scatter cancellation, multimodal fusion and sub-watt execution.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/collaboration"
                >
                  <span>Lab Collaboration</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/technology"
                >
                  Technology Stack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — VISUAL R&D PIPELINE                                          */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="rd-pipeline">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                02 / R&amp;D PIPELINE
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                From Research Question to Reusable IP
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-secondary font-bold">
              7-STAGE CONTINUOUS CYCLE
            </span>
          </div>

          {/* Connected 7-Stage Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-xs font-mono-label">
            {rdPipeline.map((p, idx) => (
              <div
                key={p.num}
                className="bg-surface border border-outline-variant p-space-sm flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-secondary font-bold">{p.num}</span>
                    {idx < rdPipeline.length - 1 && <span className="text-[10px] text-on-surface-variant hidden lg:inline">→</span>}
                  </div>
                  <h4 className="font-headline-md text-body-sm font-bold uppercase mt-1 text-on-surface">
                    {p.name}
                  </h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {p.headline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — EIGHT RESEARCH AREAS (VISUAL CARDS)                           */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="areas">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                03 / RESEARCH AREAS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Eight Active Investigation Tracks
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-on-surface-variant">
              SELECT TO INSPECT SPECIFICATION
            </span>
          </div>

          {/* 8 Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {researchAreas.map((area) => {
              const isSelected = selectedAreaId === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`p-space-md border flex flex-col justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-surface-container border-2 border-secondary'
                      : 'bg-surface border-outline-variant hover:border-on-surface'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedAreaId(area.id);
                    }
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between font-mono-label text-[10px]">
                      <span className="text-secondary font-bold">{area.num}</span>
                      <MaterialIcon name={area.icon} className={`text-[20px] ${isSelected ? 'text-secondary' : 'text-on-surface-variant'}`} />
                    </div>

                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
                      {area.title}
                    </h3>

                    <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                      {area.summary}
                    </p>
                  </div>

                  <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-secondary font-bold">
                    {area.technicalVisual}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Area Banner */}
          <div className="bg-surface-container border border-outline-variant p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono-label text-body-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 bg-secondary inline-block"></span>
              <span className="font-bold text-on-surface">ACTIVE TRACK // {activeArea.title}:</span>
              <span className="text-on-surface-variant">{activeArea.summary}</span>
            </div>
            <span className="text-secondary font-bold text-[11px] flex-shrink-0">
              SPEC: {activeArea.technicalVisual}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — FEATURED RESEARCH ARTICLES (CARD LAYOUT)                     */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="publications">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                04 / PUBLICATIONS &amp; PREPRINTS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Featured Technical Notes
              </h2>
            </div>
            <span className="font-mono-label text-body-sm text-secondary font-bold">
              PEER EMBARGO / OPEN ACCESS
            </span>
          </div>

          {/* 4 Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {featuredNotes.map((note) => (
              <div
                key={note.code}
                className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="bg-surface-container px-1.5 py-0.5 border border-outline-variant text-secondary font-bold">
                      {note.category}
                    </span>
                    <span className="text-on-surface-variant">{note.code}</span>
                  </div>

                  <h3 className="font-headline-md text-body-md text-on-surface font-bold mt-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {note.title}
                  </h3>

                  <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed line-clamp-2 mt-1">
                    {note.desc}
                  </p>
                </div>

                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 flex items-center justify-between font-mono-label text-[11px]">
                  <span className="text-secondary font-bold uppercase">{note.status}</span>
                  <span className="text-on-surface-variant text-[10px]">CMS-READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — FINAL CTA                                                    */}
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
              to="/collaboration"
            >
              Academic Collaboration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
