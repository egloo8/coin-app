import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'


import { menu } from '../lib/Menu'
import List from './List'

import { fetchUserData } from '../actions/index'
import fetchCoinData from '../actions/index'

class MainMenu extends Component {

    componentDidMount() {
        this.props.fetchUserData()
        this.props.fetchCoinData()
    }

    onMenuItemClick = (item) => {
        this.props.navigation.navigate('Grid', { title: item.title, type: item.type })
    }

    render() {
        return (
            <List menu={menu} onMenuItemClick={this.onMenuItemClick} />
        )
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

export default connect(null, mapDispatchToProps)(MainMenu)