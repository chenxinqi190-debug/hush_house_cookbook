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
      zh: "总是冷饮——准确来说，“只能是冷饮”。",
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
    id:"deep_sweetened_assam",
    displayName: {
      en: "Deep-Sweetened Assam",
      zh: "浓甜阿萨姆茶",
    },
    description: {
      en: "Sweetened with agave syrup and deep history.",
      zh: "用龙舌兰糖浆与深浓的历史加甜。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["agave_aeterna","ch_second_flush_assam_pot"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.knock",
        amount: 1,
      },
      {
        id: "principle.lantern",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 2,
      },
          {
        id: "principle.winter",
        amount: 1,
      },],
    serves: ["beverage"],
    type: ["beverage"],
    icon: "deep_sweetened_assam.png",
  },
  {
    id: "deep_sweetened_lapsang",
    displayName: {
      en: "Deep-Sweetened Lapsang",
      zh: "浓甜正山小种",
    },
    description: {
      en: "Sweetened with agave syrup and deep history.",
      zh: "用龙舌兰糖浆与深浓的历史加甜。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["agave_aeterna","veiled_goddess_lapsang_souchong_pot"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 2,
  },
      {
        id: "principle.lantern",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 2,
      },
      {
        id: "principle.sky",
        amount: 1,
      },
      {
        id: "principle.winter",
        amount: 1,
      },
    ],
    serves: ["beverage"],
    type: ["beverage"],
    icon: "deep_sweetened_lapsang.png",
  },
  {
    id: "fragrant_chalice_tea",
    displayName: {
      en: "Fragrant Chalice Tea",
      zh: "香盏花茶",
    },
    description: {
      en: "'This', Thirza Blake once declared, 'is the colour of my heart.'",
      zh: "“这，”蒂尔扎·布雷克曾公开宣告，“便是我心之色。”",
    },
    requires: [
      {
        id: "method 1",
        requires: ["fragrant_chalice"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
    ],
    serves: ["beverage"],
    type: ["beverage"],
    icon: "fragrant_chalice_tea.png",
  },
  {
    id: "honeyscar_jasmine_tea",
    displayName: {
      en: "Honeyscar Jasmine Tea",
      zh: "蜜痂茉莉茶",
    },
    description: {
      en: "Soothing to the senses.",
      zh: "舒缓知觉。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["honeyscar_jasmine"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
            {
        id: "principle.rose",
        amount: 1,
      },
    ],
    serves: ["beverage"],
    type: ["beverage"],
    icon: "honeyscar_jasmine_tea.png",
  },
  {
    id: "amber_pumpkin_soup",
    displayName: {
      en: "Amber Pumpkin Soup",
      zh: "珀色南瓜汤",
    },
    description: {
      en: "The amber 'pompions' of Brancrug are, according to tradition, all descendants of the seeds brought by Kitty Mazarine from her home across the soft sea.",
      zh: "按布兰库格传统说法，这些珀色“金瓜”都是凯蒂·马扎林从她和蔼大洋彼岸的家乡带来的种子的后代。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["amber_pumpkin","dripping"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.lantern",
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
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "amber_pumpkin_soup.png",
  },
  {
    id: "blackerries",
    displayName: {
      en: "Blackberries",
      zh: "黑莓",
    },
    description: {
      en: "Berries promised by darkness.",
      zh: "黑暗应许的莓果。",
    },
    requires: [],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
    ],
    serves: ["first_course","ingredients"],
    type: ["dish","ingredients"],
    icon: "blackberries.png",
  },
  {
    id: "boiled_egg",
    displayName: {
      en: "Boiled Egg",
      zh: "白煮蛋",
    },
    description: {
      en: "Neatly packaged nutrition, pale as a December dawn.",
      zh: "排列整齐，营养丰富，苍白如十二月的拂晓。",
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
    id: "cold_pheasant_n_grape_salad",
    displayName: {
      en: "Cold Pheasant and Grape Salad",
      zh: "葡萄沙拉配冷烤野鸡",
    },
    description: {
      en: "This was the sort of dish you might expect to find for a late supper after the theatre, or halfway through a ball.' - Arabella Boxer",
      zh: "这就是那种你希望在剧院离场后，舞会中途时的夜宵里能吃到的餐点。”——阿拉贝拉·博克瑟",
    },
    requires: [
      {
        id: "method 1",
        requires: ["bunch_of_grapes","pheasant"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.rose",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      },
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "cold_pheasant_n_grape_salad.png",
  },
  {
    id: "egg_sandwich",
    displayName: {
      en: "Egg Sandwich",
      zh: "鸡蛋三明治",
    },
    description: {
      en: "Ennobled by cress but acceptable without.",
      zh: "因水芹而显高贵。没有亦无妨。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["crusty_bread","hens_egg","bronze_knife"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      },
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "egg_sandwich.png",
    note: {
      en: ["1. The Pillas-Oat Bread located in Keeper's Lodge can also be used as bread, but it is unique and therefore omitted from the standard recipe.","2. Any object with the aspect of Knife can be used as a knife, but the Bronze Knife is the most practical choice."],
      zh: ["1. 守门人小屋中的小莜麦面包也可作为这里的面包使用，但由于它是唯一物品，因此未列入标准制作路径。","2. 任何具有刀具属性的物品都可以用作刀具，但青铜刀是最实用的选择……大概吧。"],
    },
  },
  {
    id: "eggy_bread",
    displayName: {
      en: "Eggy Bread",
      zh: "蛋香吐司",
    },
    description: {
      en: "On the continent, they call it 'pain perdu': sounds like damnation but tastes like sin.",
      zh: "在欧洲大陆，人们管这叫“pain perdu”（过期的面包）——听起来像是种诅咒，但它好吃得叫人下地狱。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["crusty_bread","hens_egg","kitchen_bowls"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      },
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "eggy_bread.png",
    note: {
      en: ["1. The Pillas-Oat Bread located in Keeper's Lodge can also be used as bread, but it is unique and therefore omitted from the standard recipe.","2. Any object with the aspect of Knife can be used as a knife, but the Bronze Knife is the most practical choice."],
      zh: ["1. 守门人小屋中的小莜麦面包也可作为这里的面包使用，但由于它是唯一物品，因此未列入标准制作路径。","2. 任何具有刀具属性的物品都可以用作刀具，但青铜刀是最实用的选择……大概吧。"],
    }, 
  },
  {
    id: "fried_mushrooms_on_toast",
    displayName: {
      en: "Fried Mushrooms on Toast",
      zh: "炸蘑菇吐司"
    },
    description: {
      en: "You can do great things with these with a simple white sauce with black pepper, but sometimes you're just hungry.",
      zh: "你可以用它们与简简单单的白沙司与黑胡椒搭配出很棒的餐点，但有时你只是饿了而已。"
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
      zh: ["1. 守门人小屋中的小莜麦面包也可作为这里的面包使用，但由于它是唯一物品，因此未列入标准制作路径。","2. 任何具有刀具属性的物品都可以用作刀具，但青铜刀是最实用的选择……大概吧。"],
    },
  },
  {
    id: "pillas_oat_bread",
    displayName: {
      en: "Pillas-Oat Bread",
      zh: "小莜麦面包",
    },
    description: {
      en: "Gritty bread made with the hardy, ancient oats that grow at Land's End",
      zh: "用生长在大陆尽头的古老耐寒燕麦做出的粗面包。",
    },
    requires: [],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },{
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.rose",
        amount: 1,
      },
    ],
    serves: ["first_course","ingredients"],
    type: ["dish","ingredients"],
    icon: "pillas_oat_bread.png",
  },
  {
    id: "grape_salad",
    displayName: {
      en: "Grape Salad",
      zh: "葡萄沙拉",
    },
    description: {
      en: "Just enough to fill in the gaps.",
      zh: "刚好够填饱肚子。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["bunch_of_grapes"],
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
        {
        id: "principle.rose",
        amount: 1,
      },
    ],
    serves: ["first_course","side_course"],
    type: ["dish"],
    icon: "grape_salad.png",
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
  {
    id: "crusty_bread",
    displayName: {
      en: "Crusty Bread",
      zh: "硬皮面包",
    },
    description: {
      en: "Use bread with a Knife and mushroom, ham, pilchards, or other savoury things... or add apples and spice for a classic English pudding.",
      zh: "用刀切开面包，搭配蘑菇、火腿、沙丁鱼或其他美味食材……或者加入苹果和香料，做成经典的英式布丁。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["dough"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
    ],
    serves: ["side_course","ingredients"],
    type: ["dish"],
    icon: "crusty_bread.png",
  },
]