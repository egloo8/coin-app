import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Divider from './Divider'

class CoinDetailsTable extends Component {
    state = {
        switch: false,
        text: '0'
    }

    // renderListItem = (item) => {
    //     return (
    //         <View style={styles.container}>
    //             <Image
    //                 source={item.src}
    //                 style={styles.thumbnail}
    //             />
    //             <View style={styles.rightContainer}>
    //                 <Text style={styles.title}>{item.title}</Text>
    //             </View>
    //         </View>
    //     )
    // }

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

    renderAmountListItem = (item) => {
    }

    render() {
        return (
            <View>
                {this.renderDetailsListItem('Title', this.props.item.title)}
                {this.renderDetailsListItem('Mintage', this.props.item.mintage)}    
                {this.renderDetailsListItem('Years Of Issue', this.props.item.yearsOfIssue)} 
                {this.renderDetailsListItem('Description', this.props.item.description)}                                                                           
                       
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
    },
    left: {
        textAlign: 'justify',
        fontSize: 18,
    },
    right: {
        textAlign: 'right',
        fontSize: 18,        
        width: '60%'
    }
})