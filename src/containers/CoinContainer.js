import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAmount, decrementAmount, updateAmount, createAmount } from '../actions'
import CoinDetails from '../components/CoinDetails'

const mapStateToProps = (state, props) => {
    return {
        coins: state.coins,
        coinsApi: state.coinsApi,
        id: props.navigation.state.params.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMinusPress: id => {
            dispatch(decrementAmount(id))
        },
        onPlusPress: id => {
            dispatch(incrementAmount(id))
        },
        updateAmount: (id, amount) => {
            dispatch(updateAmount(id, amount))
        },
        initiateAmount: id => {
            dispatch(createAmount(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails)