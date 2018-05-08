import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'

import { apiBaseURL } from '../config/Constants'

class GridCoin extends Component {

    calculateOpacity() {
        if (this.getCoinAmountByID(this.props.id) > 0) {
            return 1
        } else {
            return 0.5
        }
        return 1
    }

    getCoinAmountByID(id) {
        for (let coin in this.props.coins) {
            if (this.props.coins[coin].coinID === id) {
                return this.props.coins[coin].amount
            }
        }
    }

    render() {
        const coinDatabase = this.props.coinDatabase
        return (
            <View
                style={styles.box}
                key={coinDatabase._id}
            >
                <TouchableWithoutFeedback onLongPress={() => this.props.onLongPress(this.props.id, this.getCoinAmountByID(this.props.id))} onPress={() => this.props.onPress(coinDatabase, this.props.id)}>
                    <Image source={{ uri: apiBaseURL + coinDatabase.imagePath }} style={{ width: '100%', height: '100%', opacity: this.props.nocheck ? 1 : this.calculateOpacity() }} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default GridCoin

const styles = StyleSheet.create({
    box: {
        width: Dimensions.get('window').width * 0.30666,
        height: Dimensions.get('window').width * 0.30666,
        justifyContent: 'center',
        marginRight: '2%',
        marginBottom: '2%'
    },
    text: {
        color: '#4f603c',
    },
})