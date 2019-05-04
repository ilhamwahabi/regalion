import { greninja } from "../assets/ts/greninja";

const initialState = {
  pokemon: greninja,
  selectedForm: 0
};

const pokemonReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  if (action.type === "CHANGE_POKEMON") {
    return { pokemon: action.payload, selectedForm: 0 };
  }
  return state;
};

export default pokemonReducer;
