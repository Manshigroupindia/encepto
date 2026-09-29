import React from 'react';
import { Link } from 'react-router-dom';

export interface CaseStudyItem {
  id: string;
  pilot: string;
  state: string;
  title: string;
  challenge: string;
  environment: string;
  technology: string;
  outcome: string;
  footerNote: string;
}

const defaultStudies: CaseStudyItem[] = [
  {
    id: 'case-01',
    pilot: 'PILOT // 2026.Q1',
    state: 'STATE: VALIDATION_RUN',
    title: 'Arid Agriculture Crop Blight Telemetry',
    challenge: 'Silicate Dust & Zero Cellular',
    environment: 'Western Rajasthan (48°C)',
    technology: 'Edge NPU + Compact VLM',
    outcome: 'Telemetry Publishing Soon',
    footerNote: 'DOSSIER PENDING EMBARGO LIFT',
  },
  {
    id: 'case-02',
    pilot: 'PILOT // 2026.Q2',
    state: 'STATE: FIELD_DEPLOYED',
    title: 'High-Vibration Industrial Press Line',
    challenge: '10G Harmonic Shock',
    environment: 'Automotive Heavy Stamping',
    technology: 'Optical + EKF Accelerometer',
    outcome: 'Telemetry Publishing Soon',
    footerNote: 'DOSSIER PENDING EMBARGO LIFT',
  },
  {
    id: 'case-03',
    pilot: 'PILOT // 2026.Q3',
    state: 'STATE: SILICON_BRINGUP',
    title: 'Off-Grid Solar Substation Thermal Runaway',
    challenge: 'Unstable Solar Cycling',
    environment: 'Desert Photovoltaic Farm',
    technology: 'LWIR Radiometric Thermopiles',
    outcome: 'Telemetry Publishing Soon',
    footerNote: 'DOSSIER PENDING EMBARGO LIFT',
  },
];

interface CaseStudiesProps {
  studies?: CaseStudyItem[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ studies = defaultStudies }) => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="homepage-case-studies">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              08 / CASE STUDIES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Where research meets deployment.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-1">
              Structured case framework displaying operational deployment parameters. Selected field validation results appear as telemetry milestones publish.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
          >
            Explore All Case Studies →
          </Link>
        </div>

        {/* CMS-Ready Placeholder Cards with Blueprint Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {studies.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between relative overflow-hidden"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-mono-label text-[10px] text-on-surface-variant">
                  <span className="text-secondary font-bold">{item.pilot}</span>
                  <span>{item.state}</span>
                </div>
                <h3 className="font-headline-md text-body-lg text-on-surface font-bold">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-1 font-mono-label text-[11px] pt-space-xs">
                  <div className="flex justify-between border-b border-outline-variant/60 py-1">
                    <span className="text-on-surface-variant">Challenge:</span>
                    <span className="text-on-surface font-medium">{item.challenge}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/60 py-1">
                    <span className="text-on-surface-variant">Environment:</span>
                    <span className="text-on-surface font-medium">{item.environment}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/60 py-1">
                    <span className="text-on-surface-variant">Technology:</span>
                    <span className="text-on-surface font-medium">{item.technology}</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/60 py-1">
                    <span className="text-on-surface-variant">Outcome:</span>
                    <span className="text-secondary font-bold">{item.outcome}</span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-xs font-mono-label text-[10px] text-on-surface-variant flex items-center gap-1 border-t border-outline-variant/40">
                <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                {item.footerNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
