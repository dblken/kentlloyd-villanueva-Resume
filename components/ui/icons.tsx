import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

const base = "h-4 w-4";

export function CheckBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden="true">
      <path
        d="M12 2.5L14.68 5.22L18.5 4.97L19.03 8.79L21.75 11.5L19.03 14.21L18.5 18.03L14.68 17.78L12 20.5L9.32 17.78L5.5 18.03L4.97 14.21L2.25 11.5L4.97 8.79L5.5 4.97L9.32 5.22L12 2.5Z"
        fill="currentColor"
      />
      <path d="M8.5 11.8L10.85 14.15L15.75 9.25" stroke="#050816" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden="true">
      <path
        d="M12 21C15.5 16.9 18 13.8 18 10.5C18 6.91 15.31 4 12 4C8.69 4 6 6.91 6 10.5C6 13.8 8.5 16.9 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden="true">
      <path
        d="M12 2L13.93 8.07L20 10L13.93 11.93L12 18L10.07 11.93L4 10L10.07 8.07L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden="true">
      <path
        d="M19 14.8C18.19 15.09 17.31 15.25 16.4 15.25C12.15 15.25 8.75 11.85 8.75 7.6C8.75 6.69 8.91 5.81 9.2 5C6.23 6.07 4.1 8.92 4.1 12.25C4.1 16.49 7.51 19.9 11.75 19.9C15.08 19.9 17.93 17.77 19 14.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3V5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 18.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 12H5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18.5 12H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.64 5.64L7.41 7.41" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.59 16.59L18.36 18.36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.59 7.41L18.36 5.64" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.64 18.36L7.41 16.59" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
