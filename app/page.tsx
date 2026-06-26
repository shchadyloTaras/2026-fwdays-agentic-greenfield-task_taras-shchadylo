"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Comfort tone — mirrors the design system's comfortTone(): good ≥70,
// fair 40–69, poor <40. One honest signal, then the detail.
function comfortTone(value: number): "good" | "fair" | "poor" {
  if (value >= 70) return "good";
  if (value >= 40) return "fair";
  return "poor";
}

const TONE_LABEL = { good: "Чудово", fair: "Помірно", poor: "Краще вдома" };

const FORECAST = [
  { weekday: "Пт", hi: 19, lo: 11, precip: 10, wind: 9, comfort: 74 },
  { weekday: "Сб", hi: 23, lo: 13, precip: 5, wind: 7, comfort: 88, weekend: true },
  { weekday: "Нд", hi: 21, lo: 12, precip: 35, wind: 14, comfort: 61, weekend: true },
  { weekday: "Пн", hi: 16, lo: 9, precip: 70, wind: 22, comfort: 33 },
] as const;

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const lead = FORECAST[1]; // Saturday — the weekend highlight

  return (
    <div className="flex flex-1 flex-col bg-bg text-text font-sans">
      <header className="flex items-center justify-between border-b border-border-subtle px-6 py-4">
        <Image
          src="/brand/logo-wordmark.svg"
          alt="Надворі — Weather Explorer"
          width={150}
          height={32}
          priority
        />
        <button
          type="button"
          onClick={() => setDark((v) => !v)}
          className="rounded-pill border border-border bg-surface px-4 py-2 text-sm text-text-secondary shadow-sm transition-colors hover:bg-surface-hover"
        >
          {dark ? "Світла тема" : "Темна тема"}
        </button>
      </header>

      <main className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col gap-8 px-6 py-10">
        {/* Weekend highlight — one number, then the detail */}
        <section className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-8 shadow-md sm:flex-row sm:items-center">
          <ComfortScore value={lead.comfort} />
          <div className="flex flex-col gap-2">
            <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-brand">
              Найкращий день · вихідні
            </span>
            <h1 className="text-2xl font-bold tracking-tight">
              Субота — гарний день для прогулянки
            </h1>
            <p className="max-w-md text-text-secondary">
              Тепло, майже без дощу, легкий вітер. Можна планувати поїздку за
              місто.
            </p>
          </div>
        </section>

        {/* Forecast grid */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FORECAST.map((d) => (
            <DayCard key={d.weekday} day={d} />
          ))}
        </section>
      </main>

      <footer className="border-t border-border-subtle px-6 py-5 text-center text-sm text-text-muted">
        Найточніший прогноз — визирнути у вікно.
      </footer>
    </div>
  );
}

function ComfortScore({ value }: { value: number }) {
  const tone = comfortTone(value);
  return (
    <div
      className="flex size-[92px] flex-none items-center justify-center rounded-full font-mono text-3xl font-bold text-white shadow-md tabular-nums"
      style={{ background: `var(--comfort-${tone}-solid)` }}
    >
      {Math.round(value)}
    </div>
  );
}

function DayCard({
  day,
}: {
  day: {
    weekday: string;
    hi: number;
    lo: number;
    precip: number;
    wind: number;
    comfort: number;
    weekend?: boolean;
  };
}) {
  const tone = comfortTone(day.comfort);
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{day.weekday}</span>
        {day.weekend && (
          <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-brand">
            Вихідні
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1.5 font-mono tabular-nums">
        <span className="text-xl font-bold">{day.hi}°</span>
        <span className="text-text-muted">{day.lo}°</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 font-mono text-xs text-text-secondary tabular-nums">
          <span>{day.precip}%</span>
          <span>{day.wind} км/год</span>
        </div>
        <div
          className="flex size-[34px] items-center justify-center rounded-full font-mono text-sm font-bold text-white tabular-nums"
          style={{ background: `var(--comfort-${tone}-solid)` }}
          aria-label={`Індекс комфорту ${day.comfort} — ${TONE_LABEL[tone]}`}
        >
          {day.comfort}
        </div>
      </div>
    </div>
  );
}
