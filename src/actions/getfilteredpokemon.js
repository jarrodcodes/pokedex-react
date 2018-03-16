export const getFilteredPokemon = 'getFilteredPokemon';

export function fetchFilteredPokemon(event) {
    
    return (dispatch, getState) => {


    console.log(event)
    }
}

export function updateFilteredPokemon(event) {
    return {
        type: getFilteredPokemon,
        payload: event
    }
}