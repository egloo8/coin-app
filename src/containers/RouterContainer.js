import React from 'react'
import { connect } from 'react-redux'

import CoinsNavigator from '../config/Router'

import { fetchUserData } from '../actions/index'
import fetchCoinData from '../actions/index'

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

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinData: () => {
            dispatch(fetchCoinData())
        },
        fetchUserData: () => {
            dispatch(fetchUserData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer)