import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { coinsDatabase } from '../lib/Coins'
import GridCoin from '../components/GridCoin'

class GridContainer extends Component {


    onPress = (item) => {
        this.props.navigation.navigate('Coin', { coin: item })
    }

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    {coinsDatabase.map((coinDatabase, index) => (
                        <GridCoin
                            key={index}
                            coinDatabase={coinDatabase}
                            coin={this.props.coins[index]}
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
        coins: state.coins
    }
}

export default connect(mapStateToProps)(GridContainer)