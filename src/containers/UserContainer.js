import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { incrementAmount, decrementAmount, updateAmount } from '../actions'
import { Text, Button, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'

import { logout } from '../actions/index'
import { colour } from '../config/Constants'

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
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{this.props.user.username}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button color={colour} title='Logout' onPress={() => this.onLogout()} />
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    name: {
        fontSize: 30,
    },
    textContainer: {
        flex: 1,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 100
    }
})

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)