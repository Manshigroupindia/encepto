import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from './MaterialIcon';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-4 space-y-4">
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-bold text-sm tracking-tight shadow-xs">
                  E
                </div>
                <span className="text-lg font-bold tracking-wider text-slate-900 dark:text-white uppercase">
                  ENCEPTO
                </span>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                Embedded AI, computer vision and intelligent sensing engineered for real-world physical and industrial environments.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Engineering Lab &bull; Deep-Tech Edge Systems</span>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/technology">
                  Technology
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/applications">
                  Applications
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/product">
                  Product
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/research">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/case-studies">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" to="/collaboration">
                  Collaboration
                </Link>
              </li>
              <li className="pt-1">
                <a className="text-blue-600 dark:text-blue-400 hover:underline text-xs font-medium" href="mailto:contact@encepto.ai">
                  contact@encepto.ai
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; 2026 ENCEPTO LLP. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs"
              type="button"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs"
              type="button"
            >
              Terms of Use
            </button>
          </div>
        </div>

        {/* Designer Credit */}
        <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex justify-center text-center">
          <a
            href="https://www.manshigroup.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            Designed by Manshi Group of Services
          </a>
        </div>

      </div>

      {/* Legal Dialog / Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 max-w-xl w-full p-6 sm:p-7 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {legalModal === 'privacy' ? 'Data Integrity & Privacy Policy' : 'Terms of Engagement & Technical Use'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                type="button"
                aria-label="Close legal modal"
              >
                <MaterialIcon name="close" className="text-[18px]" />
              </button>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-300 flex flex-col gap-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Local Physical Data:</strong> Encepto develops software that runs locally on physical edge hardware. Our models and inference runtimes process raw optical, radiometric and sensor telemetry on-device without exfiltrating confidential data to cloud servers.
                  </p>
                  <p>
                    <strong>2. Inquiries &amp; Information:</strong> Technical inquiries submitted via our forms are confidential and routed exclusively to Encepto engineering personnel for feasibility assessment.
                  </p>
                  <p>
                    <strong>3. Data Minimization:</strong> We do not track users with third-party advertising cookies or monetize visitor data.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Engineering Scope:</strong> Information on this website describes Encepto’s software capabilities, engineering methodologies and research directions for technical evaluation.
                  </p>
                  <p>
                    <strong>2. Hardware Roadmap:</strong> Descriptions of future integrated hardware enclosures represent active research directions and are not commercial offers of off-the-shelf physical inventory.
                  </p>
                  <p>
                    <strong>3. Intellectual Property:</strong> Encepto software libraries, neural runtime compilers and proprietary algorithmic architectures are assets protected under applicable intellectual property laws.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-colors"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
