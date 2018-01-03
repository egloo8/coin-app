import React from 'react'
import { connect } from 'react-redux'

import CoinsNavigator from '../config/Router'

class RouterContainer extends React.Component {
    render() {
        return <CoinsNavigator initialRouteName={this.props.user ? 'Menu' : 'Login'} />
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(RouterContainer)