# Checklist SEO Technique pour Migration · Next.js (Directed by Qamar)

Cette checklist est destinée au développeur en charge de la migration du site `directedbyqamar.com` vers Next.js.
Elle couvre les points techniques essentiels pour assurer un référencement optimal et rapide sur Google, en particulier pour le marché parisien.

## 1. Configuration Générale de Next.js pour le SEO

- **Balises Meta par page** : gérer dynamiquement `<title>`, `<meta name="description">`, `<meta name="robots">`, Open Graph et Twitter Cards sur chaque page. Chaque page doit avoir un titre et une description uniques.
- **Génération de sitemap XML** : mettre en place un sitemap qui liste toutes les URLs indexables du site et le soumettre à Google Search Console.
- **Fichier robots.txt** : autoriser/bloquer les zones à explorer + s’assurer que les pages importantes sont autorisées.
- **URLs canoniques** : `<link rel="canonical" href="..." />` pour éviter le contenu dupliqué.
- **Gestion des erreurs 404** : page 404 personnalisée + statut HTTP 404.
- **Redirections 301** : rediriger les anciennes URLs vers les nouvelles lors d’un changement de slug.

## 2. Performance et Core Web Vitals

- **Optimisation des images (`next/image`)** : lazy-loading, redimensionnement, formats modernes (WebP/AVIF) pour améliorer LCP/CLS.
- **Préchargement des ressources** : précharger les ressources critiques (polices, CSS, JS) pour améliorer FCP.
- **Minification et compression** : CSS/JS/HTML minifiés, compression Gzip/Brotli.
- **Caching** : stratégie de cache efficace pour ressources statiques et dynamiques.

## 3. Accessibilité et UX

- **Responsive** : site entièrement responsive.
- **Attribut `alt`** : alt descriptif sur chaque image.
- **Navigation** : structure claire pour utilisateurs et robots.

## 4. Internationalisation (si applicable)

- **`hreflang`** : si multi-langues/régions, ajouter les balises `hreflang`.

## 5. Google Analytics & Search Console

- **GA4** : intégration Google Analytics 4.
- **GSC** : vérifier la propriété dans Search Console et soumettre le sitemap.

## 6. Données structurées (Schema.org)

Implémenter des données structurées pour enrichir les résultats (Rich Snippets).

### Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Directed by Qamar",
  "url": "https://www.directedbyqamar.com/",
  "logo": "https://www.directedbyqamar.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-6-02-65-77-52",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.instagram.com/directedbyqamar/",
    "https://www.linkedin.com/company/directedbyqamar/"
  ]
}
```

### LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Directed by Qamar",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "telephone": "+33-6-02-65-77-52",
  "url": "https://www.directedbyqamar.com/",
  "image": "https://www.directedbyqamar.com/main-image.jpg",
  "priceRange": "€€€",
  "servesCuisine": "Photographie, Vidéographie",
  "hasMap": "[URL Google Maps]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

### Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Photographie Corporate",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Directed by Qamar"
  },
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "description": "Reportages photo professionnels pour entreprises à Paris",
  "url": "https://www.directedbyqamar.com/corporate"
}
```

### ImageObject

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://www.directedbyqamar.com/portfolio/mariage-paris-1.jpg",
  "name": "Photographie de mariage à Paris",
  "description": "Photo d'un mariage élégant à Paris",
  "creator": {
    "@type": "Person",
    "name": "Qamar"
  }
}
```

### VideoObject

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "contentUrl": "https://www.directedbyqamar.com/portfolio/video-corporate-paris.mp4",
  "name": "Vidéo Corporate pour entreprise parisienne",
  "description": "Film promotionnel pour une PME à Paris",
  "uploadDate": "2024-03-29",
  "duration": "PT1M30S",
  "thumbnailUrl": "https://www.directedbyqamar.com/portfolio/video-corporate-paris.jpg",
  "creator": {
    "@type": "Person",
    "name": "Qamar"
  }
}
```

### Review / AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Photographie de Mariage",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "16"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Photographie Corporate"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Client Satisfait"
  },
  "reviewBody": "J'ai fait appel à Directed by Qamar pour une séance photo/vidéo..."
}
```

## 7. Maillage interne & liens externes

- **Maillage interne** : liens contextuels entre services, portfolio, contenus. Ancres variées et descriptives.
- **Liens externes** : `rel="nofollow"`/`rel="sponsored"` si lien payant.

## 8. Gestion optimale des médias

- `next/image` partout.
- Noms de fichiers sémantiques.
- Alt descriptifs.
- Vidéos : hébergement YouTube/Vimeo ou self-host selon besoin, responsive, non-bloquant.
- Données structurées ImageObject/VideoObject.
- Sitemaps images/vidéos si nécessaire.

## 9. Surveillance post-migration

- **Search Console** : erreurs d’exploration, indexation, performances.
- **Analytics** : comparer trafic et conversions avant/après.
- **Performance** : Lighthouse / PageSpeed.
