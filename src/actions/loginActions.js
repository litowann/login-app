import * as TYPES from "./types";

export const loginRequest = (email, password) => ({
    type: TYPES.LOGIN_REQUEST,
    payload: { email, password }
});

export const loginSuccess = (userData) => ({
    type: TYPES.LOGIN_SUCCESS,
    payload: userData
});

export const loginFailure = (error) => ({
    type: TYPES.LOGIN_FAILURE,
    payload: error
});