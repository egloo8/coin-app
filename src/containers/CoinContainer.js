import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAmount, decrementAmount } from '../actions'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'

const CoinContainer = ({ coins, id, onMinusPress, onPlusPress }) => (
    <View>
        <TouchableHighlight onPress={() => onMinusPress(id)} >
            <Text>-</Text>
        </TouchableHighlight>
        <TextInput
            style={{ height: 30, width: 30, borderColor: 'gray', borderWidth: 1 }}
            textAlign={'center'}
            value={coins ? coins[id].amount.toString() : '0'}
            editable={false}
        />
        {console.log(coins[id])}
        <TouchableHighlight onPress={() => onPlusPress(id)}>
            <Text>+</Text>
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