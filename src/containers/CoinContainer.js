import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAmount, decrementAmount, updateAmount, createAmount } from '../actions'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'

class CoinContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { initialAmount: null }
    }

    componentDidMount() {
        if (!this.getCoinAmountByID(this.props.id)) {
            this.props.initiateAmount(this.props.id)
        }
        this.setState({
            initialAmount: this.getCoinAmountByID(this.props.id)
        })
    }

    componentWillUnmount() {
        // console.log(this.props.id, this.getCoinAmountByID(this.props.id))
        if (this.state.initialAmount !== this.getCoinAmountByID(this.props.id)) {
            this.props.updateAmount(this.props.id, this.getCoinAmountByID(this.props.id))
        }
    }

    getCoinAmountByID(id) {
        for (let coin in this.props.coins) {
            if (this.props.coins[coin].id === id) {
                return this.props.coins[coin].amount
            }
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
                    value={this.getCoinAmountByID(id) ? this.getCoinAmountByID(id).toString() : '0'}
                    editable={false}
                />
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
        updateAmount: (id, amount) => {
            dispatch(updateAmount(id, amount))
        },
        initiateAmount: id => {
            dispatch(createAmount(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)