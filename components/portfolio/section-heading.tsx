type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
          {description}
        </p>
      </div>
    </div>
  );
}
