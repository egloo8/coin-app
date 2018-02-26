import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { incrementAmount, decrementAmount, updateAmount } from '../actions'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'

import { logout } from '../actions/index'


class UserContainer extends Component {

    onLogout() {
        this.props.logout()

        this.props.navigation.navigate('Home')
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })]
            })
        )

    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.onLogout()}>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(null, mapDispatchToProps)(UserContainer)