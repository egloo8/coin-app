import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import AllCoinsGrid from '../components/AllCoinsGrid'

function mapStateToProps(state) {
    return {
        coins: state.coins,
        coinsApi: state.coinsApi
    }
}

export default connect(mapStateToProps)(AllCoinsGrid)