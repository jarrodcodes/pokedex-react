export const getQuery = 'getQuery';

export function fetchQuery(event) {

    return (dispatch, getState) => {
        console.log(event.target.value)
        dispatch(updateQuery(event.target.value));
    }
}

export function updateQuery(event) {
    return {
        type: getQuery,
        payload: event
    }
}