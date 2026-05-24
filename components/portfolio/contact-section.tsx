import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { portfolioData } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together."
          description="Ready to bring your vision to life? I am open to new opportunities, website projects, design collaborations, and creative partnerships."
        />
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[22px] border border-[var(--border)] bg-[var(--background-elevated)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Email
              </p>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="mt-4 block break-all text-sm leading-7 font-medium text-[var(--text)] transition hover:text-[var(--text-soft)]"
              >
                {portfolioData.contact.email}
              </a>
            </div>

            <div className="rounded-[22px] border border-[var(--border)] bg-[var(--background-elevated)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Phone
              </p>
              <a
                href={portfolioData.ctas.phone}
                className="mt-4 block text-sm leading-7 font-medium text-[var(--text)] transition hover:text-[var(--text-soft)]"
              >
                {portfolioData.contact.phone}
              </a>
            </div>

            <div className="rounded-[22px] border border-[var(--border)] bg-[var(--background-elevated)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Facebook
              </p>
              <p className="mt-4 text-sm leading-7 font-medium text-[var(--text)]">{portfolioData.contact.facebook}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
