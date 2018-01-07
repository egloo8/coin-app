import { apiBaseURL } from '../config/Constants'

export const incrementAmount = id => {

    // return {
    //     type: 'INCREMENT_AMOUNT',
    //     id
    // }
    return (dispatch, getState) => {

        fetch(`${apiBaseURL}/users/${getState().user._id}/coins/${id}/increment`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
        }).catch(error => {
            console.log(error)
        })
        dispatch({ type: 'INCREMENT_AMOUNT', id: id })
    }
}

export function addQuote(quote) {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, quotes) => {
            if (quotes !== null) {
                quotes = JSON.parse(quotes);
                quotes.unshift(quote); //add the new quote to the top
                AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
                    dispatch({ type: ADD_QUOTE, quote: quote });
                });
            }
        });
    };
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