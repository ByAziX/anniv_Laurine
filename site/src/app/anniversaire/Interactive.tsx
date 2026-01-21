"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type TimelineMoment = {
  date: string;
  title: string;
  text: string;
  image: string;
};

type DateIdea = {
  title: string;
  detail: string;
};

type Props = {
  timelineMoments: TimelineMoment[];
  dateIdeas: DateIdea[];
};

export default function AnniversaireInteractive({ timelineMoments, dateIdeas }: Props) {
  const [visibleTimeline, setVisibleTimeline] = useState<boolean[]>(() =>
    Array(timelineMoments.length).fill(false)
  );
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [dateIndex, setDateIndex] = useState(0);
  const [dateMessage, setDateMessage] = useState(
    "Choisis une idee de date. Si tu refuses, je propose la suivante."
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisibleTimeline((current) => {
              const next = [...current];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    timelineRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleDateChoice = (accepted: boolean) => {
    if (accepted) {
      setDateMessage("Parfait, on garde celle-ci. Girafes et coeurs valident.");
    } else {
      const next = (dateIndex + 1) % dateIdeas.length;
      setDateIndex(next);
      setDateMessage("Nouvelle idee juste en dessous. Dis-moi Oui ou Non.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 icon-sprinkles" />
      <div className="pointer-events-none absolute inset-0 giraffe-spots" />
      <div className="pointer-events-none absolute inset-0 savanna-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,142,199,0.22)_0,transparent_28%),radial-gradient(circle_at_78%_18%,rgba(107,129,255,0.18)_0,transparent_24%),radial-gradient(circle_at_25%_82%,rgba(155,231,255,0.2)_0,transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,79,160,0.2),transparent_24%),radial-gradient(circle_at_92%_22%,rgba(135,92,255,0.22),transparent_26%)]" />
      <div className="pointer-events-none floating-spot absolute -left-24 top-6 h-72 w-72 rounded-full bg-gradient-to-br from-[rgba(255,206,137,0.28)] via-[rgba(255,142,199,0.24)] to-[rgba(110,231,255,0.2)]" />
      <div className="pointer-events-none floating-spot absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-[rgba(110,231,255,0.22)] via-[rgba(168,85,247,0.18)] to-[rgba(255,142,199,0.28)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-6 py-14 sm:py-18">
        <header className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                Anniversaire
                <span className="h-1 w-1 rounded-full bg-rose-100/80" />
                Girafes encore
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-[6px] text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                Edition tachetee
                <span className="shine block h-[2px] w-8 rounded-full bg-white/60" />
              </span>
            </div>
            <p className="text-sm text-rose-100/80">
              Une page pour celebrer ton jour, et rappeler que le Oui est deja signe.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-rose-50 ring-1 ring-white/20 transition hover:scale-105 hover:bg-white/25"
          >
            Retour a la declaration
          </Link>
        </header>

        <main className="grid gap-8">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white via-rose-50/80 to-rose-100/60 p-8 shadow-2xl shadow-fuchsia-500/10">
            <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-30" />
            <div className="pointer-events-none absolute -right-14 -top-10 h-44 w-44 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                Timeline
                <span className="h-1 w-1 rounded-full bg-rose-100/80" />
                Girafes & souvenirs
              </div>
              <h1 className="text-4xl font-semibold text-[#2a0a22] sm:text-5xl">Joyeux anniversaire, Laurine</h1>
              <p className="text-lg text-rose-900/80">
                Les dates qui comptent, avec des photos pour chaque souvenir. Les girafes observent, les coeurs et coquelicots
                restent en fond.
              </p>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#2a0a22] ring-1 ring-white/40 transition hover:scale-105 hover:bg-white/90"
              >
                Retour a la declaration
              </Link>
            </div>

            <div className="relative mt-6 grid gap-6 lg:grid-cols-2">
              {timelineMoments.map((moment, idx) => (
                <div
                  key={moment.title}
                  ref={(el) => {
                    timelineRefs.current[idx] = el;
                  }}
                  data-idx={idx}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 transition duration-700 ease-out ${
                    visibleTimeline[idx] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    width={720}
                    height={520}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2a0a22]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1">
                      {moment.date}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[#2a0a22]">
                      Girafe love
                      <span className="h-1 w-1 rounded-full bg-amber-200/90" />
                    </span>
                  </div>
                  <div className="relative z-10 p-4">
                    <p className="text-sm font-semibold text-[#2a0a22]">{moment.title}</p>
                    <p className="mt-2 text-sm text-rose-900/80">{moment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white via-rose-50/80 to-rose-100/60 p-8 shadow-2xl shadow-fuchsia-500/10">
            <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-25" />
            <div className="pointer-events-none absolute inset-0 heart-grid opacity-25" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(255,142,199,0.14),transparent_30%),radial-gradient(circle_at_80%_68%,rgba(155,231,255,0.12),transparent_26%)]" />
            <div className="pointer-events-none absolute -left-14 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-amber-200/20 via-transparent to-transparent" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                  Droit a des dates
                  <span className="h-1 w-1 rounded-full bg-rose-100/80" />
                  Choisis Oui / Non
                </div>
                <h2 className="text-3xl font-semibold text-[#2a0a22]">Propositions en serie</h2>
                <p className="text-rose-900/80">
                  Je propose une date. Tu dis Oui ou Non. Si Non, on passe a la suivante jusqu&apos;a trouver celle qui te fait sourire.
                </p>
                <div className="mt-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white via-rose-50/70 to-rose-100/50 p-5 shadow-lg shadow-black/30">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-900/70">
                    Proposition
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2a0a22]">{dateIdeas[dateIndex].title}</p>
                  <p className="mt-2 text-sm text-rose-900/80">{dateIdeas[dateIndex].detail}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => handleDateChoice(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4fa0] via-[#ff8ec7] to-[#ffb8d9] px-4 py-2 text-sm font-semibold text-[#2a0a22] shadow-lg shadow-[#ff4fa0]/30 transition hover:-translate-y-[1px] hover:shadow-xl hover:shadow-[#ff4fa0]/40 focus:outline-none focus:ring-2 focus:ring-[#ff8ec7]/60"
                    >
                      Oui, on bloque
                    </button>
                    <button
                      onClick={() => handleDateChoice(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-semibold text-[#2a0a22] shadow-lg shadow-black/20 transition hover:-translate-y-[1px] hover:shadow-xl hover:shadow-black/30 focus:outline-none focus:ring-2 focus:ring-rose-200/80"
                    >
                      Non, une autre
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-rose-900/80">{dateMessage}</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white via-rose-50/70 to-rose-100/50 p-6 shadow-lg shadow-black/30">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,142,199,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(110,231,255,0.14),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-25" />
                <div className="pointer-events-none absolute inset-0 heart-grid opacity-25" />
                <div className="relative flex flex-col gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-900/80">
                    Couchees sur papier
                  </p>
                  <p className="text-lg font-semibold text-[#2a0a22]">
                    Chaque Oui sera note dans notre timeline. Les girafes prennent des notes.
                  </p>
                  <p className="text-sm text-rose-900/80">
                    Si tu refuses une idee, une autre arrive. Si tu acceptes, on la celebre avec coeurs, coquelicots et drapeau de La Reunion en fond.
                  </p>
                  <div className="mt-2 grid gap-2 text-sm text-[#2a0a22] sm:grid-cols-2">
                    <span className="rounded-xl border border-white/20 bg-white/70 px-3 py-2">
                      Girafe emoji: present
                    </span>
                    <span className="rounded-xl border border-white/20 bg-white/70 px-3 py-2">
                      Coeurs et coquelicots inclus
                    </span>
                    <span className="rounded-xl border border-white/20 bg-white/70 px-3 py-2">
                      Drapeau Reunion en option
                    </span>
                    <span className="rounded-xl border border-white/20 bg-white/70 px-3 py-2">
                      Confettis si Oui
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
