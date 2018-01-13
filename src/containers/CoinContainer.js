import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAmount, decrementAmount, updateAmount } from '../actions'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'

class CoinContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { amount: null }
    }

    componentDidMount() {
        this.setState({
            amount: this.props.coins[this.props.id].amount
        })
    }

    componentWillUnmount() {
        if (this.state.amount !== this.props.coins[this.props.id].amount) {
            this.props.updateAmount(this.props.id)

        }
    }

    render() {
        coins = this.props.coins
        var { coins, id, onMinusPress, onPlusPress } = this.props
        return (
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
    }
}

const mapStateToProps = (state, props) => {
    return {
        coins: state.coins,
        id: props.navigation.state.params.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMinusPress: id => {
            dispatch(decrementAmount(id))
        },
        onPlusPress: id => {
            dispatch(incrementAmount(id))
        },
        updateAmount: id => {
            dispatch(updateAmount(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)