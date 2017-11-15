import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Grid from '../components/Grid'
import { coins50p } from '../lib/Coins'
import { StackNavigator } from 'react-navigation'

class GridView extends Component {

    onCoinPress = (item) => {
        this.props.navigation.navigate('Coin', item)
    }

    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                <Grid coins={this.props.navigation.state.params.coins} onCoinPress={this.onCoinPress} />
            </ScrollView>
        )
    }
}
export default GridView

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white'
    }
})