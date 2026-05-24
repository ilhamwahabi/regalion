import { IPokemon } from "../types";

export interface IPokemonState {
  pokemons: { [key: string]: IPokemon[] };
  currentPokemon: string;
  currentForm: number;
}

const initialState: IPokemonState = {
  pokemons: {},
  currentPokemon: "",
  currentForm: 0
};

const pokemonReducer = (
  state = initialState,
  action: { type: string; payload: any }
): IPokemonState => {
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
