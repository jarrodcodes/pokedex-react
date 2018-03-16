import _ from 'lodash';
export const getFilteredPokemon = 'getFilteredPokemon';

export function fetchFilteredPokemon(pokemon, queryFilter) {
    
    return (dispatch, getState) => {

        console.log(pokemon,'pokemon works')
        let filteredPokemon = _.filter(pokemon.pokemon.pokemon_entries, function(o) { return o.pokemon_species.name == queryFilter});
        console.log(filteredPokemon, 'filtered')

    }
}

export function updateFilteredPokemon(event) {
    return {
        type: getFilteredPokemon,
        payload: event
    }
}