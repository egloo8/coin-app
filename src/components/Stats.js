import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { Bar } from 'react-native-progress'

import Divider from './Divider'
import Progress from './Progress'

class Stats extends Component {

    componentDidMount() {
        let counter50p = 0
        let counterOlympics = 0
        let counter1 = 0
        let counter2 = 0
    }

    getCoinAmountByID(id) {
        for (let coin in this.props.coins) {
            if (this.props.coins[coin].coinID === id) {
                return this.props.coins[coin].amount
            }
        }
    }

    render() {

        let coinsApi = this.props.coinsApi.data

        if (!coinsApi) {
            return (
                <View>
                    {/* <Spinner
                        visible={this.props.coinsApi.isFetching}
                    /> */}
                </View>
            )
        }

        let counter50p = 0
        let owned50p = 0
        let counterOlympics = 0
        let ownedOlympics = 0
        let counter1 = 0
        let owned1 = 0
        let counter2 = 0
        let owned2 = 0

        let coins = this.props.coins

        for (let i = 0; i < coinsApi.length; i++) {
            if (coinsApi[i].type === '50p') {
                counter50p++
                if (this.getCoinAmountByID(i) > 0) {
                    owned50p++
                }
            }
            else if (coinsApi[i].type === 'olympic') {
                counterOlympics++
                if (this.getCoinAmountByID(i) > 0) {
                    ownedOlympics++
                }
            }
            else if (coinsApi[i].type === '£1') {
                counter1++
                if (this.getCoinAmountByID(i) > 0) {
                    owned1++
                }
            }
            else if (coinsApi[i].type === '£2') {
                counter2++
                if (this.getCoinAmountByID(i) > 0) {
                    owned2++
                }
            }
        }

        return (
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/50p.jpeg')} style={styles.image} />
                        <Progress width={Dimensions.get('window').width * 0.6} color={'#ff9500'} progress={owned50p / counter50p} />
                        <Text style={{ marginLeft: 10 }} >{owned50p}/{counter50p}</Text>
                        <Divider />
                    </View>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/50pOlympics.jpeg')} style={styles.image} />
                        <Progress width={Dimensions.get('window').width * 0.6} color={'#ff9500'} progress={ownedOlympics / counterOlympics} />
                        <Text style={{ marginLeft: 10 }} >{ownedOlympics}/{counterOlympics}</Text>
                        <Divider />
                    </View>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/£1.jpeg')} style={styles.image} />
                        <Progress width={Dimensions.get('window').width * 0.6} color={'#ff9500'} progress={owned1 / counter1} />
                        <Text style={{ marginLeft: 10 }} >{owned1}/{counter1}</Text>
                        <Divider />
                    </View>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/£2.jpeg')} style={styles.image} />
                        <Progress width={Dimensions.get('window').width * 0.6} color={'#ff9500'} progress={owned2 / counter2} />
                        <Text style={{ marginLeft: 10 }} >{owned2}/{counter2}</Text>
                        <Divider />
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    image: {
        width: 35,
        height: 35,
        marginLeft: 10,
        marginTop: -10
    },
    bar: {
        width: Dimensions.get('window').width * 0.6
    }
})

function mapStateToProps(state) {
    return {
        coins: state.coins,
        coinsApi: state.coinsApi
    }
}

export default connect(mapStateToProps)(Stats)