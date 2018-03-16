import { fetchFilteredPokemon } from "./getfilteredpokemon";

export const getQuery = 'getQuery';

export function fetchQuery(event, pokemon) {

    return (dispatch, getState) => {

        dispatch(updateQuery(event));
        dispatch(fetchFilteredPokemon(pokemon))
    }
}

export function updateQuery(event) {
    return {
        type: getQuery,
        payload: event
    }
}