import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/Store'
import Router from './src/config/Router'
import RouterContainer from './src/containers/RouterContainer'

export default class App extends React.Component {
  render() {
    console.ignoredYellowBox = ['Remote debugger']
    return (
      <Provider store={store}>
        <RouterContainer />
      </Provider >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
