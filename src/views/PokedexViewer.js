import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class PokedexViewer extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        let pokemon = this.props.Pokemon.pokemon_entries
        console.log(pokemon)
        let search = this.state.value
        console.log(search)
        let filteredPokemon = _.filter(pokemon, function(o) { return o.pokemon_species.name == search});
        console.log(filteredPokemon)
        let pokemonList = filteredPokemon.map(function (eachPokemon) {
            return <li>{eachPokemon.pokemon_species.name}</li>;
        })

        return (
            <div>

                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
                <ul>{pokemonList}</ul>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexViewer);