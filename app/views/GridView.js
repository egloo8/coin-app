import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import GridCoin from '../components/GridCoin'
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
        this.props.navigation.navigate('Coin', { item: item, refresh: this.forceUpdate() })
        setTimeout(() => this.setState({
            disabled: false
        }), 1000)
    }

    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                {/* <Grid coins={this.props.navigation.state.params.coins} onCoinPress={this.onCoinPress} disabled={this.state.disabled} /> */}
                <View style={styles.scrollContainer}>
                    <View style={styles.container}>
                        {
                            this.props.navigation.state.params.coins.map((item, index) => (
                                <GridCoin
                                    key={index}
                                    coin={item}
                                    onCoinPress={this.onCoinPress}
                                    disabled={this.state.disabled}
                                />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default GridView

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    scrollContainer: {
        flex: 1,
    },
})