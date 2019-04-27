import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import pokemonReducer from "./pokemonReducer";

export default combineReducers({
  form: formReducer,
  pokemon: pokemonReducer
})