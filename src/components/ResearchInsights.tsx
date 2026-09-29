import React from 'react';

export interface ResearchNote {
  id: string;
  category: string;
  noteNumber: string;
  title: string;
  desc: string;
  docCode: string;
  status: string;
}

const defaultNotes: ResearchNote[] = [
  {
    id: 'note-01',
    category: 'EDGE AI',
    noteNumber: 'RESEARCH NOTE // 01',
    title: 'Quantization Strategies for Sub-5W Visual Transformers',
    desc: 'Investigating mixed INT4/INT8 precision bounds in self-attention matrices on ARM Cortex and RISC-V edge vector registers without catastrophic accuracy degradation.',
    docCode: 'ENC-RN-2026-08',
    status: 'Preprint Forthcoming',
  },
  {
    id: 'note-02',
    category: 'COMPUTER VISION',
    noteNumber: 'RESEARCH NOTE // 02',
    title: 'Mitigating Atmospheric Particle Occlusion in Low-Cost Optics',
    desc: 'Algorithmic optical restoration using spatio-temporal coherence kernels to cancel silicate dust scattering in un-shielded agricultural camera installations.',
    docCode: 'ENC-RN-2026-09',
    status: 'Preprint Forthcoming',
  },
  {
    id: 'note-03',
    category: 'EMBEDDED SYSTEMS',
    noteNumber: 'RESEARCH NOTE // 03',
    title: 'Zero-Downtime Deterministic Firmware Flashing in Remote Nodes',
    desc: 'A dual-bank flash memory partition scheme enabling atomic fallback during brownout interruptions on solar-powered rural monitoring arrays.',
    docCode: 'ENC-RN-2026-10',
    status: 'Preprint Forthcoming',
  },
  {
    id: 'note-04',
    category: 'VISION-LANGUAGE',
    noteNumber: 'RESEARCH NOTE // 04',
    title: 'Context Compression for On-Device Multi-Modal Reasoning',
    desc: 'Dynamic pruning of perceptual tokens in visual-language decoders, reducing KV-cache RAM footprint by 74% while preserving defect taxonomy fidelity.',
    docCode: 'ENC-RN-2026-11',
    status: 'Preprint Forthcoming',
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
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Open technical notes, preprints, and engineering investigations exploring hardware constraints, quantization theory, and ambient physical sensing.
          </p>
        </div>

        {/* 4 Technical Journal Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-surface border border-outline-variant p-space-md flex flex-col justify-between hover:border-on-surface transition-colors"
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between font-mono-label text-body-sm">
                  <span className="bg-surface-container px-space-xs py-0.5 text-on-surface font-bold uppercase">
                    {note.category}
                  </span>
                  <span className="text-secondary font-bold">{note.noteNumber}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
                  {note.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {note.desc}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-outline-variant flex items-center justify-between font-mono-label text-[11px]">
                <span className="text-on-surface-variant">{note.docCode}</span>
                <span className="text-on-surface font-bold uppercase">{note.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
