import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { Bar } from 'react-native-progress'

import Divider from './Divider'


class Stats extends Component {

    componentDidMount() {
        let counter50p = 0
        let counterOlympics = 0
        let counter1 = 0
        let counter2 = 0
    }

    render() {

        let coinsApi = this.props.coinsApi.data

        if (!coinsApi) {
            return (
                <View>
                    <Spinner
                        visible={this.props.coinsApi.isFetching}
                    />
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
                if (coins[i].amount > 0) {
                    owned50p++
                }
            } else if (coinsApi[i].type === '£1') {
                counter1++
                if (coins[i].amount > 0) {
                    owned1++
                }
            }
        }

        return (
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/50p.jpeg')} style={styles.image} />
                        {/* <Bar progress={owned50p / counter50p} style={styles.bar} width={Dimensions.get('window').width * 0.6} color={'#ff9500'} /> */}
                        <View>
                            <View style={[styles.flexBox, styles.progressBar]}>
                                <View style={[styles.progressBar_left, { flex: owned50p / counter50p }]} />
                                <View style={[styles.progressBar_right, { flex: 100 - owned50p / counter50p }]} />
                            </View>
                        </View>
                        <Text style={{ marginLeft: 10 }} >{owned50p}/{counter50p}</Text>
                        <Divider />
                    </View>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/50pOlympics.jpeg')} style={styles.image} />
                        {/* <Bar progress={ownedOlympics / counterOlympics} width={Dimensions.get('window').width * 0.6} color={'#ff9500'} /> */}
                        <Text style={{ marginLeft: 10 }} >{ownedOlympics}/{counterOlympics}</Text>
                        <Divider />
                    </View>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/£1.jpeg')} style={styles.image} />
                        {/* <Bar progress={owned1 / counter1} style={styles.bar} width={Dimensions.get('window').width * 0.6} color={'#ff9500'} /> */}
                        <Text style={{ marginLeft: 10 }} >{owned1}/{counter1}</Text>
                        <Divider />
                    </View>
                    <View style={styles.statsContainer}>
                        <Image source={require('../img/£2.jpeg')} style={styles.image} />
                        {/* <Bar progress={owned2 / counter2} style={styles.bar} width={Dimensions.get('window').width * 0.6} color={'#ff9500'} /> */}
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 10
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