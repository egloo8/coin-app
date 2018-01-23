import { combineReducers } from 'redux'
import coins from './amounts'
import coinsApi from './api'
import user from './user'
import userData from './userData'

export default combineReducers({
    coins,
    coinsApi,
    user,
    userData
})