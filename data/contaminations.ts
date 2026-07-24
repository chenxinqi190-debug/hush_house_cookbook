export type Contamination = {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  type: "corruption" | "curse" | "infestation" | "theoplasmic";
  description: {
    en: string;
    zh: string;
  };
  requires: {
    id: string;
    amount: number;
  };
  recommendedSkills: string[];
  alternativeSkills: string[];
  image: string;
};

export const contaminations: Contamination[] = [
  {
    id: "fifth_eye_curse",
    name: {
      en: "Fifth Eye Curse",
      zh: "",
    },
    type: "curse",
    description: {
      en: "Someone has unhelpfully placed a curse which may tear open the unwilling eye of the soul.\n\n[This contamination can affect your Fet and Phost. You can remove it with a skill that's effective against Curses, and at least 7 Heart.]",
      zh: "",
    },
    requires: {
      id: "principle.heart",
      amount: 7,
    },
    recommendedSkills: [],
    alternativeSkills: [
      "sacra_limiae",
      "sacra_solis_invicti",
      "tridesma_hiera",
    ],
    image: "/icons/contaminations/fifth_eye_curse.png",
  },{
    id: "keeperskin",
    name: {
      en: "Keeperskin",
      zh: "",
    },
    type: "corruption",
    description: {
      en: "This book is blotched with keeperskin, a luminous fungus that grows in the Wood we see in sleep, and enters the world when a dreamer inhales its spores.\n\n[Keeperskin contamination can affect your Ereb and Chor, and spread to nearby objects. You can remove it with a skill that's effective against Corruptions, if you provide at least 7 Nectar.]",
      zh: "",
    },
    requires: {
      id: "principle.nectar",
      amount: 7,
    },
    recommendedSkills: ["herbs_n_infusions"],
    alternativeSkills: [
      "maggephene_mysteries",
      "sickle_n_eclipse",
      "purifications_n_exaltations",
    ],
    image: "/icons/contaminations/keeperskin.png",
  },
  {
    id: "winkwell",
    name: {
      en: "Winkwell",
      zh: "",
    },
    type: "corruption",
    description: {
      en: "Sometimes when I turn this book to the right angle, I see an eye peering at me from its pages or covers. They close and fade when I leave them in the dark... but light will always bring them out eventually.\n\n [This can affect your Fet and Wist, and spread to nearby objects. You can remove it with a skill that's effective against Corruption, and at least 7 Moon.]",
      zh: "",
    },
    requires: {
      id: "principle.moon",
      amount: 7,
    },
    recommendedSkills: ["maggephene_mysteries","sickle_n_eclipse"],
    alternativeSkills: [
      "herbs_n_infusions",
      "purifications_n_exaltations",
    ],
    image: "/icons/contaminations/winkwell.png",
  },
];