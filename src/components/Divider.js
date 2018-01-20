import React from 'react'
import { View, StyleSheet } from 'react-native'

export default Divider = () => {
    return <View style={styles.divider}></View>
}

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 1,
        borderColor: '#c8c7cc'
    }
})