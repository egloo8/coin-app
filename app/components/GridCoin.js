import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'
import Divider from './Divider'

class GridCoin extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        opacity: 0,
        value: '',
        loading: false
    }

    componentDidMount() {
        this.getOpacity()
    }

    // getOpacity = () => {
    //     AsyncStorage.getItem(this.props.coin.id + '/amount').then(value => {
    //         if (this.state.value !== value) {
    //             this.setState({
    //                 value: value
    //             })
    //             if (value && value !== '0') {
    //                 this.setState({
    //                     opacity: 1
    //                 })
    //             } else {
    //                 this.setState({
    //                     opacity: 0.5
    //                 })
    //             }
    //         }
    //     })
    // }

    async getOpacity() {
        var opacity
        const value = await AsyncStorage.getItem(this.props.coin.id + '/amount')
        if (value && value !== '0') {
            opacity = 1
        } else {
            opacity = 0.5
        }
        return opacity
    }

    render() {
        const coin = this.props.coin
        var opacity
        var loading = true
        this.getOpacity().then((opacity) => {
            opacity = opacity
        })

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