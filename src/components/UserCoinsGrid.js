import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import GridCoin from '../components/GridCoin'

class UserCoinsGrid extends Component {

    onPress = (item, id) => {
        this.props.navigation.navigate('Coin', { coin: item, id: id })
    }

    isEmpty(coins) {
        let count = 0
        for (let coin in coins) {
            if (coins[coin].amount > 0) {
                count++
            }
        }
        if (count === 0) {
            return true
        } else {
            return false
        }
    }

    render() {
        let coinsApi = this.props.coinsApi.data

        if (!coinsApi) {
            return (
                <View>
                    {/* <Spinner
                        visible={this.props.coinsApi.isFetching}
                    /> */}
                </View>
            )
        }

        return (
            this.isEmpty(this.props.coins)
                ? <View style={styles.emptyView}>
                    <Text style={styles.heading}>
                        Your collection is empty.
                    </Text>
                    <Text style={styles.note}>
                        Go to All Coins and add some coins to your collection!
                    </Text>
                </View>
                : <ScrollView style={styles.scrollContainer} >
                    <View style={styles.container}>
                        {this.props.coins.map((coin, index) => (
                            coin.amount > 0
                                ?
                                <GridCoin
                                    key={index}
                                    id={coin.coinID}
                                    coinDatabase={coinsApi[coin.coinID]}
                                    coin={coin}
                                    onPress={this.onPress}
                                    nocheck={true}
                                />
                                : null
                        ))}
                    </View>
                </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '2%',
        paddingLeft: '2%',
        paddingBottom: '2%'
    },
    emptyView: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    note: {
        textAlign: 'center',
        fontSize: 17,
        color: '#8e8e91'
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default UserCoinsGrid