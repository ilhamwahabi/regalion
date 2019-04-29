import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import pokemonReducer from "./pokemonReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  form: formReducer,
  pokemon: pokemonReducer,
  loading: loadingReducer
});
