import React from 'react'
import { createStore } from 'redux'
import RootReducer from './reducers'
import coins from './lib/Coins'

let store = createStore(RootReducer)

export default store