import * as TYPES from "./types";

export const verifyAccessTokenRequest = (accessToken) => ({
    type: TYPES.VERIFY_ACCESS_TOKEN_REQUEST,
    payload: { accessToken }
});

export const verifyAccessTokenSuccess = () => ({
    type: TYPES.VERIFY_ACCESS_TOKEN_SUCCESS
});

export const verifyAccessTokenFailure = (error) => ({
    type: TYPES.VERIFY_ACCESS_TOKEN_FAILURE,
    payload: error
});

export const refreshTokenRequest = (refreshToken) => ({
    type: TYPES.REFRESH_TOKEN_REQUEST,
    payload: { refreshToken }
});

export const refreshTokenSuccess = (userData) => ({
    type: TYPES.REFRESH_TOKEN_SUCCESS,
    payload: userData
});

export const refreshTokenFailure = (error) => ({
    type: TYPES.REFRESH_TOKEN_FAILURE,
    payload: error
});