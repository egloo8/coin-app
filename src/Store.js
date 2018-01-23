import React from 'react'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'
import RootReducer from './reducers'

import { loadState } from './config/MongoStorage'

// const size = 20
// let coins = []

// for (let i = 0; i < size; i++) {
//     coins.push({
//         id: i,
//         amount: 0
//     })
// }

// const initialState = { coins }

// // const persistedState = loadState()
// loadState().then((preloadedState) => {
//     console.log(preloadedState)
// })

let store = compose(
    autoRehydrate(),
    applyMiddleware(thunk, logger)
)(createStore)(RootReducer)

// AsyncStorage.clear()
// console.log(AsyncStorage.getAllKeys())

persistStore(store, { storage: AsyncStorage })

export default store