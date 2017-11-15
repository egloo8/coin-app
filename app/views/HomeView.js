import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Grid from '../components/Grid'
import { coins50p } from '../lib/Coins'
import { StackNavigator } from 'react-navigation'

class HomeView extends Component {

    render() {
        return (
            <Text>Labas</Text>
        )
    }
}
export default HomeView

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: 'white'
    }
})