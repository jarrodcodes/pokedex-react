import { getQuery } from '../actions/getquery.js';

export default function (state = [], action) {
    switch (action.type) {
        case getQuery:
            const newState = {
                ...state,
                query: action.payload,
            }
            return newState
        default:
            return state
    }
}