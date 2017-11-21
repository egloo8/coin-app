import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, AsyncStorage } from 'react-native'
import { coins50p } from '../lib/Coins'
import CoinDetails from '../components/CoinDetails'

class CoinView extends Component {
    state = {
        have: false,
        amount: 0,
        disabled: false
    }

    componentDidMount() {
        AsyncStorage.getItem(this.props.navigation.state.params.item.id + '/amount').then(value => {
            if (value) {
                this.setState({ amount: JSON.parse(value) })
            }
        })
    }

    onMinusPress = () => {
        this.setState({
            disabled: true
        })
        this.setState({ amount: this.state.amount - 1 }, () => {
            AsyncStorage.setItem(this.props.navigation.state.params.item.id + '/amount', (this.state.amount).toString())
        })
        setTimeout(() => this.setState({
            disabled: false
        }), 100)
    }

    onPlusPress = () => {
        this.setState({
            disabled: true
        })
        this.setState({ amount: this.state.amount + 1 }, () => {
            AsyncStorage.setItem(this.props.navigation.state.params.item.id + '/amount', (this.state.amount).toString())
        })
        setTimeout(() => this.setState({
            disabled: false
        }), 100)
    }

    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                <CoinDetails
                    item={this.props.navigation.state.params.item}
                    onHaveSwitch={this.onHaveSwitch}
                    amount={this.state.amount}
                    onMinusPress={this.onMinusPress}
                    onPlusPress={this.onPlusPress}
                    disabled={this.state.disabled}
                />
            </ScrollView>
        )
    }
}
export default CoinView

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
    },
    thumbnail: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        padding: 10
    },
    title: {
        fontSize: 20
    }
})