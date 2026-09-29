import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant transition-colors">
      <div className="w-full px-margin-mobile lg:px-margin py-space-xl">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-lg pb-space-xl border-b border-outline-variant">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-space-lg">
            <div className="flex flex-col gap-space-sm">
              <Link to="/">
                <span className="font-headline-md text-headline-md tracking-wider text-on-surface uppercase font-bold hover:text-secondary transition-colors">
                  ENCEPTO
                </span>
              </Link>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Embedded AI · Computer Vision · Intelligent Sensing · Vision-Language Models
              </p>
            </div>
            <div className="mt-space-lg flex items-center gap-space-xs font-mono-label text-mono-label text-on-surface-variant">
              <span className="w-2 h-2 bg-secondary inline-block"></span>
              <span>LAB_STATUS // OPERATIONAL 2026.04</span>
            </div>
          </div>

          {/* Technology */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label text-on-surface uppercase tracking-wider font-bold">
              Technology
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/technology"
              >
                Neural Runtime
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/technology#architecture"
              >
                Edge Quantization
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/technology"
              >
                Sensor Fusion
              </Link>
            </div>
          </div>

          {/* Applications */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label text-on-surface uppercase tracking-wider font-bold">
              Applications
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/applications"
              >
                Industrial Robotics
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/applications"
              >
                Avionics &amp; Defense
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/applications"
              >
                Biomedical Devices
              </Link>
            </div>
          </div>

          {/* Research */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label text-on-surface uppercase tracking-wider font-bold">
              Research
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/research#insights"
              >
                Preprints &amp; Papers
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/research"
              >
                Model Benchmarks
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                to="/case-studies"
              >
                Case Studies
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-space-sm">
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
                to="/contact"
              >
                Contact &amp; Lab Inquiries
              </Link>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                href="mailto:contact@encepto.ai?subject=Partner%20Portal%20Access"
              >
                Partner Portal
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
            <span className="hover:text-on-surface transition-colors uppercase cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-on-surface transition-colors uppercase cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
