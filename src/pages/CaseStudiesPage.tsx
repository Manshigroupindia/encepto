import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

// Structured CMS-ready Case Study Placeholder Definition
interface CaseStudyDossier {
  id: string;
  domain: 'Agriculture' | 'Industrial' | 'Infrastructure' | 'Energy';
  domainTag: string;
  stage: string;
  title: string;
  summary: string;
  challenge: string;
  environment: string;
  technology: string;
  validationStatus: string;
  techTags: string[];
}

const caseStudiesData: CaseStudyDossier[] = [
  {
    id: 'cs-agri-01',
    domain: 'Agriculture',
    domainTag: 'DOMAIN // AGRICULTURE · 01',
    stage: 'PHASE: FIELD VALIDATION',
    title: 'Arid Field Crop Canopy & Foliar Blight Telemetry',
    summary: 'Edge camera nodes deployed directly on agricultural machinery to evaluate foliar blight and micro-nutrient stress under extreme solar wash and dust.',
    challenge: 'Abrasive silicate dust accumulation and total cellular blackouts in remote acreage.',
    environment: 'Semi-arid agricultural terrain under high diurnal solar loading.',
    technology: 'Edge NPU inference, optical scattering cancellation, local VLM contextual synthesis.',
    validationStatus: 'Prototype bringup and thermal chamber validation completed; field telemetry logging underway.',
    techTags: ['Multispectral CMOS', 'Sub-5W NPU', 'INT8 Quantization', 'Air-Gapped RTOS'],
  },
  {
    id: 'cs-ind-02',
    domain: 'Industrial',
    domainTag: 'DOMAIN // INDUSTRIAL · 02',
    stage: 'PHASE: PRE-PRODUCTION PILOT',
    title: 'High-Speed Stamping Line Anomaly & Vibration Trip',
    summary: 'Sub-millimeter weld integrity verification and structural crack detection operating at line speed with deterministic machinery interlocks.',
    challenge: '10G harmonic mechanical shock, electrical noise from heavy presses, and sub-12ms response budget.',
    environment: 'Enclosed heavy manufacturing and metal stamping cell.',
    technology: 'High-speed optical ISP, fused 3-axis accelerometer EKF, optocoupled hardware trip relay.',
    validationStatus: 'Zero-latency DMA buffers benchmarked; mechanical vibration harmonics profile established.',
    techTags: ['High-Speed MIPI', 'Harmonic FFT', 'Isolated CAN', 'Sub-12ms Loop'],
  },
  {
    id: 'cs-infra-03',
    domain: 'Infrastructure',
    domainTag: 'DOMAIN // INFRASTRUCTURE · 03',
    stage: 'PHASE: SENSOR NODE BRINGUP',
    title: 'Civil Girder Bridge & Rail Fracture Monitoring',
    summary: 'Autonomous acoustic and strain telemetry nodes deployed on remote physical spans to detect structural fatigue before catastrophic failure.',
    challenge: 'Vast physical distances, seasonal monsoon humidity, and complete absence of grid power.',
    environment: 'Long-span railway bridges and remote highway transport corridors.',
    technology: '20 kHz acoustic transform kernels, low-power IMU strain logging, solar energy buffer.',
    validationStatus: 'Hermetic IP67 chassis tested; wide-temperature industrial components verified (-40°C to +85°C).',
    techTags: ['20 kHz Acoustic', 'Wide-Temp Silicon', 'Solar Buffer', 'Hermetic IP67'],
  },
  {
    id: 'cs-energy-04',
    domain: 'Energy',
    domainTag: 'DOMAIN // ENERGY · 04',
    stage: 'PHASE: BASELINE CALIBRATION',
    title: 'Substation Radiometric Heatmap & Arcing Isolation',
    summary: 'Continuous thermal tracking on high-voltage distribution transformers to predict localized insulation breakdown and prevent thermal runaway.',
    challenge: 'Severe 6kV electrical surge potential, intense electromagnetic noise, and unmanaged ambient solar heating.',
    environment: 'Outdoor utility substation and desert photovoltaic field.',
    technology: 'LWIR uncooled radiometric thermopiles, diurnal baseline subtraction, dry-contact relay.',
    validationStatus: 'Thermal sensitivity calibrated to 0.05°C NETD; solar diurnal heating compensation model trained.',
    techTags: ['LWIR Thermopile', '6kV Isolation', 'Diurnal Baseline', 'Dry-Contact Trip'],
  },
];

