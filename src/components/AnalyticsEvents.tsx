"use client";

import { useEffect } from "react";

type GtagFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const el = target.closest<HTMLElement>("[data-ga-event]");
      if (!el) return;

      const eventName = el.dataset.gaEvent;
      if (!eventName) return;

      const category = el.dataset.gaCategory;
      const label = el.dataset.gaLabel;

      if (typeof window.gtag !== "function") return;

      window.gtag("event", eventName, {
        ...(category ? { event_category: category } : {}),
        ...(label ? { event_label: label } : {}),
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true } as any);
  }, []);

  return null;
}
