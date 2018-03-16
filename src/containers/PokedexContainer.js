import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { fetchPokemon } from '../actions/getpokemon.js';
import PokedexChooser from '../views/PokedexChooser.js';

class PokedexContainer extends Component {

    componentWillMount() {
        let self = this;
        this.setState({ Waiting: true })
        self.props.fetchPokemon()
        self.setState({ Waiting: false })
    }

    render() {
        let finished = false;
        let self = this;
        if (self.state.Waiting == false) {
            return (
                <div>
                    <PokedexChooser {...this.props} />
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
        Pokemon: state.pokemon
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPokemon }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);