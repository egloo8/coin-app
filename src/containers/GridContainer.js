import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import AllCoinsGrid from '../components/AllCoinsGrid'

import fetchCoinData from '../actions/index'

function mapStateToProps(state) {
    return {
        coins: state.coins,
        coinsApi: state.coinsApi
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinData: () => {
            dispatch(fetchCoinData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCoinsGrid)