import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'

import GridContainer from '../containers/GridContainer'
import CoinContainer from '../containers/CoinContainer'
import MainMenu from '../components/MainMenu'
import Login from '../containers/Login'


export default Coins = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Coin App',
        })
    },
    Menu: {
        screen: MainMenu,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Coin App',
        })
    },
    Grid: {
        screen: GridContainer,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.state.params.title}`,
        })
    },
    Coin: {
        screen: CoinContainer,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.state.params.coin.title}`,
        })
    }
},
    {
        navigationOptions: {
            headerTitle: 'Coin App',
            headerTintColor: '#ff9500',
            headerTitleStyle: { color: 'black' }
        }
    }
)