const cmsPipelineStages = [
  'Hero Framing',
  'Challenge Definition',
  'Environment Constraints',
  'Technology Selection',
  'Approach & Pipeline',
  'Validation Protocols',
  'Deployment Architecture',
  'Outcome & Telemetry',
  'Reusable IP Synthesis',
];

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
                CMS-READY DOSSIER FRAMEWORK
              </span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-xs">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
                Engineering intelligence <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">in the field.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Encepto focuses on taking AI systems beyond controlled demonstrations and toward real-world deployment across demanding physical environments.
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
                  to="/technology"
                >
                  Explore Technology
                </Link>
              </div>
              <span className="font-mono-label text-[10px] text-on-surface-variant">
                RIGOROUS DEPLOYMENT AUDITING · DOSSIER REVIEWS
              </span>
            </div>
          </div>

          {/* Technical Visual: Field Validation Schematic */}
          <div className="mt-space-md w-full bg-surface-container-lowest border border-outline-variant p-space-sm lg:p-space-md relative overflow-hidden font-mono-label">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-on-surface"></div>

            <div className="relative z-10 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
                  FIELD TELEMETRY VALIDATION PIPELINE
                </span>
                <span className="text-on-surface-variant">STATUS: PROTOCOLS ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-space-xs pt-1">
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">01 // BRINGUP</span>
                  <span className="text-body-sm font-bold text-on-surface">SILICON BENCHMARK</span>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">SUB-WATT THERMAL ENVELOPE</p>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">02 // INGESTION</span>
                  <span className="text-body-sm font-bold text-on-surface">SENSOR CALIBRATION</span>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">EKF TIME SYNCHRONIZATION</p>
                </div>
                <div className="bg-surface p-2 border border-outline-variant">
                  <span className="text-[10px] text-secondary font-bold block">03 // FIELD TRIAL</span>
                  <span className="text-body-sm font-bold text-on-surface">HARSH RUNTIME</span>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">PASSIVE CONDUCTION IN FIELD</p>
                </div>
                <div className="bg-surface-container-high p-2 border border-secondary">
                  <span className="text-[10px] text-secondary font-bold block">04 // SYNTHESIS</span>
                  <span className="text-body-sm font-bold text-on-surface">DOSSIER RELEASE</span>
                  <p className="text-[10px] text-secondary mt-0.5">PEER-VERIFIED TELEMETRY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — CASE STUDIES INTRO & FILTERING                                */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
                02 / ENGAGEMENT PHILOSOPHY
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                Every engagement builds reusable technology.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                From research and prototyping to field validation and deployment, every engagement is treated as an opportunity to build reusable technology and practical intelligence.
              </p>
            </div>

            {/* Domain Filter Bar */}
            <div className="flex flex-wrap items-center gap-1 font-mono-label text-[11px]">
              {['All', 'Agriculture', 'Industrial', 'Infrastructure', 'Energy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedDomain(cat)}
                  className={`px-3 py-1.5 border transition-all cursor-pointer uppercase font-bold ${
                    selectedDomain === cat
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface text-on-surface border-outline-variant hover:border-on-surface'
                  }`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ======================================================================= */}
          {/* SECTION 03 — FEATURED CASE STUDIES GRID (CMS-READY PLACEHOLDERS)        */}
          {/* ======================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-surface border border-outline-variant p-space-lg flex flex-col justify-between hover:border-secondary transition-all group"
              >
                <div className="flex flex-col gap-space-sm">
                  {/* Top Eyebrow */}
                  <div className="flex items-center justify-between font-mono-label text-[10px] border-b border-outline-variant pb-space-xs">
                    <span className="text-secondary font-bold">{study.domainTag}</span>
                    <span className="bg-surface-container px-2 py-0.5 text-on-surface font-bold">
                      {study.stage}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                    {study.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Technical Parameters Matrix */}
                  <div className="bg-surface-container p-space-sm border border-outline-variant font-mono-label text-[11px] flex flex-col gap-1.5 my-space-xs">
                    <div className="flex justify-between border-b border-outline-variant/60 pb-1">
                      <span className="text-on-surface-variant">CHALLENGE:</span>
                      <span className="text-on-surface font-bold text-right max-w-[60%] truncate">
                        {study.challenge}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/60 pb-1">
                      <span className="text-on-surface-variant">ENVIRONMENT:</span>
                      <span className="text-on-surface font-bold text-right max-w-[60%] truncate">
                        {study.environment}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/60 pb-1">
                      <span className="text-on-surface-variant">TECHNOLOGY:</span>
                      <span className="text-on-surface font-bold text-right max-w-[60%] truncate">
                        {study.technology}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">VALIDATION:</span>
                      <span className="text-secondary font-bold text-right max-w-[60%] truncate">
                        {study.validationStatus}
                      </span>
                    </div>
                  </div>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1 font-mono-label text-[10px]">
                    {study.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container-high px-2 py-0.5 text-on-surface border border-outline-variant/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dedicated Placeholder Notice */}
                  <div className="border border-dashed border-outline-variant bg-surface-container-low p-space-sm flex items-start gap-space-xs mt-space-xs">
                    <MaterialIcon name="pending" className="text-secondary text-[18px] flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5 font-mono-label">
                      <span className="text-body-sm text-on-surface font-bold">Case Study Coming Soon</span>
                      <p className="text-[11px] text-on-surface-variant leading-relaxed">
                        Detailed project information will be published as approved deployments and research outcomes become available.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-space-md pt-space-xs border-t border-outline-variant flex items-center justify-between font-mono-label text-[11px]">
                  <span className="text-on-surface-variant">DOSSIER PENDING CLIENT EMBARGO</span>
                  <button
                    disabled
                    className="px-3 py-1 bg-surface-container border border-outline-variant text-on-surface-variant cursor-not-allowed font-bold"
                    type="button"
                  >
                    View Case Study (Coming Soon)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — CASE STUDY DETAIL ARCHITECTURE PREVIEW                        */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface transition-colors" id="architecture">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl border-b border-outline-variant pb-space-md">
            <span className="font-mono-label text-mono-label text-secondary uppercase font-bold tracking-widest">
              03 / CMS PUBLISHING SCHEMA
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              Case Study Detail Architecture
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every future case study follows a disciplined engineering template ensuring reproducible validation and technical credibility:
            </p>
          </div>

          {/* Sequential 9-Step Schema Diagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-space-xs font-mono-label text-center">
            {cmsPipelineStages.map((stage, idx) => (
              <div
                key={stage}
                className="bg-surface-container border border-outline-variant p-2 flex flex-col justify-between min-h-[90px]"
              >
                <span className="text-[10px] text-secondary font-bold">0{idx + 1}</span>
                <span className="text-[11px] font-bold text-on-surface uppercase">{stage}</span>
                <span className="text-[9px] text-on-surface-variant">{idx < 8 ? '→' : '●'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — REUSABLE IP SECTION                                           */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface-container-low transition-colors" id="reusable-ip">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
                <span className="w-2 h-2 bg-secondary inline-block"></span>
                <span>ENGINEERING PHILOSOPHY // REUSABLE IP</span>
              </div>
              <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface tracking-tight">
                "Every deployment builds <br className="hidden sm:inline" />
                <span className="text-secondary underline decoration-1 underline-offset-8">the next system."</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Encepto treats deployments not as bespoke consulting one-offs, but as empirical laboratories. Field experience directly contributes to hardened algorithms, reusable software building blocks, and shared engineering knowledge.
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <Link
                  className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
                  to="/technology"
                >
                  <span>Explore Core Technology</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </div>

            {/* Reusable IP Synthesis Diagram */}
            <div className="lg:col-span-6 bg-surface border border-outline-variant p-space-md lg:p-space-lg flex flex-col gap-space-sm font-mono-label">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[10px]">
                <span className="text-secondary font-bold">IP COMPOUNDING CYCLE</span>
                <span className="text-on-surface-variant">FEEDBACK LOOP: EMPIRICAL → GENERALIZED</span>
              </div>

              <div className="flex flex-col gap-2 pt-space-xs">
                <div className="bg-surface-container p-space-sm border border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm font-bold text-on-surface">01. FIELD CHALLENGE</span>
                  <span className="text-[10px] text-secondary">DUST / VIBRATION / SHOCK</span>
                </div>
                <div className="flex justify-center text-secondary text-xs">↓</div>
                <div className="bg-surface-container p-space-sm border border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm font-bold text-on-surface">02. HARDWARE-AWARE MITIGATION</span>
                  <span className="text-[10px] text-secondary">INT8 KERNEL / EKF FILTER</span>
                </div>
                <div className="flex justify-center text-secondary text-xs">↓</div>
                <div className="bg-primary text-on-primary p-space-sm border border-primary flex items-center justify-between font-bold">
                  <span className="text-body-sm">03. REUSABLE SYSTEM MODULE</span>
                  <span className="text-[10px] text-secondary-container">CROSS-DOMAIN ASSET</span>
                </div>
              </div>

              <p className="font-body-sm text-[11px] text-on-surface-variant mt-2 leading-relaxed">
                By formalizing edge runtime heuristics into standardized IP components, future deployments assemble with greater speed, lower cost, and battle-tested reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — CASE STUDIES CTA                                              */}
      {/* ========================================================================= */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors">
        <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
            <span className="w-2 h-2 bg-secondary inline-block"></span>
            <span>PILOT &amp; DEPLOYMENT INQUIRY</span>
          </div>

          <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
            Have a problem worth solving?
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Tell us about your operational constraints, target environment, and the intelligence you need deployed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
            <Link
              className="px-space-md py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs font-bold"
              to="/contact"
            >
              <span>Start a Conversation</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface-container text-on-surface border border-outline-variant font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest transition-colors font-bold"
              to="/technology"
            >
              Explore Technology →
            </Link>
          </div>

          <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant pt-space-md border-t border-outline-variant w-full justify-center flex-wrap">
            <span>RESEARCH</span>
            <span>//</span>
            <span>PROTOTYPE</span>
            <span>//</span>
            <span>VALIDATE</span>
            <span>//</span>
            <span>DEPLOY</span>
            <span>//</span>
            <span>REUSABLE IP</span>
          </div>
        </div>
      </section>
    </div>
  );
};
