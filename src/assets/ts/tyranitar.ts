import { IPokemon } from "../../types";

export const tyranitar: IPokemon[] = [
  {
    number: "248",
    name: "Tyranitar",
    species: "Armor",
    types: ["Rock", "Dark"],
    abilities: {
      normal: ["Sand Stream"],
      hidden: ["Unnerve"]
    },
    eggGroups: ["Monster"],
    gender: [50, 50],
    height: "6'07\"",
    weight: "445.3 lbs.",
    family: {
      id: 126,
      evolutionStage: 3,
      evolutionLine: [
        {
          name: "Larvitar",
          number: "246",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/246.png"
        },
        {
          name: "Pupitar",
          number: "247",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/247.png"
        },
        {
          name: "Tyranitar",
          number: "248",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/248.png"
        }
      ]
    },
    starter: false,
    legendary: false,
    mythical: false,
    ultraBeast: false,
    mega: false,
    gen: 2,
    sprite: "https://pokeres.bastionbot.org/images/pokemon/248.png",
    description:
      "In just one of its mighty hands, it has the power to make the ground shake and mountains crumble.",
    palettes: {
      vibrant: "179.25742574257424,80.79207920792078,75.74257425742576",
      darkVibrant: "93.21386138613862,42.01188118811881,39.38613861386139",
      lightVibrant: "225,186,184",
      muted: "125,134,120",
      darkMuted: "70,77,59",
      lightMuted: "188,204,165"
    },
    previous: {
      name: "Pupitar",
      number: "247",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/247.png"
    },
    next: {
      name: "Lugia",
      number: "249",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/249.png"
    }
  },
  {
    number: "248",
    name: "Mega Tyranitar",
    species: "Armor",
    types: ["Rock", "Dark"],
    abilities: {
      normal: ["Sand Stream"],
      hidden: ["Unnerve"]
    },
    eggGroups: ["Monster"],
    gender: [50, 50],
    height: "8'02\"",
    weight: "562.2 lbs.",
    family: {
      id: 126,
      evolutionStage: 3,
      evolutionLine: [
        {
          name: "Larvitar",
          number: "246",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/246.png"
        },
        {
          name: "Pupitar",
          number: "247",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/247.png"
        },
        {
          name: "Mega Tyranitar",
          number: "248",
          sprite: "https://pokeres.bastionbot.org/images/pokemon/248-mega.png"
        }
      ]
    },
    starter: false,
    legendary: false,
    mythical: false,
    ultraBeast: false,
    mega: true,
    gen: 6,
    sprite: "https://pokeres.bastionbot.org/images/pokemon/248-mega.png",
    description:
      "In just one of its mighty hands, it has the power to make the ground shake and mountains crumble.",
    palettes: {
      vibrant: "211,90,76",
      darkVibrant: "124,63,58",
      lightVibrant: "224,140,124",
      muted: "175,100,84",
      darkMuted: "78,81,52",
      lightMuted: "183,203,158"
    },
    previous: {
      name: "Pupitar",
      number: "247",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/247.png"
    },
    next: {
      name: "Lugia",
      number: "249",
      sprite: "https://pokeres.bastionbot.org/images/pokemon/249.png"
    }
  }
];
