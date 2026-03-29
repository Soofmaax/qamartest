"use client";

import { useEffect, useState } from "react";

export function ContactStatusBanner({ isPreview }: { isPreview: boolean }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSent(params.get("sent") === "1");
  }, []);

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
