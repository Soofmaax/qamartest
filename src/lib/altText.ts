type BuildImageAltInput = {
  /** Human readable label for the media (ex: "Mariage", "Corporate"). */
  context: string;
  /** Optional more specific label (ex: project/client name). */
  subject?: string;
  /** 1-based index (ex: 1/12) for galleries. */
  index?: number;
  /** Total count for galleries. */
  total?: number;
};

export function buildImageAlt({ context, subject, index, total }: BuildImageAltInput) {
  const base = subject ? `${context} · ${subject}` : context;

  if (typeof index === "number" && typeof total === "number" && total > 0) {
    return `${base} · photo ${index}/${total}`;
  }

  if (typeof index === "number") {
    return `${base} · photo ${index}`;
  }

  return base;
}
