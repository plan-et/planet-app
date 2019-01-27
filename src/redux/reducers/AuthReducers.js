import { 
    LOGIN_USER, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    USERNAME_CHANGED,
    PASSWORD_CHANGED 
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    password: '',
    user: null,
    loading: false,
    error: '',
    signedIn: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            return state;
    }
};