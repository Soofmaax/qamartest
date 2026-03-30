import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { PORTFOLIO_PROJECTS } from "@/lib/content";
import { MARIAGE_PAGE_CONTENT } from "@/lib/pageContent";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildVideoObject,
  buildWebPage,
} from "@/lib/structuredData";
import {
  getPrimaryVideoForPage,
  youTubeThumbnailUrl,
  youTubeWatchUrl,
} from "@/lib/videos";

const seo = MARIAGE_PAGE_CONTENT.seo;

export const metadata: Metadata = createPageMetadata(seo);

/* eslint-disable react/no-unescaped-entities */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const discoveryCallUrl =
  process.env.NEXT_PUBLIC_DISCOVERY_CALL_URL ||
  "https://calendar.google.com/calendar/u/0/appointments/schedules/REPLACE_ME";

const heroVideo = getPrimaryVideoForPage(seo.path);

const url = absoluteUrl(seo.path);
const webpageId = `${url}#webpage`;
const serviceId = `${url}#service`;
const videoId = `${url}#video`;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: ROUTES.home },
      { name: "Mariage", path: seo.path },
    ],
  }),
  {
    ...buildWebPage({
      path: seo.path,
      name: seo.title,
      description: seo.description,
      imageUrl: seo.image,
    }),
    mainEntity: { "@id": serviceId },
    ...(heroVideo ? { hasPart: [{ "@id": videoId }] } : {}),
  },
  {
    ...buildService({
      path: seo.path,
      name: "Mariage",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
  ...(heroVideo
    ? [
        buildVideoObject({
          path: seo.path,
          name: heroVideo.title,
          description: heroVideo.description ?? seo.description,
          contentUrl: youTubeWatchUrl(heroVideo.youtubeId),
          thumbnailUrl:
            heroVideo.thumbnailUrl ?? youTubeThumbnailUrl(heroVideo.youtubeId),
          uploadDate: heroVideo.uploadDate,
          duration: heroVideo.duration,
        }),
      ]
    : []),
]);

export default function MariagePage() {
  const stats = [
    {
      value: "150+",
      label: "Mariages filmés\nFrance & étranger",
    },
    {
      value: "4.9★",
      label: "Note Google\nAvis vérifiés",
    },
    {
      value: "8+",
      label: "Destinations\ncouvertes",
    },
    {
      value: "48h",
      label: "Délai de réponse\ngaranti",
    },
  ];

  const process = [
    {
      title: "Échange initial",
      desc: "Appel découverte pour comprendre votre histoire, votre lieu et votre vision de la journée.",
      tag: "Réponse < 48h",
    },
    {
      title: "Brief & devis",
      desc: "Proposition personnalisée avec livrables, planning et conditions. Contrat signé en ligne.",
      tag: "Sous 24h",
    },
    {
      title: "Préparation",
      desc: "Moodboard, repérage du lieu, conseils et anticipation des moments forts.",
      tag: "2–3 sem. avant",
    },
    {
      title: "Jour J",
      desc: "Présence discrète et attentive. Direction artistique complète du matin à la soirée.",
      tag: "Journée complète",
    },
    {
      title: "Livraison",
      desc: "Galerie privée et film livrés. Archivage sécurisé inclus.",
      tag: "Tous formats inclus",
    },
  ];

  const destinations = [
    {
      tier: "Tier 1 · Prioritaire",
      name: "Toscane",
      desc: "Florence, Val d’Orcia, Sienne. Lumière incroyable et décors intemporels.",
      budget: "Sur devis · Dépl. inclus",
    },
    {
      tier: "Tier 1 · Prioritaire",
      name: "Côte d’Azur",
      desc: "Nice, Cannes, Èze. Mariages de luxe, ambiance méditerranéenne.",
      budget: "Sur devis · Dépl. inclus",
    },
    {
      tier: "Tier 1 · Prioritaire",
      name: "Provence",
      desc: "Luberon, Gordes, Alpilles. Terracotta, pierre, oliviers et golden hour.",
      budget: "Sur devis · Dépl. inclus",
    },
    {
      tier: "Tier 2 · En développement",
      name: "Santorin",
      desc: "Blanc & bleu, falaises, coucher de soleil. Fort potentiel visuel.",
      budget: "Opportunité · Sur devis",
    },
    {
      tier: "Tier 2 · En développement",
      name: "Marrakech",
      desc: "Lumière chaude, textures, palmeraies. Une signature visuelle forte.",
      budget: "Opportunité · Sur devis",
    },
    {
      tier: "Tier 2 · En développement",
      name: "Portugal",
      desc: "Lisbonne, Alentejo, Douro. Douceur et élégance naturelle.",
      budget: "Opportunité · Sur devis",
    },
  ];

  const guides = [
    {
      cat: "Guide · Lecture 8 min",
      title: "Comment choisir son photographe de mariage à Paris",
      desc: "Les questions à poser, les pièges à éviter, et comment reconnaître un prestataire qui vous correspond.",
    },
    {
      cat: "Guide · Lecture 6 min",
      title: "Film cinématique ou reportage vidéo — quelle différence ?",
      desc: "Deux approches. On vous explique laquelle correspond à votre personnalité et à votre vision du souvenir.",
    },
    {
      cat: "Guide · Lecture 5 min",
      title: "Combien coûte un photographe de mariage en 2026 ?",
      desc: "Les ordres de grandeur, comment lire un devis, et ce qui fait vraiment varier les prix.",
    },
  ];

  const portfolioNarrative = [
    {
      index: "001",
      couple: "Ninon & Alexandre",
      meta: "Château de Vaux-le-Vicomte · Juin 2025 · Photo + Vidéo",
      story:
        "Une journée d’été dans l’un des plus beaux châteaux d’Île-de-France. La lumière dorée du soir, les fontaines, et deux personnes qui n’avaient d’yeux que l’un pour l’autre.",
      image: "/images/mariage/portfolio-01.jpg",
      tags: ["Château", "Été", "Cinématique"],
    },
    {
      index: "002",
      couple: "Sokona & Julien",
      meta: "Île-de-France · Automne 2024 · Photo + Vidéo",
      story:
        "Deux cultures, une seule émotion. Un mariage d’une richesse visuelle rare — les tenues, les danses, les regards des familles réunies.",
      image: "/images/mariage/portfolio-02.jpg",
      tags: ["Domaine", "Automne", "Multiculturel"],
    },
    {
      index: "003",
      couple: "Karim & Inès",
      meta: "Marrakech · Printemps 2024 · Destination",
      story:
        "La lumière de Marrakech est incomparable — dorée, dense, presque palpable. Trois jours de célébration condensés en un film.",
      image: "/images/mariage/portfolio-03.jpg",
      tags: ["Destination", "Maroc", "Long format"],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative h-[520px] w-full md:h-[650px]">
            {heroVideo ? (
              <div className="absolute inset-0">
                <YouTubeEmbed
                  videoId={heroVideo.youtubeId}
                  title={heroVideo.title}
                  className="h-full"
                />
              </div>
            ) : (
              <>
                <video
                  className="absolute inset-0 hidden h-full w-full object-cover object-bottom md:block"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://framerusercontent.com/images/6nk6lOJ0PhfmfG5ELflQRv3Mk.jpg"
                >
                  <source src={`${basePath}/videos/mariage.mp4`} type="video/mp4" />
                </video>

                <video
                  className="absolute inset-0 h-full w-full object-cover object-bottom md:hidden"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster="https://framerusercontent.com/images/6nk6lOJ0PhfmfG5ELflQRv3Mk.jpg"
                >
                  <source src={`${basePath}/videos/mariage.mp4`} type="video/mp4" />
                </video>
              </>
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/90" />

            <div className="relative z-[1] flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <p className="text-[11px] font-light tracking-[0.22em] text-white/55 uppercase">
                  Photographe & vidéaste de mariage · Paris & International
                </p>
                <h1 className="font-serif text-5xl tracking-wide text-white md:text-6xl">
                  Le film de votre vie.
                </h1>
                <p className="max-w-[680px] text-[18px] leading-relaxed text-white/75 md:text-[20px]">
                  {"Vous avez passé des mois à préparer cette journée. Dans 20 ans, ce dont vous vous souviendrez — les regards, les larmes retenues, le moment où tout s’est arrêté — c’est notre travail de le rendre éternel."}
                </p>
                <p className="text-[12px] font-light tracking-wide text-white/40">
                  Réservations 2026 & 2027 ouvertes · Quelques dates disponibles
                </p>

                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
                  <Link
                    href={discoveryCallUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-ga-event="cta_click"
                    data-ga-category="Lead"
                    data-ga-label="/mariage/:hero"
                    className="w-fit rounded-lg bg-black/70 px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                  >
                    Appel découverte
                  </Link>
                  <Link
                    href="#films"
                    className="text-[11px] font-light tracking-[0.14em] text-white/55 uppercase hover:text-white/80"
                  >
                    Voir nos films ↓
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="w-full border-y border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="border-white/10 p-8 md:border-r md:last:border-r-0 md:p-10"
              >
                <p className="font-serif text-4xl text-white md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 whitespace-pre-line text-[11px] font-light tracking-wide text-white/45">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MICRO CONVERSIONS */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Avant de nous contacter
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white md:text-[48px]">
                Prenez le temps de nous découvrir.
              </h2>
            </div>
            <p className="max-w-[320px] text-right text-[12px] font-light leading-relaxed text-white/45">
              {"Trois façons d’aller plus loin avant de prendre rendez-vous."}
            </p>
          </div>

          <div className="mt-10 grid border border-white/10 md:grid-cols-3">
            <div className="border-white/10 p-8 md:border-r md:p-10">
              <p className="font-serif text-5xl text-white/15">01</p>
              <p className="mt-4 text-[10px] font-light tracking-[0.2em] text-white/60 uppercase">
                Film complet · 4 min
              </p>
              <p className="mt-3 text-[16px] font-medium text-white">
                Voir un film de mariage
              </p>

              <div
                id="films"
                className="relative mt-6 aspect-[16/6] overflow-hidden rounded-md border border-white/10 bg-black"
              >
                <Image
                  src="/images/mariage/film-preview.jpg"
                  alt="Aperçu film de mariage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 809px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur">
                    <div className="ml-[2px] h-0 w-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white" />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[10px] font-light tracking-[0.14em] text-white/40 uppercase">
                Ninon & Alexandre · 2025
              </p>
            </div>

            <div className="border-white/10 p-8 md:border-r md:p-10">
              <p className="font-serif text-5xl text-white/15">02</p>
              <p className="mt-4 text-[10px] font-light tracking-[0.2em] text-white/60 uppercase">
                Guide PDF · Gratuit
              </p>
              <p className="mt-3 text-[16px] font-medium text-white">
                Préparer votre journée photo & vidéo
              </p>
              <p className="mt-4 text-[13px] font-light leading-relaxed text-white/55">
                Nos conseils pour obtenir les meilleures images — timing, tenue, lumière, moments clés à anticiper.
              </p>
              <Link
                href={discoveryCallUrl}
                target="_blank"
                rel="noreferrer"
                data-ga-event="cta_click"
                data-ga-category="Lead"
                data-ga-label="/mariage/:micro:guide"
                className="mt-6 inline-flex w-fit text-[10px] font-light tracking-[0.16em] text-white uppercase hover:text-white/80"
              >
                Appel découverte →
              </Link>
            </div>

            <div className="p-8 md:p-10">
              <p className="font-serif text-5xl text-white/15">03</p>
              <p className="mt-4 text-[10px] font-light tracking-[0.2em] text-white/60 uppercase">
                Formulaire · 2 min
              </p>
              <p className="mt-3 text-[16px] font-medium text-white">
                Vérifier nos disponibilités
              </p>
              <p className="mt-4 text-[13px] font-light leading-relaxed text-white/55">
                Dites-nous votre date, votre lieu et votre vision. Réponse sous 48h avec une proposition personnalisée.
              </p>
              <Link
                href={discoveryCallUrl}
                target="_blank"
                rel="noreferrer"
                data-ga-event="cta_click"
                data-ga-category="Lead"
                data-ga-label="/mariage/:micro:dispo"
                className="mt-6 inline-flex w-fit text-[10px] font-light tracking-[0.16em] text-white uppercase hover:text-white/80"
              >
                Appel découverte →
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Notre méthode
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white md:text-[48px]">
                Cinq étapes, zéro souci.
              </h2>
            </div>
            <p className="max-w-[320px] text-right text-[12px] font-light leading-relaxed text-white/45">
              {"De la prise de contact à la livraison, vous n’avez rien à gérer."}
            </p>
          </div>

          <div className="mt-10 grid border border-white/10 md:grid-cols-5">
            {process.map((p, idx) => (
              <div
                key={p.title}
                className="border-white/10 p-7 md:border-r md:last:border-r-0"
              >
                <p className="font-serif text-5xl text-white/15">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-[11px] font-light tracking-[0.08em] text-white uppercase">
                  {p.title}
                </p>
                <p className="mt-3 text-[12px] font-light leading-relaxed text-white/55">
                  {p.desc}
                </p>
                <p className="mt-5 text-[10px] font-light tracking-wide text-white/60">
                  {p.tag}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Formules
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white md:text-[48px]">
                Choisissez votre expérience.
              </h2>
            </div>
            <p className="max-w-[320px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Devis personnalisé selon lieu, temps de présence et livrables.
            </p>
          </div>

          <div className="mt-10 grid border border-white/10 lg:grid-cols-3">
            {MARIAGE_PAGE_CONTENT.formulas.map((f, idx) => (
              <div
                key={f.title}
                className={
                  idx === 1
                    ? "border-white/10 bg-white/[0.03] p-8 lg:border-r"
                    : idx === 0
                      ? "border-white/10 p-8 lg:border-r"
                      : "p-8"
                }
              >
                <p className="text-[10px] font-light tracking-[0.18em] text-white/45 uppercase">
                  {idx === 1 ? "Le plus choisi" : "Package"}
                </p>
                <h3 className="mt-5 font-serif text-3xl text-white">{f.title}</h3>
                <p className="mt-4 text-[13px] font-light leading-relaxed text-white/55">
                  {f.description}
                </p>
                <ul className="mt-6 space-y-2 text-[12px] font-light text-white/55">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[10px] h-px w-3 flex-shrink-0 bg-white/20" />
                      <span className="text-white/80">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={discoveryCallUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label={`/mariage/:package:${f.title}`}
                  className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10"
                >
                  Appel découverte →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO NARRATIF */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Nos mariages
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white md:text-[48px]">
                Chaque mariage, une histoire.
              </h2>
            </div>
            <p className="max-w-[320px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Un aperçu de la façon dont nous racontons chaque journée.
            </p>
          </div>

          <div className="mt-10 border border-white/10">
            {portfolioNarrative.map((p, idx) => (
              <div
                key={p.index}
                className={
                  idx === portfolioNarrative.length - 1
                    ? "grid md:grid-cols-[96px_1fr_220px]"
                    : "grid border-b border-white/10 md:grid-cols-[96px_1fr_220px]"
                }
              >
                <div className="border-white/10 p-6 md:border-r">
                  <p className="font-serif text-[14px] text-white/35">{p.index}</p>
                </div>

                <div className="border-white/10 p-6 md:border-r md:p-8">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="relative h-[120px] w-full overflow-hidden rounded-md border border-white/10 md:h-[120px] md:w-[180px]">
                      <Image
                        src={p.image}
                        alt={p.couple}
                        fill
                        className="object-cover"
                        sizes="(max-width: 809px) 100vw, 180px"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div>
                      <p className="font-serif text-2xl text-white italic">
                        {p.couple}
                      </p>
                      <p className="mt-2 text-[10px] font-light tracking-[0.12em] text-white/40 uppercase">
                        {p.meta}
                      </p>
                      <p className="mt-4 text-[13px] font-light leading-relaxed text-white/55">
                        {p.story}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-4 p-6 md:items-end md:p-8">
                  <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-white/10 px-3 py-1 text-[9px] font-light tracking-[0.14em] text-white/45 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={ROUTES.portfolio}
                    className="text-[10px] font-light tracking-[0.12em] text-white uppercase hover:text-white/80"
                  >
                    Voir ce mariage →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Mariages destination
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white md:text-[48px]">
                Paris & au-delà.
              </h2>
            </div>
            <p className="max-w-[320px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Frais de déplacement inclus dans le devis. Europe et international.
            </p>
          </div>

          <div className="mt-10 grid border border-white/10 md:grid-cols-3">
            {destinations.map((d, idx) => (
              <div
                key={d.name}
                className={
                  idx % 3 === 2
                    ? "border-white/10 border-b p-7 md:border-b"
                    : "border-white/10 border-b p-7 md:border-r md:border-b"
                }
              >
                <p className="text-[9px] font-light tracking-[0.2em] text-white/35 uppercase">
                  {d.tier}
                </p>
                <p className="mt-3 font-serif text-2xl text-white">{d.name}</p>
                <p className="mt-3 text-[12px] font-light leading-relaxed text-white/55">
                  {d.desc}
                </p>
                <p className="mt-4 text-[10px] font-light tracking-wide text-white/70">
                  {d.budget}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GUIDES */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Guides & conseils
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white md:text-[48px]">
                {"Tout ce qu’il faut savoir."}
              </h2>
            </div>
            <p className="max-w-[320px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Des ressources (démo) pour préparer votre journée et choisir votre prestataire.
            </p>
          </div>

          <div className="mt-10 grid border border-white/10 md:grid-cols-3">
            {guides.map((g, idx) => (
              <div
                key={g.title}
                className={
                  idx === 0
                    ? "border-white/10 p-8 md:border-r"
                    : idx === 1
                      ? "border-white/10 p-8 md:border-r"
                      : "p-8"
                }
              >
                <p className="text-[9px] font-light tracking-[0.2em] text-white/45 uppercase">
                  {g.cat}
                </p>
                <p className="mt-5 font-serif text-xl text-white italic">
                  “{g.title}”
                </p>
                <p className="mt-4 text-[12px] font-light leading-relaxed text-white/55">
                  {g.desc}
                </p>
                <Link
                  href={ROUTES.contact}
                  className="mt-6 inline-flex w-fit text-[10px] font-light tracking-[0.1em] text-white uppercase hover:text-white/80"
                >
                  Lire le guide →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <GoogleReviewsSection />

        {/* GALERIE (inchangée) */}
        <section className="w-full bg-black py-16 md:py-20">
          <div className="site-pad-x">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mes dernières prestations
            </h2>
          </div>

          <div className="mt-10 w-full">
            <ImageLightboxGallery items={MARIAGE_PAGE_CONTENT.lastPrestations} />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
              Les disponibilités sont limitées
            </p>
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              {"Votre histoire mérite d’être immortalisée."}
            </h2>
            <p className="text-[18px] font-light text-white/70 md:text-[20px]">
              Réservations 2026 et 2027 ouvertes — quelques dates encore disponibles.
            </p>
            <Link
              href={discoveryCallUrl}
              target="_blank"
              rel="noreferrer"
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label="/mariage/:bottom"
              className="mt-4 rounded-lg bg-black px-6 py-3 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Appel découverte →
            </Link>
          </div>
        </section>

        {/* PORTFOLIO CAROUSEL (inchangé) */}
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mon portfolio
            </h2>
            <Link
              href={ROUTES.portfolio}
              data-ga-event="cta_click"
              data-ga-category="Navigation"
              data-ga-label="/mariage/:portfolio"
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mt-10">
            <ProjectsCarousel projects={PORTFOLIO_PROJECTS} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
