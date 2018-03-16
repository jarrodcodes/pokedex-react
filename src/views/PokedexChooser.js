import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { fetchQuery } from '../actions/getquery.js';

class PokedexChooser extends Component {

    constructor(props) {
        super(props);
    }

    choosePokemon() {
        console.log(this.props.Pokemon.pokemon.pokemon_entries, 'pokemon')

    }

    render() {

        console.log(this.props, 'viewer props')

        if (this.props.Pokemon.loaded == true) {

            console.log(this.props.Pokemon.pokemon.pokemon_entries, 'pokemon')
            let search = "mew"
            let filteredPokemon = _.filter(this.props.Pokemon.pokemon.pokemon_entries, function (o) { return o.pokemon_species.name == search });
            let pokemonList = filteredPokemon.map(function (eachPokemon) {
                console.log(eachPokemon)
                return <li>{eachPokemon.pokemon_species.name}</li>;
            })

        }

        return (
            <div>
                <form>
                    <input type="text" onChange={this.props.fetchQuery} />
                </form>
                {/* <ul>{pokemonList}</ul> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        Query: state.query
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchQuery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexChooser);