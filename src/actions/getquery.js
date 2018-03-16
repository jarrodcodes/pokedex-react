import { fetchFilteredPokemon } from "./getfilteredpokemon";

export const getQuery = 'getQuery';

export function fetchQuery(event) {

    return (dispatch, getState) => {
        dispatch(updateQuery(event.target.value));
        dispatch(fetchFilteredPokemon(event.target.value))
    }
}

export function updateQuery(event) {
    return {
        type: getQuery,
        payload: event
    }
}