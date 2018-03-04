import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'


import { menu } from '../lib/Menu'
import MenuGridCoin from './MenuGridCoin'

import { fetchUserData } from '../actions/index'
import fetchCoinData from '../actions/index'

class MainMenu extends Component {

    componentDidMount() {
        this.props.fetchUserData()
        this.props.fetchCoinData()
    }

    onMenuItemClick = (item) => {
        this.props.navigation.navigate('Grid', { title: item.title, type: item.type })
    }

    render() {
        return (
            // <List menu={menu} onMenuItemClick={this.onMenuItemClick} />
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    {menu.map((item, index) => (
                            <MenuGridCoin
                                key={index}
                                item={item}
                                onPress={this.onMenuItemClick}
                            />
                    ))}
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingBottom: '5%'
        
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinData: () => {
            dispatch(fetchCoinData())
        },
        fetchUserData: () => {
            dispatch(fetchUserData())
        }
    }
}

export default connect(null, mapDispatchToProps)(MainMenu)