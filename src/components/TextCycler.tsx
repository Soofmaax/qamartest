"use client";

type TextCyclerProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  secondsPerItem?: number;
  ariaLabel?: string;
};

export function TextCycler({
  items,
  className,
  itemClassName,
  secondsPerItem = 3,
  ariaLabel,
}: TextCyclerProps) {
  const safeItems = items.filter((t) => t.trim().length > 0);
  const durationSeconds = Math.max(1, safeItems.length) * secondsPerItem;

  return (
    <span
      className={className ? `text-cycler ${className}` : "text-cycler"}
      style={{
        // @ts-expect-error CSS custom property
        "--cycler-duration": `${durationSeconds}s`,
        // @ts-expect-error CSS custom property
        "--cycler-step": `${secondsPerItem}s`,
      }}
      aria-label={ariaLabel}
    >
      {safeItems.map((text, index) => (
        <span
          key={`${index}-${text}`}
          className={itemClassName ? `text-cycler-item ${itemClassName}` : "text-cycler-item"}
          style={{
            // @ts-expect-error CSS custom property
            "--cycler-delay": `${index * secondsPerItem}s`,
          }}
        >
          {text}
        </span>
      ))}
    </span>
  );
}
