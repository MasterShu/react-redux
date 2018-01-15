const ADD_NUM = "add";
const MINUS_NUM = "minus";

// redux
export function counter(state = 10, action) {
    switch (action.type) {
        case ADD_NUM:
            return state + 1;
        case MINUS_NUM:
            return state - 1;
        default:
            return state;
    }
}

// action create
export function addNum() {
    return {type: ADD_NUM};
}
export function minusNum() {
    return {type: MINUS_NUM};
}

export function addNumAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addNum())
        }, 2000);
    }
}