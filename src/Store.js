import React from 'react'
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'
import RootReducer from './reducers'
import { coinsDatabase } from './lib/Coins'

const size = coinsDatabase.length
let coins = []

for (let i = 0; i < size; i++) {
    coins.push({
        id: i,
        amount: 0
    })
}

const initialState = { coins }

let store = compose(
    autoRehydrate(),
    applyMiddleware(logger)
)(createStore)(RootReducer, initialState)

persistStore(store, { storage: AsyncStorage })

export default store