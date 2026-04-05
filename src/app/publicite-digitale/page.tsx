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
  title: "Photographe & vidéaste publicité digitale | Directed by Qamar",
  description:
    "Contenu photo/vidéo pour marques et créateurs : shootings, Reels, formats social media et assets publicitaires prêts à performer.",
  path: "/publicite-digitale/",
  image: "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
};

const FAQ_ITEMS = [
  {
    q: "Faut-il avoir une idée précise avant de vous contacter ?",
    a: "Non. L’appel découverte sert à cadrer votre direction créative, vos plateformes et vos objectifs.",
  },
  {
    q: "Combien de temps dure un tournage ?",
    a: "Le plus souvent, une demi-journée à une journée complète selon le volume et les formats attendus.",
  },
  {
    q: "Vous vous déplacez hors Paris ?",
    a: "Oui, partout en France, avec des frais de déplacement transparents au devis.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "En moyenne 7 jours ouvrés pour la première livraison, avec deux séries de retours incluses.",
  },
  {
    q: "Quel budget faut-il prévoir ?",
    a: "Le devis dépend du volume, des formats et du niveau de production, établi après échange.",
  },
] as const;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: ROUTES.home },
      { name: "Publicité digitale", path: seo.path },
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
    name: "Publicité digitale",
    description: seo.description,
  }),
  buildFaqPage({
    path: seo.path,
    items: FAQ_ITEMS.map((item) => ({ q: item.q, a: item.a })),
  }),
]);

export const metadata: Metadata = createPageMetadata(seo);

