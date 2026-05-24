import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function SpecializedSkillsSection() {
  return (
    <section id="specialized-skills" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Specialized Skills"
          title="Design services centered on clarity, responsiveness, and brand impact."
          description="From polished website layouts to creative brand visuals, each skill is applied with a clean modern aesthetic and a focus on usability."
        />
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[24px] p-6 sm:p-7">
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.specializedSkills.map((skill, index) => (
              <div
                key={skill.title}
                className={
                  index < portfolioData.specializedSkills.length - 2
                    ? "border-b border-[var(--border)] pb-6 md:border-b-0 md:pb-0"
                    : ""
                }
              >
              <h3 className="text-lg font-semibold text-[var(--text)]">{skill.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
