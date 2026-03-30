"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  items: string[];
  secondsPerItem?: number;
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
};

export function TextCycler({
  items,
  secondsPerItem = 3,
  className,
  itemClassName,
  ariaLabel,
}: Props) {
  const safeItems = useMemo(
    () => items.filter((v) => typeof v === "string" && v.trim().length > 0),
    [items]
  );

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (safeItems.length <= 1) return;

    const ms = Math.max(1, secondsPerItem) * 1000;

    const id = window.setInterval(() => {
      setShow(false);
      window.setTimeout(() => {
        setIndex((v) => (v + 1) % safeItems.length);
        setShow(true);
      }, 180);
    }, ms);

    return () => window.clearInterval(id);
  }, [safeItems.length, secondsPerItem]);

  if (safeItems.length === 0) return null;

  return (
    <span
      className={["relative block", className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
    >
      <span
        className={[
          "block transition-opacity duration-200",
          show ? "opacity-100" : "opacity-0",
          itemClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {safeItems[index]}
      </span>

      <span className="sr-only">{safeItems.join(" ")}</span>
    </span>
  );
}
