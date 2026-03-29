"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/content";
import { pushContactFormSubmitted } from "@/lib/gtm";

export function ContactForm({ isPreview }: { isPreview: boolean }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceOptions = useMemo(
    () => SERVICES.map((s) => ({ label: s.title, value: s.title })),
    []
  );

  return (
    <form
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        if (isPreview || isSubmitting) return;

        setIsSubmitting(true);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const service = String(formData.get("service") ?? "").trim() || undefined;

        const res = await fetch("/api/contact", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as
            | { error?: string }
            | null;
          setError(body?.error ?? "Erreur lors de l’envoi.");
          setIsSubmitting(false);
          return;
        }

        pushContactFormSubmitted({ page: "/contact/", ...(service ? { service } : {}) });

        const params = new URLSearchParams();
        if (service) params.set("service", service);

        router.push(`/merci/${params.toString() ? `?${params.toString()}` : ""}`);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Nom</span>
          <input
            name="name"
            required
            disabled={isPreview || isSubmitting}
            className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Email</span>
          <input
            type="email"
            name="email"
            required
            disabled={isPreview || isSubmitting}
            className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm text-zinc-200">Service</span>
        <select
          name="service"
          disabled={isPreview || isSubmitting}
          className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
          defaultValue=""
        >
          <option value="">Choisir un service (optionnel)</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-sm text-zinc-200">Sujet</span>
        <input
          name="subject"
          disabled={isPreview || isSubmitting}
          className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
        />
      </label>

      <label className="space-y-2">
        <span className="text-sm text-zinc-200">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          disabled={isPreview || isSubmitting}
          className="w-full resize-y rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
        />
      </label>

      {error ? (
        <p className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={isPreview || isSubmitting}
          data-ga-event="contact_submit"
          data-ga-category="Lead"
          data-ga-label="contact_form"
          className="w-full rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="text-center text-zinc-200 underline"
        >
          Retour à l’accueil
        </button>
      </div>
    </form>
  );
}
