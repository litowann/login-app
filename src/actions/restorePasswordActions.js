import * as TYPES from "./types";

export const passwordResetRequest = (email) => ({
    type: TYPES.PASSWORD_RESET_REQUEST,
    payload: email
});

export const passwordResetSuccess = (email) => ({
    type: TYPES.PASSWORD_RESET_SUCCESS,
    payload: { email }
});

export const passwordResetFailure = (error) => ({
    type: TYPES.PASSWORD_RESET_FAILURE,
    payload: error
});

export const passwordSetRequest = (token, secret, password) => ({
    type: TYPES.PASSWORD_SET_REQUEST,
    payload: { token, secret, password }
});

export const passwordSetSuccess = (token, secret, password) => ({
    type: TYPES.PASSWORD_SET_SUCCESS,
    payload: { token, secret, password }
});

export const passwordSetFailure = (error) => ({
    type: TYPES.PASSWORD_SET_FAILURE,
    payload: error
});