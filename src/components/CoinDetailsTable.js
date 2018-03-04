import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'
import Divider from './Divider'
import { colour } from '../config/Constants'


class CoinDetailsTable extends Component {
    state = {
        switch: false,
        text: '0'
    }

    renderDetailsListItem = (title, info) => {
        return (
            <View>
                <View style={styles.listItem}>
                    <Text style={styles.left}>{title}</Text>
                    <Text style={styles.right}>{info}</Text>
                </View>
                <Divider />
            </View>
        )
    }

    renderAmountsItem = (value, id, onPlusPress, onMinusPress) => {
        return (
            <View>
                <View style={styles.listItem}>
                    <Text style={styles.left}>You own</Text>
                    <View style={styles.operations}>
                        <TouchableHighlight onPress={() => onMinusPress(id)}>
                            <Text style={{fontSize: 18}}>-</Text>
                        </TouchableHighlight>
                        <Text style={{fontSize: 18}} >{value}</Text>
                        <TouchableHighlight onPress={() => onPlusPress(id)}>
                            <Text style={{fontSize: 18}}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <Divider />
            </View>

        )
    }

    renderDescriptionItem = (title, info) => {
        return (
            <View>
                <View style={styles.descItem}>
                    <Text style={styles.desc}>{title}</Text>
                    <Text style={styles.descInfo}>{info}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                {/* {this.renderAmountsItem(this.props.value, this.props.id, this.props.onPlusPress, this.props.onMinusPress)} */}
                {this.renderDetailsListItem('Title', this.props.item.title)}
                {this.renderDetailsListItem('Mintage', this.props.item.mintage)}
                {this.renderDetailsListItem('Year Of Issue', this.props.item.year)}
                {this.renderDescriptionItem('Description', this.props.item.description)}
            </View>
        )
    }
}
export default CoinDetailsTable

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 44,
    },
    left: {
        textAlign: 'justify',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    operations: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    right: {
        marginRight: 10,
        textAlign: 'right',
        fontSize: 18,
        width: '60%'
    },
    descItem: {
        marginTop: 13,
        marginBottom: 13
    },
    desc: {
        textAlign: 'justify',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    descInfo: {
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
    }
})