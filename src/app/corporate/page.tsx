import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";
import { RoiCalculator } from "./_components/RoiCalculator";

const seo = {
  title: "Photographe & vidéaste corporate | Directed by Qamar",
  description:
    "Création de contenus photo et vidéo pour entreprises : image de marque, communication corporate, vidéos professionnelles et storytelling visuel.",
  path: "/corporate/",
  image: "https://framerusercontent.com/images/9MhLc1R5WqXjf2kyVHnU1AmNhXs.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const url = absoluteUrl(seo.path);
const webpageId = `${url}#webpage`;
const serviceId = `${url}#service`;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: ROUTES.home },
      { name: "Corporate", path: seo.path },
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
  },
  {
    ...buildService({
      path: seo.path,
      name: "Corporate",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

const HERO_STATS = [
  {
    value: (
      <>
        40<span className="text-[22px]">+</span>
      </>
    ),
    valueClassName: "text-[#7b9cff]",
    label: (
      <>
        Clients corporate
        <br />
        accompagnés
      </>
    ),
  },
  {
    value: "3",
    valueClassName: "text-[#c084fc]",
    label: (
      <>
        Références
        <br />
        grand compte
      </>
    ),
  },
  {
    value: "10j",
    valueClassName: "text-[#7b9cff]",
    label: (
      <>
        Délai de livraison
        <br />
        moyen garanti
      </>
    ),
  },
  {
    value: "Paris",
    valueClassName: "text-[#c084fc]",
    label: (
      <>
        & déplacements
        <br />
        toute France
      </>
    ),
  },
] as const;

const MARKET_STATS = [
  {
    value: (
      <>
        80<span className="text-[24px]">%</span>
      </>
    ),
    valueClassName: "text-[#7b9cff]",
    label:
      "d'augmentation du taux de conversion avec une vidéo sur la page d'accueil",
    source: "Wyzowl 2024",
  },
  {
    value: (
      <>
        34<span className="text-[24px]">%</span>
      </>
    ),
    valueClassName: "text-[#7b9cff]",
    label: "de candidatures supplémentaires pour les offres d'emploi avec vidéo",
    source: "LinkedIn 2024",
  },
  {
    value: (
      <>
        72<span className="text-[24px]">%</span>
      </>
    ),
    valueClassName: "text-[#c084fc]",
    label: "des acheteurs B2B préfèrent découvrir un service par la vidéo",
    source: "HubSpot 2024",
  },
  {
    value: "3×",
    valueClassName: "text-[#c084fc]",
    label:
      "plus d'engagement sur LinkedIn pour un post avec vidéo vs texte seul",
    source: "LinkedIn 2024",
  },
] as const;

const PRESTATIONS = [
  {
    cat: "Image d'entreprise",
    title: "Votre équipe est votre meilleur argument de vente.",
    promise: "On la met en lumière.",
    promiseClassName: "text-[#7b9cff]",
    items: [
      { label: "Portraits professionnels", highlight: "équipe & dirigeants" },
      { label: "Reportage", highlight: "vie d'entreprise" },
      { label: "Film", highlight: "marque employeur" },
      { label: "Contenu", highlight: "réseaux sociaux" },
    ],
    price: (
      <>
        À partir de <span className="text-[#7b9cff]">800€</span> · devis
        personnalisé
      </>
    ),
    ctaClassName: "border-[#e8e4dc]/70 text-[#e8e4dc] hover:bg-white/5",
    cardClassName: "bg-[#0c0c0c]",
  },
  {
    cat: "Films institutionnels · Premium",
    title: "Un film qui travaille pour vous pendant des années.",
    promise: "Conçu pour convaincre vos clients, partenaires et investisseurs.",
    promiseClassName: "text-[#c084fc]",
    items: [
      { label: "Film", highlight: "de présentation marque" },
      { label: "Film", highlight: "institutionnel long format" },
      { label: "Présentation", highlight: "investisseurs" },
      { label: "Direction artistique", highlight: "A à Z" },
    ],
    price: (
      <>
        À partir de <span className="text-[#c084fc]">2 500€</span> · devis
        personnalisé
      </>
    ),
    ctaClassName: "border-[#c084fc] text-[#c084fc] hover:bg-[#c084fc]/10",
    cardClassName: "bg-[#0d0d16]",
  },
  {
    cat: "Contenu digital & réseaux",
    title: "Du contenu qui performe sur chaque plateforme.",
    promise: "Pensé pour la conversion, pas juste pour être vu.",
    promiseClassName: "text-[#7b9cff]",
    items: [
      { label: "Publicités", highlight: "Meta & TikTok" },
      { label: "Contenu", highlight: "LinkedIn & Instagram" },
      { label: "Vidéos", highlight: "site web & landing pages" },
      { label: "Déclinaisons", highlight: "tous formats" },
    ],
    price: (
      <>
        Forfait mensuel <span className="text-[#7b9cff]">900€ – 2 200€</span>
      </>
    ),
    ctaClassName: "border-[#e8e4dc]/70 text-[#e8e4dc] hover:bg-white/5",
    cardClassName: "bg-[#0c0c0c]",
  },
] as const;

const CASES = [
  {
    idx: "001",
    brand: "Quechua",
    sector: "Outdoor · Grande marque",
    type: "Publicité digitale · Contenu réseaux",
    desc:
      "Production d'un contenu publicitaire pour Quechua, marque outdoor de référence du groupe Decathlon. Tournage en conditions réelles, direction artistique complète, livraison multi-formats pour diffusion digitale sur les plateformes de la marque.",
    resultLabel: "Diffusion",
    resultVal: "Plateformes digitales Decathlon Group",
  },
  {
    idx: "002",
    brand: "La Pommeraie",
    sector: "Restauration · Premium",
    type: "Film institutionnel · Image de marque",
    desc:
      "Film de présentation pour ce restaurant premium parisien. Captation de l'univers gastronomique, des équipes en cuisine, de l'expérience client. Un film pensé pour le site web, les réseaux sociaux et les relations presse.",
    resultLabel: "Utilisation",
    resultVal: "Site web · Réseaux · Relations presse",
  },
  {
    idx: "003",
    brand: "Fashion Week",
    sector: "Luxe & Mode · Paris",
    type: "Reportage · Contenu événementiel",
    desc:
      "Couverture photo et vidéo d'un défilé lors de la Fashion Week de Paris. Captation backstage, défilé, réactions et ambiance. Livraison rapide pour diffusion immédiate sur les réseaux de la marque dans les heures suivant l'événement.",
    resultLabel: "Contrainte",
    resultVal: "Livraison sous 24h · Diffusion immédiate",
  },
] as const;

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Brief stratégique",
    desc:
      "Appel de 45 min. Objectif, cible, ton, contraintes techniques et plateformes de diffusion.",
    delay: "Semaine 1",
  },
  {
    num: "02",
    title: "Proposition créative",
    desc:
      "Structure narrative, angles, références visuelles, planning et budget détaillé.",
    delay: "J+3 après brief",
  },
  {
    num: "03",
    title: "Tournage",
    desc:
      "Direction artistique complète, matériel professionnel, aucune improvisation sur le plateau.",
    delay: "Date fixée",
  },
  {
    num: "04",
    title: "Premier montage",
    desc:
      "Premier cut livré via lien privé. 5 jours ouvrés pour retours écrits consolidés.",
    delay: "J+10 après tournage",
  },
  {
    num: "05",
    title: "Révisions",
    desc:
      "2 séries de révisions incluses. Au-delà, chaque révision supplémentaire est forfaitisée.",
    delay: "J+5 après retours",
  },
  {
    num: "06",
    title: "Livraison finale",
    desc:
      "Fichiers HD dans tous les formats. Droits d'utilisation illimités. Archivage 12 mois.",
    delay: "J+3 après validation",
  },
] as const;

const DELIVERY_ITEMS = [
  {
    format: "MP4 4K",
    detail: "Format principal · 16/9 · Compatible toutes plateformes",
  },
  {
    format: "Déclinaisons formats",
    detail: "9/16 stories · 1/1 feed · 4/5 LinkedIn",
  },
  {
    format: "Droits d'utilisation",
    detail: "Illimités · Tous supports · Sans redevance annuelle",
  },
  {
    format: "Archivage rushes",
    detail: "Rushes bruts conservés 12 mois · Disponibles sur demande",
  },
] as const;

const AVAILABILITY_MONTHS = [
  { name: "Jan", status: "Complet", statusClassName: "text-[#3a3a3a]" },
  { name: "Fév", status: "Complet", statusClassName: "text-[#3a3a3a]" },
  { name: "Mar", status: "Complet", statusClassName: "text-[#3a3a3a]" },
  { name: "Avr", status: "2 places", statusClassName: "text-[#c084fc]" },
  { name: "Mai", status: "Disponible", statusClassName: "text-[#7b9cff]" },
  { name: "Juin", status: "Disponible", statusClassName: "text-[#7b9cff]" },
  { name: "Juil", status: "Disponible", statusClassName: "text-[#7b9cff]" },
  { name: "Août", status: "1 place", statusClassName: "text-[#c084fc]" },
  { name: "Sep", status: "Disponible", statusClassName: "text-[#7b9cff]" },
  { name: "Oct", status: "Disponible", statusClassName: "text-[#7b9cff]" },
  { name: "Nov", status: "Disponible", statusClassName: "text-[#7b9cff]" },
  { name: "Déc", status: "Disponible", statusClassName: "text-[#7b9cff]" },
] as const;

const FAQ_ITEMS = [
  {
    q: "Qui détient les droits sur les vidéos produites ?",
    a: (
      <>
        Vous détenez les droits d’utilisation sur{" "}
        <span className="text-[#e8e4dc]">
          tous les supports convenus dans le contrat, pour une durée illimitée,
          sans redevance annuelle.
        </span>{" "}
        Les rushes bruts restent notre propriété mais sont archivés et disponibles
        sur demande pendant 12 mois.
      </>
    ),
  },
  {
    q: "Combien de révisions sont incluses ?",
    a: (
      <>
        <span className="text-[#e8e4dc]">Deux séries de retours consolidés</span> sont
        incluses dans chaque devis. Au-delà, chaque révision supplémentaire est
        facturée à un forfait défini en amont dans le contrat.
      </>
    ),
  },
  {
    q: "Pouvez-vous facturer avec TVA et bon de commande ?",
    a: (
      <>
        Oui. Nous émettons des factures avec TVA et nous intégrons sans difficulté
        dans les{" "}
        <span className="text-[#e8e4dc]">
          processus d’achat des grandes entreprises
        </span>{" "}
        — bon de commande, portail fournisseur, délai de paiement à 30 ou 60 jours.
      </>
    ),
  },
  {
    q: "Avez-vous une assurance professionnelle ?",
    a: (
      <>
        Oui, nous sommes couverts en{" "}
        <span className="text-[#e8e4dc]">responsabilité civile professionnelle</span>.
        Le certificat d’assurance est disponible sur demande avant la signature du
        contrat.
      </>
    ),
  },
  {
    q: "Que se passe-t-il si le tournage est annulé ou décalé ?",
    a: (
      <>
        Un report sans frais est possible{" "}
        <span className="text-[#e8e4dc]">jusqu’à 7 jours ouvrés avant le tournage</span>.
        En deçà, des frais de déplacement et de préparation peuvent s’appliquer
        selon les conditions définies dans le contrat.
      </>
    ),
  },
] as const;

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pb-20 text-[#e8e4dc]">
      <JsonLd id="jsonld-page" data={structuredData} />

      <div className="border-b border-[#1e1e1e]">
        <SiteHeader />
      </div>

      <main className="mx-auto site-width">
        {/* HERO */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 md:items-end">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Production vidéo & photo corporate · Paris & France
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-none tracking-[-0.02em] text-[#e8e4dc] md:text-[68px]">
                Votre image,
                <br />
                votre <span className="italic text-[#7b9cff]">avantage</span>
                <br />
                compétitif.
              </h1>
              <p className="mt-6 max-w-xl text-[14px] font-normal leading-relaxed text-white/45">
                Nous produisons des contenus visuels stratégiques pour les marques,
                entreprises et événements qui refusent la médiocrité. De Quechua à
                la Fashion Week de Paris.
              </p>

              <Link
                href={ROUTES.contact}
                data-ga-event="cta_click"
                data-ga-category="Lead"
                data-ga-label="/corporate/:hero"
                className="mt-10 inline-flex w-fit border border-[#e8e4dc]/70 bg-transparent px-7 py-3.5 text-[11px] font-normal uppercase tracking-[0.16em] text-[#e8e4dc] transition-colors hover:bg-white/5"
              >
                Discuter de votre projet
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
                {HERO_STATS.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="bg-[#0c0c0c] p-6">
                    <p className={`font-serif text-[44px] leading-none ${s.valueClassName}`}>
                      {s.value}
                    </p>
                    <p className="mt-2 text-[11px] font-normal tracking-[0.04em] text-white/40">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
                {HERO_STATS.slice(2, 4).map((s, idx) => (
                  <div key={idx + 2} className="bg-[#0c0c0c] p-6">
                    <p className={`font-serif text-[44px] leading-none ${s.valueClassName}`}>
                      {s.value}
                    </p>
                    <p className="mt-2 text-[11px] font-normal tracking-[0.04em] text-white/40">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS MARCHÉ */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Pourquoi investir dans la vidéo
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Les chiffres
                <br />
                qui <span className="italic text-[#c084fc]">parlent.</span>
              </h2>
            </div>
            <p className="max-w-[240px] text-right text-[12px] font-normal leading-relaxed text-white/40">
              Des données vérifiées sur l’impact de la vidéo professionnelle en B2B.
            </p>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="grid grid-cols-1 gap-px bg-[#1e1e1e] sm:grid-cols-2 lg:grid-cols-4">
              {MARKET_STATS.map((s, idx) => (
                <div key={idx} className="bg-[#0c0c0c] p-8">
                  <p className={`font-serif text-5xl leading-none ${s.valueClassName}`}>
                    {s.value}
                  </p>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/40">
                    {s.label}
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.06em] text-white/15">
                    Source · {s.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRESTATIONS */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Ce que nous faisons
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Trois familles,
                <br />
                une <span className="italic text-[#c084fc]">exigence.</span>
              </h2>
            </div>
            <p className="max-w-[240px] text-right text-[12px] font-normal leading-relaxed text-white/40">
              Chaque prestation est pensée autour de votre objectif business, pas de
              notre technique.
            </p>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-3">
              {PRESTATIONS.map((p) => (
                <div key={p.title} className={`p-10 ${p.cardClassName}`}>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    {p.cat}
                  </p>
                  <h3 className="mt-5 font-serif text-[26px] leading-tight text-[#e8e4dc]">
                    {p.title}
                  </h3>
                  <p className={`mt-3 text-[13px] italic leading-relaxed ${p.promiseClassName}`}>
                    “{p.promise}”
                  </p>

                  <ul className="mt-6">
                    {p.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 border-b border-white/5 py-2 text-[12px] text-white/40"
                      >
                        <span className="h-px w-3 bg-white/15" aria-hidden />
                        <span>
                          {item.label} <span className="text-[#e8e4dc]">{item.highlight}</span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-[11px] tracking-[0.04em] text-white/25">
                    {p.price}
                  </p>

                  <Link
                    href={ROUTES.contact}
                    data-ga-event="cta_click"
                    data-ga-category="Lead"
                    data-ga-label={`/corporate/:prestation:${p.cat}`}
                    className={`mt-6 inline-flex w-fit border bg-transparent px-5 py-3 text-[10px] font-normal uppercase tracking-[0.16em] transition-colors ${p.ctaClassName}`}
                  >
                    Demander un devis
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAS CLIENTS */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Références
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Ils nous ont
                <br />
                <span className="italic text-[#c084fc]">fait confiance.</span>
              </h2>
            </div>
            <p className="max-w-[240px] text-right text-[12px] font-normal leading-relaxed text-white/40">
              Trois productions, trois univers, une même exigence.
            </p>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="divide-y divide-[#1e1e1e]">
              {CASES.map((c) => (
                <div key={c.idx} className="grid grid-cols-1 md:grid-cols-12">
                  <div className="border-b border-[#1e1e1e] p-6 md:col-span-1 md:border-b-0 md:border-r">
                    <p className="font-serif text-[13px] text-white/15">{c.idx}</p>
                  </div>

                  <div className="border-b border-[#1e1e1e] p-8 md:col-span-3 md:border-b-0 md:border-r">
                    <p className="font-serif text-2xl italic text-[#e8e4dc]">
                      {c.brand}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/20">
                      {c.sector}
                    </p>
                    <p className="mt-3 text-[11px] leading-relaxed text-white/40">
                      {c.type}
                    </p>
                  </div>

                  <div className="border-b border-[#1e1e1e] p-8 md:col-span-6 md:border-b-0 md:border-r">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-white/20">
                      Le projet
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                      {c.desc}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between p-8 md:col-span-2">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                        {c.resultLabel}
                      </p>
                      <p className="mt-2 font-serif text-[18px] leading-relaxed text-[#7b9cff]">
                        {c.resultVal}
                      </p>
                    </div>

                    <Link
                      href={ROUTES.portfolio}
                      data-ga-event="cta_click"
                      data-ga-category="Navigation"
                      data-ga-label={`/corporate/:case:${c.brand}`}
                      className="mt-4 self-end text-[10px] uppercase tracking-[0.12em] text-[#7b9cff]"
                    >
                      Voir la production →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Calculateur ROI
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Combien vous
                <br />
                <span className="italic text-[#c084fc]">rapporte</span> une vidéo ?
              </h2>
            </div>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b border-[#1e1e1e] p-10 md:border-b-0 md:border-r">
                <h3 className="font-serif text-[28px] italic text-[#e8e4dc]">
                  Transformez une dépense en investissement.
                </h3>
                <p className="mt-4 text-[13px] leading-relaxed text-white/40">
                  Une production vidéo n’est pas un coût — c’est un actif qui travaille
                  pour vous 24h/24. Ce calculateur vous montre combien de nouveaux
                  clients il vous faut pour rentabiliser votre production.
                </p>

                <div className="mt-8 border-t border-[#1e1e1e] pt-6">
                  <p className="text-[11px] leading-relaxed text-white/25">
                    Un film institutionnel utilisé pendant 3 ans représente{" "}
                    <span className="text-[#7b9cff]">moins de 3€ par jour</span> pour
                    une production à 2 500€. Le coût d’un café, pour un outil qui vend
                    à votre place.
                  </p>
                </div>
              </div>

              <div className="bg-[#0a0a0a] p-10">
                <RoiCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Notre méthode
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Un process rigoureux,
                <br />
                zéro <span className="italic text-[#c084fc]">surprise.</span>
              </h2>
            </div>
            <p className="max-w-[240px] text-right text-[12px] font-normal leading-relaxed text-white/40">
              Des jalons clairs, des délais tenus, une communication transparente à
              chaque étape.
            </p>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="grid grid-cols-1 md:grid-cols-6">
              {PROCESS_STEPS.map((s, idx) => (
                <div
                  key={s.num}
                  className={`p-7 ${
                    idx !== PROCESS_STEPS.length - 1 ? "md:border-r" : ""
                  } border-b border-[#1e1e1e] md:border-b-0 md:border-[#1e1e1e]`}
                >
                  <p className="font-serif text-[40px] leading-none text-[#1e1e1e]">
                    {s.num}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.08em] text-[#e8e4dc]">
                    {s.title}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                    {s.desc}
                  </p>
                  <p className="mt-3 text-[10px] tracking-[0.06em] text-[#7b9cff]">
                    {s.delay}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border border-[#1e1e1e]">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {DELIVERY_ITEMS.map((d, idx) => (
                <div
                  key={d.format}
                  className={`p-6 ${idx !== DELIVERY_ITEMS.length - 1 ? "md:border-r" : ""} border-b border-[#1e1e1e] md:border-b-0 md:border-[#1e1e1e]`}
                >
                  <p className="text-[13px] font-medium text-[#e8e4dc]">
                    {d.format}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DISPONIBILITÉS */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Agenda 2026
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Disponibilités
                <br />
                <span className="italic text-[#c084fc]">limitées.</span>
              </h2>
            </div>
            <p className="max-w-[240px] text-right text-[12px] font-normal leading-relaxed text-white/40">
              Chaque projet bénéficie d’une attention totale. Le nombre de productions
              mensuelles est volontairement limité.
            </p>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="grid grid-cols-3 gap-px bg-[#1e1e1e] sm:grid-cols-6 lg:grid-cols-12">
              {AVAILABILITY_MONTHS.map((m) => (
                <div key={m.name} className="bg-[#0c0c0c] p-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-white/20">
                    {m.name}
                  </p>
                  <p className={`mt-2 text-[9px] uppercase tracking-[0.08em] ${m.statusClassName}`}>
                    {m.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
                Questions fréquentes
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-[44px]">
                Ce que vous
                <br />
                <span className="italic text-[#c084fc]">demandez.</span>
              </h2>
            </div>
          </div>

          <div className="mt-12 border border-[#1e1e1e]">
            <div className="divide-y divide-[#1e1e1e]">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="grid grid-cols-1 md:grid-cols-2">
                  <div className="border-b border-[#1e1e1e] p-8 md:border-b-0 md:border-r">
                    <p className="text-[13px] leading-relaxed text-[#e8e4dc]">
                      {item.q}
                    </p>
                  </div>
                  <div className="p-8">
                    <p className="text-[13px] leading-relaxed text-white/40">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 site-pad-x">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-normal uppercase tracking-[0.22em] text-white/40">
              Prochaine disponibilité · Avril 2026
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-none md:text-[56px]">
              Votre projet mérite
              <br />
              une <span className="italic text-[#7b9cff]">production à sa hauteur.</span>
            </h2>
            <p className="mt-6 text-[13px] tracking-[0.04em] text-white/40">
              Appel découverte offert · 30 minutes · Sans engagement
            </p>

            <Link
              href={ROUTES.contact}
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label="/corporate/:cta_bottom"
              className="mt-10 inline-flex w-fit border border-[#e8e4dc]/70 bg-transparent px-9 py-4 text-[11px] font-normal uppercase tracking-[0.16em] text-[#e8e4dc] transition-colors hover:bg-white/5"
            >
              Discuter de votre projet →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
