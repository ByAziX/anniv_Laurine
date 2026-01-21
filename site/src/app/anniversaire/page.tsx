import AnniversaireInteractive from "./Interactive";

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

const dateIdeas = [
  {
    title: "Coucher de soleil + pique-nique",
    detail: "Serviette, fruits, coquelicots symboliques, et une photo girafe en fond d&apos;cran.",
  },
  {
    title: "Balade volcan doux",
    detail: "Sentier facile, thermos chocolat, et drapeau de La Reunion dans le sac.",
  },
  {
    title: "Cinema maison",
    detail: "Playlist romance, couverture rose, pluie de coeurs et popcorn caramel.",
  },
  {
    title: "Brunch coquelicots",
    detail: "Tartines confiture goyave, jus exotique, et mini girafe en deco.",
  },
  {
    title: "Nuit etoiles",
    detail: "Couverture, musique douce, on pointe une constellation girafe imaginaire.",
  },
];

export default function AnniversairePage() {
  return (
    <AnniversaireInteractive timelineMoments={timelineMoments} dateIdeas={dateIdeas} />
  );
}
