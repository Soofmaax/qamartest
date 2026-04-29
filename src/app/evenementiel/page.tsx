import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
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
  image: "/images/portfolio/evenementiel/beef-club/beef-club-03.jpg",
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

type EventPortfolioItem = {
  title: string;
  meta: string;
  src: string;
  span?: string;
};

const PORTFOLIO_ITEMS: EventPortfolioItem[] = [
  {
    title: "Beef Club",
    meta: "Soirée · Paris",
    src: "/images/portfolio/evenementiel/beef-club/beef-club-03.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Dali Club",
    meta: "Soirée · Événement privé",
    src: "/images/portfolio/evenementiel/dali-club/dali-club-03.jpg",
  },
  {
    title: "Fashion Week 2026",
    meta: "Mode · Backstage & runway",
    src: "/images/portfolio/evenementiel/fashion-week-2026/fashion-week-2026-12.jpg",
  },
  {
    title: "Gatsby Club",
    meta: "Soirée · Ambiance & scénographie",
    src: "/images/portfolio/evenementiel/gatsby-club/gatsby-club-06.jpg",
  },
  {
    title: "Séminaire Toulon",
    meta: "Corporate · Team building",
    src: "/images/portfolio/evenementiel/seminaire-toulon/seminaire-toulon-02.jpg",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "On avait besoin de photos pour notre rapport annuel et notre LinkedIn. Le résultat était au-delà de nos attentes — pro, naturel, livré en 48h comme promis.",
    name: "Marie L.",
    role: "Responsable communication · Séminaire d'équipe",
  },
  {
    quote:
      "Travail de qualité, bonne communication et résultat top. Très pro et créatif. Il s'est fait oublier pendant toute la soirée tout en capturant les meilleurs moments.",
    name: "Avis Google vérifié",
    role: "Soirée d'entreprise · Paris",
  },
  {
    quote:
      "On cherchait quelqu'un de discret et réactif pour un anniversaire. Les photos sont magnifiques, les moments authentiques. On a pleuré en les découvrant.",
    name: "Yasmine K.",
    role: "Événement privé · Anniversaire 40 ans",
  },
] as const;

