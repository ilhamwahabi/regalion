import { reset } from "redux-form";

import api from "../api";

export const changePokemon = (pokemonIndex: string) => async (
  dispatch: Function,
  getState: Function
) => {
  // console.log(getState().pokemon);
  console.log(getState().pokemon.pokemons);
  console.log(pokemonIndex);
  console.log(Array.isArray(getState().pokemon.pokemons[pokemonIndex]));

  if (getState().pokemon.pokemons[pokemonIndex]) {
    return dispatch({
      type: "CHANGE_POKEMON",
      payload: getState().pokemon.pokemons[pokemonIndex]
    });
  }

  dispatch({ type: "START_LOADING" });

  const response = await api.get(`/${pokemonIndex}`);
  dispatch({ type: "CHANGE_POKEMON", payload: response.data });

  dispatch(reset("searchPokemon"));
  dispatch({ type: "FINISH_LOADING" });
};

export const changeCurrentForm = (index: number) => ({
  type: "CHANGE_SELECTED_FORM",
  payload: index
});
