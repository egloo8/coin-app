import { combineReducers } from 'redux'
import coins from './amounts'
import coinsApi from './api'
import user from './user'
import userData from './userData'
import rehydration from './rehydration'

export default combineReducers({
    coins,
    coinsApi,
    user,
    userData,
    rehydration
})