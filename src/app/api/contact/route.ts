import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
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
