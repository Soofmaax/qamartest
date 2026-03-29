"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pushContactThankYouView } from "@/lib/gtm";

export function ThankYouTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const service = searchParams.get("service") ?? undefined;
    pushContactThankYouView({ page: "/merci/", ...(service ? { service } : {}) });
  }, [searchParams]);

  return null;
}
