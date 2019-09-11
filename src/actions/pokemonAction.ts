import { reset } from "redux-form";

import api from "../api";

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

  const response = await api.get(`/${pokemonIndex}`);
  dispatch({ type: "CHANGE_POKEMON", payload: response.data });

  dispatch(reset("searchPokemon"));
  dispatch({ type: "FINISH_LOADING" });
};

export const changeCurrentForm = (index: number) => ({
  type: "CHANGE_SELECTED_FORM",
  payload: index
});
