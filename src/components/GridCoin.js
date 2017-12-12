import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'

class GridCoin extends Component {

    render() {
        const coin = this.props.coin

        return (
            <View
                style={styles.box}
                key={coin.id}
            >
                <TouchableWithoutFeedback onPress={() => this.props.onPress(coin)}>
                    <Image source={coin.src} style={{ width: '100%', height: '100%' }} />
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