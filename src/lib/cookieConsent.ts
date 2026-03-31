'use client';

import { useCallback, useEffect, useState } from "react";

export type CookieConsentStatus = "accepted" | "rejected" | null;

export const COOKIE_CONSENT_STORAGE_KEY = "cookie_consent_v1";
const COOKIE_CONSENT_EVENT = "cookie_consent_updated";

function readConsent(): CookieConsentStatus {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (raw === "accepted" || raw === "rejected") return raw;
  return null;
}

export function setCookieConsent(status: Exclude<CookieConsentStatus, null>) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, status);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

/**
 * Cookie consent stored in localStorage.
 *
 * Note: We intentionally initialize state to `null` to avoid hydration mismatches
 * (server render can't read localStorage). The value is synced on mount.
 */
export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsentStatus>(null);

  const refresh = useCallback(() => setConsentState(readConsent()), []);

  useEffect(() => {
    refresh();

    const onStorage = (e: StorageEvent) => {
      if (e.key !== COOKIE_CONSENT_STORAGE_KEY) return;
      refresh();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(COOKIE_CONSENT_EVENT, refresh as EventListener);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(COOKIE_CONSENT_EVENT, refresh as EventListener);
    };
  }, [refresh]);

  const setConsent = useCallback((status: Exclude<CookieConsentStatus, null>) => {
    setCookieConsent(status);
    setConsentState(status);
  }, []);

  return { consent, setConsent };
}
