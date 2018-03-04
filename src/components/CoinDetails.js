import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'
import Divider from './Divider'
import CoinDetailsTable from './CoinDetailsTable'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from './CustomButton'

import { apiBaseURL, colour } from '../config/Constants'

class CoinDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { initialAmount: null }
    }

    componentDidMount() {
        if (typeof this.getCoinAmountByID(this.props.id) === 'undefined') {
            this.props.initiateAmount(this.props.id)
        }
        this.setState({
            initialAmount: this.getCoinAmountByID(this.props.id)
        })
    }

    componentWillUnmount() {
        if (this.state.initialAmount !== this.getCoinAmountByID(this.props.id)) {
            this.props.updateAmount(this.props.id, this.getCoinAmountByID(this.props.id))
        }
    }

    getCoinAmountByID(id) {
        for (let coin in this.props.coins) {
            if (this.props.coins[coin].coinID === id) {
                return this.props.coins[coin].amount
            }
        }
    }

    getCoinInfoByID(id) {
        for (let coin in this.props.coinsApi.data) {
            if (this.props.coinsApi.data[coin]._id === id) {
                return this.props.coinsApi.data[coin]
            }
        }
    }

    render() {
        coins = this.props.coins
        var { coins, id, onMinusPress, onPlusPress } = this.props
        let coinInfo = this.getCoinInfoByID(id)
        return (
            <ScrollView style={styles.homeContainer}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: apiBaseURL + coinInfo.imagePath }}
                            style={styles.thumbnail}
                        />
                    </View>
                    {/* <Text style={styles.title}>{coinInfo.title}</Text> */}
                    <View style={styles.operations} >
                        {/* <TouchableHighlight onPress={() => onMinusPress(id)}>
                            <Text>-</Text>
                        </TouchableHighlight> */}
                        {/* <TouchableHighlight  onPress={() => onMinusPress(id)} underlayColor={colour}>
                            <View >
                                <Text>-</Text>
                            </View>
                        </TouchableHighlight> */}
                        <CustomButton 
                            onPress={() => onMinusPress(id)}
                            title="-"
                            color={colour} />
                        <TextInput
                            style={{ height: 30, width: 30, borderColor: 'white', borderWidth: 1, fontSize: 18 }}
                            textAlign={'center'}
                            value={this.getCoinAmountByID(id) ? this.getCoinAmountByID(id).toString() : '0'}
                            editable={false}
                        />
                        {/* <TouchableHighlight onPress={() => onPlusPress(id)}>
                            <MaterialCommunityIcons name="plus" size={18} color={colour} />
                        </TouchableHighlight> */}
                        <CustomButton
                            onPress={() => onPlusPress(id)}
                            title="+"
                            color={colour} />
                    </View>
                    <Divider />
                    <CoinDetailsTable
                        item={coinInfo}
                        onPlusPress={onPlusPress}
                        onMinusPress={onMinusPress} id={id}
                        value={this.getCoinAmountByID(id) ? this.getCoinAmountByID(id).toString() : '0'} />
                </View >
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    thumbnail: {
        width: Dimensions.get('window').width - 100,
        height: Dimensions.get('window').width - 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colour
    },
    operations: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 13,
        marginBottom: 13
    }
})

export default CoinDetails