"use client";

import { useSearchParams } from "next/navigation";

export function ContactStatusBanner({ isPreview }: { isPreview: boolean }) {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";

  if (isPreview) {
    return (
      <p className="mb-6 rounded-md border border-white/10 bg-black/40 p-4 text-zinc-200">
        Formulaire email disponible sur le site final (Vercel + Resend).
      </p>
    );
  }

  if (sent) {
    return (
      <p className="mb-6 rounded-md border border-white/10 bg-black/40 p-4 text-zinc-200">
        Message envoyé. Je reviens vers vous rapidement.
      </p>
    );
  }

  return null;
}