const AVAILABILITY = [
  ["Jan", "Complet", "text-white/25"],
  ["Fév", "Complet", "text-white/25"],
  ["Mar", "Complet", "text-white/25"],
  ["Avr", "2 dates", "text-[#c084fc]"],
  ["Mai", "Disponible", "text-[#c9a96e]"],
  ["Juin", "Disponible", "text-[#c9a96e]"],
  ["Juil", "Disponible", "text-[#c9a96e]"],
  ["Août", "1 date", "text-[#c084fc]"],
  ["Sep", "Disponible", "text-[#c9a96e]"],
  ["Oct", "Disponible", "text-[#c9a96e]"],
  ["Nov", "Disponible", "text-[#c9a96e]"],
  ["Déc", "Disponible", "text-[#c9a96e]"],
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
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                À qui s’adresse ce service
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Entreprises ou particuliers —
                <br />
                chaque événement mérite
                <br />
                d’être <span className="italic text-[#c9a96e]">raconté.</span>
              </h2>
            </div>
            <p className="max-w-[240px] text-[12px] leading-[1.6] text-white/35 md:text-right">
              Deux profils, deux approches, une même exigence sur le résultat.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-2">
            <div className="bg-black p-8 md:p-12">
              <p className="inline-flex border border-[#c9a96e] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#c9a96e]">
                Pour les entreprises & organisateurs
              </p>
              <h3 className="mt-6 font-serif text-[30px] leading-[1.1] text-white">
                Vous organisez.
                <br />
                On documente.
                <br />
                Vous communiquez.
              </h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-white/45">
                Séminaire, conférence, soirée d’entreprise, lancement de produit.
                Vous avez besoin d’images professionnelles pour votre communication
                interne, votre LinkedIn, votre rapport annuel. Vous cherchez
                quelqu’un de fiable, discret, capable de couvrir plusieurs heures
                sans rater un seul moment clé.
              </p>
              <ul className="mt-8 space-y-0">
                {[
                  "Séminaires & conférences",
                  "Soirées d’entreprise & galas",
                  "Lancements de produits & collections",
                  "Remises de prix & cérémonies",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-[#141414] py-3 text-[12px] text-white/55"
                  >
                    <span className="h-px w-3 bg-white/20" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={ROUTES.contact}
                className="mt-8 inline-flex border border-[#c9a96e] px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-[#c9a96e] transition-colors hover:bg-[#c9a96e]/10"
              >
                Réserver ma date
              </Link>
            </div>

            <div className="bg-[#09090a] p-8 md:p-12">
              <p className="inline-flex border border-[#7b9cff] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#7b9cff]">
                Pour les événements privés
              </p>
              <h3 className="mt-6 font-serif text-[30px] leading-[1.1] text-white">
                Des souvenirs authentiques.
                <br />
                Sans mise en scène forcée.
              </h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-white/45">
                Anniversaire marquant, fête de famille, soirée entre proches.
                Vous voulez des souvenirs de qualité, capturés par quelqu’un qui
                sait se faire oublier tout en captant ce qui compte vraiment. Pas
                de pose forcée — juste les vrais moments.
              </p>
              <ul className="mt-8 space-y-0">
                {[
                  "Anniversaires & fêtes privées",
                  "Célébrations familiales",
                  "Soirées thématiques & privées",
                  "Événements sur-mesure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-[#141414] py-3 text-[12px] text-white/55"
                  >
                    <span className="h-px w-3 bg-white/20" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={ROUTES.contact}
                className="mt-8 inline-flex border border-[#7b9cff] px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-[#7b9cff] transition-colors hover:bg-[#7b9cff]/10"
              >
                Discuter de mon événement
              </Link>
            </div>
          </div>
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

        <section id="portfolio" className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Réalisations récentes
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Des événements
                <br />
                de toutes tailles.
                <br />
                <span className="italic text-[#c9a96e]">Une seule exigence.</span>
              </h2>
            </div>
            <p className="max-w-[260px] text-[12px] leading-[1.6] text-white/35 md:text-right">
              Corporate, conférences, soirées privées — un aperçu de ce qu’on peut
              capturer ensemble.
            </p>
          </div>

          <div className="mt-10 inline-flex flex-wrap border border-[#1e1e1e]">
            {["Tout", "Corporate", "Conférences", "Soirées", "Privé"].map((filter, idx) => (
              <button
                key={filter}
                type="button"
                className={`border-r border-[#1e1e1e] px-5 py-3 text-[10px] uppercase tracking-[0.16em] ${
                  idx === 0 ? "bg-[#111] text-white" : "text-white/45"
                } last:border-r-0`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-0 border border-[#1e1e1e] md:grid-cols-3">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className={`group relative min-h-[260px] overflow-hidden border-b border-[#1e1e1e] ${
                  item.span ?? ""
                } md:border-r md:last:border-r-0 ${idx >= 3 ? "md:border-b-0" : ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes={item.span ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-[22px] italic text-white">{item.title}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {item.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href={ROUTES.portfolio}
              className="inline-flex border border-[#e8e4dc]/30 px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
            >
              Voir toutes mes réalisations →
            </Link>
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
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                L’après
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Un événement capturé,
                <br />
                <span className="italic text-[#c9a96e]">dix usages possibles.</span>
              </h2>
            </div>
            <p className="max-w-[220px] text-[12px] leading-[1.6] text-white/35 md:text-right">
              Ce que vous pouvez faire avec vos images — au-delà du souvenir.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-2">
            {[
              {
                title: "Communication externe",
                bg: "bg-black",
                items: [
                  "Post LinkedIn le lendemain avec de vraies photos",
                  "Article de presse ou communiqué illustré",
                  "Page événement sur votre site web",
                  "Newsletter clients ou partenaires",
                  "Contenu Instagram & réseaux sociaux",
                ],
              },
              {
                title: "Communication interne & valorisation",
                bg: "bg-[#09090a]",
                items: [
                  "Rapport annuel ou bilan d’activité",
                  "Film de marque employeur",
                  "Archives visuelles de l’entreprise",
                  "Cohésion d’équipe & fierté collective",
                  "Supports de présentation investisseurs",
                ],
              },
            ].map((column) => (
              <div key={column.title} className={`${column.bg} p-8 md:p-11`}>
                <p className="border-b border-[#1e1e1e] pb-4 text-[10px] uppercase tracking-[0.2em] text-[#c9a96e]">
                  {column.title}
                </p>
                <div className="mt-4">
                  {column.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-[#141414] py-3 text-[13px] text-white/45 last:border-b-0"
                    >
                      <span className="text-white/25">→</span>
                      <span className="text-white/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Capacité d’intervention
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Des petits comités
                <br />
                aux <span className="italic text-[#c9a96e]">grands événements.</span>
              </h2>
            </div>
            <p className="max-w-[260px] text-[12px] leading-[1.6] text-white/35 md:text-right">
              Un seul interlocuteur, une seule direction artistique — quelle que
              soit la taille de votre événement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-2">
            <div className="bg-black p-8 md:p-11">
              <h3 className="font-serif text-[32px] leading-[1.1] text-white">
                Solo ou en <span className="italic text-[#c9a96e]">équipe,</span>
                <br />
                selon votre événement.
              </h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-white/45">
                Pour les événements jusqu’à 80 personnes, nous intervenons en solo
                avec un setup complet et une couverture totale. Pour les événements
                plus importants, nous mobilisons une équipe de 2 à 3 opérateurs.
                Dans tous les cas : un seul interlocuteur, une seule direction
                artistique, un seul rendu cohérent.
              </p>
              <Link
                href={ROUTES.contact}
                className="mt-8 inline-flex border border-[#c9a96e] px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-[#c9a96e] transition-colors hover:bg-[#c9a96e]/10"
              >
                Discuter de votre événement
              </Link>
            </div>

            <div className="bg-[#09090a] p-8 md:p-11">
              {[
                ["Jusqu’à 80 pers.", "Intervention solo · Setup complet · Couverture totale de l’espace"],
                ["80 à 300 pers.", "Équipe de 2 opérateurs · Multi-angles · Zones simultanées couvertes"],
                ["300+ pers.", "Équipe de 3 opérateurs · Devis sur-mesure · Coordination complète"],
              ].map(([size, desc]) => (
                <div
                  key={size}
                  className="grid grid-cols-1 gap-3 border-b border-[#1e1e1e] py-5 last:border-b-0 md:grid-cols-[140px_1fr] md:items-center"
                >
                  <p className="font-serif text-[22px] text-[#c9a96e]">{size}</p>
                  <p className="text-[12px] leading-[1.6] text-white/45">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Ce qu’ils en disent
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Ils nous ont
                <br />
                fait <span className="italic text-[#c9a96e]">confiance.</span>
              </h2>
            </div>
            <p className="max-w-[230px] text-[12px] leading-[1.6] text-white/35 md:text-right">
              Des entreprises et particuliers qui avaient un événement à ne pas
              rater.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <div key={item.quote} className={`p-8 md:p-9 ${idx === 1 ? "bg-[#09090a]" : "bg-black"}`}>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#c9a96e]">★</span>
                  ))}
                </div>
                <p className="mt-5 font-serif text-[18px] leading-[1.7] italic text-white">
                  « {item.quote} »
                </p>
                <div className="mt-6 border-t border-[#1e1e1e] pt-5">
                  <p className="text-[12px] tracking-[0.04em] text-white/90">{item.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-white/35">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Agenda 2026
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Disponibilités
                <br />
                <span className="italic text-[#c9a96e]">limitées.</span>
              </h2>
            </div>
            <p className="max-w-[260px] text-[12px] leading-[1.6] text-white/35 md:text-right">
              Le nombre de missions mensuelles est volontairement limité pour
              garantir une attention totale à chaque événement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-[#1e1e1e] md:grid-cols-6 xl:grid-cols-12">
            {AVAILABILITY.map(([month, status, color]) => (
              <div key={month} className="bg-black px-4 py-5 text-center">
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/25">{month}</p>
                <p className={`mt-2 text-[9px] uppercase tracking-[0.06em] ${color}`}>{status}</p>
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
            Prochaine disponibilité · Avril 2026 · 2 dates restantes
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-[62px]">
            Votre événement mérite
            <br />
            d’être raconté à sa
            <br />
            juste <span className="italic text-[#c084fc]">valeur.</span>
          </h2>
          <p className="mt-4 text-[13px] tracking-[0.06em] text-white/40">
            Appel découverte offert · 20 minutes · On vérifie ensemble la disponibilité de votre date
          </p>
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
