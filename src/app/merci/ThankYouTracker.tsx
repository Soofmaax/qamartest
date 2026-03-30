"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pushContactThankYouView, type UTMFields } from "@/lib/gtm";

export function ThankYouTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const service = searchParams.get("service") ?? undefined;

    const attribution: UTMFields = {
      utm_source: searchParams.get("utm_source") ?? undefined,
      utm_medium: searchParams.get("utm_medium") ?? undefined,
      utm_campaign: searchParams.get("utm_campaign") ?? undefined,
      utm_term: searchParams.get("utm_term") ?? undefined,
      utm_content: searchParams.get("utm_content") ?? undefined,
      gclid: searchParams.get("gclid") ?? undefined,
      fbclid: searchParams.get("fbclid") ?? undefined,
    };

    pushContactThankYouView({
      page: "/merci/",
      ...(service ? { service } : {}),
      ...attribution,
    });
  }, [searchParams]);

  return null;
}
