import { IPalettes } from "../types";

const STARTER_IDS = new Set([
  1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650,
  653, 656, 722, 725, 728, 810, 813, 816
]);

const ULTRA_BEASTS = new Set([
  "nihilego",
  "buzzwole",
  "pheromosa",
  "xurkitree",
  "celesteela",
  "kartana",
  "guzzlord",
  "poipole",
  "naganadel",
  "stakataka",
  "blacephalon"
]);

const TYPE_PALETTES: Record<string, IPalettes> = {
  normal: {
    vibrant: "168,168,120",
    darkVibrant: "96,96,72",
    lightVibrant: "200,200,160",
    muted: "140,140,120",
    darkMuted: "80,80,70",
    lightMuted: "180,180,160"
  },
  grass: {
    vibrant: "132,204,180",
    darkVibrant: "39,94,75",
    lightVibrant: "148,211,181",
    muted: "91,156,115",
    darkMuted: "51,92,79",
    lightMuted: "160,200,182"
  },
  fire: {
    vibrant: "240,128,72",
    darkVibrant: "180,60,40",
    lightVibrant: "255,180,120",
    muted: "200,120,80",
    darkMuted: "100,50,40",
    lightMuted: "220,160,130"
  },
  water: {
    vibrant: "72,144,240",
    darkVibrant: "40,80,160",
    lightVibrant: "120,180,255",
    muted: "80,120,180",
    darkMuted: "40,60,100",
    lightMuted: "140,180,220"
  },
  electric: {
    vibrant: "248,224,80",
    darkVibrant: "180,140,20",
    lightVibrant: "255,240,140",
    muted: "200,180,80",
    darkMuted: "120,100,40",
    lightMuted: "240,220,160"
  },
  default: {
    vibrant: "160,160,160",
    darkVibrant: "80,80,80",
    lightVibrant: "200,200,200",
    muted: "130,130,130",
    darkMuted: "60,60,60",
    lightMuted: "180,180,180"
  }
};

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const formatPokemonName = (name: string): string => {
  const parts = name.split("-");
  const megaIndex = parts.indexOf("mega");

  if (megaIndex !== -1) {
    const base = parts
      .slice(0, megaIndex)
      .map(capitalize)
      .join(" ");
    const variant = parts[megaIndex + 1];

    if (variant === "x" || variant === "y") {
      return `Mega ${base} ${variant.toUpperCase()}`;
    }

    return `Mega ${base}`;
  }

  return parts.map(capitalize).join(" ");
};

export const formatType = (type: string) => capitalize(type);

export const formatAbility = (ability: string) =>
  ability
    .split("-")
    .map(capitalize)
    .join(" ");

export const formatEggGroup = (group: string) =>
  group
    .split("-")
    .map(capitalize)
    .join(" ");

export const formatHeight = (decimeters: number): string => {
  const totalInches = Math.round(decimeters * 3.937);
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return `${feet}'${inches.toString().padStart(2, "0")}"`;
};

export const formatWeight = (hectograms: number): string => {
  const pounds = hectograms / 10 / 0.453592;
  return `${pounds.toFixed(1)} lbs.`;
};

export const getGenerationNumber = (generationName: string): number => {
  const match = generationName.match(/generation-([ivx]+)/i);
  if (!match) return 1;

  const romanMap: Record<string, number> = {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
    vi: 6,
    vii: 7,
    viii: 8,
    ix: 9
  };

  return romanMap[match[1].toLowerCase()] || 1;
};

export const getSpriteUrl = (pokemon: {
  id: number;
  sprites: {
    front_default?: string | null;
    other?: {
      "official-artwork"?: { front_default?: string | null };
    };
  };
}) =>
  pokemon.sprites.other?.["official-artwork"]?.front_default ||
  pokemon.sprites.front_default ||
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

export const getSpeciesIdFromUrl = (url: string): number =>
  parseInt(url.split("/").filter(Boolean).pop() || "0", 10);

export const getGenderDistribution = (genderRate: number): number[] => {
  if (genderRate === -1) return [];
  if (genderRate === 0) return [100, 0];
  if (genderRate === 8) return [0, 100];

  const female = (genderRate / 8) * 100;
  return [100 - female, female];
};

export const getEnglishGenus = (genera: { genus: string; language: { name: string } }[]) => {
  const english = genera.find(entry => entry.language.name === "en");
  return english ? capitalize(english.genus) : "";
};

export const getEnglishDescription = (
  entries: { flavor_text: string; language: { name: string } }[]
) => {
  const englishEntries = entries.filter(entry => entry.language.name === "en");
  const latest = englishEntries[englishEntries.length - 1];

  return latest
    ? latest.flavor_text.replace(/\f/g, " ").replace(/\s+/g, " ").trim()
    : "";
};

