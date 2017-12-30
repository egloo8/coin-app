import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'

import { menu } from '../lib/Menu'
import List from './List'

class MainMenu extends Component {

    onMenuItemClick = (item) => {
        this.props.navigation.navigate('Grid', { title: item.title, type: item.type })
    }

    render() {
        return (
            <List menu={menu} onMenuItemClick={this.onMenuItemClick} />
        )
    }
}
export default MainMenu