import { combineReducers } from 'redux'
import coins from './amounts'
import coinsApi from './api'

export default combineReducers({
    coins,
    coinsApi
})