import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Passionate about design, innovation, and meaningful digital experiences."
          description="I blend artistic creativity with practical execution to create visual systems and websites that are clear, modern, and built around user experience."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.about.map((paragraph) => (
          <Reveal key={paragraph}>
            <div className="glass-panel rounded-[24px] p-6 sm:p-7">
              <p className="text-sm leading-7 text-[var(--text-soft)]">{paragraph}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="glass-panel rounded-[24px] p-6 sm:p-7">
          <h3 className="text-base font-semibold text-[var(--text)] sm:text-lg">Highlights</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {portfolioData.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2 text-sm font-medium text-[var(--text)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
