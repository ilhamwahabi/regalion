import { reset } from "redux-form";
import api from "../api";

export const changePokemon = (pokemonNameOrIndex: string | number) => async (
  dispatch: Function
) => {
  dispatch({ type: "START_LOADING" });

  const response = await api.get(`/${pokemonNameOrIndex}`);
  dispatch({ type: "CHANGE_POKEMON", payload: response.data });

  dispatch(reset("searchPokemon"));
  dispatch({ type: "FINISH_LOADING" });
};

export const changeSelectedForm = (index: number) => ({
  type: "CHANGE_SELECTED_FORM",
  payload: index
});
