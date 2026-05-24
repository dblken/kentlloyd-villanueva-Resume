import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ArrowUpRightIcon, CheckBadgeIcon, SparkIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import profileImage from "@/components/upload/php.jpg";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const { achievement, badges, ctas, name, summary, title } = portfolioData;
  const combinedSummary = `${summary} ${achievement.detail}`;
  const emailHref = ctas.email;

  return (
    <section id="top" className="space-y-8">
      <Reveal>
        <div className="glass-panel-strong subtle-grid overflow-hidden rounded-[28px] p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2 text-xs text-[var(--text-soft)] sm:text-sm">
                <SparkIcon className="text-[var(--text)]" />
                <span className="truncate whitespace-nowrap">{portfolioData.availability}</span>
              </div>
              <ThemeToggle />
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                  <CheckBadgeIcon className="text-emerald-400" />
                  Creative Professional
                </span>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="overflow-hidden rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-1">
                  <div className="relative h-24 w-24 overflow-hidden rounded-[13px] bg-[var(--surface)] sm:h-28 sm:w-28">
                    <Image
                      src={profileImage}
                      alt="Kentlloyd Villanueva profile card"
                      placeholder="blur"
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="space-y-1.5">
                    <h1 className="max-w-3xl text-[1.35rem] font-semibold tracking-tight text-[var(--text)] sm:whitespace-nowrap sm:text-[1.5rem]">
                      {name}
                    </h1>
                    <p className="max-w-2xl text-base font-medium text-[var(--text)] sm:text-lg">
                      {title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <p className="max-w-3xl text-justify text-sm leading-7 text-[var(--text-soft)]">
                  {combinedSummary}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={emailHref}
                    aria-label={`Send email to ${portfolioData.contact.email}`}
                    onClick={() => {
                      window.location.href = emailHref;
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-glow dark:bg-white dark:text-slate-950"
                  >
                    Send Email
                    <ArrowUpRightIcon />
                  </a>
                  <a
                    href={ctas.contact}
                    className="inline-flex items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-soft)] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--text)]"
                  >
                    Contact Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[24px] p-5 sm:p-6">
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2 text-sm font-medium text-[var(--text)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
