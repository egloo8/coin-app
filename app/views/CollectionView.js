import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import { coins50p } from '../lib/Coins'

class CollectionView extends Component {

    render() {
        return (
            <ScrollView styles={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Labas</Text>
                </View>
            </ScrollView>
        )
    }
}
export default CollectionView

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    thumbnail: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2
    },
    title: {
        fontSize: 20
    }
})