import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAmount, decrementAmount, updateAmount } from '../actions'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'

import fetchCoinData from '../actions/index'

class UserContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { amount: null }
    }

    render() {
        return (
            <View>
                <Text>Logout</Text>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        coins: state.coins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinData: () => {
            dispatch(fetchCoinData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)