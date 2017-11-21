import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, Switch, TextInput, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Divider from './Divider'
import CoinDetailsTable from './CoinDetailsTable'

class CoinDetails extends Component {
    state = {
        switch: false,
        text: '0'
    }

    render() {
        const coin = this.props.item
        return (
            <View>
                <View style={styles.imageContainer}>
                    <Image
                        source={coin.src}
                        style={styles.thumbnail}
                    />
                </View>
                <Text style={styles.title}>{coin.title}</Text>
                <View style={styles.operations} >
                    <TouchableHighlight onPress={this.props.onMinusPress} disabled={this.props.amount < 1 || this.props.disabled}>
                        <MaterialCommunityIcons name="minus-circle-outline" size={20} color={"#ff9500"} style={{ marginRight: 5 }} />
                    </TouchableHighlight>
                    <TextInput
                        style={{ height: 30, width: 30, borderColor: 'gray', borderWidth: 1 }}
                        textAlign={'center'}
                        value={this.props.amount.toString()}
                        editable={false}
                    />
                    <TouchableHighlight onPress={this.props.onPlusPress} disabled={this.props.disabled}>
                        <MaterialCommunityIcons name="plus-circle-outline" size={20} color={"#ff9500"} style={{ marginLeft: 5 }} />
                    </TouchableHighlight>
                </View>
                <Divider />
                <CoinDetailsTable item={coin} />
            </View >
        )

        // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        // let dataSource = ds.cloneWithRows(this.props.menu)
        // return (
        //     <ListView
        //         dataSource={dataSource}
        //         renderRow={this.renderListItem}
        //         style={styles.listView}
        //         renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        //     />
        // )
    }
}
export default CoinDetails

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    thumbnail: {
        width: Dimensions.get('window').width - 100,  // this is probably bad.
        height: Dimensions.get('window').width - 100, // 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    operations: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
})