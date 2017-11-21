import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'
import Divider from './Divider'

class GridCoin extends Component {
    state = {
        opacity: 0,
        value: ''
    }

    getOpacity = () => {
        AsyncStorage.getItem(this.props.coin.id + '/amount').then(value => {
            this.setState({
                value: value
            })
        })
    }


    render() {
        const coin = this.props.coin
        this.getOpacity()
        let opacity = 0
        if (this.state.value && this.state.value !== '0') {
            opacity = 1
        } else {
            opacity = 0.5
        }
        return (
            <View
                style={styles.box}
                key={coin.id}
            >
                <TouchableWithoutFeedback onPress={() => this.props.onCoinPress(coin)} disabled={this.props.disabled}>
                    <Image source={coin.src} style={{ width: '100%', height: '100%', opacity: opacity }} />
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