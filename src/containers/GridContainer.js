import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import AllCoinsGrid from '../components/AllCoinsGrid'

import {changeAmount} from '../actions/index'

function mapStateToProps(state) {
    return {
        coins: state.coins,
        coinsApi: state.coinsApi
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAmount: (id, amount) => {
            dispatch(changeAmount(id, amount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCoinsGrid)