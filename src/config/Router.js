import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'

import GridContainer from '../containers/GridContainer'
import CoinContainer from '../containers/CoinContainer'


export default Coins = StackNavigator({
    Grid: {
        screen: GridContainer,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Grid',
        }),
    },
    Coin: {
        screen: CoinContainer,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'labas',
        }),
    },
},
    {
        navigationOptions: {
            headerTitle: 'Coin App',
            headerTintColor: '#ff9500',
            headerTitleStyle: { color: 'black' }
        },
    }
)
