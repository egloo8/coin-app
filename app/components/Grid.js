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
                                <TouchableHighlight onPress={() => this.props.onCoinPress(item)} disabled={this.props.disabled}>
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
    },
    text: {
        color: '#4f603c',
    },
    scrollContainer: {
        flex: 1,
    },
    box: {
        margin: 4,
        width: Dimensions.get('window').width / 3 - 12,
        height: Dimensions.get('window').width / 3 - 12,
        justifyContent: 'center'
    }
})