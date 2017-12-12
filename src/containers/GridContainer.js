import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { coins } from '../lib/Coins'
import GridCoin from '../components/GridCoin'

class GridContainer extends Component {
    state = {
        disabled: false
    }

    onPress = (item) => {
        this.props.navigation.navigate('Coin', { coin: item })
    }

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    {coins.map((coin, index) => (
                        <GridCoin
                            key={index}
                            coin={coin}
                            onPress={this.onPress}
                        />
                    ))}
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

function mapStateToProps(state) {
    return {
        amounts: state.amounts
    }
}

export default connect(mapStateToProps)(GridContainer)