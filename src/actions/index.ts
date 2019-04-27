import api from "../api";

export const changePokemon = (pokemonName: string) => async (
  dispatch: Function
) => {
  const response = await api.get(`/${pokemonName}`);

  dispatch({ type: "CHANGE_POKEMON", payload: response.data });
};
