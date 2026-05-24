import { reset } from "redux-form";

import { fetchPokemonByNumber } from "../services/pokemon";
import {
  getRandomSpeciesId,
  lookupPokemonByName
} from "../services/pokemonSearch";

export const initRandomPokemon = () => async (
  dispatch: Function,
  getState: Function
) => {
  if (getState().pokemon.currentPokemon) return;

  const randomId = await getRandomSpeciesId();
  await dispatch(changePokemon(randomId));
};

const applyPokemonChange = async (
  dispatch: Function,
  getState: Function,
  pokemonIndex: string
) => {
  if (getState().pokemon.pokemons[pokemonIndex]) {
    dispatch(reset("searchPokemon"));

    return dispatch({
      type: "CHANGE_POKEMON",
      payload: getState().pokemon.pokemons[pokemonIndex]
    });
  }

  const payload = await fetchPokemonByNumber(pokemonIndex);
  dispatch({ type: "CHANGE_POKEMON", payload });
  dispatch(reset("searchPokemon"));
};

export const changePokemon = (pokemonIndex: string) => async (
  dispatch: Function,
  getState: Function
) => {
  if (getState().pokemon.pokemons[pokemonIndex]) {
    return applyPokemonChange(dispatch, getState, pokemonIndex);
  }

  dispatch({ type: "START_LOADING" });

  try {
    await applyPokemonChange(dispatch, getState, pokemonIndex);
  } finally {
    dispatch({ type: "FINISH_LOADING" });
  }
};

export const searchPokemonByName = (query: string) => async (
  dispatch: Function,
  getState: Function
): Promise<string | null> => {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const { pokemons, currentPokemon, currentForm } = getState().pokemon;
  const currentName = pokemons[currentPokemon]?.[currentForm]?.name;
  if (currentName?.toLowerCase() === trimmed.toLowerCase()) return null;

  dispatch({ type: "START_LOADING" });

  try {
    const speciesId = await lookupPokemonByName(trimmed);
    if (!speciesId) return "Invalid Pokémon Name";

    await applyPokemonChange(dispatch, getState, speciesId);
    return null;
  } finally {
    dispatch({ type: "FINISH_LOADING" });
  }
};

export const changeCurrentForm = (index: number) => ({
  type: "CHANGE_SELECTED_FORM",
  payload: index
});
