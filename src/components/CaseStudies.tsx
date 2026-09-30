import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  status: string;
  path: string;
}

const defaultStudies: CaseStudyItem[] = [
  {
    id: 'case-01',
    category: 'AGRICULTURE',
    title: 'Arid Crop Canopy & Foliar Blight Telemetry',
    summary: 'Edge camera nodes evaluating foliar blight under high solar wash and abrasive dust.',
    status: 'Field Validation in Progress',
    path: '/case-studies',
  },
  {
    id: 'case-02',
    category: 'INDUSTRIAL',
    title: 'High-Speed Stamping Line Anomaly & Vibration Trip',
    summary: 'Sub-millimeter weld integrity verification and deterministic closed-loop machinery interlocks.',
    status: 'Pre-Production Pilot',
    path: '/case-studies',
  },
  {
    id: 'case-03',
    category: 'INFRASTRUCTURE',
    title: 'Girder Bridge & Railway Acoustic Fracture Monitoring',
    summary: 'Autonomous acoustic and strain telemetry nodes logging physical fatigue without grid power.',
    status: 'Sensor Node Bringup',
    path: '/case-studies',
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
          </div>
          <Link
            to="/case-studies"
            className="px-space-md py-space-xs bg-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider text-on-surface hover:border-secondary hover:text-secondary transition-colors font-bold flex-shrink-0"
          >
            Explore All Case Studies →
          </Link>
        </div>

        {/* Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {studies.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container border border-outline-variant p-space-md flex flex-col justify-between hover:border-secondary transition-colors group"
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between font-mono-label text-[10px]">
                  <span className="bg-surface px-1.5 py-0.5 border border-outline-variant text-secondary font-bold">
                    {item.category}
                  </span>
                  <span className="text-on-surface-variant flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full inline-block"></span>
                    {item.status}
                  </span>
                </div>
                
                <h3 className="font-headline-md text-body-lg text-on-surface font-bold mt-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                  {item.summary}
                </p>
              </div>

              <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 flex items-center justify-between font-mono-label text-[11px]">
                <Link
                  to={item.path}
                  className="text-secondary font-bold flex items-center gap-1 hover:underline"
                >
                  <span>View Case Study</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </Link>
                <span className="text-[10px] text-on-surface-variant">DOSSIER PENDING EMBARGO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
