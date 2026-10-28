import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

export const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    domain: 'industrial',
    constraints: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mljjnejv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          domain: formData.domain,
          constraints: formData.constraints,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((item: { message: string }) => item.message).join(', '));
        } else {
          setErrorMessage('There was an issue submitting your inquiry. Please try again or email us directly.');
        }
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network connection error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      domain: 'industrial',
      constraints: '',
    });
    setErrorMessage('');
    setFormStatus('idle');
  };

  return (
    <div className="flex flex-col w-full text-on-surface antialiased">
      {/* SECTION 01 — HERO */}
      <section className="w-full px-margin-mobile lg:px-margin py-16 lg:py-20 border-b border-outline-variant bg-surface transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4 text-xs font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="tracking-widest uppercase text-secondary font-bold">CONTACT</span>
              <span className="text-outline">|</span>
              <span>DIRECT ENGINEERING INQUIRY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-secondary/10 text-secondary border border-secondary/20 px-2.5 py-0.5 rounded text-xs font-semibold">
                TYPICAL RESPONSE &lt; 24 HOURS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                Start a conversation <br className="hidden sm:inline" />
                <span className="text-secondary">with our lab.</span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Whether you need embedded computer vision on custom silicon, multi-sensor environmental fusion, or on-device vision-language models, let’s discuss your technical constraints.
              </p>

              <div className="bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col gap-4 text-sm mt-2">
                <div className="flex items-center justify-between border-b border-outline-variant pb-3 text-xs font-semibold">
                  <span className="text-secondary uppercase tracking-wider">Direct Communication Channels</span>
                  <span className="text-on-surface-variant">Lab Direct</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Email:</span>
                    <a href="mailto:contact@encepto.in" className="text-secondary font-semibold hover:underline">
                      contact@encepto.in
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Lab Status:</span>
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                      <span>Operational</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Core Disciplines:</span>
                    <span className="text-on-surface text-xs font-medium">Embedded AI · Vision · Sensing · VLMs</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  className="text-sm font-semibold text-secondary hover:underline flex items-center gap-1"
                  to="/technology"
                >
                  <span>Explore Our Technology First</span>
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-6 bg-surface-container rounded-2xl border border-outline-variant p-6 sm:p-8 shadow-sm">
              {formStatus === 'success' ? (
                <div className="py-10 px-4 flex flex-col items-center text-center gap-5 transition-all duration-500 ease-out">
                  <div className="w-16 h-16 bg-secondary/10 border-2 border-secondary/30 text-secondary rounded-full flex items-center justify-center font-bold shadow-md">
                    <MaterialIcon name="check_circle" className="text-[36px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                      Submission Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-on-surface">
                      Thank You!
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
                    Thank you{formData.name ? `, ${formData.name}` : ''}! Your form has been submitted. Our engineering team will review your requirements and reach out to you shortly{formData.email ? ` at ${formData.email}` : ''}.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-secondary bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span>Typical Response &lt; 24 Hours</span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-3 px-6 py-2.5 bg-surface rounded-lg border border-outline-variant text-xs uppercase tracking-wider text-on-surface font-semibold hover:bg-surface-container-high transition-colors shadow-sm"
                    type="button"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mljjnejv"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 transition-all duration-300"
                >
                  <div className="flex items-center justify-between border-b border-outline-variant pb-3 text-xs font-semibold">
                    <span className="text-secondary uppercase tracking-wider">Technical Inquiry Form</span>
                    <span className="text-on-surface-variant">Direct to Engineering</span>
                  </div>

                  {formStatus === 'error' && errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2.5">
                      <MaterialIcon name="error_outline" className="text-[18px] shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        disabled={formStatus === 'submitting'}
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors disabled:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant" htmlFor="contact-email">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        required
                        disabled={formStatus === 'submitting'}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@organization.com"
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant" htmlFor="contact-org">
                        Organization / University
                      </label>
                      <input
                        id="contact-org"
                        name="organization"
                        disabled={formStatus === 'submitting'}
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Enterprise or lab name"
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors disabled:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant" htmlFor="contact-domain">
                        Primary Focus Domain
                      </label>
                      <select
                        id="contact-domain"
                        name="domain"
                        disabled={formStatus === 'submitting'}
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors disabled:opacity-60"
                      >
                        <option value="industrial">Industrial Vision &amp; Inspection</option>
                        <option value="sensing">Multi-Sensor Environmental Fusion</option>
                        <option value="embedded">Edge Compute &amp; NPU Quantization</option>
                        <option value="vlm">On-Device Vision-Language Reasoning</option>
                        <option value="custom-rd">Custom AI &amp; Software Engineering</option>
                        <option value="internship">Student Internship / Research Fellowship</option>
                        <option value="academic-collab">Academic &amp; Institutional Collaboration</option>
                        <option value="other">Other Real-World Deployment</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant" htmlFor="contact-constraints">
                      Problem &amp; Operating Constraints *
                    </label>
                    <textarea
                      id="contact-constraints"
                      name="constraints"
                      required
                      disabled={formStatus === 'submitting'}
                      rows={4}
                      value={formData.constraints}
                      onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
                      placeholder="Describe the physical operating environment, target hardware/SoC, latency requirements, thermal/power limits, and sensing modalities..."
                      className="bg-surface rounded-lg border border-outline-variant px-3.5 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none resize-none transition-colors disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 mt-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting your inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Requirements</span>
                        <MaterialIcon name="arrow_forward" className="text-[16px]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

