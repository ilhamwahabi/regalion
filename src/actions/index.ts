import api from "../api";

export const changePokemon = (pokemonName: string) => async (
  dispatch: Function
) => {
  const response = await api.get(`/${pokemonName}`);

  dispatch({ type: "CHANGE_POKEMON", payload: response.data });
};

export const startLoading = () => ({ type: "START_LOADING" });

export const finishLoading = () => ({ type: "FINISH_LOADING" });
