import { IPokemon } from "../types";
import { getRandomPokemon } from "../assets/ts";

const initialState: {
  pokemon: IPokemon[];
  selectedForm: number;
} = {
  pokemon: getRandomPokemon(),
  selectedForm: 0
};

const pokemonReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "CHANGE_POKEMON":
      return { pokemon: action.payload, selectedForm: 0 };
    case "CHANGE_SELECTED_FORM":
      return { ...state, selectedForm: action.payload };
  }
  return state;
};

export default pokemonReducer;
