import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant transition-colors">
      <div className="w-full px-margin-mobile lg:px-margin py-space-xl">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg pb-space-xl border-b border-outline-variant">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-space-md">
            <div className="flex flex-col gap-space-sm">
              <Link to="/">
                <span className="font-headline-md text-headline-md tracking-wider text-on-surface uppercase font-bold hover:text-secondary transition-colors">
                  ENCEPTO
                </span>
              </Link>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
                R&amp;D-led deep-tech engineering: AI-driven software systems, embedded sensing, and on-device intelligence built for real-world physical constraints.
              </p>
            </div>
            <div className="mt-space-lg flex items-center gap-space-xs font-mono-label text-mono-label text-on-surface-variant">
              <span className="w-2 h-2 bg-secondary inline-block"></span>
              <span>LAB_STATUS // OPERATIONAL 2026.04</span>
            </div>
          </div>

          {/* Explore Col */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label text-on-surface uppercase tracking-wider font-bold">
              Explore
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/technology"
              >
                Technology
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/applications"
              >
                Applications
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors font-medium text-secondary"
                to="/product"
              >
                Product &amp; Offerings
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/research"
              >
                Research &amp; Insights
              </Link>
            </div>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label text-on-surface uppercase tracking-wider font-bold">
              Company
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/about"
              >
                About Encepto
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/case-studies"
              >
                Case Studies
              </Link>
            </div>
          </div>

          {/* Connect Col */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label text-on-surface uppercase tracking-wider font-bold">
              Connect
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/contact"
              >
                Contact &amp; Inquiries
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/careers"
              >
                Careers
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/collaboration"
              >
                Academic &amp; Lab Collaboration
              </Link>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors pt-1"
                href="mailto:contact@encepto.ai"
              >
                Direct: contact@encepto.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md font-mono-label text-mono-label text-on-surface-variant">
          <div className="flex items-center gap-space-md flex-wrap">
            <span className="uppercase">© 2026 ENCEPTO LLP. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline-block">//</span>
            <span className="hidden md:inline-block uppercase">SYS_ID: ENC-DEEPTECH-V4</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-on-surface transition-colors uppercase cursor-pointer bg-transparent border-0 p-0 font-mono-label text-mono-label"
              type="button"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-on-surface transition-colors uppercase cursor-pointer bg-transparent border-0 p-0 font-mono-label text-mono-label"
              type="button"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog / Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin-mobile">
          <div className="bg-surface border border-outline-variant max-w-xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md animate-in fade-in zoom-in-95 duration-150 font-mono-label">
            <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs text-[11px]">
              <span className="text-secondary font-bold uppercase">
                {legalModal === 'privacy' ? 'DATA INTEGRITY & PRIVACY STATEMENT' : 'TERMS OF ENGAGEMENT & TECHNICAL USE'}
              </span>
              <button
                onClick={() => setLegalModal(null)}
                className="w-6 h-6 flex items-center justify-center hover:bg-surface-container text-on-surface"
                type="button"
                aria-label="Close legal modal"
              >
                <MaterialIcon name="close" className="text-[18px]" />
              </button>
            </div>

            <div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Physical Operational Data:</strong> Encepto develops software that runs locally on physical edge hardware. Our models and inference runtimes process raw optical, radiometric, and inertial sensor data on-device without exfiltrating confidential telemetry to public cloud services.
                  </p>
                  <p>
                    <strong>2. Inquiry &amp; Academic Ingestion:</strong> Technical inquiries submitted via our web forms are held in strict confidence and routed exclusively to Encepto engineering and research personnel for technical feasibility review.
                  </p>
                  <p>
                    <strong>3. Data Minimization:</strong> We do not track users with third-party advertising cookies or monetize user session behavioral data.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. R&amp;D Scope:</strong> Information on this website describes Encepto’s software capabilities, engineering methodologies, and forward-looking research roadmaps. Preprints, benchmark summaries, and architecture overviews are provided for technical evaluation.
                  </p>
                  <p>
                    <strong>2. Hardware Roadmap Notice:</strong> Descriptions of future integrated hardware enclosures represent active research directions and are not commercial offers of off-the-shelf physical inventory.
                  </p>
                  <p>
                    <strong>3. Intellectual Property:</strong> Encepto software libraries, neural runtime compilers, and proprietary algorithmic topologies are proprietary assets protected under applicable intellectual property laws.
                  </p>
                </>
              )}
            </div>

            <div className="pt-space-xs border-t border-outline-variant flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-space-md py-1.5 bg-primary text-on-primary font-mono-label text-[10px] uppercase font-bold tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-colors"
                type="button"
              >
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
