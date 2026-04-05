"use client";

import { useId, useMemo, useState } from "react";

const eur = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const integer = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 0,
});

const percent = new Intl.NumberFormat("fr-FR", {
  style: "percent",
  maximumFractionDigits: 0,
});

function formatCurrency(value: number) {
  return eur.format(value);
}

function formatInteger(value: number) {
  return integer.format(value);
}

function formatPercentFromPoints(value: number) {
  return percent.format(value / 100);
}

export function RoiCalculator() {
  const budgetId = useId();
  const clientValId = useId();
  const rateId = useId();
  const resultId = useId();

  const [budget, setBudget] = useState(2000);
  const [clientVal, setClientVal] = useState(3000);
  const [rate, setRate] = useState(5);

  const { clientsNeeded, prospectsNeeded } = useMemo(() => {
    const computedClientsNeeded = Math.ceil(budget / clientVal);
    const computedProspectsNeeded = Math.ceil(computedClientsNeeded / (rate / 100));

    return {
      clientsNeeded: computedClientsNeeded,
      prospectsNeeded: computedProspectsNeeded,
    };
  }, [budget, clientVal, rate]);

  const clientsLabel =
    clientsNeeded === 1 ? "1 client" : `${formatInteger(clientsNeeded)} clients`;

  const prospectsLabel =
    prospectsNeeded === 1
      ? "1 prospect"
      : `${formatInteger(prospectsNeeded)} prospects`;

  return (
    <div className="w-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="flex flex-col gap-6">
        <header className="space-y-1">
          <h3 className="font-serif text-2xl text-white">Calculateur ROI</h3>
          <p className="text-sm text-white/60">
            Estimez le volume minimum de clients (et de prospects) à générer.
          </p>
        </header>

        <div className="grid gap-4">
          <div className="rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <label htmlFor={budgetId} className="block font-serif text-[18px] text-white">
                Budget production
              </label>
              <div className="shrink-0 rounded-xl bg-black/50 px-3 py-1.5 text-sm text-indigo-200 ring-1 ring-white/10">
                {formatCurrency(budget)}
              </div>
            </div>
            <input
              id={budgetId}
              aria-describedby={resultId}
              type="range"
              min={800}
              max={8000}
              step={100}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="mt-4 w-full accent-indigo-400"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-white/50">
              <span>{formatCurrency(800)}</span>
              <span>{formatCurrency(8000)}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <label htmlFor={clientValId} className="block font-serif text-[18px] text-white">
                Valeur d’un client moyen
              </label>
              <div className="shrink-0 rounded-xl bg-black/50 px-3 py-1.5 text-sm text-violet-200 ring-1 ring-white/10">
                {formatCurrency(clientVal)}
              </div>
            </div>
            <input
              id={clientValId}
              aria-describedby={resultId}
              type="range"
              min={500}
              max={20000}
              step={100}
              value={clientVal}
              onChange={(e) => setClientVal(Number(e.target.value))}
              className="mt-4 w-full accent-violet-400"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-white/50">
              <span>{formatCurrency(500)}</span>
              <span>{formatCurrency(20000)}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <label htmlFor={rateId} className="block font-serif text-[18px] text-white">
                Taux de conversion estimé
              </label>
              <div className="shrink-0 rounded-xl bg-black/50 px-3 py-1.5 text-sm text-sky-200 ring-1 ring-white/10">
                {formatPercentFromPoints(rate)}
              </div>
            </div>
            <input
              id={rateId}
              aria-describedby={resultId}
              type="range"
              min={1}
              max={20}
              step={1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-4 w-full accent-sky-400"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-white/50">
              <span>{formatPercentFromPoints(1)}</span>
              <span>{formatPercentFromPoints(20)}</span>
            </div>
          </div>
        </div>

        <div
          id={resultId}
          aria-live="polite"
          className="rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-sky-500/10 p-5 ring-1 ring-white/10"
        >
          <p className="font-serif text-2xl text-white">{clientsLabel}</p>
          <p className="mt-1 text-sm text-white/70">
            soit {prospectsLabel} à contacter avec un taux de conversion de{" "}
            {formatPercentFromPoints(rate)}
          </p>
        </div>
      </div>
    </div>
  );
}
