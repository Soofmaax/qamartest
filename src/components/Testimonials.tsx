"use client";

import { useMemo, useState } from "react";

const testimonials = [
  {
    text: "J’ai fait appel à Directed by Qamar pour une séance photo/vidéo et j’ai été vraiment satisfaite. Travail de qualité, bonne communication et résultat top ! Très pro et créatif. Je recommande vivement !",
  },
  {
    text: "Super expérience, très professionnel et à l’écoute. Le rendu est propre, moderne et parfaitement adapté à notre image.",
  },
  {
    text: "Une vraie direction artistique et une exécution impeccable. Livraison rapide et qualité au rendez-vous.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => testimonials[index], [index]);

  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 md:px-8">
      <button
        type="button"
        aria-label="Avis précédent"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
        onClick={() => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length)}
      >
        <span className="text-xl">‹</span>
      </button>

      <p className="w-full max-w-3xl text-center text-lg leading-relaxed text-zinc-200 md:text-xl">
        {current.text}
      </p>

      <button
        type="button"
        aria-label="Avis suivant"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
        onClick={() => setIndex((v) => (v + 1) % testimonials.length)}
      >
        <span className="text-xl">›</span>
      </button>
    </div>
  );
}
