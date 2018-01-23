const initialState = {
    complete: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'REHYDRATION_COMPLETE':
            return {
                ...state,
                complete: true
            }
        default:
            return state
    }
}