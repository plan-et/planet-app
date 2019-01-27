import { 
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL 
} from './types';

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = (dispatch) => {
    dispatch({ type: LOGIN_USER });

};

export const loginSuccess = ({ email, password }) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_SUCCESS
        })
    }
};

export const loginFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
};

