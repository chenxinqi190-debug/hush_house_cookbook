export interface Item {
  id: string;
  displayName: {
    en: string;
    zh: string;
  };
  icon: string;
}

export const items: Record<string, Item> = {
  blue_crown: {
    id: "blue_crown",
    displayName: {
      en: "Blue Crown",
      zh: "蓝冠花",
    },
    icon: "blue_crown.png",
  },
  boiled_egg: {
    id: "boiled_egg",
    displayName: {
      en: "Boiled Egg",
      zh: "煮鸡蛋",
    },
    icon: "boiled_egg.png",
  },
    bronze_knife:{
    id: "bronze_knife",
    displayName: {
      en: "Bronze Knife",
      zh: "青铜刀",
    },
    icon: "bronze_knife.png",
  },
  crusty_bread: {
    id: "crusty_bread",
    displayName: {
      en: "Crusty Bread",
      zh: "烤面包",
    },
    icon: "bread.png",
  },
  hens_egg: {
    id: "hens_egg",
    displayName: {
      en: "Hen's Egg",
      zh: "母鸡蛋",
    },
    icon: "hens_egg.png",
  },
  intoxicating: {
    id: "intoxicating",
    displayName: {
      en: "Intoxicating",
      zh: "含酒精饮料",
    },
    icon: "intoxicating.png",
  },
  mackerel: {
    id: "mackerel",
    displayName: {
      en: "Mackerel",
      zh: "鲭鱼",
    },
    icon: "mackerel.png",
  },
  mushrooms: {
    id: "mushrooms",
    displayName: {
      en: "Mushrooms",
      zh: "蘑菇",
    },
    icon: "mushrooms.png",
  },
  pickled_mushrooms: {
    id: "pickled_mushrooms",
    displayName: {
      en: "Pickled Mushrooms",
      zh: "腌蘑菇",
    },
    icon: "pickled_mushrooms.png",
  },
pillas_oat_bread: {
    id: "pillas_oat_bread",
    displayName: {
      en: "Pillas Oat Bread",
      zh: "皮拉斯燕麦面包",
    },
    icon: "pillas_oat_bread.png",
  },}