import React from 'react'
import { connect } from 'react-redux'

import CoinsNavigator from '../config/Router'

class RouterContainer extends React.Component {

    render() {
        if (this.props.rehydration.complete) {
            return <CoinsNavigator initialRouteName={this.props.user.isLoggedIn ? 'Menu' : 'Login'} />
        }

        return null
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        rehydration: state.rehydration
    }
}

export default connect(mapStateToProps)(RouterContainer)