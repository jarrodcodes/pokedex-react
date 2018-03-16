import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { fetchQuery } from '../actions/getquery.js';

class PokedexChooser extends Component {

    constructor(props) {
        super(props);
    }

    render() {

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