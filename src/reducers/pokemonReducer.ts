import { IPokemon } from "../types";
import { getInitialRandomPokemon } from "../assets/ts";

const getInitialState = (): {
  pokemons: { [key: string]: IPokemon[] };
  currentPokemon: string;
  currentForm: number;
} => {
  const { currentPokemon, randomPokemon } = getInitialRandomPokemon();

  return {
    pokemons: { [currentPokemon]: randomPokemon },
    currentPokemon: currentPokemon,
    currentForm: 0
  };
};

const pokemonReducer = (
  state = getInitialState(),
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "CHANGE_POKEMON":
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [action.payload[0].number]: action.payload
        },
        currentPokemon: action.payload[0].number,
        currentForm: 0
      };
    case "CHANGE_SELECTED_FORM":
      return {
        ...state,
        currentForm: action.payload
      };
  }
  return state;
};

export default pokemonReducer;
