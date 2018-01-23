import React from 'react'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { autoRehydrate, persistStore } from 'redux-persist'
import RootReducer from './reducers'

let store = compose(
    autoRehydrate(),
    applyMiddleware(thunk, logger)
)(createStore)(RootReducer)

// AsyncStorage.clear()

persistStore(store, { storage: AsyncStorage })

export default store