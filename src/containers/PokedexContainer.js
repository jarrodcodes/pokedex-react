import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PokedexViewer from '../views/PokedexViewer.js';
import axios from 'axios';

class PokedexContainer extends Component {

    componentWillMount() {
        let self = this;
        this.setState({ Waiting: true })
        axios.get('https://pokeapi.co/api/v2/pokedex/2/').then((pokemon) => {
            self.setState({pokemonList: pokemon.data})
            self.setState({Waiting: false})
        }
        )
    }

    componentWillReceiveProps(currentProps, nextProps) {

    }

    render() {
        let finished = false;
        let self = this;
        if (self.state.Waiting == false) {
            return (
                <div>
                    <PokedexViewer Pokemon = {self.state.pokemonList} />
                </div>
            )
        }
        else {
            return (
                <div>
                    Loading...
</div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);