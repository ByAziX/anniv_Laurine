"use client";

import confetti from "canvas-confetti";
import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type Position = { x: number; y: number };

const giraffeUrl =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80&sat=-10";

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

  const moveNoButton = useCallback(() => {
    const area = playgroundRef.current?.getBoundingClientRect();
    if (!area) return;

    const maxX = Math.max(
      PADDING,
      area.width - NO_BUTTON_SIZE.width - PADDING
    );
    const maxY = Math.max(
      PADDING,
      area.height - NO_BUTTON_SIZE.height - PADDING
    );

    setNoPos({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });

    navigator.vibrate?.(45);
  }, []);

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
    }
  };

  const handleYes = () => {
    setLockedLove(true);
    setYesClicks((current) => current + 1);
    setMessage("Trop tard, contrat valide. Les confettis arrivent !");
    burstConfetti();
    navigator.vibrate?.([100, 40, 80]);
  };

  const enthusiasm = Math.min(yesClicks * 12 + 24, 100);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 giraffe-spots" />
      <div className="pointer-events-none absolute inset-0 savanna-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,142,199,0.22)_0,transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,244,163,0.16)_0,transparent_24%),radial-gradient(circle_at_25%_82%,rgba(155,231,255,0.2)_0,transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,79,160,0.2),transparent_24%),radial-gradient(circle_at_90%_22%,rgba(135,92,255,0.22),transparent_26%)] blur-3xl" />
      <div className="pointer-events-none floating-spot absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[rgba(255,206,137,0.3)] via-[rgba(255,142,199,0.26)] to-[rgba(110,231,255,0.22)] blur-3xl" />
      <div className="pointer-events-none floating-spot absolute -right-28 bottom-6 h-80 w-80 rounded-full bg-gradient-to-br from-[rgba(110,231,255,0.22)] via-[rgba(168,85,247,0.18)] to-[rgba(255,142,199,0.28)] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute right-0 top-2 hidden rotate-2 lg:block">
          <div className="floating-spot rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-rose-50 shadow-lg shadow-[#ff8ec7]/30 backdrop-blur">
            Girafe watch : elles surveillent ce Oui.
          </div>
        </div>
        <header className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-rose-100">
                Edition savane
                <span className="h-1 w-1 rounded-full bg-rose-100/80" />
                Girafes incluses
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-[6px] text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                Safari du coeur
                <span className="shine block h-[2px] w-8 rounded-full bg-white/60" />
              </span>
            </div>
            <span className="text-sm text-rose-100/80">
              Un bouton Non en cavale, des confettis impatients et des girafes en temoins.
            </span>
          </div>
          <Link
            href="/anniversaire"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-rose-50 ring-1 ring-white/20 transition hover:scale-105 hover:bg-white/25"
          >
            Page anniversaire
          </Link>
        </header>

        <main className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-fuchsia-500/10 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-30" />
            <div className="pointer-events-none absolute -right-16 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-amber-200/10 via-transparent to-transparent blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                  <span>Plan coeur</span>
                  <span className="h-1 w-1 rounded-full bg-rose-200" />
                  <span>Girafes inside</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                  <span>Edition safari</span>
                  <span className="h-1 w-1 rounded-full bg-amber-200/80" />
                  <span>Confettis assures</span>
                </div>
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-rose-50 sm:text-5xl">
                Laurine, tu veux te mettre en couple avec moi ?
              </h1>
              <p className="mt-4 text-lg text-rose-100/85">
                J&apos;ai prepare des confettis, des vibrations de joie et un bouton Non qui panique des que tu l&apos;approches.
                Le Oui t&apos;attend juste la. Les girafes prennent des notes et votent deja.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose-100">
                  Mode Oui magnetise
                </span>
                <span className="rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-50">
                  Girafe seal
                </span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-100/70">
                Boutons de destin
              </p>
              <div
                ref={playgroundRef}
                onPointerMove={handlePlaygroundPointerMove}
                className="relative mt-4 h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-inner shadow-black/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,142,199,0.2),transparent_25%),radial-gradient(circle_at_82%_72%,rgba(155,231,255,0.18),transparent_26%)]" />
                <div className="pointer-events-none absolute -inset-4 giraffe-spots opacity-35" />
                <div className="pointer-events-none absolute inset-0 savanna-grid opacity-45" />
                <div className="pointer-events-none absolute right-4 top-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-rose-100">
                  Zone confettis
                </div>

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
                        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-rose-100/30 bg-white/15 px-5 py-3 text-base font-semibold text-rose-50 shadow-lg shadow-black/30 transition active:scale-95"
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
              <p className="mt-3 text-sm text-rose-100/80">{message}</p>
              {lockedLove ? (
                <p className="mt-1 text-sm font-semibold text-emerald-200">
                  Contracte. Les girafes approuvent ce Oui. Confettis!
                </p>
              ) : null}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.24em] text-rose-100/70">
                  <span>Taux de Oui</span>
                  <span>{enthusiasm}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff4fa0] via-[#ff8ec7] to-[#ffce89]"
                    style={{ width: `${enthusiasm}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.25em] text-rose-100/70">
                  Girafes
                </p>
                <p className="mt-2 text-2xl font-semibold text-rose-50">2</p>
                <p className="text-sm text-rose-100/80">Observatrices officielles</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.25em] text-rose-100/70">
                  Confettis prets
                </p>
                <p className="mt-2 text-2xl font-semibold text-rose-50">infini</p>
                <p className="text-sm text-rose-100/80">Disponible a chaque Oui</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.25em] text-rose-100/70">
                  Reponses Oui
                </p>
                <p className="mt-2 text-2xl font-semibold text-rose-50">
                  {yesClicks}
                </p>
                <p className="text-sm text-rose-100/80">On peut en ajouter autant que tu veux</p>
              </div>
            </div>
          </section>

          <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur">
            <div className="absolute inset-0 giraffe-spots opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/45" />
            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-rose-50 backdrop-blur">
              Girafe club
              <span className="h-1 w-1 rounded-full bg-amber-200/90" />
            </div>
            <div className="absolute right-4 top-16 z-10 rounded-2xl border border-white/15 bg-black/35 px-3 py-2 text-sm text-rose-50 shadow-lg shadow-black/40 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-100">
                Note photo
              </p>
              <p className="text-xs text-rose-100/80">Duo girafe qui valide chaque Oui.</p>
            </div>
            <Image
              src={giraffeUrl}
              alt="Deux girafes qui se calinent"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="rounded-2xl border border-white/15 bg-black/35 p-4 text-rose-50 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.3em] text-rose-100/80">
                  Ambiance
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Giraffe love + confettis + nous deux.
                </p>
                <p className="text-sm text-rose-100/75">
                  Le bouton Non ne sait plus ou aller. Le Oui est juste la.
                </p>
              </div>
            </div>
          </aside>
        </main>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(255,142,199,0.16),transparent_30%),radial-gradient(circle_at_80%_68%,rgba(155,231,255,0.12),transparent_26%)]" />
          <div className="absolute inset-0 giraffe-spots opacity-30" />
          <div className="absolute inset-0 savanna-grid opacity-35" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-rose-50">Plan de jeu</h2>
              <p className="mt-2 text-rose-100/85">
                On valide le Oui ici, avec fond tachete version girafe, puis on file sur la page anniversaire pour le grand jour.
                Tu peux re-cliquer sur Oui juste pour declencher des confettis supplementaires.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-rose-50">
                  Confettis instantanes
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-rose-50">
                  Bouton Non qui fuit
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-rose-50">
                  Girafes approuvees
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-rose-50">
                  Spots de savane
                </span>
              </div>
            </div>
            <div className="flex items-end justify-start lg:justify-end">
              <Link
                href="/anniversaire"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6ee7ff] via-[#a855f7] to-[#ff8ec7] px-5 py-3 text-sm font-semibold text-[#0b0a1a] shadow-lg shadow-[#a855f7]/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#a855f7]/40"
              >
                Voir la surprise anniversaire
                <span aria-hidden>-&gt;</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
