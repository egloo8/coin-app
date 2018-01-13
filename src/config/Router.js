import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import GridContainer from '../containers/GridContainer'
import CoinContainer from '../containers/CoinContainer'
import MainMenu from '../components/MainMenu'
import Login from '../containers/Login'
import CollectionContainer from '../containers/CollectionContainer'

export default class CoinsNavigator extends React.Component {
    constructor(props) {
        super(props)
        this._CoinNavigator = StackNavigator({
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
                initialRouteName: this.props.initialRouteName,
                navigationOptions: {
                    headerTitle: 'Coin App',
                    headerTintColor: '#ff9500',
                    headerTitleStyle: { color: 'black' }
                }
            }
        )
        this._CollectionNavigator = StackNavigator({
            Collection: {
                screen: CollectionContainer,
                navigationOptions: {
                    headerTitle: 'Coin App',
                },
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
            })
        this._Tabs = TabNavigator({
            Home: {
                screen: this._CoinNavigator,
                navigationOptions: {
                    tabBarLabel: 'All Coins',
                    tabBarIcon: ({ tintColor }) => <MaterialIcons name="collections" size={32} color={tintColor} />
                },
            },
            Collection: {
                screen: this._CollectionNavigator,
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

    }

    render() {
        let Tabs = this._Tabs;
        return <Tabs screenProps={this.props} />
    }
}