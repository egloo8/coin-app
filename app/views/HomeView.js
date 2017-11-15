import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Grid from '../components/Grid'
import { coins50p } from '../lib/Coins'
import { coins1 } from '../lib/Coins'
import { menu } from '../lib/Menu'
import { StackNavigator } from 'react-navigation'
import List from '../components/List'

class HomeView extends Component {

    onMenuItemClick = (item) => {
        this.props.navigation.navigate('Grid', { coins: coins50p })
    }

    render() {
        return (
            <List menu={menu} onMenuItemClick={this.onMenuItemClick} />
        )
    }
}
export default HomeView

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white'
    }
})