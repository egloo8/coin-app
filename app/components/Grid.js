import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, TouchableHighlight } from 'react-native'

class Grid extends Component {
    render() {
        return (
            <View style={styles.scrollContainer}>
                <View style={styles.container}>
                    {
                        this.props.coins.map((item, index) => (
                            <View
                                style={styles.box}
                                key={item.id}
                            >
                                <TouchableHighlight onPress={() => this.props.onCoinPress(item)}>
                                    <Image source={item.src} style={{ width: '100%', height: '100%' }} />
                                </TouchableHighlight>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}
export default Grid

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2
    },
    text: {
        color: '#4f603c',
    },
    scrollContainer: {
        flex: 1,
    },
    box: {
        margin: 2,
        width: Dimensions.get('window').width / 3 - 6,
        height: 120,
        justifyContent: 'center'
    }
})