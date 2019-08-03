export interface IAbilities {
  normal: string[];
  hidden: string[];
}

export interface IEvolutionLine {
  name: string;
  number: string;
  sprite: string;
}

export interface IFamily {
  id: number;
  evolutionStage: number;
  evolutionLine: IEvolutionLine[];
}

export interface IPreviewPokemon {
  name?: string;
  number?: string;
  sprite?: string;
}

export interface IPalettes {
  vibrant: string;
  darkVibrant: string;
  lightVibrant: string;
  muted: string;
  darkMuted: string;
  lightMuted: string;
}

export interface IPokemon {
  number: string;
  name: string;
  species: string;
  types: string[];
  abilities: IAbilities;
  eggGroups: string[];
  gender: number[];
  height: string;
  weight: string;
  family: IFamily;
  starter: boolean;
  legendary: boolean;
  mythical: boolean;
  ultraBeast: boolean;
  mega: boolean;
  gen: number;
  sprite: string;
  description: string;
  palettes: IPalettes;
  previous: IPreviewPokemon;
  next: IPreviewPokemon;
}
