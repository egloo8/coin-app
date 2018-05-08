const initialState = {
    user: null,
    username: null,
    isLoggedIn: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.user,
                username: action.name,
                isLoggedIn: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                user: null,
                username: null,
                isLoggedIn: false
            }
        default:
            return state
    }
}