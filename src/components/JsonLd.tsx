import type { StructuredDataGraph, StructuredDataNode } from "@/lib/structuredData";

type JsonLdProps = {
  data: StructuredDataNode | StructuredDataGraph;
  id?: string;
};

function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
