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
    <div className="mx-auto flex w-full items-center justify-between gap-6">
      <button
        type="button"
        aria-label="Avis précédent"
        className="grid h-[38px] w-[38px] place-items-center text-white"
        onClick={() =>
          setIndex((v) => (v - 1 + testimonials.length) % testimonials.length)
        }
      >
        <span className="text-2xl leading-none">‹</span>
      </button>

      <p className="w-full text-center text-[20px] leading-[23px] text-[#ededed] md:w-[75%]">
        {current.text}
      </p>

      <button
        type="button"
        aria-label="Avis suivant"
        className="grid h-[38px] w-[38px] place-items-center text-white"
        onClick={() => setIndex((v) => (v + 1) % testimonials.length)}
      >
        <span className="text-2xl leading-none">›</span>
      </button>
    </div>
  );
}
