import { IPokemon } from "../../types";

export const bulbasaur: IPokemon[] = [
  {
    number: "1",
    name: "Bulbasaur",
    species: "Seed",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Overgrow"],
      hidden: ["Chlorophyll"]
    },
    eggGroups: ["Monster", "Grass"],
    gender: [87.5, 12.5],
    height: "2'04\"",
    weight: "15.2 lbs.",
    family: {
      id: 1,
      evolutionStage: 1,
      evolutionLine: [
        {
          name: "Bulbasaur",
          number: "1",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/1.png"
        },
        {
          name: "Ivysaur",
          number: "2",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/2.png"
        },
        {
          name: "Venusaur",
          number: "3",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/3.png"
        }
      ]
    },
    starter: true,
    legendary: false,
    mythical: false,
    ultraBeast: false,
    mega: false,
    gen: 1,
    sprite: "https://pokeres.bastionbot.org/images/pokemon/1.png",
    description:
      "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.",
    palettes: {
      vibrant: "132,204,180",
      darkVibrant: "38.86551724137931,93.7344827586207,75.4448275862069",
      lightVibrant: "148,211,181",
      muted: "91,156,115",
      darkMuted: "51,92,79",
      lightMuted: "160,200,182"
    },
    previous: {},
    next: {
      name: "Ivysaur",
      number: "2",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/2.png"
    }
  }
];
