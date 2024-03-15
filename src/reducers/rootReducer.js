import * as TYPES from "../actions/types";

const initialState = {
    user: null,
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    error: null,
    userData: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOGIN_SUCCESS:
        case TYPES.REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                user: action.payload.userData,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                error: null
            };

        case TYPES.LOGIN_FAILURE:
        case TYPES.REFRESH_TOKEN_FAILURE:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
                error: action.payload
            };

        case TYPES.VERIFY_ACCESS_TOKEN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
                error: action.payload
            };

        case TYPES.PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                error: null
            };

        case TYPES.PASSWORD_RESET_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case TYPES.PASSWORD_SET_SUCCESS:
            return {
                ...state,
                error: null
            };

        case TYPES.PASSWORD_SET_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default rootReducer;
