import { Recipe } from "@/types/recipe";

// Mock dataset for structural development only.
// Replace this with a real data source (a JSON database, API, etc.)
// later without needing to change any component — just swap out how
// `recipes` is produced. Every component here is typed against the
// `Recipe` interface, not against this file.
export const mockRecipes: Recipe[] = [
  {
    id: "blue_crown_tea",
    displayName: {
      en: "Blue Crown Tea",
      zh: "蓝冠花茶",
    },
    description: {
      en: "Always served cold - more accurate to say 'inevitably served cold'.",
      zh: "总是冷饮——更准确地说是“必然冷饮”。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["blue_crown"]
      }
    ],
    principles: [
      {id: "principle.sky",
        amount: 2,
      },
      {
        id: "principle.winter",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },],
    serves: ["beverage"],
    type: ["beverage"],
    icon: "blue_crown_tea.png",
  },
  {
    id: "boiled_egg",
    displayName: {
      en: "Boiled Egg",
      zh: "水煮蛋",
    },
    description: {
      en: "Neatly packaged nutrition, pale as a December dawn.",
      zh: "精心包装的营养品，如十二月的黎明般苍白。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["hens_egg"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      },
      {
        id: "principle.winter",
        amount: 1,
      }, ],
    serves: ["first_course","ingredients"],
    type: ["dish"],
    icon: "boiled_egg.png",
  },
  {
    id: "fried_mushrooms_on_toast",
    displayName: {
      en: "Fried Mushrooms on Toast",
      zh: "煎蘑菇吐司"
    },
    description: {
      en: "You can do great things with these with a simple white sauce with black pepper, but sometimes you're just hungry.",
      zh: "你可以用这些做很多事情，用简单的白酱和黑胡椒，但有时你只是饿了。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["mushrooms","crusty_bread","bronze_knife"],},
      {
        id: "method 2",
        requires: ["pickled_mushrooms","crusty_bread","bronze_knife" ],
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.moon",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "fried_mushrooms_on_toast.png",
    note: {
      en: ["1. The Pillas-Oat Bread located in Keeper's Lodge can also be used as bread, but it is unique and therefore omitted from the standard recipe.","2. Any object with the aspect of Knife can be used as a knife, but the Bronze Knife is the most practical choice."],
      zh: ["1. 守门人小屋中的荞麦面包也可作为这里的面包使用，但由于它是唯一物品，因此未列入标准制作路径。","2. 任何具有刀具属性的物品都可以用作刀具，但青铜刀是最实用的选择……大概吧。"],
    },
  },
  {
    id: "mackerel_monte_carlo",
    displayName: {
      en: "Mackerel Monte Carlo",
      zh: "鲭鱼蒙特卡洛"
    },
    description: {
      en: "Most suitable, according to Mrs Arabella Boxer, for a light supper, or a ladies' lunch.",
      zh: "根据阿拉贝拉·博克夫人所说，最适合轻食或女士午餐。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["boiled_egg", "mackerel"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.moon",
        amount: 1,
      },
        {
        id: "principle.scale",
        amount: 1,
      },
        {
        id: "principle.sky",
        amount: 1,
      },],
    serves: ["first_course"],
    type: ["recipe.soup"],
    icon: "mackerel_monte_carlo.png",
  },
  {
    id: "pickled_mushrooms",
    displayName: {
      en: "Pickled Mushrooms",
      zh: "腌蘑菇"
    },
    description: {
      en: "You'll learn to like them.",
      zh: "你会学会喜欢它们的。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["mushrooms","intoxicating"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.moon",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 2,
      }
    ],
    serves: ["first_course","side_course","ingredients"],
    type: ["dish","ingredients"],
    icon: "pickled_mushrooms.png",
  },
]