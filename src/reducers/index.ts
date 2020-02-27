import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import pokemonReducer, { IPokemonState } from "./pokemonReducer";
import loadingReducer, { TLoadingState } from "./loadingReducer";

export interface IState {
  pokemon: IPokemonState;
  loading: TLoadingState;
}

export default combineReducers({
  form: formReducer,
  pokemon: pokemonReducer,
  loading: loadingReducer
});
