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
    images: [
      "/Premier messages/1000023131.jpg",
      "/Premier messages/1000023211.jpg",
    ],
  },
  {
    date: "Premiere photo",
    title: "Photo avec sa soeur",
    text: "Laurine m&apos;envoie une photo d&apos;elle et sa soeur pour la premiere fois, sous le regard juge des hommes.",
    images: ["/Photo avec sa soeur/1000023222.jpg"],
  },
  {
    date: "Premiere sortie",
    title: "Premiere date",
    text: "Premier rendez-vous, premiers regards, coeurs en mode confettis.",
    images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"],
  },
  {
    date: "Zoo Barben",
    title: "Sortie au Zoo Barben",
    text: "Girafes en vrai, coquelicots en esprit, fou rire garanti.",
    images: [
      "/Zoo barben/1000024071.jpg",
      "/Zoo barben/1000024073.jpg",
      "/Zoo barben/1000024074.jpg",
    ],
  },
  {
    date: "Mont Faron",
    title: "Mont Faron",
    text: "Vue d&apos;en haut, vent doux, et promesse de prochaines aventures.",
    images: [
      "/Faron/1000024275.jpg",
      "/Faron/1000024310.jpg",
    ],
  },
  {
    date: "Zoo Faron",
    title: "Zoo du mont Faron",
    text: "Encore des animaux, encore des girafes, encore des souvenirs.",
    images: ["/Faron Zoo/1000024280.jpg"],
  },
  {
    date: "Restaurant La Ciotat",
    title: "Diner a La Ciotat",
    text: "Un resto a La Ciotat, plats qui sentent bon la mer et nous qui partageons tout.",
    images: ["/La Ciotat diner/1000024987.jpg"],
  },
  {
    date: "Mugel - La Ciotat",
    title: "Date au Mugel",
    text: "Calanque du Mugel, eau turquoise, coquelicots imaginaires et nous deux.",
    images: ["/Date au Mugel/1000024985.jpg"],
  },
  {
    date: "Aix",
    title: "Le meilleur restaurant d&apos;Aix",
    text: "Un diner a Aix, gout delicat, et nos coeurs bien remplis.",
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
    detail: "Il sait pas cuisiner mais c&apos;est pas grave: on rit et on goute quand meme.",
  },
  {
    title: "Petit week-end tous les deux",
    detail: "Sac leger, virée a deux, et souvenirs ajoutés a la timeline.",
  },
  {
    title: "Randonnee au Mugel (La Ciotat)",
    detail: "Sentier, criques et sandwichs. On se pose face a l&apos;eau et on ajoute une photo girafe.",
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
