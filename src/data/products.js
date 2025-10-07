import creamy from "../assets/product-photos/creamy.png";
import crunchy from "../assets/product-photos/crunchy.png";
import honey from "../assets/product-photos/honey.png";
import chocolate from "../assets/product-photos/chocolate.png";
import coconut from "../assets/product-photos/coconut.png";
import chilli from "../assets/product-photos/chilli.png";
import peanutSnacks from "../assets/product-photos/peanut-snacks.png";
import peanutPuffs from "../assets/product-photos/peanut-puffs.png";
import nutzyLogo from "/nutzy-logo.png";

import creamyNutrition from "../assets/product-photos/creamy-nutrition.png";
import crunchyNutrition from "../assets/product-photos/crunchy-nutrition.png";
import honeyNutrition from "../assets/product-photos/honey-nutrition.png";
import chocolateNutrition from "../assets/product-photos/chocolate-nutrition.png";
import coconutNutrition from "../assets/product-photos/coconut-nutrition.png";
import chilliNutrition from "../assets/product-photos/chilli-nutrition.png";
import snacksNutrition from "../assets/product-photos/snacks-nutrition.png";
import puffsNutrition from "../assets/product-photos/puffs-nutrition.png";

export const products = [
  {
    slug: "creamy-peanut-butter",
    name: "Creamy Peanut Butter",
    brandlogo: nutzyLogo,
    productimage: creamy,
    description:
      "Our creamy peanut butter is smooth, delicious, and packed with protein — perfect for spreading on toast, swirling into smoothies, or eating straight from the jar.",
    availablesizes: ["Sachet - 15g", "Jar - 227g", "Jar- 510g"],
    cta: "Grab Yours Today",
    ingredients:
      "Roasted peanuts (99%), salt. Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: creamyNutrition,
  },
  {
    slug: "crunchy-peanut-butter",
    name: "Crunchy Peanut Butter",
    brandlogo: nutzyLogo,
    productimage: crunchy,
    description:
      "A hearty blend of creamy peanut butter and real nutty crunch, perfect for fueling busy days with texture and taste.",
    availablesizes: ["Sachet - 15g", "Jar - 227g", "Jar- 510g"],
    cta: "Buy Now",
    ingredients:
      "Roasted peanuts (99%), salt. Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: crunchyNutrition,
  },
  {
    slug: "honey-peanut-butter",
    name: "Honey Peanut Butter",
    brandlogo: nutzyLogo,
    productimage: honey,
    description:
      "A smooth and naturally sweet peanut butter made with real honey — a perfect pairing of protein and sweetness.",
    availablesizes: ["227g", "510g"],
    cta: "Order Now",
    ingredients:
      "Roasted peanuts (95%), honey (5%). Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: honeyNutrition,
  },
  {
    slug: "chocolate-peanut-butter",
    name: "Chocolate Peanut Butter",
    brandlogo: nutzyLogo,
    productimage: chocolate,
    description:
      "A decadent fusion of rich chocolate and smooth peanut butter — perfect for spreads, desserts, or a quick spoonful treat.",
    availablesizes: ["227g", "510g"],
    cta: "Get Yours",
    ingredients:
      "Roasted peanuts (85%), cocoa (10%), sugar, salt. Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: chocolateNutrition,
  },
  {
    slug: "coconut-peanut-butter",
    name: "Coconut Peanut Butter",
    brandlogo: nutzyLogo,
    productimage: coconut,
    description:
      "A tropical twist on the classic — creamy peanut butter blended with real coconut for a unique flavor experience.",
    availablesizes: ["227g", "510g"],
    cta: "Shop Now",
    ingredients:
      "Roasted peanuts (90%), coconut (10%). Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: coconutNutrition,
  },
  {
    slug: "chilli-peanut-butter",
    name: "Chilli Peanut Dip",
    brandlogo: nutzyLogo,
    productimage: chilli,
    description:
      "A bold, spicy twist on peanut butter — perfect as a dip, spread, or flavorful ingredient in savory dishes.",
    availablesizes: ["227g", "510g"],
    cta: "Try It Today",
    ingredients:
      "Roasted peanuts (90%), chilli (5%), salt, spices. Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: chilliNutrition,
  },
  {
    slug: "crispy-peanut-snacks",
    name: "Crispy Peanut Snacks",
    brandlogo: nutzyLogo,
    productimage: peanutSnacks,
    description:
      "Crunchy peanuts roasted to perfection — a protein-packed, on-the-go snack you’ll love any time of day.",
    availablesizes: [
      "Family Pack - 400g",
      "Jar - 180g",
      "Senior Packs - 30g",
      "Junior Packs - 15g",
    ],
    cta: "Snack Now",
    ingredients:
      "Peanuts (99%), salt. Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: snacksNutrition,
  },
  {
    slug: "peanut-puffs",
    name: "Peanut Puffs",
    brandlogo: nutzyLogo,
    productimage: peanutPuffs,
    description:
      "Puffed corn coated with delicious peanut butter — a tasty and nutritious snack for both kids and adults.",
    availablesizes: ["Regular Pack - 30g", "Mini Pack - 15g"],
    cta: "Find in Stores",
    ingredients:
      "Corn (70%), peanut butter (30%). Contains naturally occurring sugars. May contain traces of tree nuts.",
    nutritionimage: puffsNutrition,
  },
];
