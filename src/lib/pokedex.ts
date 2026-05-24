import { Pokedex } from "pokeapi-js-wrapper";

let pokedexPromise: Promise<Pokedex> | null = null;

export const getPokedex = (): Promise<Pokedex> => {
  if (!pokedexPromise) {
    pokedexPromise = Pokedex.init({
      cache: true,
      cacheImages: true,
      swLocation: "/"
    });
  }
  return pokedexPromise;
};

export const getResourceIdFromUrl = (url: string): number => {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? parseInt(match[1], 10) : 0;
};
