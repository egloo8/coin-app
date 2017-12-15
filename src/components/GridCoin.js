import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'

class GridCoin extends Component {

    calculateOpacity() {
        if (this.props.coin.amount > 0) {
            return 1
        } else {
            return 0.5
        }
    }

    render() {
        const coinDatabase = this.props.coinDatabase
        const coin = this.props.coin

        return (
            <View
                style={styles.box}
                key={coinDatabase.id}
            >
                <TouchableWithoutFeedback onPress={() => this.props.onPress(coinDatabase)}>
                    <Image source={coinDatabase.src} style={{ width: '100%', height: '100%', opacity: this.calculateOpacity() }} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default GridCoin

const styles = StyleSheet.create({
    box: {
        margin: 4,
        width: Dimensions.get('window').width / 3 - 12,
        height: Dimensions.get('window').width / 3 - 12,
        justifyContent: 'center'
    },
    text: {
        color: '#4f603c',
    },
})