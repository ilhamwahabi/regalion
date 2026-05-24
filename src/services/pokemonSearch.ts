import { getPokedex, getResourceIdFromUrl } from "../lib/pokedex";

interface PokeApiPokemon {
  species: { url: string };
}

interface PokeApiListResponse {
  count: number;
  results: { url: string }[];
}

export const lookupPokemonByName = async (
  query: string
): Promise<string | null> => {
  const trimmed = query.trim();
  if (!trimmed) return null;

  try {
    const pokedex = await getPokedex();
    const pokemon = (await pokedex.getPokemonByName(
      trimmed.toLowerCase()
    )) as PokeApiPokemon;
    return getResourceIdFromUrl(pokemon.species.url).toString();
  } catch {
    return null;
  }
};

export const getRandomSpeciesId = async (): Promise<string> => {
  const pokedex = await getPokedex();
  const list = (await pokedex.getPokemonSpeciesList()) as PokeApiListResponse;
  const randomOffset = Math.floor(Math.random() * list.count);
  const page = (await pokedex.getPokemonSpeciesList({
    offset: randomOffset,
    limit: 1
  })) as PokeApiListResponse;

  return getResourceIdFromUrl(page.results[0].url).toString();
};
