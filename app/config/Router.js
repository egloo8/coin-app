import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeView from '../views/HomeView'
import CoinView from '../views/CoinView'
import GridView from '../views/GridView'
import CollectionView from '../views/CollectionView'
import { MaterialIcons } from '@expo/vector-icons'


export const Coins = StackNavigator({
    Home: {
        screen: HomeView,
        navigationOptions: {
            headerTitle: 'Coin App',
        },
    },
    Grid: {
        screen: GridView,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.state.params.title}`,
        }),
    },
    Coin: {
        screen: CoinView,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `${navigation.state.params.title}`,
        }),
    },
},
    {
        navigationOptions: {
            headerTitle: 'Coin App',
            headerTintColor: '#ff9500',
            headerTitleStyle: { color: 'black' },
            // headerStyle: {
            //     backgroundColor: '#007aff',
            // },
        },
    }
)

export const Collection = StackNavigator({
    Collection: {
        screen: CollectionView,
        navigationOptions: {
            headerTitle: 'Coin App',
        },
    }
})

export default Tabs = TabNavigator({
    Home: {
        screen: Coins,
        navigationOptions: {
            tabBarLabel: 'All Coins',
            tabBarIcon: ({ tintColor }) => <MaterialIcons name="collections" size={32} color={tintColor} />
        },
    },
    Collection: {
        screen: Collection,
        navigationOptions: {
            tabBarLabel: 'Collection',
            tabBarIcon: ({ tintColor }) => <MaterialIcons name="collections-bookmark" size={32} color={tintColor} />
        },
    },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#ff9500',
        },
    })
