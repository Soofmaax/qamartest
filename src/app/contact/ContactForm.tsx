"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/content";
import { pushContactFormSubmitted } from "@/lib/gtm";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts: 06..., 07..., +33 6..., +33 7... (spaces/dots allowed)
const FR_PHONE_REGEX = /^(?:(?:\+33|0033)\s*[67]|0\s*[67])(?:[\s.\-]*\d){8}$/;

type Field = "name" | "email" | "phone" | "message";

type Values = {
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  website: string;
};

type Touched = Record<Field, boolean>;

type Errors = Partial<Record<Field, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }

  if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Veuillez entrer une adresse email valide.";
  }

  const phoneTrimmed = values.phone.trim();
  if (phoneTrimmed && !FR_PHONE_REGEX.test(phoneTrimmed)) {
    errors.phone =
      "Veuillez entrer un numéro français valide (06…, 07… ou +33…).";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Le message doit contenir au moins 20 caractères.";
  }

  return errors;
}

export function ContactForm({ isPreview }: { isPreview: boolean }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
    website: "",
  });

  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const serviceOptions = useMemo(
    () => SERVICES.map((s) => ({ label: s.title, value: s.title })),
    []
  );

  const errors = validate(values);

  const isValid = Object.keys(errors).length === 0;
  const canSubmit = !isPreview && !isSubmitting && isValid;

  const showError = (field: Field) => (touched[field] ? errors[field] : undefined);

  return (
    <form
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        if (isPreview || isSubmitting) return;

        setTouched({ name: true, email: true, phone: true, message: true });

        const currentErrors = validate(values);
        if (Object.keys(currentErrors).length > 0) {
          return;
        }

        setIsSubmitting(true);
        setServerError(null);

        const formData = new FormData();
        formData.set("name", values.name);
        formData.set("email", values.email);
        formData.set("phone", values.phone);
        formData.set("service", values.service);
        formData.set("subject", values.subject);
        formData.set("message", values.message);
        formData.set("website", values.website);

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
          setServerError(body?.error ?? "Erreur lors de l’envoi.");
          setIsSubmitting(false);
          return;
        }

        const service = values.service.trim() || undefined;
        pushContactFormSubmitted({ page: "/contact/", ...(service ? { service } : {}) });

        const params = new URLSearchParams();
        if (service) params.set("service", service);

        router.push(`/merci/${params.toString() ? `?${params.toString()}` : ""}`);
      }}
    >
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        className="sr-only"
        aria-hidden
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Nom</span>
          <input
            name="name"
            value={values.name}
            disabled={isPreview || isSubmitting}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
          />
          {showError("name") ? (
            <p className="text-sm text-red-200">{showError("name")}</p>
          ) : null}
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            disabled={isPreview || isSubmitting}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
          />
          {showError("email") ? (
            <p className="text-sm text-red-200">{showError("email")}</p>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Téléphone</span>
          <input
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            disabled={isPreview || isSubmitting}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
          />
          {showError("phone") ? (
            <p className="text-sm text-red-200">{showError("phone")}</p>
          ) : null}
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-200">Service</span>
          <select
            name="service"
            disabled={isPreview || isSubmitting}
            className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
            value={values.service}
            onChange={(e) => setValues((v) => ({ ...v, service: e.target.value }))}
          >
            <option value="">Choisir un service (optionnel)</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm text-zinc-200">Sujet</span>
        <input
          name="subject"
          value={values.subject}
          disabled={isPreview || isSubmitting}
          onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
          className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
        />
      </label>

      <label className="space-y-2">
        <span className="text-sm text-zinc-200">Message</span>
        <textarea
          name="message"
          rows={6}
          value={values.message}
          disabled={isPreview || isSubmitting}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          className="w-full resize-y rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40 disabled:opacity-60"
        />
        {showError("message") ? (
          <p className="text-sm text-red-200">{showError("message")}</p>
        ) : null}
      </label>

      {serverError ? (
        <p className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          data-ga-event="contact_submit"
          data-ga-category="Lead"
          data-ga-label="contact_form"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? (
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              aria-hidden
            />
          ) : null}
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
