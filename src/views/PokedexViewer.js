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
         console.log(self.props, 'app props')
        return (
            <div>
<a>
    {self.props.name}
    </a>        
</div>
        )
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