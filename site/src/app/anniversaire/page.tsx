import AnniversaireInteractive from "./Interactive";

export const metadata = {
  title: "Anniversaire Laurine",
  description: "Une page anniversaire avec girafes, voeux et un rappel du Oui.",
};

const timelineMoments = [
  {
    date: "Premier message",
    title: "Premier messages",
    text: "Les premiers mots qui lancent tout. Girafes imaginaires deja en coulisses.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Premiere sortie",
    title: "Premiere date",
    text: "Premier rendez-vous, premiers regards, coeurs en mode confettis.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Zoo Barben",
    title: "Sortie au Zoo Barben",
    text: "Girafes en vrai, coquelicots en esprit, fou rire garanti.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Mont Faron",
    title: "Mont Faron",
    text: "Vue d&apos;en haut, vent doux, et promesse de prochaines aventures.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Zoo Faron",
    title: "Zoo du mont Faron",
    text: "Encore des animaux, encore des girafes, encore des souvenirs.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80&sat=-8",
  },
  {
    date: "Aix",
    title: "Le meilleur restaurant d&apos;Aix",
    text: "Un diner a Aix, gout delicat, et nos coeurs bien remplis.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Bientot",
    title: "A suivre...",
    text: "Encore plein de dates a ajouter. Les girafes attendent la suite.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&sat=-8",
  },
];

const dateIdeas = [
  {
    title: "Coucher de soleil + pique-nique / apéro",
    detail: "Serviette, fruits, et un toast avec le soleil qui descend.",
  },
  {
    title: "Pates Carbonarra par Hugo",
    detail: "Il sait pas cuisiner mais c&apos;est pas grave: on rit et on goute quand meme.",
  },
  {
    title: "Petit week-end tous les deux",
    detail: "Sac leger, virée a deux, et souvenirs ajoutés a la timeline.",
  },
  {
    title: "UN VOYAGGGGEEEEE",
    detail: "On bloque une destination, on prend des photos de girafes imaginaires.",
  },
];

export default function AnniversairePage() {
  return (
    <AnniversaireInteractive timelineMoments={timelineMoments} dateIdeas={dateIdeas} />
  );
}
