"use client";

import type { CSSProperties } from "react";

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
        "--cycler-duration": `${durationSeconds}s`,
        "--cycler-step": `${secondsPerItem}s`,
      } as CSSProperties}
      aria-label={ariaLabel}
    >
      {safeItems.map((text, index) => (
        <span
          key={`${index}-${text}`}
          className={itemClassName ? `text-cycler-item ${itemClassName}` : "text-cycler-item"}
          style={{
            "--cycler-delay": `${index * secondsPerItem}s`,
          } as CSSProperties}
        >
          {text}
        </span>
      ))}
    </span>
  );
}
