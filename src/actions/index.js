import { apiBaseURL } from '../config/Constants'

export const updateAmount = (id, amount) => {
    return (dispatch, getState) => {

        fetch(`${apiBaseURL}/users/${getState().user.user}/coins/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount
            }),
        }).then(() => {
        }).catch(error => {
            console.log(error)
        })
        dispatch({ type: 'UPDATE_AMOUNT', id: id })
    }
}

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

export const createAmount = id => {
    return {
        type: 'CREATE_AMOUNT',
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

export function fetchUserData() {
    return (dispatch, getState) => {
        dispatch({ type: 'FETCHING_USER_DATA' })

        return fetch(`${apiBaseURL}/users/${getState().user.user}/amounts`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: 'FETCHING_USER_DATA_SUCCESS', payload: res })
                dispatch({ type: 'RETRIEVE_AMOUNTS_FROM_DATABASE', payload: res })
                console.log(res)
            })
            .catch((error) => {
                dispatch({ type: 'FETCHING_USER_DATA_FAIL', payload: 'error' })
            })
    }
}

export function login(user) {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_USER', user })
        fetchUserData()
    }
}

export function logout() {
    return {
        type: 'LOGOUT_USER'
    }
}

export function rehydrationComplete() {
    return {
        type: 'REHYDRATION_COMPLETE'
    }
}