import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, Text, AsyncStorage, TouchableWithoutFeedback } from 'react-native'

import Divider from './Divider'

class MenuGridCoin extends Component {

    render() {
        return (
            <View
                style={styles.box}
            >
                <TouchableWithoutFeedback onPress={() => this.props.onPress(this.props.item)}>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image source={this.props.item.src} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <Text style={{ paddingTop: 5, textAlign: 'center', }}>{this.props.item.title}</Text>
                        <Text style={{ color: '#c8c7cc', textAlign: 'center', }}>3/4</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default MenuGridCoin

const styles = StyleSheet.create({
    box: {
        justifyContent: 'center',
        marginRight: '5%',
        marginBottom: '5%'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.425,
        height: Dimensions.get('window').width * 0.425,
    },
    text: {
        color: '#4f603c',
    },
})