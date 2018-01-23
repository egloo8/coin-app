const initialState = {
    user: null,
    isLoggedIn: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.user,
                isLoggedIn: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
        default:
            return state
    }
}