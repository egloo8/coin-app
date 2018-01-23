import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import GridContainer from '../containers/GridContainer'
import CoinContainer from '../containers/CoinContainer'
import MainMenu from '../components/MainMenu'
import Login from '../containers/Login'
import CollectionContainer from '../containers/CollectionContainer'
import Stats from '../components/Stats'
import UserContainer from '../containers/UserContainer'

export default class CoinsNavigator extends React.Component {
    constructor(props) {
        super(props)
        this._CoinNavigator = StackNavigator({
            Login: {
                screen: Login,
                navigationOptions: ({ navigation }) => ({
                    headerTitle: 'Coin App',
                    tabBarVisible: false
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
                    headerTitleStyle: { color: 'black' },
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
                    headerTitleStyle: { color: 'black' },
                }
            })
        this._StatsNavigator = StackNavigator({
            Stats: {
                screen: Stats,
                navigationOptions: {
                    headerTitle: 'Your Stats',
                },
            }
        },
            {
                navigationOptions: {
                    headerTitle: 'Coin App',
                    headerTintColor: '#ff9500',
                    headerTitleStyle: { color: 'black' }
                }
            })
        this._UserNavigator = StackNavigator({
            User: {
                screen: UserContainer,
                navigationOptions: {
                    headerTitle: 'User Info',
                },
            }
        },
            {
                navigationOptions: {
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
            Stats: {
                screen: this._StatsNavigator,
                navigationOptions: {
                    tabBarLabel: 'Stats',
                    tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="trophy-variant" size={32} color={tintColor} />
                },
            },
            User: {
                screen: this._UserNavigator,
                navigationOptions: {
                    tabBarLabel: 'User',
                    tabBarIcon: ({ tintColor }) => <MaterialIcons name="person" size={32} color={tintColor} />
                },
            }
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