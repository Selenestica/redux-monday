const initialState = {
    counter: 0,
    isAuthenticated: false,
    tasks: [],
    username: ''
}

//...state is basically all the info above, as state = initialState. the ...state is a spread operator

const reducer = (state = initialState, action) => {

    if(action.type == 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    else if(action.type == 'DECREASE_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    else if(action.type == 'USER_NAME_SAVED') {
        return {
            ...state,
            username: action.username,
            isAuthenticated: true
        }
    }

    return state
}

export default reducer