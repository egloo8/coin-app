const initialState = [
    {
        id: 0,
        amount: 0
    },
    {
        id: 1,
        amount: 0
    },
    {
        id: 2,
        amount: 0
    },
    {
        id: 3,
        amount: 0
    },
    {
        id: 4,
        amount: 0
    },
]

export default function (state = initialState, action) {
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