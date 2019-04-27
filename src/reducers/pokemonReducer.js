import { greninja } from "../dummy";

const initialState = {
  pokemon: greninja,
  selectedForm: 0
}

const pokemonReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_POKEMON') {
    return { pokemon: action.payload, selectedForm: 0 }
  }
  return state
}

export default pokemonReducer