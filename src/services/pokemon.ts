import api, { getApiPath } from "../api";
import { IPokemon, IPreviewPokemon } from "../types";
import {
  buildFamily,
  extractPalettes,
  findFullEvolutionLine,
  formatAbility,
  formatEggGroup,
  formatHeight,
  formatPokemonName,
  formatType,
  formatWeight,
  getEnglishDescription,
  getEnglishGenus,
  getGenderDistribution,
  getGenerationNumber,
  getSpriteUrl,
  isMegaForm,
  isStarterPokemon,
  isUltraBeast
} from "../utils/pokemonFormat";

interface PokeApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default?: string | null;
    other?: {
      "official-artwork"?: { front_default?: string | null };
    };
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  species: { name: string; url: string };
}

interface PokeApiSpecies {
  id: number;
  name: string;
  genera: { genus: string; language: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  gender_rate: number;
  egg_groups: { name: string }[];
  is_legendary: boolean;
  is_mythical: boolean;
  generation: { name: string };
  evolution_chain: { url: string };
  varieties: { is_default: boolean; pokemon: { name: string; url: string } }[];
}

interface EvolutionNode {
  species: { name: string; url: string };
  evolves_to: EvolutionNode[];
}

const fetchPreview = async (id: number): Promise<IPreviewPokemon> => {
  if (id < 1) return {};

  try {
    const { data } = await api.get<PokeApiPokemon>(`/pokemon/${id}`);
    return {
      name: formatPokemonName(data.name),
      number: data.id.toString(),
      sprite: getSpriteUrl(data)
    };
  } catch {
    return {};
  }
};

const transformPokemon = async (
  pokemon: PokeApiPokemon,
  species: PokeApiSpecies,
  evolutionChain: EvolutionNode,
  previous: IPreviewPokemon,
  next: IPreviewPokemon,
  isDefault: boolean
): Promise<IPokemon> => {
  const primaryType = pokemon.types[0]?.type.name;
  const sprite = getSpriteUrl(pokemon);
  const evolutionPath = findFullEvolutionLine(evolutionChain, species.name);
  const isMega = isMegaForm(pokemon.name);
  const normalAbilities = pokemon.abilities
    .filter(ability => !ability.is_hidden)
    .map(ability => formatAbility(ability.ability.name));
  const hiddenAbilities = pokemon.abilities
    .filter(ability => ability.is_hidden)
    .map(ability => formatAbility(ability.ability.name));

  return {
    number: species.id.toString(),
    name: formatPokemonName(pokemon.name),
    species: getEnglishGenus(species.genera),
    types: pokemon.types.map(entry => formatType(entry.type.name)),
    abilities: {
      normal: normalAbilities,
      hidden: hiddenAbilities
    },
    eggGroups: species.egg_groups.map(group => formatEggGroup(group.name)),
    gender: getGenderDistribution(species.gender_rate),
    height: formatHeight(pokemon.height),
    weight: formatWeight(pokemon.weight),
    family: buildFamily(evolutionPath),
    starter: isStarterPokemon(species.id, isDefault),
    legendary: species.is_legendary,
    mythical: species.is_mythical,
    ultraBeast: isUltraBeast(species.name),
    mega: isMega,
    isDefault,
    gen: getGenerationNumber(species.generation.name),
    sprite,
    description: getEnglishDescription(species.flavor_text_entries),
    palettes: await extractPalettes(sprite, primaryType),
    previous,
    next
  };
};

export const fetchPokemonByNumber = async (
  pokemonNumber: string
): Promise<IPokemon[]> => {
  const speciesId = parseInt(pokemonNumber, 10);
  const { data: species } = await api.get<PokeApiSpecies>(
    `/pokemon-species/${speciesId}`
  );
  const { data: evolutionChainData } = await api.get<{ chain: EvolutionNode }>(
    getApiPath(species.evolution_chain.url)
  );
  const [previous, next] = await Promise.all([
    fetchPreview(speciesId - 1),
    fetchPreview(speciesId + 1)
  ]);

  const forms = await Promise.all(
    species.varieties.map(async variety => {
      const { data: pokemon } = await api.get<PokeApiPokemon>(
        getApiPath(variety.pokemon.url)
      );

      return transformPokemon(
        pokemon,
        species,
        evolutionChainData.chain,
        previous,
        next,
        variety.is_default
      );
    })
  );

  return forms;
};
