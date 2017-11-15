import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeView from '../views/HomeView'
import CoinView from '../views/CoinView'
import GridView from '../views/GridView'

const Router = StackNavigator({
    Home: {
        screen: HomeView,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Grid: {
        screen: GridView,
        navigationOptions: {
            headerTitle: 'Grid',
        },
    },
    Coin: {
        screen: CoinView,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.state.params.title}`,
        }),
    },
});

export default Router