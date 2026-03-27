export type StructuredDataNode = Record<string, unknown>;

type BuildWebPageInput = {
  path: string;
  name: string;
  description?: string;
  imageUrl?: string;
};

type BuildServiceInput = {
  path: string;
  name: string;
  description?: string;
};

type FaqItem = { q: string; a: string };

type BuildFaqPageInput = {
  path: string;
  items: FaqItem[];
  aboutServiceId?: string;
};

export const SITE_URL = "https://www.directedbyqamar.com";
export const SITE_NAME = "Directed by Qamar";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function buildGraph(nodes: StructuredDataNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function buildOrganizationLocalBusiness() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: "https://framerusercontent.com/images/yRve70fy1dkrL8wzTIRucXzC1o.png",
    image: "https://framerusercontent.com/images/yRve70fy1dkrL8wzTIRucXzC1o.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    sameAs: ["https://maps.app.goo.gl/CU93H22ijGqnEaKr7"],
  } satisfies StructuredDataNode;
}

export function buildWebSite() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "fr-FR",
    publisher: { "@id": ORGANIZATION_ID },
  } satisfies StructuredDataNode;
}

export function buildWebPage({ path, name, description, imageUrl }: BuildWebPageInput) {
  const url = absoluteUrl(path);

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
    ...(imageUrl
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
          },
        }
      : {}),
  } satisfies StructuredDataNode;
}

export function buildService({ path, name, description }: BuildServiceInput) {
  const url = absoluteUrl(path);

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "France" },
  } satisfies StructuredDataNode;
}

export function buildFaqPage({ path, items, aboutServiceId }: BuildFaqPageInput) {
  const url = absoluteUrl(path);

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    ...(aboutServiceId ? { about: { "@id": aboutServiceId } } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  } satisfies StructuredDataNode;
}

/** Convenience helper for non-service pages. */
export function buildWebPageGraph(input: BuildWebPageInput) {
  return buildGraph([buildWebPage(input)]);
}
