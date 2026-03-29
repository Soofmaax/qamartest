"use client";

import { useEffect } from "react";

export function LegacyRedirectPage({ to }: { to: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const destination = basePath ? `${basePath}${to}` : to;

  useEffect(() => {
    // Use replace() so legacy URLs don't pollute browser history.
    window.location.replace(destination);
  }, [destination]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center text-white">
      <h1 className="font-serif text-3xl font-semibold">Redirection…</h1>
      <p className="mt-4 text-white/80">
        Cette page a changé d’adresse. Si la redirection ne fonctionne pas, cliquez ici :
      </p>
      <a className="mt-4 underline" href={destination}>
        {destination}
      </a>
    </main>
  );
}
