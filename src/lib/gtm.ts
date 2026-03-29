export type UTMFields = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
};

export type ContactFormSubmittedEvent = {
  event: "contact_form_submitted";
  page: string;
  service?: string;
} & UTMFields;

export type ContactThankYouViewEvent = {
  event: "contact_thank_you_view";
  page: string;
  service?: string;
} & UTMFields;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function readAttributionFromUrl(url: URL): UTMFields {
  const get = (key: string) => {
    const value = url.searchParams.get(key);
    return value ? value : undefined;
  };

  return {
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_term: get("utm_term"),
    utm_content: get("utm_content"),
    gclid: get("gclid"),
    fbclid: get("fbclid"),
  };
}

export function pushContactFormSubmitted(payload: Omit<ContactFormSubmittedEvent, "event">) {
  pushToDataLayer({ event: "contact_form_submitted", ...payload });
}

export function pushContactThankYouView(payload: Omit<ContactThankYouViewEvent, "event">) {
  pushToDataLayer({ event: "contact_thank_you_view", ...payload });
}
