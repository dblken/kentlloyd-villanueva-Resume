import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function TechStackSection() {
  return (
    <section id="stack" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Tools & Technologies"
          title="A workflow built around visual quality, speed, and modern execution."
          description="These are the core tools I use for design production, web builds, motion, and AI-assisted creative work."
        />
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[24px] p-6 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-2">
            {Object.entries(portfolioData.tools).map(([category, items]) => (
              <div key={category}>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-base font-semibold text-[var(--text)] sm:text-lg">{category}</h3>
                <span className="text-sm text-[var(--text-muted)]">{items.length} tools</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
