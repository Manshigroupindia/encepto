import React from 'react';
import { MaterialIcon } from './MaterialIcon';

export const FinalCTA: React.FC = () => {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container transition-colors" id="contact">
      <div className="max-w-[1440px] mx-auto border border-outline-variant bg-surface p-space-md lg:p-space-xl flex flex-col items-center text-center gap-space-md transition-colors">
        {/* Eyebrow */}
        <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-secondary uppercase font-bold">
          <span className="w-2 h-2 bg-secondary inline-block"></span>
          <span>LAB COLLABORATION INQUIRY</span>
        </div>

        {/* Headline */}
        <h2 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface max-w-3xl">
          Have a problem worth solving?
        </h2>

        {/* Copy */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
          Tell us about the environment, the constraint, and the problem. Let’s explore what intelligent physical systems could make possible.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-sm">
          <a
            className="px-space-xl py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-widest hover:bg-surface-container-highest hover:text-on-surface transition-all border border-primary flex items-center gap-space-xs font-bold"
            href="mailto:contact@encepto.ai"
          >
            <span>Start a Conversation</span>
            <MaterialIcon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>

        {/* Technical Sub-Division */}
        <div className="flex items-center gap-space-md font-mono-label text-body-sm text-on-surface-variant pt-space-md border-t border-outline-variant w-full justify-center flex-wrap">
          <span>R&D</span>
          <span>//</span>
          <span>ENGINEERING</span>
          <span>//</span>
          <span>DEPLOYMENT</span>
        </div>
      </div>
    </section>
  );
};
