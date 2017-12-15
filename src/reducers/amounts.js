export default function (state = [], action) {
    switch (action.type) {
        case 'INCREMENT_AMOUNT':
            return state.map(coin =>
                (coin.id === action.id)
                    ? { ...coin, amount: coin.amount + 1 }
                    : coin
            )
        case 'DECREMENT_AMOUNT':
            return state.map(coin =>
                (coin.id === action.id)
                    ? { ...coin, amount: coin.amount - 1 }
                    : coin
            )
        default:
            return state
    }
}