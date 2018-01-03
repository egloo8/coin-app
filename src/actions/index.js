import { apiBaseURL } from '../config/Constants'

export const incrementAmount = id => {
    return {
        type: 'INCREMENT_AMOUNT',
        id
    }
}

export const decrementAmount = id => {
    return {
        type: 'DECREMENT_AMOUNT',
        id
    }
}

export default function fetchCoinData() {
    return dispatch => {
        dispatch({ type: 'FETCHING_COIN_DATA' })

        return fetch(`${apiBaseURL}/coins`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'FETCHING_COIN_DATA_SUCCESS', payload: res }))
            .catch((error) => {
                dispatch({ type: 'FETCHING_COIN_DATA_FAIL', payload: err.data })
            })
    }
}

export function login(user) {
    return {
        type: 'LOGIN_USER',
        user
    }
}