import * as TYPES from "./types";

export const passwordResetRequest = (email) => ({
    type: TYPES.PASSWORD_RESET_REQUEST,
    payload: { email }
});

export const passwordResetSuccess = () => ({
    type: TYPES.PASSWORD_RESET_SUCCESS
});

export const passwordResetFailure = (error) => ({
    type: TYPES.PASSWORD_RESET_FAILURE,
    payload: error
});

// Action creators for setting new password
export const passwordSetRequest = (token, secret, password) => ({
    type: TYPES.PASSWORD_SET_REQUEST,
    payload: { token, secret, password }
});

export const passwordSetSuccess = () => ({
    type: TYPES.PASSWORD_SET_SUCCESS
});

export const passwordSetFailure = (error) => ({
    type: TYPES.PASSWORD_SET_FAILURE,
    payload: error
});