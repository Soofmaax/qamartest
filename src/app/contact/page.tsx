import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Contact | Directed by Qamar",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main className="px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="font-serif text-5xl text-white md:text-6xl">Contact</h1>
          <p className="mt-4 text-lg text-zinc-200 md:text-xl">
            Décris ton besoin (type de projet, date, lieu, contraintes, budget) et
            je reviens vers toi rapidement.
          </p>

          <div className="mt-10 rounded-lg border border-white/10 bg-black/40 p-6 md:p-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-zinc-200">Nom</span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm text-zinc-200">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Sujet</span>
                <input
                  name="subject"
                  className="w-full rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm text-zinc-200">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-y rounded-md border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/40"
                />
              </label>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <button
                  type="submit"
                  className="w-full rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5 md:w-auto"
                >
                  Envoyer
                </button>

                <Link href="/" className="text-center text-zinc-200 underline">
                  Retour à l’accueil
                </Link>
              </div>
            </form>

            <p className="mt-5 text-sm text-zinc-400">
              Le destinataire email sera configuré une fois la Google Workspace
              (email de domaine) créée.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
