import { getPokemon } from '../actions/getpokemon.js';

export default function (state = [], action) {
  switch (action.type) {
    case getPokemon:
    const newState = {
      ...state,
      pokemon: action.payload,
      loaded: true
    }
return newState
    default:
      return state
  }
}