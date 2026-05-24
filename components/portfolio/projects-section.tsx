import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected website, system, and interface work."
          description="A mix of business websites, SaaS-style pages, system design, and mobile UI created with a clean modern approach."
        />
      </Reveal>

      <StaggerGroup className="grid gap-4 xl:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <Reveal key={project.title}>
            <div className="group glass-panel block h-full rounded-[26px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {project.type}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-slate-950">
                  Featured
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">{project.title}</h3>
                <p className="text-sm leading-7 text-[var(--text-soft)]">{project.description}</p>
                <div className="grid gap-2 pt-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-2 text-sm text-[var(--text-soft)]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  );
}
