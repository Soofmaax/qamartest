export type ContactFormSubmittedEvent = {
  event: "contact_form_submitted";
  page: string;
  service?: string;
};

export type ContactThankYouViewEvent = {
  event: "contact_thank_you_view";
  page: string;
  service?: string;
};

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

export function pushContactFormSubmitted(payload: Omit<ContactFormSubmittedEvent, "event">) {
  pushToDataLayer({ event: "contact_form_submitted", ...payload });
}

export function pushContactThankYouView(payload: Omit<ContactThankYouViewEvent, "event">) {
  pushToDataLayer({ event: "contact_thank_you_view", ...payload });
}
