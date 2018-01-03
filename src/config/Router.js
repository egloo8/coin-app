import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import GridContainer from '../containers/GridContainer'
import CoinContainer from '../containers/CoinContainer'
import MainMenu from '../components/MainMenu'
import Login from '../containers/Login'

export default class CoinsNavigator extends React.Component {
    constructor(props) {
        super(props)
        this._StackNavigator = StackNavigator({
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
    }

    render() {
        let StackNavigator = this._StackNavigator;
        console.log(this.props)
        return <StackNavigator screenProps={this.props} />;
    }
}