import { combineReducers } from "redux";
import AddPokemon from './addpokemon.js'

const rootReducer = combineReducers({
    pokemon: AddPokemon
});

export default rootReducer;