export const getFilteredPokemon = 'getFilteredPokemon';

export function fetchFilteredPokemon(pokemon) {
    
    return (dispatch, getState) => {

        console.log(pokemon,'pokemon works')
    }
}

export function updateFilteredPokemon(event) {
    return {
        type: getFilteredPokemon,
        payload: event
    }
}