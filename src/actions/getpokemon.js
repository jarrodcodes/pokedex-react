import pokeJSON from '../2.json';

export const getPokemon = 'getPokemon';

export function fetchPokemon() {

    return (dispatch, getState) => {

            let pokemon = pokeJSON;

                dispatch(updatePokemon(pokemon));
    }
}

export function updatePokemon(pokemon) {
    return {
        type: getPokemon,
        payload: pokemon
    }
}