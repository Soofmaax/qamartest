# Audit UX & Sécurité — Directed by Qamar

_Date: 2026-04-28_

## 1) Résumé exécutif

- Le site présente une base solide (structure claire, pages dédiées, validation formulaire, rate-limit API).
- Les priorités court terme sont:
  1. **Structurer les assets image par prestation/projet** pour faciliter la maintenance éditoriale.
  2. **Réduire la dépendance aux ressources externes** (logos/fonts/images distantes) pour fiabilité/performance.
  3. **Renforcer la posture sécurité API** (en-têtes de sécurité + stratégie anti-abus plus robuste en prod).

## 2) Audit UX (priorisé)

## P0 (à traiter en premier)

1. **Nommage des prestations ambigu sur certaines galeries**
   - Constat: les blocs “lastPrestations” utilisaient des titres génériques.
   - Risque: confusion client, difficulté de vente des cas clients réels.
   - Action: utiliser des titres explicites alignés avec les shootings.

2. **Dépendance réseau externe pour certains médias**
   - Constat: des images/logos sont chargés depuis des hôtes tiers.
   - Risque UX: lenteur/intermittence si la ressource externe échoue.
   - Action: rapatrier progressivement dans `public/images/portfolio/...`.

## P1 (amélioration conversion)

1. **Uniformiser les CTA “contact/disponibilité”**
   - Conserver une promesse cohérente (ex: “Réponse sous 48h”) sur toutes les pages services.
2. **Renforcer la preuve sociale**
   - Associer chaque prestation à lieu + date + type de livrable (photo/vidéo).

## P2 (confort éditorial)

1. **Convention de nommage média standardisée**
   - Exemple: `public/images/portfolio/mariage/ninon-alexandre/ninon-alexandre-01.jpg`.
2. **Checklist d’ajout d’un nouveau projet**
   - dossier
   - cover
   - alt text
   - bloc SEO

## 3) Audit sécurité (priorisé)

## Points positifs déjà en place

- Validation côté serveur des champs (taille, format email/téléphone, longueur message).
- Honeypot `website` pour bots basiques.
- Rate limiting côté API via Redis (fallback mémoire en dev).

## P0

1. **Centraliser la journalisation des erreurs API sans fuite de données sensibles**
   - Garder des logs minimaux côté prod (pas de payload utilisateur complet).

2. **Assurer la disponibilité du rate-limit distribué en prod**
   - Vérifier que les variables Upstash sont toujours définies en environnement de déploiement.

## P1

1. **Headers de sécurité sur le site statique**
   - CSP, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` via Next config headers.
2. **Durcir l’anti-spam formulaire**
   - Ajouter un seuil temporel minimum (ex: <3s = suspect) + clé anti-automation si nécessaire.

## P2

1. **Runbook incident contact form**
   - Procédure claire si Resend est indisponible.
2. **Tableau de bord erreurs API**
   - Visualiser fréquence 429/5xx.

## 4) Mise en place médias (proposée)

## Arborescence cible

- `public/images/portfolio/mariage/ninon-alexandre/`
- `public/images/portfolio/mariage/sokona-julien/`
- `public/images/portfolio/mariage/karim-ines/`
- `public/images/portfolio/corporate/hotel-dali/`

## Règles

- Noms de fichiers en `kebab-case`.
- Préfixe identifiant la prestation/projet.
- Ordre séquentiel: `-01`, `-02`, ...
- Toujours renseigner alt text contextualisé.

## 5) Plan d’exécution (book)

### Sprint 1
- Migrer les 3 projets mariage existants dans leurs sous-dossiers.
- Mettre à jour les références dans le contenu.

### Sprint 2
- Migrer corporate (dont Hotel Dali) selon la même convention.
- Revue SEO image + vérification sitemap média.

### Sprint 3
- Optimisation formats (WebP/AVIF), poids, placeholders.
- QA visuelle finale (desktop/mobile).
