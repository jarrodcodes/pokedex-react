import { combineReducers } from "redux";
import AddPokemon from './addpokemon.js'
import AddQuery from './addquery.js';

const rootReducer = combineReducers({
    pokemon: AddPokemon,
    query: AddQuery
});

export default rootReducer;