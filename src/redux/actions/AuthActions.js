import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const loginUser = () => {
    return (dispatch) => {
        dispatch ({
            type: LOGIN_USER
        })
    }
}

export const loginSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_SUCCESS
        })
    }
}

export const loginFail = () => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

