import axios from "axios";

const LOGIN = "login";
const LOGOUT = "logout";
const USER_DATA = "userData";

const initState = {
    isAuth: false,
    user: 'masterCC',
    age: 16
}

export function auth(state = initState, action) {
    console.log(state, action)
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {...state, user: action.payload.user, age: action.payload.age}
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

export function getUserData() {
    return dispatch => {
        axios.get('/data')
            .then(res => {
                if (res.status === 200) {
                    dispatch(userData(res.data[1]))
                }
                console.log(res)
            })
    }
}
export function userData(data) {
    return {type: USER_DATA, payload: data};
}