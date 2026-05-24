import { reset } from "redux-form";

import { pokemonNames } from "../assets/ts/name";
import { fetchPokemonByNumber } from "../services/pokemon";

export const initRandomPokemon = () => async (
  dispatch: Function,
  getState: Function
) => {
  if (getState().pokemon.currentPokemon) return;

  const randomIndex = Math.floor(Math.random() * pokemonNames.length) + 1;
  await dispatch(changePokemon(randomIndex.toString()));
};

export const changePokemon = (pokemonIndex: string) => async (
  dispatch: Function,
  getState: Function
) => {
  if (getState().pokemon.pokemons[pokemonIndex]) {
    dispatch(reset("searchPokemon"));

    return dispatch({
      type: "CHANGE_POKEMON",
      payload: getState().pokemon.pokemons[pokemonIndex]
    });
  }

  dispatch({ type: "START_LOADING" });

  try {
    const payload = await fetchPokemonByNumber(pokemonIndex);
    dispatch({ type: "CHANGE_POKEMON", payload });
    dispatch(reset("searchPokemon"));
  } finally {
    dispatch({ type: "FINISH_LOADING" });
  }
};

export const changeCurrentForm = (index: number) => ({
  type: "CHANGE_SELECTED_FORM",
  payload: index
});
