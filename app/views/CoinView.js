import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import { coins50p } from '../lib/Coins'

class CoinView extends Component {

    render() {
        return (
            <ScrollView styles={styles.background}>
                <View>
                    <Image
                        source={this.props.navigation.state.params.src}
                        style={styles.thumbnail}
                    />
                    <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
                </View>
            </ScrollView>
        )
    }
}
export default CoinView

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    },
    thumbnail: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        padding: 10
    },
    title: {
        fontSize: 20
    }
})