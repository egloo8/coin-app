import React from 'react'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'
import RootReducer from './reducers'

// const size = 20
// let coins = []

// for (let i = 0; i < size; i++) {
//     coins.push({
//         id: i,
//         amount: 0
//     })
// }

// const initialState = { coins }

let store = compose(
    autoRehydrate(),
    applyMiddleware(thunk, logger)
)(createStore)(RootReducer)

// AsyncStorage.clear()

persistStore(store, { storage: AsyncStorage })

export default store