export const getDefaultPalette = (primaryType?: string): IPalettes =>
  TYPE_PALETTES[primaryType || "default"] || TYPE_PALETTES.default;

const rgbString = (r: number, g: number, b: number) => `${r},${g},${b}`;

const darken = (r: number, g: number, b: number, amount: number) =>
  rgbString(
    Math.max(0, Math.round(r * (1 - amount))),
    Math.max(0, Math.round(g * (1 - amount))),
    Math.max(0, Math.round(b * (1 - amount)))
  );

const lighten = (r: number, g: number, b: number, amount: number) =>
  rgbString(
    Math.min(255, Math.round(r + (255 - r) * amount)),
    Math.min(255, Math.round(g + (255 - g) * amount)),
    Math.min(255, Math.round(b + (255 - b) * amount))
  );

export const extractPalettes = async (
  imageUrl: string,
  fallbackType?: string
): Promise<IPalettes> => {
  if (typeof Image === "undefined") {
    return getDefaultPalette(fallbackType);
  }

  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const size = 48;
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");

        if (!context) {
          resolve(getDefaultPalette(fallbackType));
          return;
        }

        context.drawImage(img, 0, 0, size, size);
        const { data } = context.getImageData(0, 0, size, size);

        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;
        let maxSaturation = 0;
        let vibrantR = 0;
        let vibrantG = 0;
        let vibrantB = 0;

        for (let index = 0; index < data.length; index += 4) {
          const red = data[index];
          const green = data[index + 1];
          const blue = data[index + 2];
          const alpha = data[index + 3];

          if (alpha < 128) continue;

          r += red;
          g += green;
          b += blue;
          count += 1;

          const max = Math.max(red, green, blue);
          const min = Math.min(red, green, blue);
          const saturation = max === 0 ? 0 : (max - min) / max;

          if (saturation > maxSaturation) {
            maxSaturation = saturation;
            vibrantR = red;
            vibrantG = green;
            vibrantB = blue;
          }
        }

        if (!count) {
          resolve(getDefaultPalette(fallbackType));
          return;
        }

        const avgR = Math.round(r / count);
        const avgG = Math.round(g / count);
        const avgB = Math.round(b / count);

        resolve({
          vibrant: rgbString(vibrantR, vibrantG, vibrantB),
          darkVibrant: darken(vibrantR, vibrantG, vibrantB, 0.35),
          lightVibrant: lighten(vibrantR, vibrantG, vibrantB, 0.35),
          muted: rgbString(avgR, avgG, avgB),
          darkMuted: darken(avgR, avgG, avgB, 0.35),
          lightMuted: lighten(avgR, avgG, avgB, 0.35)
        });
      } catch {
        resolve(getDefaultPalette(fallbackType));
      }
    };

    img.onerror = () => resolve(getDefaultPalette(fallbackType));
    img.src = imageUrl;
  });
};

interface EvolutionNode {
  species: { name: string; url: string };
  evolves_to: EvolutionNode[];
}

export const findEvolutionPath = (
  node: EvolutionNode,
  targetSpecies: string,
  path: EvolutionNode[] = []
): EvolutionNode[] | null => {
  const currentPath = [...path, node];

  if (node.species.name === targetSpecies) {
    return currentPath;
  }

  for (const child of node.evolves_to) {
    const result = findEvolutionPath(child, targetSpecies, currentPath);
    if (result) return result;
  }

  return null;
};

export const isMegaForm = (name: string) => name.includes("-mega");

export const isStarterPokemon = (speciesId: number, isDefault: boolean) =>
  isDefault && STARTER_IDS.has(speciesId);

export const isUltraBeast = (speciesName: string) =>
  ULTRA_BEASTS.has(speciesName);

export const buildFamily = (
  evolutionPath: EvolutionNode[],
  currentFormName: string,
  currentSprite: string,
  currentIsMega: boolean
) => {
  const evolutionLine = evolutionPath.map((node, index) => {
    const isLast = index === evolutionPath.length - 1;
    const speciesId = getSpeciesIdFromUrl(node.species.url);

    return {
      name: isLast && currentIsMega
        ? formatPokemonName(currentFormName)
        : formatPokemonName(node.species.name),
      number: speciesId.toString(),
      sprite:
        isLast && currentIsMega
          ? currentSprite
          : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${speciesId}.png`
    };
  });

  return {
    id: getSpeciesIdFromUrl(evolutionPath[0].species.url),
    evolutionStage: evolutionPath.length,
    evolutionLine
  };
};