export default function PubliciteDigitalePage() {
  return (
    <div className="min-h-screen bg-black text-[#e8e4dc]">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-end md:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                Création de contenu visuel · Paris & France
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-none tracking-[-0.02em] md:text-[68px]">
                Votre contenu,
                <br />
                aussi fort que
                <br />
                votre <span className="italic text-[#7b9cff]">image.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-white/45">
                Marques, e-commerce et créateurs : nous produisons des photos et
                vidéos prêtes à publier, pensées pour la conversion et la cohérence
                de votre image.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contact}
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label="/publicite-digitale/:hero"
                  className="inline-flex border border-[#7b9cff] px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-[#7b9cff] transition-colors hover:bg-[#7b9cff]/10"
                >
                  Démarrer mon projet
                </Link>
                <Link
                  href={ROUTES.portfolio}
                  data-ga-event="cta_click"
                  data-ga-category="Navigation"
                  data-ga-label="/publicite-digitale/:hero:portfolio"
                  className="inline-flex border border-[#e8e4dc]/30 px-7 py-3.5 text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
                >
                  Voir mes réalisations
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
              {[
                ["150+", "Marques & créateurs accompagnés", "text-[#7b9cff]"],
                ["4,9", "Note moyenne Google", "text-[#c084fc]"],
                ["7j", "Délai de livraison moyen", "text-[#e8e4dc]"],
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

        <section className="border-b border-[#1e1e1e] py-8 site-pad-x">
          <div className="flex flex-wrap gap-0 border border-[#1e1e1e]">
            {[
              "Paco Rabanne",
              "Haura Couture",
              "Tenashy Couture",
              "Shining Sister",
              "Que Pour Elle",
              "Rimmel",
              "Al Hidaaya",
            ].map((brand) => (
              <p
                key={brand}
                className="border-r border-[#1e1e1e] px-7 py-4 font-serif text-xl italic text-white/30 last:border-r-0"
              >
                {brand}
              </p>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                À qui s’adresse ce service
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-[44px]">
                Deux profils,
                <br />
                une même <span className="italic text-[#7b9cff]">exigence.</span>
              </h2>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-2">
            <div className="bg-black p-10">
              <p className="w-fit border border-[#7b9cff] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#7b9cff]">
                Marques & e-commerces
              </p>
              <h3 className="mt-6 font-serif text-[30px] leading-tight">
                Vous avez un produit.
                <br />
                On lui donne une image.
              </h3>
              <p className="mt-4 text-[13px] leading-relaxed text-white/45">
                Shooting produit, lifestyle, formats Ads et contenus réseaux :
                l’objectif est de renforcer votre crédibilité et vos conversions.
              </p>
            </div>
            <div className="bg-[#0a0a0a] p-10">
              <p className="w-fit border border-[#c084fc] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#c084fc]">
                Créateurs & entrepreneurs
              </p>
              <h3 className="mt-6 font-serif text-[30px] leading-tight">
                Vous construisez votre image.
                <br />
                On la sublime.
              </h3>
              <p className="mt-4 text-[13px] leading-relaxed text-white/45">
                Portraits, Reels, formats courts et feed cohérent : vous gagnez du
                contenu premium prêt à publier.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Plus de 150 projets.
              <br />
              <span className="italic text-[#7b9cff]">Un seul standard.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-3">
            {[
              ["Paco Rabanne", "Contenu digital · Marque de luxe"],
              ["Rimmel", "Shooting produit · Beauté"],
              ["Haura Couture", "Contenu lifestyle · Mode"],
              ["Al Hidaaya", "Shooting produit · Marque"],
              ["Shining Sister", "Reels & Stories · Mode"],
              ["Tenashy Couture", "Contenu digital · Couture"],
            ].map(([brand, type], idx) => (
              <div
                key={brand}
                className={`min-h-[240px] p-8 ${idx === 0 ? "md:col-span-2" : ""} ${
                  idx % 2 === 0 ? "bg-black" : "bg-[#0a0a0a]"
                }`}
              >
                <p className="font-serif text-[28px] italic">{brand}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/40">{type}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Ce qui change
              <br />
              avec du contenu <span className="italic text-[#c084fc]">pro.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-2">
            <div className="bg-black p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Sans contenu professionnel
              </p>
              <ul className="mt-4 space-y-3 text-[13px] text-white/30">
                <li>— Visuels inconsistants</li>
                <li>— Feed non cohérent</li>
                <li>— Temps perdu sans résultat stable</li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#7b9cff]">
                Avec Directed by Qamar
              </p>
              <ul className="mt-4 space-y-3 text-[13px] text-[#9ab8ff]">
                <li>→ Image cohérente multi-plateformes</li>
                <li>→ 4 à 6 semaines de contenu par session</li>
                <li>→ Fichiers prêts à publier</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Process
              <br />
              <span className="italic text-[#7b9cff]">sans surprise.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-4">
            {[
              ["01", "Appel découverte", "20 à 30 min"],
              ["02", "Préparation créative", "J-7"],
              ["03", "Tournage", "Date fixée ensemble"],
              ["04", "Livraison", "Sous 7 jours ouvrés"],
            ].map(([num, title, delay]) => (
              <div key={num} className="bg-black p-8">
                <p className="font-serif text-[46px] leading-none text-[#1a1a1a]">{num}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.1em] text-white/80">{title}</p>
                <p className="mt-3 text-[10px] tracking-[0.06em] text-[#7b9cff]">{delay}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Ce que vous
              <br />
              recevez.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-4">
            {[
              ["01 · Photo", "Photos retouchées haute résolution"],
              ["02 · Vidéo", "Montages + déclinaisons réseaux"],
              ["03 · Organisation", "Fichiers classés par usage"],
              ["04 · Droits", "Utilisation digitale illimitée"],
            ].map(([head, text]) => (
              <div key={head} className="bg-black p-7">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">{head}</p>
                <p className="mt-3 text-[14px] text-white/80">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Ils ont franchi
              <br />
              le <span className="italic text-[#7b9cff]">cap.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#1e1e1e] md:grid-cols-3">
            {[
              ["Sarah M.", "Créatrice de contenu · Lifestyle"],
              ["Shining Sister", "Marque de mode · Paris"],
              ["Que Pour Elle", "E-commerce · Mode féminine"],
            ].map(([name, role], idx) => (
              <div key={name} className={`p-8 ${idx === 1 ? "bg-[#0a0a0a]" : "bg-black"}`}>
                <p className="font-serif text-[18px] italic leading-relaxed text-white/85">
                  « Une journée de production, des semaines de contenu prêt à publier. »
                </p>
                <p className="mt-6 text-[12px] text-white/80">{name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-white/35">{role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              Disponibilités
              <br />
              <span className="italic text-[#c084fc]">limitées.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-px bg-[#1e1e1e] sm:grid-cols-6 lg:grid-cols-12">
            {[
              ["Jan", "Complet", "text-white/20"],
              ["Fév", "Complet", "text-white/20"],
              ["Mar", "Complet", "text-white/20"],
              ["Avr", "2 places", "text-[#c084fc]"],
              ["Mai", "Disponible", "text-[#7b9cff]"],
              ["Juin", "Disponible", "text-[#7b9cff]"],
              ["Juil", "Disponible", "text-[#7b9cff]"],
              ["Août", "1 place", "text-[#c084fc]"],
              ["Sep", "Disponible", "text-[#7b9cff]"],
              ["Oct", "Disponible", "text-[#7b9cff]"],
              ["Nov", "Disponible", "text-[#7b9cff]"],
              ["Déc", "Disponible", "text-[#7b9cff]"],
            ].map(([month, status, statusClass]) => (
              <div key={month} className="bg-black p-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/25">{month}</p>
                <p className={`mt-2 text-[9px] uppercase tracking-[0.08em] ${statusClass}`}>
                  {status}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#1e1e1e] py-20 site-pad-x md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">
              FAQ
              <br />
              <span className="italic text-[#7b9cff]">publicité digitale.</span>
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
            Votre contenu, enfin
            <br />
            à la hauteur de ce
            <br />
            que vous <span className="italic text-[#7b9cff]">faites.</span>
          </h2>
          <Link
            href={ROUTES.contact}
            data-ga-event="cta_click"
            data-ga-category="Lead"
            data-ga-label="/publicite-digitale/:final-cta"
            className="mt-10 inline-flex border border-[#7b9cff] px-8 py-4 text-[11px] uppercase tracking-[0.16em] text-[#7b9cff] transition-colors hover:bg-[#7b9cff]/10"
          >
            Démarrer mon projet
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
