import Link from "next/link";

export const metadata = {
  title: "Anniversaire Laurine",
  description: "Une page anniversaire avec girafes, voeux et un rappel du Oui.",
};

const surprises = [
  {
    title: "Souhait officiel",
    detail:
      "Un voeu en grand: profiter de cette journee avec toi, version girafe + confettis.",
  },
  {
    title: "Playlist douce",
    detail:
      "Une selection pour mettre l'ambiance romantique. Spoiler: beaucoup de refrains joyeux.",
  },
  {
    title: "Mini roadmap",
    detail:
      "Diner, photos, et un Oui deja enregistre sur la page principale. On boucle avec un toast.",
  },
];

const timeline = [
  { title: "Matin", text: "Message vocal avec girafe et cafe virtuel." },
  { title: "Aprem", text: "Balade ou chill, version toi + moi + confettis." },
  { title: "Soir", text: "Surprise finale et rappel du Oui en page d&apos;accueil." },
];

export default function AnniversairePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,142,199,0.2)_0,transparent_28%),radial-gradient(circle_at_78%_18%,rgba(107,129,255,0.18)_0,transparent_24%),radial-gradient(circle_at_25%_82%,rgba(155,231,255,0.2)_0,transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,79,160,0.2),transparent_24%),radial-gradient(circle_at_92%_22%,rgba(135,92,255,0.22),transparent_26%)] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-6 py-14 sm:py-18">
        <header className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-100">
              Anniversaire
              <span className="h-1 w-1 rounded-full bg-rose-100/80" />
              Girafes encore
            </span>
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

        <main className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-fuchsia-500/10 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-100/70">
              Pour ton jour
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-rose-50 sm:text-5xl">
              Joyeux anniversaire, Laurine
            </h1>
            <p className="mt-4 text-lg text-rose-100/85">
              Voici ton coin cadeau: une ambiance romantique, des girafes en arriere-plan, et la promesse
              que le Oui de la page d&apos;accueil reste la plus belle reponse.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {surprises.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-black/20"
                >
                  <p className="text-sm font-semibold text-rose-50">{item.title}</p>
                  <p className="mt-2 text-sm text-rose-100/80">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-100/70">
                Planning doux
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {timeline.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-rose-100/70">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm text-rose-50">{step.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-rose-100/80">
                On termine par un rappel: le bouton Non fuit toujours sur la page principale,
                donc le Oui reste la meilleure option.
              </p>
            </div>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-rose-100/80">
                Souhait rapide
              </p>
              <p className="mt-2 text-lg font-semibold text-rose-50">
                Que cette annee soit remplie de moments a la hauteur des confettis prepares pour toi.
              </p>
              <p className="mt-3 text-sm text-rose-100/75">
                Quand tu es prete, retourne sur la page d&apos;accueil: le Oui t&apos;attend, le Non s&apos;echappe,
                et les girafes approuvent.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6ee7ff] via-[#a855f7] to-[#ff8ec7] px-4 py-2 text-sm font-semibold text-[#0b0a1a] shadow-lg shadow-[#a855f7]/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#a855f7]/40"
              >
                Retourner au Oui
              </Link>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
