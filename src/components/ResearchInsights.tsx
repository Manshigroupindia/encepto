import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export interface ResearchNote {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  code: string;
}

const defaultNotes: ResearchNote[] = [
  {
    id: 'note-01',
    category: 'EMBEDDED AI',
    title: 'Quantization Strategies for Sub-5W Visual Transformers',
    excerpt: 'Mixed INT4/INT8 precision bounds on ARM Cortex and RISC-V edge vector registers.',
    code: 'ENC-RN-2026-08',
  },
  {
    id: 'note-02',
    category: 'COMPUTER VISION',
    title: 'Mitigating Atmospheric Dust Occlusion in Low-Cost Optics',
    excerpt: 'Spatio-temporal coherence kernels canceling particulate scatter in unshielded field cameras.',
    code: 'ENC-RN-2026-09',
  },
  {
    id: 'note-03',
    category: 'EDGE COMPUTING',
    title: 'Zero-Downtime Deterministic Firmware Flashing in Remote Nodes',
    excerpt: 'Dual-bank flash memory partitions enabling atomic fallback during grid brownouts.',
    code: 'ENC-RN-2026-10',
  },
  {
    id: 'note-04',
    category: 'VISION-LANGUAGE',
    title: 'Context Compression for On-Device Multi-Modal Reasoning',
    excerpt: 'Dynamic token pruning in visual decoders, compressing KV-cache footprints for local execution.',
    code: 'ENC-RN-2026-11',
  },
];

interface ResearchInsightsProps {
  notes?: ResearchNote[];
}

export const ResearchInsights: React.FC<ResearchInsightsProps> = ({ notes = defaultNotes }) => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="research">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              09 / RESEARCH & INSIGHTS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Thinking beyond the model.
            </h2>
          </div>
          <Link
            to="/research"
            className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
          >
            Explore Research Portal →
          </Link>
        </div>

        {/* Article Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {notes.map((note) => (
            <div
              key={note.id}
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
                  {note.excerpt}
                </p>
              </div>

              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 flex items-center justify-between font-mono-label text-[11px]">
                <Link
                  to="/research"
                  className="text-secondary font-bold flex items-center gap-1 hover:underline"
                >
                  <span>Read Note</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </Link>
                <span className="text-[10px] text-on-surface-variant">PREPRINT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
