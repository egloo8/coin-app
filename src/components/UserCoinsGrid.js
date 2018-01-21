import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import GridCoin from '../components/GridCoin'

class UserCoinsGrid extends Component {

    onPress = (item, id) => {
        this.props.navigation.navigate('Coin', { coin: item, id: id })
    }

    render() {
        let coinsApi = this.props.coinsApi.data

        if (!coinsApi) {
            return (
                <View>
                    <Spinner
                        visible={this.props.coinsApi.isFetching}
                    />
                </View>
            )
        }

        return (
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    {this.props.coins.map((coin, index) => (
                        coin.amount > 0
                            ?
                            <GridCoin
                                key={index}
                                id={coin.id}
                                coinDatabase={coinsApi[coin.id]}
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
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default UserCoinsGrid