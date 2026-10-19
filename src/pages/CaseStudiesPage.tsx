import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

interface CaseStudy {
  id: string;
  domain: 'Agriculture' | 'Industrial' | 'Infrastructure' | 'Energy';
  stage: string;
  title: string;
  challenge: string;
  environment: string;
  solution: string;
  outcome: string;
  techTags: string[];
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-agri-01',
    domain: 'Agriculture',
    stage: 'Active Field Pilot',
    title: 'Crop Canopy & Foliar Blight Detection',
    challenge: 'Abrasive airborne dust, high solar heat, and total lack of cellular coverage across remote fields.',
    environment: 'Semi-arid agricultural acreage under direct daytime sun.',
    solution: 'On-device neural vision processing on low-power silicon with local offline logging.',
    outcome: 'Optical sensor pipelines benchmarked; live field validation logging active.',
    techTags: ['Edge Vision', 'Low-Power Silicon', 'Offline RTOS', 'Camera Sensing'],
  },
  {
    id: 'cs-ind-02',
    domain: 'Industrial',
    stage: 'Pre-Production Trial',
    title: 'High-Speed Stamping Line Anomaly Detection',
    challenge: 'Intense mechanical vibration, electrical line noise, and strict sub-12ms cycle time limits.',
    environment: 'High-speed automated metal stamping and manufacturing cell.',
    solution: 'High-speed vision synced with 3-axis vibration analysis and isolated safety relay trip.',
    outcome: 'Zero-latency buffer architecture verified; machine vibration profile established.',
    techTags: ['High-Speed Vision', 'Vibration Analysis', 'Sub-12ms Loop', 'Isolated Relays'],
  },
  {
    id: 'cs-infra-03',
    domain: 'Infrastructure',
    stage: 'Field Pilot',
    title: 'Girder Bridge & Rail Track Defect Monitoring',
    challenge: 'Vast physical distances, seasonal monsoon humidity, and complete absence of grid power.',
    environment: 'Remote railway bridges and heavy-haul transport corridors.',
    solution: 'Low-power acoustic sensors combined with strain logging and solar battery buffer.',
    outcome: 'Weatherproof IP67 enclosure and industrial-grade silicon verified (-40°C to +85°C).',
    techTags: ['Acoustic Sensing', 'Wide-Temp Silicon', 'Solar Buffer', 'IP67 Sealed'],
  },
  {
    id: 'cs-energy-04',
    domain: 'Energy',
    stage: 'Baseline Calibration',
    title: 'Substation Thermal Mapping & Hotspot Detection',
    challenge: 'High-voltage electrical noise, bright outdoor sunlight, and 24/7 operating requirements.',
    environment: 'Outdoor utility power distribution substation and solar installations.',
    solution: 'Uncooled infrared thermal sensors calibrated with automated ambient temperature compensation.',
    outcome: 'Thermal accuracy calibrated to 0.05°C; baseline temperature modeling in progress.',
    techTags: ['Thermal Imaging', 'Surge Isolation', 'Diurnal Baseline', 'Safety Alerts'],
  },
];

const domainsList = ['All', 'Agriculture', 'Industrial', 'Infrastructure', 'Energy'] as const;

export const CaseStudiesPage: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const filteredStudies =
    selectedDomain === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.domain === selectedDomain);

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* SECTION 01 — HERO */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 lg:py-20 border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="tracking-widest uppercase text-secondary font-bold">CASE STUDIES</span>
              <span className="text-outline">|</span>
              <span>APPLIED FIELD DEPLOYMENTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded text-xs font-semibold">
                ACTIVE PILOT TRIALS
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                Where research meets <br className="hidden sm:inline" />
                <span className="text-secondary">deployment.</span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Explore how Encepto deploys embedded AI, computer vision and intelligent sensing across demanding physical environments like farms, factories, and utility grids.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="px-5 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
                  to="/contact"
                >
                  <span>Discuss Your Project</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-5 py-2.5 bg-surface-container text-on-surface border border-outline-variant rounded text-sm font-semibold hover:bg-surface-container-high transition-colors"
                  to="/applications"
                >
                  Applications
                </Link>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-outline-variant text-xs">
            <span className="text-on-surface-variant font-medium mr-1">Filter by Sector:</span>
            {domainsList.map((dom) => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all ${
                  selectedDomain === dom
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-surface-container text-on-surface border border-outline-variant hover:border-secondary hover:text-secondary'
                }`}
                type="button"
              >
                {dom}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — CASE STUDY CARDS */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 bg-surface-container-low transition-colors" id="dossiers">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-surface rounded-xl border border-outline-variant p-6 lg:p-8 flex flex-col justify-between hover:border-secondary/60 hover:shadow-lg transition-all group"
              >
                {/* Header */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-secondary uppercase tracking-wider">
                      {study.domain}
                    </span>
                    <span className="bg-surface-container text-on-surface-variant border border-outline-variant px-2.5 py-0.5 rounded text-[11px] font-medium">
                      {study.stage}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {study.title}
                  </h3>

                  {/* Structured Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/60">
                      <span className="text-secondary font-semibold block text-[11px] uppercase tracking-wider">The Challenge</span>
                      <span className="text-on-surface leading-relaxed block mt-1">{study.challenge}</span>
                    </div>

                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/60">
                      <span className="text-secondary font-semibold block text-[11px] uppercase tracking-wider">Operating Environment</span>
                      <span className="text-on-surface leading-relaxed block mt-1">{study.environment}</span>
                    </div>

                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/60">
                      <span className="text-secondary font-semibold block text-[11px] uppercase tracking-wider">Technology Applied</span>
                      <span className="text-on-surface leading-relaxed block mt-1">{study.solution}</span>
                    </div>

                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/60">
                      <span className="text-secondary font-semibold block text-[11px] uppercase tracking-wider">Current Progress</span>
                      <span className="text-on-surface leading-relaxed block mt-1">{study.outcome}</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.techTags.map((t) => (
                      <span key={t} className="bg-surface-container px-2 py-0.5 rounded border border-outline-variant text-[11px] font-medium text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-outline-variant/60 text-xs text-on-surface-variant flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                    <span>Pilot deployment · Detailed metrics shared under NDA</span>
                  </span>
                  <Link to="/contact" className="text-secondary font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Discuss This Case Study</span>
                    <MaterialIcon name="arrow_forward" className="text-[14px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — FINAL CTA */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto rounded-2xl border border-outline-variant bg-surface-container p-8 lg:p-12 flex flex-col items-center text-center gap-4 transition-colors">
          <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>NEXT STEPS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface max-w-2xl tracking-tight">
            Have a problem worth solving?
          </h2>

          <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
            Let's explore how AI, computer vision and intelligent sensing can solve your real-world bottlenecks.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              className="px-6 py-2.5 bg-primary text-on-primary rounded text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center gap-2"
              to="/contact"
            >
              <span>Contact Encepto</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-6 py-2.5 bg-surface text-on-surface border border-outline-variant rounded text-sm font-semibold hover:bg-surface-container-high transition-colors"
              to="/technology"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

