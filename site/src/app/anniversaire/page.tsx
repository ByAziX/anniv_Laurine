import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Anniversaire Laurine",
  description: "Une page anniversaire avec girafes, voeux et un rappel du Oui.",
};

const timelineMoments = [
  {
    date: "20 decembre 1848",
    title: "Libertes a La Reunion",
    text: "Souvenir fort: abolition sur l&apos;ile, symbole de demarrage et d&apos;espoir.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Premier message",
    title: "Tout commence",
    text: "Des mots simples qui changent tout. Girafes imaginaires deja en coulisses.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Coucher de soleil",
    title: "Promesse rose",
    text: "Soleil qui descend, coeurs qui montent. On garde la couleur coquelicot.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Question ici",
    title: "Ton Oui attendu",
    text: "La date ou tu cliques sur Oui. Girafes, confettis et souvenir ancre.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80&sat=-8",
  },
];

export default function AnniversairePage() {
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
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-fuchsia-500/10">
            <div className="pointer-events-none absolute inset-0 giraffe-spots opacity-30" />
            <div className="pointer-events-none absolute -right-14 -top-10 h-44 w-44 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
                Timeline
                <span className="h-1 w-1 rounded-full bg-rose-100/80" />
                Girafes & souvenirs
              </div>
              <h1 className="text-4xl font-semibold text-rose-50 sm:text-5xl">Joyeux anniversaire, Laurine</h1>
              <p className="text-lg text-rose-100/85">
                Les dates qui comptent, avec des photos pour chaque souvenir. Les girafes observent, les coeurs et coquelicots
                restent en fond.
              </p>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-rose-50 ring-1 ring-white/20 transition hover:scale-105 hover:bg-white/25"
              >
                Retour a la declaration
              </Link>
            </div>

            <div className="relative mt-6 grid gap-6 lg:grid-cols-2">
              {timelineMoments.map((moment) => (
                <div
                  key={moment.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30"
                >
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    width={720}
                    height={520}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-rose-50">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1">
                      {moment.date}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1">
                      Girafe love
                      <span className="h-1 w-1 rounded-full bg-amber-200/90" />
                    </span>
                  </div>
                  <div className="relative z-10 p-4">
                    <p className="text-sm font-semibold text-rose-50">{moment.title}</p>
                    <p className="mt-2 text-sm text-rose-100/80">{moment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
