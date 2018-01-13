import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import UserCoinsGrid from '../components/UserCoinsGrid'

import fetchCoinData from '../actions/index'

function mapStateToProps(state) {
    return {
        coins: state.coins,
        coinsApi: state.coinsApi
    }
}

export default connect(mapStateToProps)(UserCoinsGrid)