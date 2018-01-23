export default function (state = [], action) {
    switch (action.type) {
        case 'CREATE_AMOUNT':
            return [
                ...state,
                {
                    coinID: action.id,
                    amount: 0
                }
            ]
        case 'INCREMENT_AMOUNT':
            return state.map(coin =>
                (coin.coinID === action.id)
                    ? { ...coin, amount: coin.amount + 1 }
                    : coin
            )
        case 'DECREMENT_AMOUNT':
            return state.map(coin =>
                (coin.coinID === action.id)
                    ? { ...coin, amount: coin.amount - 1 }
                    : coin
            )
        case 'RETRIEVE_AMOUNTS_FROM_DATABASE':
            let newState = action.payload
            return newState
        default:
            return state
    }
}