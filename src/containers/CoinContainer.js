import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAmount, decrementAmount } from '../actions'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CoinContainer = ({ coins, id, onMinusPress, onPlusPress }) => (
    <View>
        <TouchableHighlight onPress={() => onMinusPress(id)} >
            <MaterialCommunityIcons name="minus-circle-outline" size={20} color={"#ff9500"} style={{ marginRight: 5 }} />
        </TouchableHighlight>
        <TextInput
            style={{ height: 30, width: 30, borderColor: 'gray', borderWidth: 1 }}
            textAlign={'center'}
            value={coins ? coins[id].amount.toString() : '0'}
            editable={false}
        />
        {console.log(coins[id])}
        <TouchableHighlight onPress={() => onPlusPress(id)}>
            <MaterialCommunityIcons name="plus-circle-outline" size={20} color={"#ff9500"} style={{ marginLeft: 5 }} />
        </TouchableHighlight>
    </View>
)

const mapStateToProps = (state, props) => {
    return {
        coins: state.coins,
        id: props.navigation.state.params.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMinusPress: id => {
            dispatch(decrementAmount(id))
        },
        onPlusPress: id => {
            dispatch(incrementAmount(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)