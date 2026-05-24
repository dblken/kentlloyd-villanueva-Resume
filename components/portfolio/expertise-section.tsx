import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Core Expertise"
          title="Strong design fundamentals backed by strategic execution."
          description="These focus areas reflect the design disciplines I rely on most when building websites, visual systems, and user-centered digital experiences."
        />
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[24px] p-6 sm:p-7">
          <div className="space-y-5">
            {portfolioData.expertise.map((item, index) => (
              <div
                key={item.skill}
                className={index < portfolioData.expertise.length - 1 ? "border-b border-[var(--border)] pb-5" : ""}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-[var(--text)] sm:text-lg">{item.skill}</h3>
                  <span className="text-sm font-medium text-[var(--text-soft)]">{item.proficiency}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--accent-soft)]">
                  <div
                    className="h-full rounded-full bg-[var(--accent)] transition-all dark:bg-white"
                    style={{ width: `${item.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
