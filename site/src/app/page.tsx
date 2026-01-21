"use client";

import confetti from "canvas-confetti";
import Link from "next/link";
import type { PointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type Position = { x: number; y: number };

const reassurances = [
  "Pas de stress, le Oui est plus doux qu'un calin de girafe.",
  "Le bouton Non n'est pas cooperatif, essaie plutot le Oui.",
  "Les girafes te regardent. Elles votent Oui.",
  "Oui = confettis, Non = mission impossible.",
  "Si tu cliques Oui, je prepare deja la vibration de joie.",
];

const NO_BUTTON_SIZE = { width: 132, height: 52 };
const PADDING = 14;

const pick = (list: string[]) => list[Math.floor(Math.random() * list.length)];

export default function Home() {
  const playgroundRef = useRef<HTMLDivElement>(null);
  const [noPos, setNoPos] = useState<Position>({ x: 24, y: 24 });
  const [yesClicks, setYesClicks] = useState(0);
  const [message, setMessage] = useState(
    "Si tu cliques sur Oui, promis, c'est confettis instantanes."
  );
  const [lockedLove, setLockedLove] = useState(false);

  const moveNoButton = useCallback(
    (override?: Position) => {
      const area = playgroundRef.current?.getBoundingClientRect();
      if (!area) return;

      const maxX = Math.max(PADDING, area.width - NO_BUTTON_SIZE.width - PADDING);
      const maxY = Math.max(PADDING, area.height - NO_BUTTON_SIZE.height - PADDING);

      if (override) {
        setNoPos({
          x: Math.min(Math.max(PADDING, override.x), maxX),
          y: Math.min(Math.max(PADDING, override.y), maxY),
        });
        return;
      }

      setNoPos({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      });

      navigator.vibrate?.(45);
    },
    []
  );

  useEffect(() => {
    const id = requestAnimationFrame(moveNoButton);
    return () => cancelAnimationFrame(id);
  }, [moveNoButton]);

  useEffect(() => {
    const handleResize = () => moveNoButton();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [moveNoButton]);

  const burstConfetti = () => {
    const shared = {
      colors: ["#ff8ec7", "#fff0f6", "#ffd166", "#9be7ff"],
      gravity: 1,
    };

    confetti({
      ...shared,
      particleCount: 120,
      spread: 70,
      startVelocity: 35,
      origin: { y: 0.6 },
    });
    confetti({
      ...shared,
      particleCount: 60,
      spread: 120,
      startVelocity: 45,
      ticks: 200,
      origin: { x: 0.2, y: 0.4 },
    });
    confetti({
      ...shared,
      particleCount: 60,
      spread: 120,
      startVelocity: 45,
      ticks: 200,
      origin: { x: 0.8, y: 0.4 },
    });
  };

  const handleNoHover = () => {
    setMessage(pick(reassurances));
    moveNoButton();
  };

  const handlePlaygroundPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const area = playgroundRef.current?.getBoundingClientRect();
    if (!area) return;

    const pointerX = event.clientX - area.left;
    const pointerY = event.clientY - area.top;
    const buttonCenterX = noPos.x + NO_BUTTON_SIZE.width / 2;
    const buttonCenterY = noPos.y + NO_BUTTON_SIZE.height / 2;
    const distance = Math.hypot(buttonCenterX - pointerX, buttonCenterY - pointerY);

    if (distance < 120) {
      handleNoHover();
    } else {
      moveNoButton({
        x: Math.min(Math.max(pointerX + 40, PADDING), area.width - NO_BUTTON_SIZE.width - PADDING),
        y: Math.min(Math.max(pointerY + 40, PADDING), area.height - NO_BUTTON_SIZE.height - PADDING),
      });
    }
  };

  const handleYes = () => {
    setLockedLove(true);
    setYesClicks((current) => current + 1);
    setMessage("Trop tard, contrat valide. Les confettis arrivent !");
    burstConfetti();
    navigator.vibrate?.([100, 40, 80]);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 icon-sprinkles" />
      <div className="pointer-events-none absolute inset-0 giraffe-spots" />
      <div className="pointer-events-none absolute inset-0 savanna-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,142,199,0.22)_0,transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,244,163,0.16)_0,transparent_24%),radial-gradient(circle_at_25%_82%,rgba(155,231,255,0.2)_0,transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,79,160,0.2),transparent_24%),radial-gradient(circle_at_90%_22%,rgba(135,92,255,0.22),transparent_26%)]" />
      <div className="pointer-events-none floating-spot absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[rgba(255,206,137,0.3)] via-[rgba(255,142,199,0.26)] to-[rgba(110,231,255,0.22)]" />
      <div className="pointer-events-none floating-spot absolute -right-28 bottom-6 h-80 w-80 rounded-full bg-gradient-to-br from-[rgba(110,231,255,0.22)] via-[rgba(168,85,247,0.18)] to-[rgba(255,142,199,0.28)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12 sm:py-16 lg:py-20">
        <header className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-semibold text-[#2a0a22]">Question pour Laurine</h1>
          <Link
            href="/anniversaire"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-[#2a0a22] ring-1 ring-white/20 transition hover:scale-105 hover:bg-white/25"
          >
            Page anniversaire
          </Link>
        </header>

        <main>
          <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white via-rose-50/80 to-rose-100/70 p-8 shadow-2xl shadow-fuchsia-500/10">
            <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-30" />
            <div className="pointer-events-none absolute -right-16 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-amber-200/10 via-transparent to-transparent" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                Question unique
                <span className="h-1 w-1 rounded-full bg-rose-200" />
                Girafes inside
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-[#2a0a22] sm:text-5xl">
                Laurine, tu veux te mettre en couple avec moi ?
              </h1>
              <p className="mt-3 text-lg text-rose-900/80">
                Juste la question, juste le Oui et le Non. Les girafes surveillent, les confettis attendent.
              </p>
            </div>

            <div className="mt-6">
              <div
                ref={playgroundRef}
                onPointerMove={handlePlaygroundPointerMove}
                className="relative mt-4 h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-inner shadow-black/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,142,199,0.2),transparent_25%),radial-gradient(circle_at_82%_72%,rgba(155,231,255,0.18),transparent_26%)]" />
                <div className="pointer-events-none absolute -inset-4 giraffe-spots opacity-35" />
                <div className="pointer-events-none absolute inset-0 heart-grid opacity-35" />

                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={handleYes}
                      onMouseEnter={() => navigator.vibrate?.(30)}
                      className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#ff4fa0] via-[#ff8ec7] to-[#ffb8d9] px-6 py-3 text-lg font-semibold text-[#2a0a22] shadow-lg shadow-[#ff4fa0]/30 transition hover:-translate-y-[2px] hover:shadow-xl hover:shadow-[#ff4fa0]/40 focus:outline-none focus:ring-2 focus:ring-[#ff8ec7]/60"
                    >
                      <span className="shine absolute inset-0 opacity-40" aria-hidden />
                      <span className="relative z-10">Oui (confettis)</span>
                      <span className="relative z-10 rounded-full bg-white/30 px-2 py-1 text-xs font-bold">
                        {yesClicks || 0}
                      </span>
                      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition duration-300 group-hover:opacity-100" />
                    </button>

                    <div className="relative h-[60px] flex-1">
                      <button
                        onMouseEnter={handleNoHover}
                        onFocus={handleNoHover}
                        onClick={handleNoHover}
                        onTouchStart={handleNoHover}
                        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-rose-500/50 bg-rose-200/80 px-5 py-3 text-base font-semibold text-[#2a0a22] shadow-lg shadow-black/30 transition active:scale-95"
                        style={{
                          left: noPos.x,
                          top: noPos.y,
                          width: NO_BUTTON_SIZE.width,
                          height: NO_BUTTON_SIZE.height,
                        }}
                      >
                        Non (attrape-moi)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-rose-900/80">{message}</p>
              {lockedLove ? (
                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  Contracte. Les girafes approuvent ce Oui. Confettis!
                </p>
              ) : null}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
