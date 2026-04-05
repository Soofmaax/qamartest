'use client';

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import type { GtagFn } from "@/lib/analytics";
import { useCookieConsent } from "@/lib/cookieConsent";

type Props = {
  isPreview: boolean;
  gtmId?: string;
  gaId?: string;
  metaPixelId?: string;
};

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function AnalyticsScripts({ isPreview, gtmId, gaId, metaPixelId }: Props) {
  const { consent } = useCookieConsent();
  const [ready, setReady] = useState(false);

  const canTrack = !isPreview && consent === "accepted";

  const shouldLoadGtm = canTrack && Boolean(gtmId) && ready;
  const shouldLoadGa4 = canTrack && Boolean(gaId) && ready;

  const gtmSrc = useMemo(() => {
    if (!gtmId) return null;
    const url = new URL("https://www.googletagmanager.com/gtm.js");
    url.searchParams.set("id", gtmId);
    url.searchParams.set("l", "dataLayer");
    return url.toString();
  }, [gtmId]);

  useEffect(() => {
    if (!canTrack) {
      setReady(false);
      return;
    }

    // Prepare dataLayer/gtag BEFORE we start loading any third-party scripts.
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "app_config",
      gtm_id: gtmId,
      ga4_id: gaId,
      meta_pixel_id: metaPixelId,
    });

    if (gtmId) {
      window.dataLayer.push({
        event: "gtm.js",
        "gtm.start": Date.now(),
      });
    }

    if (gaId) {
      // Match the standard gtag snippet behavior.
      const gtag: GtagFn = ((...args: unknown[]) => {
        window.dataLayer?.push(args);
      }) as GtagFn;
      window.gtag = gtag;

      window.gtag("js", new Date());
      window.gtag("config", gaId, { anonymize_ip: true });
    }

    setReady(true);
  }, [canTrack, gtmId, gaId, metaPixelId]);

  if (!shouldLoadGtm && !shouldLoadGa4) return null;

  return (
    <>
      {shouldLoadGtm && gtmSrc ? <Script src={gtmSrc} strategy="afterInteractive" /> : null}

      {shouldLoadGa4 ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <AnalyticsEvents />
        </>
      ) : null}
    </>
  );
}
