import { IPokemon } from "../../types";

export const metagross: IPokemon[] = [
  {
    number: "376",
    name: "Metagross",
    species: "Iron Leg",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Clear Body"],
      hidden: ["Light Metal"]
    },
    eggGroups: ["Mineral"],
    gender: [],
    height: "5'03\"",
    weight: "1212.5 lbs.",
    family: {
      id: 192,
      evolutionStage: 3,
      evolutionLine: [
        {
          name: "Beldum",
          number: "374",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/374.png"
        },
        {
          name: "Metang",
          number: "375",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/375.png"
        },
        {
          name: "Metagross",
          number: "376",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/376.png"
        }
      ]
    },
    starter: false,
    legendary: false,
    mythical: false,
    ultraBeast: false,
    mega: false,
    gen: 3,
    sprite: "https://pokeres.bastionbot.org/images/pokemon/376.png",
    description:
      "METAGROSS has four brains in total. Combined, the four brains can breeze through difficult calculations faster than a supercomputer. This POKéMON can float in the air by tucking in its four legs",
    palettes: {
      vibrant: "209,80,88",
      darkVibrant: "81,34,39",
      lightVibrant: "228,132,140",
      muted: "93,140,164",
      darkMuted: "59,86,105",
      lightMuted: "153,187,203"
    },
    previous: {
      name: "Metang",
      number: "375",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/375.png"
    },
    next: {
      name: "Regirock",
      number: "377",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/377.png"
    }
  },
  {
    number: "376",
    name: "Mega Metagross",
    species: "Iron Leg",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Tough Claws"],
      hidden: ["Light Metal"]
    },
    eggGroups: ["Mineral"],
    gender: [],
    height: "8'02\"",
    weight: "2078.7 lbs.",
    family: {
      id: 192,
      evolutionStage: 3,
      evolutionLine: [
        {
          name: "Beldum",
          number: "374",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/374.png"
        },
        {
          name: "Metang",
          number: "375",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/375.png"
        },
        {
          name: "Mega Metagross",
          number: "376",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/376-mega.png"
        }
      ]
    },
    starter: false,
    legendary: false,
    mythical: false,
    ultraBeast: false,
    mega: true,
    gen: 6,
    sprite: "https://pokeres.bastionbot.org/images/pokemon/376-mega.png",
    description:
      "METAGROSS has four brains in total. Combined, the four brains can breeze through difficult calculations faster than a supercomputer. This POKéMON can float in the air by tucking in its four legs",
    palettes: {
      vibrant: "198,89,58",
      darkVibrant: "127,58,42",
      lightVibrant: "249,209,161",
      muted: "167,127,90",
      darkMuted: "63,77,83",
      lightMuted: "154,192,207"
    },
    previous: {
      name: "Metang",
      number: "375",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/375.png"
    },
    next: {
      name: "Regirock",
      number: "377",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/377.png"
    }
  }
];
