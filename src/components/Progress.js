import React from 'react'
import { View, StyleSheet } from 'react-native'

export default class Progress extends React.Component {
    render() {
        let { color, height, width, style, progress } = this.props
        return (
            <View style={style}>
                <View style={[styles.outerProgress, { borderColor: color, width: width, height: height }]}></View>
                <View style={[styles.innerProgress, { backgroundColor: color, width: width * progress, height: height }]}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outerProgress: {
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    innerProgress: {
        position: 'absolute',
        borderRadius: 20
    }
})

Progress.defaultProps = {
    color: 'blue',
    width: 180,
    height: 15
}