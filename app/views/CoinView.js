import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { coins50p } from '../lib/Coins'

class CoinView extends Component {

    render() {
        return (
            <ScrollView>
                <Text>{this.props.navigation.state.params.title}</Text>
            </ScrollView>
        )
    }
}
export default CoinView

const styles = StyleSheet.create({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})