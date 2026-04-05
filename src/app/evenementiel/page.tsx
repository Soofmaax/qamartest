import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = {
  title: "Photographe & vidéaste événementiel | Directed by Qamar",
  description:
    "Couverture photo/vidéo événementielle à Paris et en France : conférences, séminaires, soirées d’entreprise et événements privés.",
  path: "/evenementiel/",
  image: "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
};

const FAQ_ITEMS = [
  {
    q: "Combien de temps à l’avance faut-il réserver ?",
    a: "Idéalement 3 à 4 semaines avant pour les petits événements, et 6 à 8 semaines pour les dates stratégiques.",
  },
  {
    q: "Intervenez-vous en lumière basse ou salle sombre ?",
    a: "Oui. Nous sommes équipés pour les environnements difficiles et anticipons ces contraintes au brief.",
  },
  {
    q: "Que se passe-t-il en cas de dépassement horaire ?",
    a: "Un dépassement raisonnable est inclus. Au-delà, un forfait horaire défini au devis s’applique.",
  },
  {
    q: "Peut-on avoir un aperçu rapide ?",
    a: "Oui, une sélection express peut être livrée sous 48h pour publication immédiate.",
  },
  {
    q: "Vous déplacez-vous hors Paris ?",
    a: "Oui, nous intervenons dans toute la France, avec des frais de déplacement transparents au devis.",
  },
] as const;

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: ROUTES.home },
      { name: "Événementiel", path: seo.path },
    ],
  }),
  buildWebPage({
    path: seo.path,
    name: seo.title,
    description: seo.description,
    imageUrl: seo.image,
  }),
  buildService({
    path: seo.path,
    name: "Événementiel",
    description: seo.description,
  }),
  buildFaqPage({
    path: seo.path,
    items: FAQ_ITEMS.map((item) => ({ q: item.q, a: item.a })),
  }),
]);

export default function EvenementielPage() {
  return (
    <div className="min-h-screen bg-black text-[#e8e4dc]">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-end md:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Captation événementielle · Paris & France
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-none tracking-[-0.02em] md:text-[68px]">
                Un événement
                <br />
                ne se rejoue <span className="italic text-[#c084fc]">pas.</span>
                <br />
                Les images, si.
              </h1>
              <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-white/45">
                Séminaires, conférences, soirées d’entreprise ou événements privés :
                nous capturons l’énergie du jour J avec discrétion, réactivité et
                exigence.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contact}
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label="/evenementiel/:hero"
                  className="inline-flex w-fit border border-[#c084fc] px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-[#c084fc] transition-colors hover:bg-[#c084fc]/10"
                >
                  Réserver ma date
                </Link>
                <Link
                  href={ROUTES.portfolio}
                  data-ga-event="cta_click"
                  data-ga-category="Navigation"
                  data-ga-label="/evenementiel/:hero:portfolio"
                  className="inline-flex w-fit border border-[#e8e4dc]/30 px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
                >
                  Voir les réalisations
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
              {[
                ["150+", "Événements capturés", "text-[#c084fc]"],
                ["4,9", "Note moyenne Google", "text-[#7b9cff]"],
                ["48h", "Premier aperçu livré", "text-[#e8e4dc]"],
                ["Paris+", "Interventions France", "text-[#e8e4dc]"],
              ].map(([value, label, color]) => (
                <div key={label} className="bg-black p-6">
                  <p className={`font-serif text-[44px] leading-none ${color}`}>{value}</p>
                  <p className="mt-2 text-[11px] tracking-[0.04em] text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] bg-[#0a0a08] py-5 site-pad-x">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#c084fc]">
            Avril 2026 · 2 dates restantes · Mai & Juin disponibles
          </p>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Pourquoi c’est différent
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Ici, pas de
                <br />
                deuxième <span className="italic text-[#c084fc]">prise.</span>
              </h2>
              <p className="mt-6 text-[13px] leading-relaxed text-white/45">
                Un événement ne se rejoue pas. C’est pourquoi chaque mission est
                préparée avec précision : briefing, moments clés, anticipation du
                terrain et exécution sans interruption.
              </p>
            </div>
            <div className="border border-[#1e1e1e]">
              {[
                ["01", "Préparation complète"],
                ["02", "Réactivité totale"],
                ["03", "Zéro moment raté"],
              ].map(([n, title]) => (
                <div
                  key={n}
                  className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#1e1e1e] p-6 last:border-b-0"
                >
                  <p className="font-serif text-2xl text-[#1e1e1e]">{n}</p>
                  <p className="text-[12px] uppercase tracking-[0.08em] text-white/70">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="section-header flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Notre approche
              <br />
              le jour <span className="italic text-[#7b9cff]">J.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-3">
            {[
              ["01", "On se fond dans l’ambiance"],
              ["02", "On anticipe les moments clés"],
              ["03", "On s’adapte en temps réel"],
            ].map(([num, title], idx) => (
              <div key={num} className={`bg-black p-8 ${idx === 1 ? "bg-[#09090a]" : ""}`}>
                <p className="font-serif text-[46px] leading-none text-[#1e1e1e]">{num}</p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.1em] text-white/80">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Livrables
              <br />
              sans <span className="italic text-[#c084fc]">surprise.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-4">
            {[
              ["01 · Photo", "Photos retouchées et sélectionnées"],
              ["02 · Vidéo", "Recap événement (sur demande)"],
              ["03 · Aperçu", "Sélection express 48h"],
              ["04 · Droits", "Usage digital illimité"],
            ].map(([head, text], idx) => (
              <div key={head} className={`bg-black p-7 ${idx === 1 ? "bg-[#09090a]" : ""}`}>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">{head}</p>
                <p className="mt-3 font-serif text-[22px] text-[#e8e4dc]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              FAQ
              <br />
              <span className="italic text-[#7b9cff]">événementiel.</span>
            </h2>
          </div>
          <div className="mt-12 border border-[#1e1e1e]">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="grid grid-cols-1 border-b border-[#1e1e1e] last:border-b-0 md:grid-cols-2"
              >
                <p className="border-b border-[#1e1e1e] p-6 text-[13px] text-white/90 md:border-b-0 md:border-r">
                  {item.q}
                </p>
                <p className="p-6 text-[13px] leading-relaxed text-white/45">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 text-center site-pad-x">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
            Prochaine disponibilité · Avril 2026
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-[62px]">
            Votre événement mérite
            <br />
            d’être raconté à sa
            <br />
            juste <span className="italic text-[#c084fc]">valeur.</span>
          </h2>
          <Link
            href={ROUTES.contact}
            data-ga-event="cta_click"
            data-ga-category="Lead"
            data-ga-label="/evenementiel/:final-cta"
            className="mt-10 inline-flex border border-[#c084fc] px-8 py-4 text-[11px] uppercase tracking-[0.16em] text-[#c084fc] transition-colors hover:bg-[#c084fc]/10"
          >
            Réserver ma date
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
