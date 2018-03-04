import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ListView, Image, TouchableHighlight } from 'react-native'

class List extends Component {

    renderListItem = (item) => {
        return (
            <TouchableHighlight onPress={() => this.props.onMenuItemClick(item)} >
                <View style={styles.container}>

                    <Image
                        source={item.src}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        );
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        let dataSource = ds.cloneWithRows(this.props.menu)
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this.renderListItem}
                style={styles.listView}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        )
    }
}
export default List

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: 101,
        paddingLeft: 10
    },
    rightContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 81,
        height: 81,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    listView: {
        backgroundColor: 'white',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
})