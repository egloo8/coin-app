export default function (state = [], action) {
    switch (action.type) {
        // case 'INCREMENT_AMOUNT':
        //     if (!state.some(coin => coin.id === action.id)) {
        //         console.log('i execute')
        //         return [
        //             ...state,
        //             {
        //                 id: action.id,
        //                 amount: 1
        //             }
        //         ]
        //     }
        //     else {
        //         console.log('labas')
        //         return state.map(coin =>
        //             (coin.id === action.id)
        //                 ? { ...coin, amount: coin.amount + 1 }
        //                 : coin
        //         )
        //     }

        // return state.map(coin =>
        //     (coin.id === action.id)
        //         ? { ...coin, amount: coin.amount + 1 }
        //         : coin
        // )

        case 'CREATE_AMOUNT':
            return [
                ...state,
                {
                    id: action.id,
                    amount: 0
                }
            ]
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