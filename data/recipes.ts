import { Recipe } from "@/types/recipe";
export const recipes: Recipe[] = [
  {
    id: "blue_crown_tea",
    displayName: {
      en: "Blue Crown Tea",
      zh: "蓝冠花茶",
    },
    description: {
      en: "Always served cold - more accurate to say 'inevitably served cold'.",
      zh: "常供冷饮——准确地说，“仅供冷饮”。",
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
    id: "aglaophotis_souffle",
    displayName: {
      en: "Aglaophotis Soufflé",
      zh: "阿格劳福提斯花舒芙蕾",
    },
    description: {
      en: "One of the most deliciously melting incarnations of occult power ever contrived.",
      zh: "有史以来超自然之力的融化化身中最美味的之一。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["aglaophotis","dough"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.knock",
        amount: 2,
      },
      {
        id: "principle.lantern",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.rose",
        amount: 2,
      },
      {
        id: "principle.sky",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "aglaophotis_souffle.png",
  },
  {
    id: "almonds",
    displayName: {
      en: "Almonds",
      zh: "杏仁",
    },
    description: {
      en: "[Add Sugar and spice to make Jumble.]",
      zh: "[加入糖与香料以制作轮状甜饼。]",
    },
    requires: [],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.moth",
        amount: 1,
      }
    ],
    serves: ["side_dish"],
    type: ["dish","ingredients"],
    icon: "almonds.png",
  },
  {
    id: "amber_pumpkin_pie",
    displayName: {
      en: "Amber Pumpkin Pie",
      zh: "珀色南瓜派",
    },
    description: {
      en: "A favourite of Kitty Mazarine's second son. Of course she had to leave them behind in the place of her birth, but she brought the recipe to Brancrug. Did she remember him each time she baked it? Even until the very end?",
      zh: "凯蒂·马扎林第二个儿子的最爱。当然，她不得不将他们留在自己的出生地，但她将配方带到了布兰库格。每每烤制此物时，她会怀恋他么？即便到最后一刻也是如此？",
    },
    requires: [
      {
        id: "method 1",
        requires: ["amber_pumpkin","dough"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.lantern",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "amber_pumpkin_pie.png",
  },
  {
    id: "amber_pumpkin_soup",
    displayName: {
      en: "Amber Pumpkin Soup",
      zh: "珀色南瓜汤",
    },
    description: {
      en: "The amber 'pompions' of Brancrug are, according to tradition, all descendants of the seeds brought by Kitty Mazarine from her home across the soft sea.",
      zh: "按布兰库格的传统说法，这些珀色“金瓜”都源自凯蒂·马扎林跨越轻柔之海、自家乡带来的种子。",
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
    id: "apple_charlotte",
    displayName: {
      en: "Apple Charlotte",
      zh: "苹果夏洛特蛋糕",
    },
    description: {
      en: "A classic English pudding of apples stewed with cinnamon and layered with crisp golden bread.",
      zh: "一道经典英式甜点。由炖煮过的苹果与肉桂制成，一层一层铺在酥脆金黄的面包之间。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_apples","crusty_bread","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
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
      {
        id: "principle.rose",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "apple_charlotte.png",
    note: {
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. The Spices & Savours skill can also be used as spicing."],
      zh: ["* 1. 方便起见，在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "apple_pie",
    displayName: {
      en: "Apple Pie",
      zh: "苹果派",
    },
    description: {
      en: "Flaky, buttery crust; tart-sweet apples with cinnamon and nutmeg.",
      zh: "酥脆的黄油饼皮，酸甜的苹果佐以肉桂和豆蔻。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_apples","dough","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "apple_pie.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "bake_apple_meringue",
    displayName: {
      en: "Baked Apple Meringue",
      zh: "烤苹果蛋白酥",
    },
    description: {
      en: "Harvey Hattington, during his convalescence at the House, was so obsessed with meringuing techniques that he was ultimately banned from the kitchen.",
      zh: "在居屋疗养期间，哈维·哈廷顿痴迷于蛋白酥工艺，最终被禁止进入厨房。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_apples","meringue","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.winter",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "bake_apple_meringue.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "bake_pear_meringue",
    displayName: {
      en: "Baked Pear Meringue",
      zh: "烤梨蛋白酥",
    },
    description: {
      en: "Harvey Hattington, during his convalescence at the House, became obsessed with meringuing techniques. He was known to sneak down to the kitchens and interfere with the cooks in pursuit of his ideal.",
      zh: "在居屋疗养期间，哈维·哈廷顿痴迷于蛋白酥工艺。他常常偷溜进厨房，干预厨师的工作，以追求他心中的理想蛋白酥。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["bowl_of_sea_blest_pears","meringue","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 2,
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
        id: "principle.winter",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "bake_pear_meringue.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "batter",
    displayName: {
      en: "Batter",
      zh: "面糊",
    },
    description: {
      en: "[Add Dripping for something horrifyingly tasty; or use with a Knife and Onions.]",
      zh: "[添加烤肉滴油以制作某种好吃得惊人的东西；或者用刀将其与洋葱一同处理。]",
    },
    requires: [
      {
        id: "method 1",
        requires: ["flour","isle_water","kitchen_bowls"]
      },
      {
        id: "method 2",
        requires: ["flour","mist_kissed_water","kitchen_bowls"]
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
      }
    ],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "batter.png",
  },
  {
    id: "blackerries",
    displayName: {
      en: "Blackberries",
      zh: "黑莓",
    },
    description: {
      en: "Berries promised by darkness.",
      zh: "黑暗许诺的浆果。",
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
    serves: ["first_course"],
    type: ["dish","ingredients"],
    icon: "blackberries.png",
  },
  {
    id: "blackberry_jam",
    displayName: {
      en: "Blackberry Jam",
      zh: "黑莓酱",
    },
    description: {
      en: "Plucked from hedgerows.",
      zh: "采自灌木绿篱。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["blackberries","sugar"]
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
      }
    ],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "blackberry_jam.png"
  },
  {
    id: "blackberry_sponge_cake",
    displayName: {
      en: "Blackberry Sponge Cake",
      zh: "黑莓海绵蛋糕",
    },
    description: {
      en: "Light, sweet sponge cake and the taste of autumn hedgerows.",
      zh: "轻盈而甜美的海绵蛋糕，伴着仿佛刚撷自秋日树篱般的新鲜滋味。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["blackberry_jam","cake_batter"]
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
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.rose",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "blackberry_sponge_cake.png"
  },
  {
    id: "boiled_egg",
    displayName: {
      en: "Boiled Egg",
      zh: "白煮蛋",
    },
    description: {
      en: "Neatly packaged nutrition, pale as a December dawn.",
      zh: "完美包裹的营养品，苍白如十二月的黎明。",
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
    type: ["dish","ingredients"],
    icon: "boiled_egg.png",
  },
  {
    id: "cake_batter",
    displayName: {
      en: "Cake Batter",
      zh: "蛋糕面糊",
    },
    description: {
      en: "[Add something sweet like jam - or add Almonds and spices.]",
      zh: "[加入杏仁，或者果酱之类的甜味剂。]",
    },
    requires: [
      {
        id: "method 1",
        requires: ["dough","hens_egg","kitchen_bowls"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "cake_batter.png",
  },
 {
    id: "cold_pheasant_n_grape_salad",
    displayName: {
      en: "Cold Pheasant and Grape Salad",
      zh: "冷切野鸡配葡萄沙拉",
    },
    description: {
      en: "This was the sort of dish you might expect to find for a late supper after the theatre, or halfway through a ball.' - Arabella Boxer",
      zh: "“这是那种适合在剧院散场后的夜宵、或舞会中途吃到的菜肴。”——阿拉贝拉·博克瑟",
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
    id: "cornish_honey_cake",
    displayName: {
      en: "Cornish Honey Cake",
      zh: "康沃尔蜂蜜蛋糕",
    },
    description: {
      en: "Under no circumstances should this ever be confused with Devonshire Honey Cake, which everyone in Brancrug could instantly identify as an inferior variation.",
      zh: "在任何情况下都不应将它与德文郡蜂蜜蛋糕相混淆，因为在布兰库格，每个人都能立刻认出后者是前者拙劣的变体。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["cake_batter","honey"]
      }
    ], 
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.lantern",
        amount: 2,
      },
      {
        id: "principle.moth",
        amount: 2,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "cornish_honey_cake.png",
  },
  {
    id: "cottage_pie",
    displayName: {
      en: "Cottage Pie",
      zh: "农舍派",
    },
    description: {
      en: "A rich minced beef sauce under a golden crust of baked mash potatoes. Just the thing to come home to after a storm on the moors.",
      zh: "金黄的烤土豆泥外壳下满裹着浓郁的碎牛肉酱。正是荒野上暴风雨过后回家应当享用的美食。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["beef","potatoes"]
      }
    ], 
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 2,
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "cottage_pie.png",
  },
  {
    id: "creamed_sugar",
    displayName: {
      en: "Creamed Sugar",
      zh: "打发黄油",
    },
    description: {
      en: "A precursor to Sticky Toffee Pudding (with bread) and to Fudge (without bread): both notorious as founding crimes of twentieth-century culinary debauchery.",
      zh: "粘稠太妃糖布丁（带面包）与法奇软糖（不带面包）的前身：两者都被认为是导致20世纪“烹饪堕落”的奠基性罪行。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["butter","sugar","kitchen_bowls"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      }
    ],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "creamed_sugar.png",
  },
  {
    id: "crusty_bread",
    displayName: {
      en: "Crusty Bread",
      zh: "硬皮面包",
    },
    description: {
      en: "Use bread with a Knife and mushroom, ham, pilchards, or other savoury things... or add apples and spice for a classic English pudding.",
      zh: "[可以用刀料理面包，同时加上蘑菇、火腿、沙丁鱼或者其他咸味食材……或者加入苹果与香料，制作经典英国甜点。]",
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
      }
    ],
    serves: ["side_dish","ingredients"],
    type: ["dish","ingredients"],
    icon: "crusty_bread.png"
  },
  {
    id: "dough",
    displayName: {
      en: "Dough",
      zh: "生面团",
    },
    description: {
      en: "Mix with an egg in a Bowl to make cake batter, or use to bake various delectable pies. For the sweeter pies, you'll want to use spices too.",
      zh: "[在碗里加鸡蛋搅拌以制作蛋糕面糊，或者用以烤制各种美味的派。若想制作味道更甜的派，就再加些香料。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["bottle_milk","flour","kitchen_bowls"]
      },
      {
        id: "method 2",
        requires: ["butter","flour","kitchen_bowls"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      }
    ],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "dough.png",
  },
  {
    id: "egg_croquettes",
    displayName: {
      en: "Egg Croquettes",
      zh: "苏格兰蛋",
    },
    description: {
      en: "Come for the crunch, stay for the nourishment.",
      zh: "为酥脆而来，为滋养而留。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["crusty_bread","hens_egg"]
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
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 2,
      },
      {
        id: "principle.sky",
        amount: 2,
      }
    ],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "egg_croquettes.png",
    note: {
      en: ["* For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone."],
      zh: ["* 方便起见，在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。"],
    },
  },
  {
    id: "egg_sandwich",
    displayName: {
      en: "Egg Sandwich",
      zh: "鸡蛋三明治",
    },
    description: {
      en: "Ennobled by cress but acceptable without.",
      zh: "加些水芹更显高雅，没有亦无妨。",
    },
    requires: [
      {
        id: "method 1",
        requires: ["crusty_bread","hens_egg","knife"]
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
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. Any object with the aspect of Knife can be used as a knife. This cookbook uses the Bronze Knife throughout. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 1. 方便起见，在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. 任何具有“刀”性向的物品都可作为刀使用。本菜谱统一采用青铜刀。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    },
  },
  {
    id: "eggy_bread",
    displayName: {
      en: "Eggy Bread",
      zh: "法国吐司",
    },
    description: {
      en: "On the continent, they call it 'pain perdu': sounds like damnation but tastes like sin.",
      zh: "在大陆，人们管这叫“pain perdu”（遭弃的面包），听起来很糟糕，吃起来却罪恶般美味。",
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
      en: ["* For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone."],
      zh: ["* 方便起见，在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。"],
    }, 
  },
  {
    id: "floating_island",
    displayName: {
      en: "Floating Island",
      zh: "浮岛蛋糕"
    },
    description: {
      en: "Vanilla, custard, and meringue, landscaped and caramelled: a Claridge's speciality.",
      zh: "香草、蛋奶沙司还有蛋白酥，浮岛美景佐以焦糖：克拉里奇特色菜。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["bottle_milk","meringue"],}
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
        id: "principle.rose",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "floating_island.png",
  },
  {
    id: "fried_mushrooms_on_toast",
    displayName: {
      en: "Fried Mushrooms on Toast",
      zh: "炸蘑菇吐司"
    },
    description: {
      en: "You can do great things with these with a simple white sauce with black pepper, but sometimes you're just hungry.",
      zh: "可以加上简单的白酱和黑胡椒来做出美味佳肴，但有时候你只想要快点充饥。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["mushrooms","crusty_bread","knife"],},
      {
        id: "method 2",
        requires: ["pickled_mushrooms","crusty_bread","knife" ],
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
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 1. 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. 任何具有“刀”性向的物品都可作为刀具使用。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    },
  },
  {
    id: "fudge",
    displayName: {
      en: "Fudge",
      zh: "法奇软糖"
    },
    description: {
      en: "All the bad things doing a good thing.",
      zh: "祸兮福所倚。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["creamed_sugar"],}
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 3,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "fudge.png",
  },
  {
    id: "game_chips",
    displayName: {
      en: "Game Chips",
      zh: "野味薯条",
    },
    description: {
      en: "Long before fish and chips, these went crunchily with game. Ideally you'd want bread sauce and breadcrumbs to complete the ensemble, but honestly it's hard enough not just to stuff these directly into your mouth.",
      zh: "炸鱼薯条出现前，薯条就已经被用来搭配野味以凸显其酥脆了。理想情况下，还需要搭配面包酱和面包屑来使这道菜更加完美，但老实说，光是忍住不直接把它们塞进嘴里就已是难事。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["dripping","potatoes","knife"],
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
        id: "principle.knock",
        amount: 1,
      },
    ],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "game_chips.png",
    note: {
      en: ["* Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 任何具有“刀”性向的物品都可作为刀具使用。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    },
  },
  {
    id: "game_pie",
    displayName: {
      en: "Game Pie",
      zh: "野味派",
    },
    description: {
      en: "Pheasant or snipe or woodcock or rabbit, and tasty pastry.",
      zh: "野鸡，田鹬，山鹬或是兔子，外加美味的酥油面团。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["dough","pheasant"],
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.knock",
        amount: 1,
      },
      {
        id: "principle.moth",
        amount: 1,
      },
      {
        id: "principle.rose",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "game_pie.png"
    },
  {
    id: "grape_salad",
    displayName: {
      en: "Grape Salad",
      zh: "葡萄沙拉",
    },
    description: {
      en: "Just enough to fill in the gaps.",
      zh: "恰好填补空隙。"
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
    serves: ["first_course","side_dish"],
    type: ["dish"],
    icon: "grape_salad.png",
  },
  {
    id: "ham_n_cheese_toastie",
    displayName: {
      en: "Ham and Cheese Toastie",
      zh: "芝士吐司配火腿"
    },
    description: {
      en: "Breakfast, lunch or emergency.",
      zh: "早餐，午餐，或是应急食品。"
    },
    requires: [
      {
        id: "method 1",
      requires: ["crusty_bread","canned_ham","knife"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },],
    serves: ["first_course"],
    type: ["dish"],
    icon: "ham_n_cheese_toastie.png",
    note: {
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 1. 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. 任何具有“刀”性向的物品都可作为刀具使用。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    },

  },
  {
    id: "ham_n_egg_casserole",
    displayName: {
      en: "Ham and Egg Casserole",
      zh: "火腿焗蛋"
    },
    description: {
      en: "Tasty and filling.",
      zh: "美味又顶饱。"
    },
    requires: [
      {
        id: "method 1",
      requires: ["canned_ham","hens_egg"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.moth",
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
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "ham_n_egg_casserole.png",
  },
  {
    id: "ham_n_potato_bake",
    displayName: {
      en: "Ham and Potato Bake",
      zh: "火腿烤土豆"
    },
    description: {
      en: "Filling and tasty.",
      zh: "顶饱又美味。"
    },
    requires: [
      {
        id: "method 1",
      requires: ["canned_ham","potatoes"]
      }
    ],
    principles: [
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
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "ham_n_potato_bake.png",
  },
  {
    id: "honey_haunted_pumpkin_pie",
    displayName: {
      en: "Honey-Haunted Pumpkin Pie",
      zh: "蜜祟南瓜派"
    },
    description: {
      en: "Harvey Hattington, perenially suspicious of the Blomberende-kind and their cuckoo-honey, nevertheless championed pumpkin pie made with cuckoo-honey as 'the Herald of Savour.'",
      zh: "哈维·哈廷顿总是对绽莓族与它们的杜鹃蜜心怀猜忌。饶是如此，他还是坚定不移地宣称这种加入了杜鹃蜜的南瓜派是“滋味前驱”。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["dough", "soft_amber_pumpkin","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 2,
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
        id: "principle.knock",
        amount: 1,
      },
      {
        id: "principle.moth",
        amount: 3,
      },
      {
        id: "principle.nectar",
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 3,
      },
    ],
    serves: ["main_course","pudding"],
    type: ["dish"],
    icon: "honey_haunted_pumpkin_pie.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "honey_haunted_pumpkin_soup",
    displayName: {
      en: "Honey-Haunted Pumpkin Soup",
      zh: "蜜祟南瓜汤"
    },
    description: {
      en: "Harvey Hattington, perenially suspicious of the Blomberende-kind and their cuckoo-honey, nevertheless championed pumpkin soup made with cuckoo-honey as 'Savour's Consort.'",
      zh: "哈维·哈廷顿总是对绽莓族与它们的杜鹃蜜心怀猜忌。饶是如此，他还是坚定不移地宣称这种加入了杜鹃蜜的南瓜汤是“滋味伴侣”。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["dripping", "soft_amber_pumpkin"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 2,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.knock",
        amount: 1,
      },
      {
        id: "principle.moon",
        amount: 1,
      },
      {
        id: "principle.moth",
        amount: 3,
      },
      {
        id: "principle.nectar",
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 3,
      },
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "honey_haunted_pumpkin_soup.png",
  },
  {
    id: "jugged_pheasant",
    displayName: {
      en: "Jugged Pheasant",
      zh: "罐焖野鸡"
    },
    description: {
      en: "The hunter's reward.",
      zh: "属于猎手的犒赏。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["butter", "pheasant"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.rose",
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
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "jugged_pheasant.png",
  },
  {
    id: "kedgeree",
    displayName: {
      en: "Kedgeree",
      zh: "英式咖喱鱼饭"
    },
    description: {
      en: "A wonderfully versatile dish favoured for breakfast by the sons of the lark, and for supper by the daughters of the owl.",
      zh: "一道百搭的美味餐点，百灵之子的早餐优选，鸮鸟之女的晚宴佳肴。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["hens_egg", "mackerel"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.moon",
        amount: 1,
      },],
    serves: ["first_course"],
    type: ["dish"],
    icon: "kedgeree.png",
  },
  {
    id: "kingsluck_pie",
    displayName: {
      en: "Kingsluck Pie",
      zh: "王运派"
    },
    description: {
      en: "Thirza Blake always insisted on calling it 'the Great Pie of Power', to the lasting annoyance of her peers.",
      zh: "蒂尔扎·布雷克执意称它为“权力大馅饼”，搞得她的同僚们颇为恼火。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["bowl_of_sea_blest_pears", "sea_pie","spicing"]
      },
      {
        id: "method 2",
        requires: ["pear_pie", "roast_beef"]
      },
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 2,
      },
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.knock",
        amount: 1,
      },
      {
        id: "principle.lantern",
        amount: 1,
      },
      {
        id: "principle.moth",
        amount: 1,
      },
    {
        id: "principle.nectar",
        amount: 1,
      },
    {
        id: "principle.scale",
        amount: 1,
      }],
    serves: ["main_course"],
    type: ["dish"],
    icon: "kingsluck_pie.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "knot_cake",
    displayName: {
      en: "Knot-Cake",
      zh: "绳结糕",
    },
    description: {
      en: "According to the ancient pattern.",
      zh: "依古代式样制作。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["cake_batter","cuckoo_honey"],
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 2,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.lantern",
        amount: 1,
      },
      {
        id: "principle.moth",
        amount: 3,
      },
      {
        id: "principle.nectar",
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 3,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "knot_cake.png",
  },
  {
    id: "leek_gratin",
    displayName: {
      en: "Leek Gratin",
      zh: "焙烤韭葱",
    },
    description: {
      en: "Harvey Hattington, who established a surprisingly persistent influence on the kitchens of Hush House during his short stay here, described leek as 'Onion's Empress.'",
      zh: "哈维·哈廷顿只在噤声居屋停留了短暂时间，却对这里的厨房产生了令人惊讶的持久影响，他将韭葱描述为“洋葱的女皇”。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_leeks","crusty_bread","knife"],
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
      }
    ],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "leek_gratin.png",
    note: {
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 1. 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. 任何具有“刀”性向的物品都可作为刀具使用。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    },
  },
  {
    id: "leek_soup",
    displayName: {
      en: "Leek Soup",
      zh: "韭葱汤"
    },
    description: {
      en: "A milder taste than onion soup, but no less warming.",
      zh: "滋味比洋葱汤更加温和，但同样温暖。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_leeks", "dripping"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.moon",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },],
    serves: ["first_course"],
    type: ["dish"],
    icon: "leek_soup.png",
  },
  {
    id: "mackerel_monte_carlo",
    displayName: {
      en: "Mackerel Monte Carlo",
      zh: "蒙特卡洛鲭鱼"
    },
    description: {
      en: "Most suitable, according to Mrs Arabella Boxer, for a light supper, or a ladies' lunch.",
      zh: "据阿拉贝拉·博克瑟太太所言，它最适合作为一顿简便夜宵，或是淑女们的午餐。"
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
    type: ["dish"],
    icon: "mackerel_monte_carlo.png",
  },
  {
    id: "madeira_cake",
    displayName: {
      en: "Madeira Cake",
      zh: "马德拉蛋糕"
    },
    description: {
      en: "In the eighteenth century, one would have a slice of this in the morning with a glass of Madeira - fortified wine from the Madeira islands, volcanic yet lush, rugged yet balmy, bright with the calls of sandpipers and firecrests… this is the twentieth century. We have afternoon tea now. We don't drink fortified wine at ten o'clock in the morning. No more sandpipers. No more firecrests. But the cake's still good. Almonds.",
      zh: "在十八世纪，人们会在早晨吃一片这蛋糕，搭配来自马德拉群岛的马德拉加度红酒；热烈又浓郁，粗犷又香柔，鲜活的滋味伴着鹬鸟与火冠戴菊的啼鸣……但如今已是二十世纪。现在我们有了下午茶。我们已经不在上午十点喝加度红酒了。不再有什么鹬鸟，什么火冠戴菊。但这蛋糕依旧美味，赞美杏仁。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["almonds", "cake_batter","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.lantern",
        amount: 1,
      },
        {
        id: "principle.moth",
        amount: 1,
      }],
    serves: ["pudding"],
    type: ["dish"],
    icon: "madeira_cake.png"
  },
  {
    id: "magnificent_roast_potatoes",
    displayName: {
      en: "Magnificent Roast Potatoes",
      zh: "极致美味烤土豆"
    },
    description: {
      en: "It's the dripping that elevates it. Roast potatoes are a feast for the senses, but the dripping deepens the flavour profile, makes the experience continue through the machinery of the mouth to become a kind of journey.",
      zh: "烤肉滴油升华了它。烤土豆已是一场感官盛宴，但烤肉滴油加深了风味层次，这体验在口腔中久久回味，成为一段味觉旅程。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["dripping", "potatoes"]
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
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      }
      ],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "magnificent_roast_potatoes.png"
  },
  {
    id: "marinated_beef_uncooked",
    displayName: {
      en: "Marinated Beef (Uncooked)",
      zh: "腌牛肉（未烹饪的）"
    },
    description: {
      en: "Tangy with the harbingers of a roastful destiny.",
      zh: "熏烤命运的扑鼻前兆。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["beef", "intoxicating"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 2,
      }],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "marinated_beef_uncooked.png",
  },
  {
    id: "marinated_onions",
    displayName: {
      en: "Marinated Onions",
      zh: "腌洋葱"
    },
    description: {
      en: "Add it to Mackerel for Soused Mackerel.",
      zh: "把它和鲭鱼一起做成醉鲭鱼。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_onions", "intoxicating"]
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
      }],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "marinated_onions.png",
  },
  {
    id: "marinated_roast_beef",
    displayName: {
      en: "Marinated Roast Beef",
      zh: "腌烤牛肉"
    },
    description: {
      en: "But since we have learnt from all-vapouring France / To eat their ragouts as well as to dance, / We're fed up with nothing but vain complaisance / Oh! the Roast Beef of Old England, / And old English Roast Beef! -- Henry Fielding, The Grub Street Opera",
      zh: "“自从咱沾了法国的飘飘然 / 吃他们那蔬菜炖肉跳得欢，/ 咱们对那没用殷勤已厌烦 / 哦！老英格兰里爱吃烤牛的人儿，/ 还有悠久的英式烤牛！”——亨利·菲尔丁，《文丐街唱游》"
    },
    requires: [
      {
        id: "method 1",
        requires: ["marinated_beef_uncooked"]
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
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 2,
      }],
    serves: ["main_course"],
    type: ["dish"],
    icon: "marinated_roast_beef.png",
  },
  {
    id: "meringue",
    displayName: {
      en: "Meringue",
      zh: "蛋白酥"
    },
    description: {
      en: "Add to milk for a legendary dessert. Or, with Spicing, add to apples or pears - even to mushrooms, if you're feeling perverse.",
      zh: "加入奶来做一种传奇的甜点。或者加入香料，以及苹果或者梨子——如果你想更另类些，加蘑菇。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["hens_egg", "sugar","kitchen_bowls"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 1,
      },{
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.rose",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      },
      {
        id: "principle.winter",
        amount: 1,
      }],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "meringue.png"
  },
  {
    id: "moly_au_jus",
    displayName: {
      en: "Moly au Jus",
      zh: "蘸汁摩吕"
    },
    description: {
      en: "This has been called 'Moth, but delicious, but perhaps we all will be, at the end.'",
      zh: "它曾被评价为：“似蛾味美，终或同归。”"
    },
    requires: [
      {
        id: "method 1",
        requires: ["butter", "moly","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.moon",
        amount: 2,
      },
      {
        id: "principle.moth",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 2,
      },],
    serves: ["first_course","side_dish"],
    type: ["dish"],
    icon: "moly_au_jus.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "mushroom_meringue",
    displayName: {
      en: "Mushroom Meringue",
      zh: "蘑菇蛋白酥"
    },
    description: {
      en: "What in the Wolf-Divided's most splintered Name hath here been wrought?",
      zh: "裂分之狼最为破碎的具名者在此处造化何物？"
    },
    requires: [
      {
        id: "method 1",
        requires: ["meringue", "mushrooms","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.winter",
        amount: 1,
      }],
    serves: ["pudding"],
    type: ["dish"],
    icon: "mushroom_meringue.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "mushroom_n_potato_bake",
    displayName: {
      en: "Mushroom & Potato Bake",
      zh: "蘑菇焙土豆"
    },
    description: {
      en: "Collers tried out a variation on this as Cucurbit prison fare. It was tasty; but allegedly also he was interested in the connection between the modulation of the taste of mushrooms, and the suppression of the Crowned Growth.",
      zh: "科勒斯曾将它的一种改良版用作炼金瓶监狱的供餐。那很美味；但据说他同样对调节蘑菇滋味与抑制戴冠之孳间的关联感兴趣。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["mushrooms", "potatoes"]
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
      },],
    serves: ["main_course"],
    type: ["dish"],
    icon: "mushroom_n_potato_bake.png",
  },
  {
    id: "onion_gratin",
    displayName: {
      en: "Onion Gratin",
      zh: "洋葱烤菜"
    },
    description: {
      en: "Harvey Hattington campaigned for the introduction of this dish to the infirmary during his time convalescing at Hush House, though Wakefield referred to it grumpily as 'Trojan Cheese'.",
      zh: "哈维·哈廷顿在噤声居屋的疗养期间，曾积极将这道菜引进医务室。尽管韦克菲尔德不满地称其为“特洛伊奶酪”。（图管注：沙龙上喂这道菜给韦克菲尔德会让他流泪。）"
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_onions", "crusty_bread","knife"]
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
      },],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "onion_gratin.png",
    note: {
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 1. 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. 任何具有“刀”性向的物品都可作为刀具使用。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    }
  },
  {
    id: "onion_rings",
    displayName: {
      en: "Onion Rings",
      zh: "洋葱圈"
    },
    description: {
      en: "An American import that became popular in England these last few years, improbably, via the pages of Vogue.",
      zh: "一种近年来通过《Vogue》杂志意外引入英国并风靡的美国舶来品。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_onions", "batter","knife"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      },],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "onion_rings.png",
    note: {
      en: ["* Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 任何具有“刀”性向的物品都可作为刀具使用。居屋中有其他的刀，但或许我们不该用武器做饭。"],
    }
  },
  {
    id: "onion_soup",
    displayName: {
      en: "Onion Soup",
      zh: "洋葱汤"
    },
    description: {
      en: "Just enough tang to tantalise.",
      zh: "恰到好处的辛辣味，足以挑动味蕾。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["basket_onions", "dripping"]
      }
    ],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.moon",
        amount: 1,
      },
        {
        id: "principle.nectar",
        amount: 1,
      },],
    serves: ["first_course"],
    type: ["dish"],
    icon: "onion_soup.png",
  },
  {
    id: "orange_jumble",
    displayName: {
      en: "Orange Jumble",
      zh: "橘子甜饼"
    },
    description: {
      en: "'They should be the size of teacup rims, and should curl their crisp edges, faintly pink as the underneath of a young mushroom.' - Lady Jekyll, Kitchen Essays",
      zh: "“它们应该有茶杯口那么大，那爽脆的边缘还得蜷曲起来，微带粉色，就像幼嫩蘑菇背面的褶皱。”——哲尔基夫人，《厨房杂谈》"
    },
    requires: [
      {
        id: "method 1",
        requires: ["almonds", "sugar","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
    {
        id: "principle.grail",
        amount: 1,
      },
    {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.lantern",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "orange_jumble.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "pear_pie",
    displayName: {
      en: "Pear Pie",
      zh: "梨子派"
    },
    description: {
      en: "Flaky, buttery crust; luscious pears with cinnamon and nutmeg.",
      zh: "涂着黄油的薄脆酥皮，多汁的梨肉，搭配上肉桂和肉豆蔻的香气。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["bowl_of_sea_blest_pears","dough","spicing"]
      },
      {
        id: "method 2",
        requires: ["pyrus_auricalcinus","dough","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }
    ],
    serves: ["ingredients","pudding"],
    type: ["dish","ingredients"],
    icon: "pear_pie.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "pickled_mackerel",
    displayName: {
      en: "Pickled Mackerel",
      zh: "腌鲭鱼"
    },
    description: {
      en: "Pickling is a kind of afterlife. What comes after afterlife?",
      zh: "腌渍是来生的一种形式。来生之后有什么？"
    },
    requires: [
      {
        id: "method 1",
        requires: ["mackerel","intoxicating"]
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
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 1,
      }
    ],
    serves: ["first_course","side_dish"],
    type: ["dish"],
    icon: "pickled_mackerel.png",
  },
  {
    id: "pickled_mushrooms",
    displayName: {
      en: "Pickled Mushrooms",
      zh: "腌蘑菇"
    },
    description: {
      en: "You'll learn to like them.",
      zh: "你会试着喜欢它们的。"
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
    serves: ["first_course","side_dish","ingredients"],
    type: ["dish","ingredients"],
    icon: "pickled_mushrooms.png",
  },
  {
    id: "pickled_pilchards",
    displayName: {
      en: "Pickled Pilchards",
      zh: "腌沙丁鱼"
    },
    description: {
      en: "An acquired, and unforgettable, taste.",
      zh: "一种独特而难忘的口味。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["pilchards","intoxicating"]
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
        amount: 2,
      },
      {
        id: "principle.scale",
        amount: 1,
      }
    ],
    serves: ["first_course","side_dish","ingredients"],
    type: ["dish","ingredients"],
    icon: "pickled_pilchards.png",
  },
  {
    id: "pilchards_on_toast",
    displayName: {
      en: "Pilchards on Toast",
      zh: "沙丁鱼吐司",
    },
    description: {
      en: "Triply crunchy.",
      zh: "三重酥脆。",
    },
    requires: [{
        id: "method 1",
        requires: ["crusty_bread","pilchards"]
      },
    {id: "method 2",
      requires: ["crusty_bread","pickled_pilchards"]
    }],
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
    icon: "pilchards_on_toast.png",
    note: {
      en: ["* For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone."],
      zh: ["* 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。"],
    }
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
    serves: ["first_course"],
    type: ["dish","ingredients"],
    icon: "pillas_oat_bread.png",
  },
  {
    id: "plums",
    displayName: {
      en: "Plums",
      zh: "西梅",
    },
    description: {
      en: "[Add Bread and use a Knife for Plum Croutons, or an Egg and use Mixing Bowls for Prune Whip.]",
      zh: "[配上面包制成西梅炸面包丁，或者搭配一枚蛋制成西梅糕。]",
    },
    requires: [],
    principles: [
      {
        id: "principle.heart",
        amount: 1,
      }
    ],
    serves: ["first_course"],
    type: ["dish","ingredients"],
    icon: "plums.png",
  },
  {
    id: "plum_croutons",
    displayName: {
      en: "Plum Croutons",
      zh: "西梅炸面包丁"
    },
    description: {
      en: "One should never make this with plums that are not ripe enough to eat. One is quite serious.",
      zh: "任何人都绝不该拿没熟透的梅子做这道菜。这可不是开玩笑。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["crusty_bread","plums","knife"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "plum_croutons.png",
    note: {
      en: ["* 1. For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone.","2. Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 1. 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。","2. 任何具有“刀”性向的物品都可作为刀具使用。居屋里还有其他的刀，但或许我们不该用武器做饭。"],
    }
  },
  {
    id: "poached_mackerel",
    displayName: {
      en: "Poached Mackerel",
      zh: "炖鲭鱼",
    },
    description: {
      en: "We do not poach fish in Brancrug without recalling the Turbot Crisis of 1786, when Dr Westcott caught a prodigious turbot, and required the kitchen to poach it for him 'without division'; but no vessel of sufficient size could be found to poach it entire. At last they resorted to 'alchemical assistance'. Mackerel, fortunately, requires no alchemy for its poaching.",
      zh: "我们在布兰库格炖鱼的时候，总能想到1786年的多宝鱼危机，当时威斯考特博士钓上了一条巨大的多宝鱼，要求厨房为他“不加分裂”地炖了这条鱼；但是他们找不到大小合适的容器来全须全尾地烹饪它。最终他们只能求助于“炼金术上的帮助”。还好鲭鱼在炖的时候用不到炼金术。",
    },
    requires: [{
        id: "method 1",
        requires: ["mackerel"]
      }],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.moon",
        amount: 1,
      }
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "poached_mackerel.png"
  },
  {
    id: "poire_belle_helene",
    displayName: {
      en: "Poire Belle Hélène",
      zh: "梨海伦"
    },
    description: {
      en: "A sweet dish named (of course) to celebrate Offenbach's 1865 operetta La belle Hélène. Apparently a New York production made an impression on Thirza Blake in her youth…",
      zh: "毫无疑问，这道甜品为庆祝奥芬巴赫的轻歌剧《美丽的海伦》在1865年的首演而得名。据说，此剧在纽约的演出给年轻时的蒂尔扎·布雷克留下了深刻印象……"
    },
    requires: [
      {
        id: "method 1",
        requires: ["bowl_of_sea_blest_pears"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 2,
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
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "poire_belle_helene.png"
  },
  {
    id: "poires_ys",
    displayName: {
      en: "Poires Ys",
      zh: "伊苏之梨"
    },
    description: {
      en: "Like Poire Belle Hélène, except it makes you dream of drowned sunsets.",
      zh: "恰似梨海伦，只是它会令你梦见淹溺的落日。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["pyrus_auricalcinus","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 4,
      },
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 4,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "poires_ys.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "prune_whip",
    displayName: {
      en: "Prune Whip",
      zh: "西梅糕"
    },
    description: {
      en: "Much, much tastier than it sounds.",
      zh: "比听上去美味得多。"
    },
    requires: [
      {
        id: "method 1",
        requires: ["hens_egg","plums","kitchen_bowls"]
      }
    ],
    principles: [
      {
        id: "principle.grail",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "prune_whip.png"
  },
  {
    id: "pumpkin_pie",
    displayName: {
      en: "Pumpkin Pie",
      zh: "南瓜派"
    },
    description: {
      en: "'Take a pound of pumpion and slice it, a handful of thyme, a little rosemary, and sweet marjoram stripped off the stalks, chop them small, then take cinnamon, nutmeg, pepper, and a few cloves all beaten…' - Hannah Woolley, A Gentlewoman's Companion",
      zh: "“取一磅南瓜切薄片，一把百里香，一点迷迭香，甜牛至去梗，把它们切碎，然后取肉桂、肉豆蔻、胡椒粉和几瓣丁香，全部捣碎……”——汉娜·伍利，《淑女的伴侣》"
    },
    requires: [
      {
        id: "method 1",
        requires: ["dough","pumpkin","spicing"]
      }
    ],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }],
    serves: ["main_course","pudding"],
    type: ["dish"],
    icon: "pumpkin_pie.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "pumpkin_soup",
    displayName: {
      en: "Pumpkin Soup",
      zh: "南瓜汤",
    },
    description: {
      en: "A blessed warming broth.",
      zh: "一碗被祝福的暖心浓汤。",
    },
    requires: [{
        id: "method 1",
        requires: ["dripping","pumpkin"]
      }],
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
      }
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "pumpkin_soup.png"
  },
  {
    id: "roast_beef",
    displayName: {
      en: "Roast Beef",
      zh: "烤牛肉",
    },
    description: {
      en: "Our fathers of old were robust, stout, and strong, / And kept open house, with good cheer all day long, / Which made their plump tenants rejoice in this song— / Oh! The Roast Beef of old England, And old English Roast Beef! -- Henry Fielding, The Grub Street Opera",
      zh: "“咱老祖宗结实孔武又有力，/ 敞门迎客热心肠，整日欢喜好心气 / 直叫圆润胖房客，快乐沉浸此歌里—— / 哦！老英格兰里爱吃烤牛的人儿， / 还有那悠久的英式烤牛！” ——亨利·菲尔丁，《文丐街唱游》",
    },
    requires: [{
        id: "method 1",
        requires: ["beef"]
      }],
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
        id: "principle.scale",
        amount: 2,
      }
    ],
    serves: ["main_course","ingredients"],
    type: ["dish","ingredients"],
    icon: "roast_beef.png"
  },
  {
    id: "roast_pheasant",
    displayName: {
      en: "Roast Pheasant",
      zh: "烤野鸡",
    },
    description: {
      en: "Best when roasted upside down to start, but turned right way up before the end.",
      zh: "最好先翻过来烤，但别忘了最后再翻回来。",
    },
    requires: [{
        id: "method 1",
        requires: ["pheasant"]
      }],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.rose",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "roast_pheasant.png"
  },
  {
    id: "roast_potatoes",
    displayName: {
      en: "Roast Potatoes",
      zh: "烤土豆",
    },
    description: {
      en: "You really need rosemary for roast potatoes, but fortunately, the kitchen garden at Hush House has never been short of rosemary.",
      zh: "土豆真的得配迷迭香烤才好，幸运的是，噤声居屋的菜园里从不缺迷迭香。",
    },
    requires: [{
        id: "method 1",
        requires: ["potatoes"]
      }],
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
        id: "principle.winter",
        amount: 1,
      }
    ],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "roast_potatoes.png"
  },
  {
    id: "rosehips",
    displayName: {
      en: "Rosehips",
      zh: "玫瑰果",
    },
    description: {
      en: "Berries that promise roses.",
      zh: "许诺玫瑰的浆果。",
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
      {
        id: "principle.rose",
        amount: 1,
      }
    ],
    serves: ["first_course"],
    type: ["dish","ingredients"],
    icon: "rosehips.png",
  },
  {
    id: "rosehip_jam",
    displayName: {
      en: "Rosehip Jam",
      zh: "玫瑰果酱",
    },
    description: {
      en: "Plucked from wild roses.",
      zh: "采自野生玫瑰。",
    },
    requires: [{
        id: "method 1",
        requires: ["rosehips","sugar"]
      }],
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
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      }
    ],
    serves: ["ingredients"],
    type: ["ingredients"],
    icon: "rosehip_jam.png"
  },
  {
    id: "rosehip_sponge_cake",
    displayName: {
      en: "Rosehip Sponge Cake",
      zh: "玫瑰果海绵蛋糕",
    },
    description: {
      en: "Rosa rugosa, the beach rose, is often regarded as a foreign interloper on European shores, but this cake is a strong argument for our hospitality.",
      zh: "Rosa rugosa——濒海玫瑰在欧洲的沿海地区常被视为外来入侵物种，但这块蛋糕是我们殷勤好客的有力证明。",
    },
    requires: [{
        id: "method 1",
        requires: ["cake_batter","rosehip_jam"]
      }],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.rose",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "rosehip_sponge_cake.png"
  },
  {
    id: "scrambled_egg",
    displayName: {
      en: "Scrambled Egg",
      zh: "炒蛋",
    },
    description: {
      en: "With bacon, scrambled eggs were the breakfast of Empire. In these less hegemonic times, Empire is optional; as is bacon.",
      zh: "培根配炒蛋是帝国的传统早餐。在霸权不复往日的时代，帝国可有可无；培根亦是如此。",
    },
    requires: [{
        id: "method 1",
        requires: ["butter","hens_egg"]
      }],
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
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.sky",
        amount: 1,
      }
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "scrambled_egg.png"
  },
  {
    id: "sea_pie",
    displayName: {
      en: "Sea-Pie",
      zh: "海味派",
    },
    description: {
      en: "Once a treat for sailors, hence the name. [With the Spices and Savours skill, and pears, you might recreate a legendary dish.]",
      zh: "曾是对水手们的犒赏，故此得名。[搭配香料与滋味之技艺，以及梨子，你或许可以重现一道传说中的菜肴。]",
    },
    requires: [{
        id: "method 1",
        requires: ["beef","dough"]
      }],
    principles: [
      {
        id: "principle.forge",
        amount: 1,
      }
    ],
    serves: ["main_course","ingredients"],
    type: ["dish"],
    icon: "sea_pie.png"
  },
  {
    id: "soused_mackerel",
    displayName: {
      en: "Soused Mackerel",
      zh: "醉鲭鱼",
    },
    description: {
      en: "In Scotland, where the tradition began, soused herrings are more usual, but this far south, on the Marches' edge, we make our own rules.",
      zh: "在这项传统的起源地苏格兰，醉鲱鱼要更常见，但在这遥远的南方，边地的边缘，我们自有规矩。",
    },
    requires: [{
        id: "method 1",
        requires: ["mackerel","marinated_onions"]
      }],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      }
    ],
    serves: ["first_course"],
    type: ["dish"],
    icon: "soused_mackerel.png"
  },
  {
    id: "stargazy_pie",
    displayName: {
      en: "Starygazy Pie",
      zh: "仰望星空派",
    },
    description: {
      en: "'We are all in the gutter, but some of us are looking at the stars.' - Wilde, Lady Windermere's Fan",
      zh: "“我们都在阴沟里，但仍有人仰望星空。”——王尔德，《温德米尔夫人的扇子》",
    },
    requires: [{
        id: "method 1",
        requires: ["dough","pilchards"]
      }],
    principles: [
      {
        id: "principle.forge",
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
        amount: 1,
      },
      {
        id: "principle.rose",
        amount: 1,
      },
      {
        id: "principle.scale",
        amount: 1,
      },
      {
        id: "principle.winter",
        amount: 1,
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "stargazy_pie.png"
  },
  {
    id: "steamed_spring_vegetable_pie",
    displayName: {
      en: "Steamed Spring Vegetable Pie",
      zh: "清蒸春蔬派",
    },
    description: {
      en: "Originally a product of Lord Berners' kitchens at Faringdon House; favoured by Heber-Percy, 'the Mad Boy', Berners' companion, who inlaid the floor of his changing room with pennies and built steps up to his swimming pool…",
      zh: "最初起源于伯纳斯勋爵在法林顿宅邸的厨房，深受伯纳斯的伴侣“疯小子”希伯·珀西青睐，此人在更衣室的地板上镶嵌硬币，还建造了通往泳池的台阶……",
    },
    requires: [{
        id: "method 1",
        requires: ["dough","basket_vegetables"]
      },
      {
        id: "method 2",
        requires: ["dough","sack_vegetables"]
      }
    ],
    principles: [
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
        amount: 2,
      },
      {
        id: "principle.rose",
        amount: 1,
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "steamed_spring_vegetable_pie.png"
  },
  {
    id: "stuffed_acrid_marrow",
    displayName: {
      en: "Stuffed Acrid Marrow",
      zh: "酿馅苦西葫芦",
    },
    description: {
      en: "This was not a marrow conducive to harmony. Now it's a dish for warriors.",
      zh: "它曾是不利于和谐的西葫芦，如今则是勇士们的餐点。",
    },
    requires: [{
        id: "method 1",
        requires: ["acrid_marrow","knife"]
      }],
    principles: [
      {
        id: "principle.edge",
        amount: 1,
      },
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 2,
      }
    ],
    serves: ["first_course","main_course"],
    type: ["dish"],
    icon: "stuffed_acrid_marrow.png",
    note: {
      en: ["* Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 任何具有“刀”性向的物品都可作为刀具使用。居屋里还有其他的刀，但或许我们不该用武器做饭。"],
    }
  },
  {
    id: "stuffed_dark_marrow",
    displayName: {
      en: "Stuffed Dark Marrow",
      zh: "酿馅深色西葫芦",
    },
    description: {
      en: "This was a marrow with secrets. Now it's a dish for mystes.",
      zh: "它曾是藏有秘密的西葫芦，如今则是秘教徒的餐点。",
    },
    requires: [{
        id: "method 1",
        requires: ["dark_marrow","knife"]
      }],
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
        id: "principle.nectar",
        amount: 2,
      }
    ],
    serves: ["first_course","main_course"],
    type: ["dish"],
    icon: "stuffed_dark_marrow.png",
    note: {
      en: ["* Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 任何具有“刀”性向的物品都可作为刀具使用。居屋里还有其他的刀，但或许我们不该用武器做饭。"],
    }
  },
  {
    id: "stuffed_golden_marrow",
    displayName: {
      en: "Stuffed Golden Marrow",
      zh: "酿馅金西葫芦",
    },
    description: {
      en: "This marrow was accounted a beauty among its kind. Now it's a dish for those who understand fidelity.",
      zh: "它曾被视作西葫芦中的珍品，如今则是那些懂得忠诚之人的餐点。",
    },
    requires: [{
        id: "method 1",
        requires: ["golden_marrow","knife"]
      }],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.lantern",
        amount: 1,
      },
      {
        id: "principle.nectar",
        amount: 2,
      }
    ],
    serves: ["first_course","main_course"],
    type: ["dish"],
    icon: "stuffed_golden_marrow.png",
    note: {
      en: ["* Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 任何具有“刀”性向的物品都可作为刀具使用。居屋里还有其他的刀，但或许我们不该用武器做饭。"],
    }
  },
  {
    id: "stuffed_pale_marrow",
    displayName: {
      en: "Stuffed Pale Marrow",
      zh: "酿馅苍白西葫芦",
    },
    description: {
      en: "This was a marrow redolent of sorrow. Now it's a dish to comfort the damned.",
      zh: "它曾是让人忆起哀痛之事的西葫芦。如今则是安慰罪恶之人的餐点。",
    },
    requires: [{
        id: "method 1",
        requires: ["pale_marrow","knife"]
      }],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 2,
      },
      {
        id: "principle.winter",
        amount: 1,
      }
    ],
    serves: ["first_course","main_course"],
    type: ["dish"],
    icon: "stuffed_pale_marrow.png",
    note: {
      en: ["* Any object with the aspect of Knife can be used as a knife. There are other knives in the Hush House, but perhaps we shouldn't be cooking with weapons."],
      zh: ["* 任何具有“刀”性向的物品都可作为刀具使用。居屋里还有其他的刀，但或许我们不该用武器做饭。"],
    }

  },
  {
    id: "toffee_pudding",
    displayName: {
      en: "Toffee Pudding",
      zh: "太妃糖布丁",
    },
    description: {
      en: "Decadent in summer, comforting in winter.",
      zh: "夏日的放纵，冬季的抚慰。",
    },
    requires: [{
        id: "method 1",
        requires: ["crusty_bread","creamed_sugar"]
      }],
    principles: [
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.heart",
        amount: 2,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "toffee_pudding.png",
    note: {
      en: ["* For simplicity, all recipes that require bread use the craftable Crusty Bread. Let's leave that one precious Pillas Oat-Bread alone."],
      zh: ["* 在所有需要面包的菜肴中，本菜谱统一采用可制作的硬皮面包。放过那块独一无二的小莜麦面包吧。"],
    },

  },
  {
    id: "vegetable_stew",
    displayName: {
      en: "Vegetable Stew",
      zh: "炖蔬菜",
    },
    description: {
      en: "Unexciting, but also unobjectionable.",
      zh: "平淡无奇，但也无可指摘。",
    },
    requires: [{
        id: "method 1",
        requires: ["basket_vegetables"]
      },
      {
        id: "method 2",
        requires: ["sack_vegetables"]
      }
    ],
    principles: [
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
      }
    ],
    serves: ["main_course"],
    type: ["dish"],
    icon: "vegetable_stew.png"
  },
  {
    id: "walls_of_ys",
    displayName: {
      en: "Walls-of-Ys",
      zh: "伊苏之墙",
    },
    description: {
      en: "A frankly insensitive name that commemorates the inundation of that fabled city.",
      zh: "坦率地说，这是一个相当无情的名字，用以纪念那座传说之城的沉没。",
    },
    requires: [{
        id: "method 1",
        requires: ["meringue","pyrus_auricalcinus","spicing"]
      }],
    principles: [
      {
        id: "principle.forge",
        amount: 4,
      },
      {
        id: "principle.grail",
        amount: 2,
      },
      {
        id: "principle.knock",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 4,
      },
      {
        id: "principle.winter",
        amount: 1,
      }
    ],
    serves: ["pudding"],
    type: ["dish"],
    icon: "walls_of_ys.png",
    note: {
      en: ["* The Spices & Savours skill can also be used as spicing."],
      zh: ["* “香料与滋味”技能也可以作为香料使用。"]
    }
  },
  {
    id: "fshire_pudding",
    displayName: {
      en: "Yorkshire Pudding",
      zh: "约克郡布丁",
    },
    description: {
      en: "Eggy, creamy, crispy, and the eternal supporting character in a Sunday roast. [To the similarly eternal confusion of English speakers who are not British, Yorkshire Pudding is not sweet and cannot be served for the Pudding course.]",
      zh: "蛋香，奶油香，口感松脆，周日烤肉中亘古不变的配角。[那些并非英国人的英语使用者总是会为此倍感疑惑：约克郡布丁既非甜点，也不能作为布丁提供给访客。]",
    },
    requires: [{
        id: "method 1",
        requires: ["batter","dripping","kitchen_bowls"]
      }],
    principles: [
      {
        id: "principle.heart",
        amount: 2,
      },
      {
        id: "principle.nectar",
        amount: 1,
      }
    ],
    serves: ["side_dish"],
    type: ["dish"],
    icon: "yorkshire_pudding.png"
  },
]