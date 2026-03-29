import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts: 06..., 07..., +33 6..., +33 7... (spaces/dots allowed)
const FR_PHONE_REGEX = /^(?:(?:\+33|0033)\s*[67]|0\s*[67])(?:[\s.\-]*\d){8}$/;
const HTTP_LINK_REGEX = /https?:\/\//i;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const rateLimitStore = new Map<string, number[]>();

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || null;

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return null;
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const prev = rateLimitStore.get(ip) ?? [];

  const recent = prev.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimitStore.set(ip, recent);

  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (website) {
    return NextResponse.json({ ok: false, error: "Message rejeté." }, { status: 400 });
  }

  const ip = getClientIp(req);
  if (ip) {
    const limited = isRateLimited(ip);
    if (limited) {
      return NextResponse.json(
        { ok: false, error: "Trop de tentatives. Réessayez dans une minute." },
        { status: 429 }
      );
    }
  }

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Nom invalide (minimum 2 caractères)." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email invalide." },
      { status: 400 }
    );
  }

  if (phone && !FR_PHONE_REGEX.test(phone)) {
    return NextResponse.json(
      { ok: false, error: "Téléphone invalide." },
      { status: 400 }
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      { ok: false, error: "Message invalide (minimum 20 caractères)." },
      { status: 400 }
    );
  }

  if (HTTP_LINK_REGEX.test(message)) {
    return NextResponse.json(
      { ok: false, error: "Message rejeté (liens non autorisés)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, error: "Email non configuré." },
      { status: 500 }
    );
  }

  const html = `
    <div>
      <h2>Nouveau message depuis le site</h2>
      <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone:</strong> ${escapeHtml(phone || "(non précisé)")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || "(non précisé)")}</p>
      <p><strong>Sujet:</strong> ${escapeHtml(subject || "(sans sujet)")}</p>
      <hr />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: subject ? `[Contact] ${subject}` : "[Contact] Nouveau message",
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    return NextResponse.json(
      { ok: false, error: "Erreur lors de l’envoi.", details: errText },
      { status: 502 }
    );
  }

  const accept = req.headers.get("accept") ?? "";

  if (accept.includes("application/json")) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const url = new URL(req.url);
  url.pathname = "/contact/";
  url.searchParams.set("sent", "1");

  return NextResponse.redirect(url, 303);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}
