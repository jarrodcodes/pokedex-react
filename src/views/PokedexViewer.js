import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PokedexViewer extends Component {

    componentWillMount() {
        let self = this;
        this.setState({ Loading: true })
    }

    componentWillReceiveProps(currentProps, nextProps) {

    }

    render() {

        let self = this;
        console.log(self.props, 'viewer props')
        let pokemon = self.props.Pokemon.pokemon_entries
        console.log(pokemon, 'pokemon')
        let pokemonList = pokemon.map(function(eachPokemon){
                            return <li>{eachPokemon.pokemon_species.name}</li>;
                      })

        return  <ul>{ pokemonList }</ul>

    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexViewer);