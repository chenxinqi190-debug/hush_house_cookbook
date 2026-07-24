export type Skill = {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  principles: {
    id: string;
  }[];
  image: string;
};

export const skills: Skill[] = [
  {
    id: "herbs_n_infusions",
    name: {
      en: "Herbs & Infusions",
      zh: "",
    },
    principles: [
      { id: "principle.heart" },
      { id: "principle.nectar" },
    ],
    image: "/cards/skills/herbs_n_infusions.png",
  },
  {
    id: "maggephene_mysteries",
    name: {
      en: "Maggephene Mysteries",
      zh: "",
    },
    principles: [
      { id: "principle.moon" },
      { id: "principle.heart" },
    ],
    image: "/cards/skills/maggephene_mysteries.png",
  },
  {
    id: "sacra_limiae",
    name: {
      en: "Sacra Limiae",
      zh: "",
    },
    principles: [
      { id: "principle.moth" },
      { id: "principle.sky" },
    ],
    image: "/cards/skills/sacra_limiae.png",
  },
  {
    id: "sacra_solis_invicti",
    name: {
      en: "Sacra Solis Invicti",
      zh: "",
    },
    principles: [
      { id: "principle.lantern" },
      { id: "principle.sky" },
    ],
    image: "/cards/skills/sacra_solis_invicti.png",
  },
  {
    id: "sickle_n_eclipse",
    name: {
      en: "Sickle & Eclipse",
      zh: "",
    },
    principles: [
      { id: "principle.edge" },
      { id: "principle.moon" },
    ],
    image: "/cards/skills/sickle_n_eclipse.png",
  },
  {
    id: "tridesma_hiera",
    name: {
      en: "Tridesma Hiera",
      zh: "",
    },
    principles: [
      { id: "principle.moon" },
      { id: "principle.grail" },
    ],
    image: "/cards/skills/tridesma_hiera.png",
  },
];