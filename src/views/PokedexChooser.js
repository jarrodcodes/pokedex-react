import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { fetchQuery } from '../actions/getquery.js';

class PokedexChooser extends Component {

    constructor(props) {
        super(props);
        this.kickOffPokemonFilter = this.kickOffPokemonFilter.bind(this);
    }

    kickOffPokemonFilter(event) {
        this.props.fetchQuery(event.target.value, this.props.Pokemon)
    }

    render() {

        return (
            <div>
                <form>
                    <input type="text" onChange={this.kickOffPokemonFilter} />
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