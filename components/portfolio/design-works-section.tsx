"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function DesignWorksSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleWorks = showAll ? portfolioData.designWorks : portfolioData.designWorks.slice(0, 3);

  return (
    <section id="design-works" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Design Works"
          title="Selected visual work across branding, digital art, education, and print."
          description="A curated mix of graphic design, digital illustration, promotional visuals, and children's book layouts."
        />
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[24px] p-6 sm:p-7">
          <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleWorks.map((work) => (
              <div
                key={work.title}
                className="flex h-full flex-col rounded-[22px] border border-[var(--border)] bg-[var(--background-elevated)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-panel"
              >
                <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {work.category}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{work.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{work.description}</p>
              </div>
            ))}
          </div>

          {portfolioData.designWorks.length > 3 ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="rounded-2xl border border-[var(--border-strong)] bg-[var(--background-elevated)] px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface)]"
              >
                {showAll ? "Show Less" : "See More"}
              </button>
            </div>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
