const LOGIN = "login";
const LOGOUT = "logout";

export function auth(state = {isAuth: false, user: 'Master'}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        default:
            return state;
    }
}

// action
export function login() {
    return {type: LOGIN};
}
export function logout() {
    return {type: LOGOUT};
}