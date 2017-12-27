import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { coinsDatabase } from '../lib/Coins'
import GridCoin from '../components/GridCoin'

import fetchCoinData from '../actions/index'

class GridContainer extends Component {

    componentDidMount() {
        this.props.fetchCoinData()
    }

    onPress = (item, id) => {
        this.props.navigation.navigate('Coin', { coin: item, id: id })
    }

    render() {
        const coinsApi = this.props.coinsApi.data

        if (this.props.coinsApi.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={this.props.coinsApi.isFetching}
                    />
                </View>
            )
        }
        return (
            < ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    {coinsApi.map((coinDatabase, index) => (
                        this.props.navigation.state.params.type === coinDatabase.type
                            ?
                            <GridCoin
                                key={index}
                                id={index}
                                coinDatabase={coinDatabase}
                                coin={this.props.coins[index]}
                                onPress={this.onPress}
                            />
                            : null
                    ))}
                </View>
                {/* <Image source={{ uri: apiBaseURL + this.props.coinsApi.data[0].imagePath }} style={{ width: '100%', height: '100%' }}></Image> */}
            </ScrollView >
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
        coins: state.coins,
        coinsApi: state.coinsApi
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinData: () => {
            dispatch(fetchCoinData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)