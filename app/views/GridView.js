import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Grid from '../components/Grid'
import { coins50p } from '../lib/Coins'
import { StackNavigator } from 'react-navigation'

class GridView extends Component {
    state = {
        disabled: false
    }

    onCoinPress = (item) => {
        this.setState({
            disabled: true
        })
        this.props.navigation.navigate('Coin', item)
        setTimeout(() => this.setState({
            disabled: false
        }), 1000)
    }

    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                <Grid coins={this.props.navigation.state.params.coins} onCoinPress={this.onCoinPress} disabled={this.state.disabled} />
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