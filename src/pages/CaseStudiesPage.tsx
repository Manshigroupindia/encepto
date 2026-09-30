import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// Structured CMS-ready Case Study Dossier
interface CaseStudyDossier {
  id: string;
  domain: 'Agriculture' | 'Industrial' | 'Infrastructure' | 'Energy';
  domainTag: string;
  stage: string;
  title: string;
  challenge: string;
  environment: string;
  technology: string;
  outcome: string;
  techTags: string[];
}

const caseStudiesData: CaseStudyDossier[] = [
  {
    id: 'cs-agri-01',
    domain: 'Agriculture',
    domainTag: 'DOMAIN // AGRICULTURE · 01',
    stage: 'PHASE: FIELD VALIDATION',
    title: 'Arid Field Crop Canopy & Foliar Blight Telemetry',
    challenge: 'Abrasive silicate dust fouling and total cellular blackouts across expansive acreage.',
    environment: 'Semi-arid agricultural terrain under high diurnal solar loading.',
    technology: 'Edge NPU inference, optical scattering cancellation, local VLM contextual synthesis.',
    outcome: 'Optical ISP benchmarked; field telemetry logging underway.',
    techTags: ['Multispectral CMOS', 'Sub-5W NPU', 'INT8 Quantization', 'Air-Gapped RTOS'],
  },
  {
    id: 'cs-ind-02',
    domain: 'Industrial',
    domainTag: 'DOMAIN // INDUSTRIAL · 02',
    stage: 'PHASE: PRE-PRODUCTION PILOT',
    title: 'High-Speed Stamping Line Anomaly & Vibration Trip',
    challenge: '10G harmonic mechanical shock, electrical line noise, and sub-12ms response budget.',
    environment: 'Enclosed heavy manufacturing and metal stamping cell.',
    technology: 'High-speed optical ISP, fused 3-axis accelerometer EKF, optocoupled hardware relay.',
    outcome: 'Zero-latency DMA buffers benchmarked; harmonic profile established.',
    techTags: ['High-Speed MIPI', 'Harmonic FFT', 'Isolated CAN', 'Sub-12ms Loop'],
  },
  {
    id: 'cs-infra-03',
    domain: 'Infrastructure',
    domainTag: 'DOMAIN // INFRASTRUCTURE · 03',
    stage: 'PHASE: SENSOR NODE BRINGUP',
    title: 'Civil Girder Bridge & Rail Fracture Monitoring',
    challenge: 'Vast physical distances, seasonal monsoon humidity, and complete absence of grid power.',
    environment: 'Long-span railway bridges and remote highway transport corridors.',
    technology: '20 kHz acoustic transform kernels, low-power IMU strain logging, solar energy buffer.',
    outcome: 'Hermetic IP67 chassis tested; wide-temperature silicon verified (-40°C to +85°C).',
    techTags: ['20 kHz Acoustic', 'Wide-Temp Silicon', 'Solar Buffer', 'Hermetic IP67'],
  },
  {
    id: 'cs-energy-04',
    domain: 'Energy',
    domainTag: 'DOMAIN // ENERGY · 04',
    stage: 'PHASE: BASELINE CALIBRATION',
    title: 'Substation Radiometric Heatmap & Arcing Isolation',
    challenge: 'Severe 6kV electrical surge potential, intense EM noise, and outdoor solar wash.',
    environment: 'Outdoor utility distribution substation and photovoltaic farm.',
    technology: 'LWIR uncooled radiometric thermopiles, diurnal baseline subtraction, dry-contact relay.',
    outcome: 'Thermal sensitivity calibrated to 0.05°C NETD; diurnal baseline model trained.',
    techTags: ['LWIR Thermopile', '6kV Isolation', 'Diurnal Baseline', 'Dry-Contact Trip'],
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
      {/* ========================================================================= */}
      {/* SECTION 01 — CASE STUDIES HERO                                             */}
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
              <span className="tracking-widest uppercase font-bold text-secondary">01 / CASE STUDIES</span>
              <span>// FIELD DEPLOYMENTS &amp; VALIDATION</span>
            </div>
            <div className="flex items-center gap-space-md text-[10px] sm:text-mono-label">
              <span className="hidden sm:inline-block">STAGE: OPERATIONAL FIELD TRIALS</span>
              <span className="bg-surface-container-high px-space-xs py-0.5 text-on-surface font-bold">
                CMS-READY DOSSIERS
              </span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Where research meets <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">deployment.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Structured case framework displaying operational deployment parameters across demanding physical environments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-sm">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/contact"
                >
                  <span>Start a Conversation</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
                <Link
                  className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
                  to="/applications"
                >
                  Applications
                </Link>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-space-xs flex-wrap font-mono-label text-[11px] pt-space-xs border-t border-outline-variant">
            <span className="text-on-surface-variant mr-1">FILTER DOMAIN:</span>
            {domainsList.map((dom) => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1 border transition-colors ${
                  selectedDomain === dom
                    ? 'bg-primary text-on-primary border-primary font-bold'
                    : 'bg-surface-container text-on-surface border-outline-variant hover:border-on-surface'
                }`}
                type="button"
              >
                {dom.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — STRUCTURED CASE STUDY DOSSIERS (VISUAL METADATA BLOCKS)       */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="dossiers">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col justify-between hover:border-secondary transition-colors group relative"
              >
                {/* Header Strip */}
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between font-mono-label text-[10px]">
                    <span className="text-secondary font-bold">{study.domainTag}</span>
                    <span className="bg-surface-container px-2 py-0.5 border border-outline-variant text-on-surface font-bold">
                      {study.stage}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 group-hover:text-secondary transition-colors">
                    {study.title}
                  </h3>

                  {/* Structured Visual Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs pt-space-sm font-mono-label text-[11px]">
                    <div className="bg-surface-container-low p-2 border border-outline-variant/60">
                      <span className="text-secondary font-bold block text-[10px] uppercase">CHALLENGE:</span>
                      <span className="text-on-surface leading-tight block mt-0.5">{study.challenge}</span>
                    </div>

                    <div className="bg-surface-container-low p-2 border border-outline-variant/60">
                      <span className="text-secondary font-bold block text-[10px] uppercase">ENVIRONMENT:</span>
                      <span className="text-on-surface leading-tight block mt-0.5">{study.environment}</span>
                    </div>

                    <div className="bg-surface-container-low p-2 border border-outline-variant/60">
                      <span className="text-secondary font-bold block text-[10px] uppercase">TECHNOLOGY:</span>
                      <span className="text-on-surface leading-tight block mt-0.5">{study.technology}</span>
                    </div>

                    <div className="bg-surface-container-low p-2 border border-outline-variant/60">
                      <span className="text-secondary font-bold block text-[10px] uppercase">OUTCOME:</span>
                      <span className="text-on-surface leading-tight block mt-0.5">{study.outcome}</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 pt-space-xs font-mono-label text-[10px]">
                    {study.techTags.map((t) => (
                      <span key={t} className="bg-surface-container px-1.5 py-0.5 border border-outline-variant text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Invariant Note */}
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/60 font-mono-label text-[10px] text-on-surface-variant flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                    <span>DOSSIER PENDING EMBARGO LIFT</span>
                  </span>
                  <Link to="/contact" className="text-secondary font-bold hover:underline">
                    Inquire On Telemetry →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — FINAL CTA                                                    */}
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
