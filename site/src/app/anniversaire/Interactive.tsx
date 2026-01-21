"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type TimelineMoment = {
  date: string;
  title: string;
  text: string;
  images: string[];
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
  const [activeImages, setActiveImages] = useState<number[]>(() => timelineMoments.map(() => 0));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages((current) =>
        current.map((val, idx) => {
          const len = timelineMoments[idx].images.length;
          if (len <= 1) return 0;
          return (val + 1) % len;
        })
      );
    }, 3200);

    return () => clearInterval(interval);
  }, [timelineMoments]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (event.key === "Escape") {
        setLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          lightboxImages.length ? (current - 1 + lightboxImages.length) % lightboxImages.length : 0
        );
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          lightboxImages.length ? (current + 1) % lightboxImages.length : 0
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, lightboxImages.length]);

  const openLightbox = (images: string[], startIndex: number, title: string) => {
    if (!images.length) return;
    setLightboxImages(images);
    setLightboxIndex(startIndex);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const handleDateChoice = (accepted: boolean) => {
    const next = (dateIndex + 1) % dateIdeas.length;
    setDateIndex(next);
    if (accepted) {
      setDateMessage("Parfait, on garde celle-ci... et on enchaine sur la suivante !");
    } else {
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
        <header className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2a0a22] ring-1 ring-rose-200/70">
                Anniversaire
                <span className="h-1 w-1 rounded-full bg-rose-300" />
                Girafes encore
              </span>
            </div>
            <p className="text-sm text-rose-900/80">
              Une page pour celebrer ton jour, et rappeler que tu es une personne merveilleuse.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2a0a22] ring-1 ring-rose-200/70 transition hover:scale-105 hover:bg-rose-50"
          >
            Retour a la declaration
          </Link>
        </header>

        <main className="grid gap-8">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white via-rose-50/80 to-rose-100/60 p-8 shadow-2xl shadow-fuchsia-500/10">
            <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-30" />
            <div className="pointer-events-none absolute -right-14 -top-10 h-44 w-44 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1b56]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b1b56] ring-1 ring-[#9b1b56]/30">
                Timeline
                <span className="h-1 w-1 rounded-full bg-[#9b1b56]" />
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

            <div className="relative mt-10">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-rose-200/70" aria-hidden="true" />
              <div className="flex flex-col gap-8">
                {timelineMoments.map((moment, idx) => {
                  const isLeft = idx % 2 === 0;
                  const hasMultiple = moment.images.length > 1;
                  const currentIdx =
                    moment.images.length === 0 ? 0 : activeImages[idx] % moment.images.length;
                  const currentImage = moment.images[currentIdx] ?? "";
                  return (
                    <div
                      key={moment.title}
                      ref={(el) => {
                        timelineRefs.current[idx] = el;
                      }}
                      data-idx={idx}
                      className={`relative flex ${isLeft ? "lg:justify-start" : "lg:justify-end"} transition duration-700 ease-out ${
                        visibleTimeline[idx] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
                    >
                      <div className="absolute left-1/2 top-6 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-rose-300 bg-white text-sm font-semibold text-rose-500">
                        {idx + 1}
                      </div>
                      <div
                        className={`w-full lg:w-[48%] ${isLeft ? "lg:mr-10" : "lg:ml-10"}`}
                      >
                        <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white via-rose-50/80 to-rose-100/60 p-4 shadow-lg shadow-black/20">
                          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <div className="sm:w-1/3">
                              <div
                                className="relative h-32 w-full cursor-pointer overflow-hidden rounded-xl"
                                role="button"
                                tabIndex={0}
                                onClick={() => openLightbox(moment.images, currentIdx, moment.title)}
                                onKeyDown={(event) => {
                                  if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    openLightbox(moment.images, currentIdx, moment.title);
                                  }
                                }}
                              >
                                <Image
                                  key={currentImage}
                                  src={currentImage}
                                  alt={moment.title}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 33vw"
                                  className="object-cover transition duration-700"
                                />
                                {hasMultiple && (
                                  <>
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-between px-2">
                                      <button
                                        onClick={() =>
                                          setActiveImages((current) => {
                                            const next = [...current];
                                            const len = moment.images.length;
                                            next[idx] = (next[idx] - 1 + len) % len;
                                            return next;
                                          })
                                        }
                                        className="rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-[#2a0a22] shadow-sm shadow-black/10 transition hover:scale-105"
                                        aria-label="Photo precedente"
                                        type="button"
                                      >
                                        {"<"}
                                      </button>
                                      <button
                                        onClick={() =>
                                          setActiveImages((current) => {
                                            const next = [...current];
                                            const len = moment.images.length;
                                            next[idx] = (next[idx] + 1) % len;
                                            return next;
                                          })
                                        }
                                        className="rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-[#2a0a22] shadow-sm shadow-black/10 transition hover:scale-105"
                                        aria-label="Photo suivante"
                                        type="button"
                                      >
                                        {">"}
                                      </button>
                                    </div>
                                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2a0a22] shadow-sm shadow-black/10">
                                      <span>
                                        {currentIdx + 1}/{moment.images.length}
                                      </span>
                                      <div className="flex items-center gap-1">
                                        {moment.images.map((_, imageIdx) => (
                                          <span
                                            key={`${moment.title}-dot-${imageIdx}`}
                                            className={`h-1.5 w-1.5 rounded-full ${
                                              imageIdx === currentIdx ? "bg-[#ff4fa0]" : "bg-rose-200"
                                            }`}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a0a22] ring-1 ring-rose-200/70">
                                {moment.date}
                              </div>
                              <p className="text-lg font-semibold text-[#2a0a22]">{moment.title}</p>
                              <p className="text-sm text-rose-900/80">{moment.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1b56]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b1b56] ring-1 ring-[#9b1b56]/30">
                  Droit a des dates
                  <span className="h-1 w-1 rounded-full bg-[#9b1b56]" />
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
                    A suivre
                  </p>
                  <p className="text-lg font-semibold text-[#2a0a22]">
                    On ajoutera les prochaines dates ici.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {lightboxOpen && lightboxImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-lg font-semibold text-[#2a0a22] shadow-lg shadow-black/30 transition hover:scale-105"
              aria-label="Fermer"
              type="button"
            >
              ×
            </button>
            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setLightboxIndex((current) =>
                      (current - 1 + lightboxImages.length) % lightboxImages.length
                    )
                  }
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-sm font-semibold text-[#2a0a22] shadow-lg shadow-black/30 transition hover:-translate-y-1/2 hover:scale-105"
                  aria-label="Photo precedente"
                  type="button"
                >
                  {"<"}
                </button>
                <button
                  onClick={() =>
                    setLightboxIndex((current) =>
                      (current + 1) % lightboxImages.length
                    )
                  }
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-sm font-semibold text-[#2a0a22] shadow-lg shadow-black/30 transition hover:-translate-y-1/2 hover:scale-105"
                  aria-label="Photo suivante"
                  type="button"
                >
                  {">"}
                </button>
              </>
            )}

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/50">
              <Image
                src={lightboxImages[lightboxIndex]}
                alt={lightboxTitle || "Photo timeline"}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                {lightboxTitle}
              </div>
              <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                {lightboxIndex + 1}/{lightboxImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
