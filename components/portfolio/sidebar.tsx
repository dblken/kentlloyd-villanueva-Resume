import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { CheckBadgeIcon } from "@/components/ui/icons";
import profileImage from "@/components/upload/php.jpg";
import { portfolioData } from "@/lib/portfolio-data";

export function Sidebar() {
  return (
    <Reveal className="lg:sticky lg:top-8">
      <aside className="dark-glass rounded-[30px] p-6 text-white sm:p-7">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-0.5">
              <div className="relative h-full w-full overflow-hidden rounded-[17px]">
                <Image
                  src={profileImage}
                  alt="Kentlloyd Villanueva portrait"
                  fill
                  sizes="80px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="truncate whitespace-nowrap text-base font-semibold">{portfolioData.name}</h2>
                <CheckBadgeIcon className="shrink-0 text-emerald-300" />
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-300">{portfolioData.title}</p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Profile Snapshot
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {portfolioData.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Experience
              </h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                Timeline
              </span>
            </div>
            <div className="space-y-5">
              {portfolioData.experience.map((item, index) => (
                <div key={`${item.role}-${item.year}`} className="relative pl-8">
                  {index < portfolioData.experience.length - 1 ? (
                    <span className="absolute left-[8px] top-7 h-[calc(100%+16px)] w-px bg-white/10" />
                  ) : null}
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-white/15 bg-white/90 shadow-[0_0_0_4px_rgba(255,255,255,0.04)]" />
                  <p className="text-sm font-semibold text-white">{item.role}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Achievement Badges
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {portfolioData.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </Reveal>
  );
}
