import React, { Component } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import GridCoin from '../components/GridCoin'

class AllCoinsGrid extends Component {

    componentDidMount() {
        // if (!this.props.coinsApi.data) {
        // this.props.fetchCoinData()
        // }
    }

    onPress = (item, id) => {
        this.props.navigation.navigate('Coin', { coin: item, id: id })
    }

    render() {
        const coinsApi = this.props.coinsApi.data

        if (!coinsApi) {
            return (
                <View>
                    {/* <Spinner
                        visible={this.props.coinsApi.isFetching}
                    /> */}
                </View>
            )
        }

        return (
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    {coinsApi.map((coinDatabase, index) => (
                        this.props.navigation.state.params.type === coinDatabase.type
                            ?
                            <GridCoin
                                key={index}
                                id={index}
                                coinDatabase={coinDatabase}
                                coins={this.props.coins}
                                onPress={this.onPress}
                            />
                            : null
                    ))}
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '2%',
        paddingLeft: '2%',
        paddingBottom: '2%'
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default AllCoinsGrid