import AnniversaireInteractive from "./Interactive";

export const metadata = {
  title: "Anniversaire Laurine",
  description: "Une page anniversaire avec girafes, voeux et un rappel du Oui.",
};

const timelineMoments = [
  {
    date: "Premier message",
    title: "Premier messages",
    text: "Les premiers mots qui lancent tout.",
    images: [
      "/Premier messages/1000023131.jpg",
      "/Premier messages/1000023211.jpg",
    ],
  },
  {
    date: "Premiere photo",
    title: "Photo avec sa soeur",
    text: "Laurine m'envoie une photo delle et sa soeur pour la premiere fois, Elles jugent fort. :) ",
    images: ["/Photo avec sa soeur/1000023222.jpg"],
  },
  {
    date: "Premiere sortie",
    title: "Premiere date au BARRRRR",
    text: "Premier rendez-vous, premiers regards : tu étais vraiment trop belle.",
    images: ["/Premiere date/Aix-Presso-Cafe-menu-hbr.webp"],
  },
  {
    date: "Zoo Barben",
    title: "Sortie au Zoo Barben",
    text: "Girafes en vrai, souvenirs gravés.",
    images: [
      "/Zoo barben/1000024071.jpg",
      "/Zoo barben/1000024073.jpg",
      "/Zoo barben/1000024074.jpg",
    ],
  },
  {
    date: "Mont Faron",
    title: "Mont Faron",
    text: "Meilleure vue de Toulon, mais bon, pas oufff non plus ;).",
    images: [
      "/Faron/1000024275.jpg",
      "/Faron/1000024310.jpg",
    ],
  },
  {
    date: "Zoo Faron",
    title: "Zoo du mont Faron",
    text: "Encore des animaux, encore des souvenirs, il est beau gosse NONNNNN ???",
    images: ["/Faron Zoo/1000024280.jpg"],
  },
  {
    date: "Restaurant La Ciotat",
    title: "Diner a La Ciotat",
    text: "Un resto a La Ciotat, plats qui sentent bon la mer hein Laurine avec ton poisson hahaha et les vieux derriere qui nous regardent bizarrement.",
    images: ["/La Ciotat diner/1000024987.jpg"],
  },
  {
    date: "Mugel - La Ciotat",
    title: "Le Mugel",
    text: "Calanque du Mugel, trop beau, même en savate deux doigt.",
    images: ["/Date au Mugel/1000024985.jpg"],
  },
  {
    date: "Aix",
    title: "Le meilleur restaurant d'Aix",
    text: "Un diner a Aix, meilleur resto d'aix askip. En tout cas, on a bien mangé",
    images: ["/Meilleur resto daix askip/1000024488.jpg"],
  },
  {
    date: "Bientot",
    title: "A suivre...",
    text: "Encore plein de dates a ajouter. Les girafes attendent la suite.",
    images: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&sat=-8"],
  },
];

const dateIdeas = [
  {
    title: "Coucher de soleil + pique-nique / apéro",
    detail: "Serviette, fruits, et un toast avec le soleil qui descend.",
  },
  {
    title: "Pates Carbonarra par Hugo",
    detail: "Il sait pas cuisiner mais c'est pas grave: on rit et on goute quand meme.",
  },
  {
    title: "Petit week-end tous les deux",
    detail: "Sac leger, virée a deux, et souvenirs ajoutés a la timeline.",
  },
  {
    title: "Randonnee au Mugel (La Ciotat)",
    detail: "Sentier, criques et sandwichs. On se pose face a l'eau et on ajoute une photo girafe.",
  },
  {
    title: "UN VOYAGGGGEEEEE",
    detail: "On bloque une destination, on prend des photos.",
  },
];

export default function AnniversairePage() {
  return (
    <AnniversaireInteractive timelineMoments={timelineMoments} dateIdeas={dateIdeas} />
  );
}
