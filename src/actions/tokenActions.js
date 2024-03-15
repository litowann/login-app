import * as TYPES from "./types";

export const verifyAccessTokenRequest = (accessToken) => ({
    type: TYPES.VERIFY_ACCESS_TOKEN_REQUEST,
    payload: { accessToken }
});

export const refreshTokenRequest = (refreshToken) => ({
    type: TYPES.REFRESH_TOKEN_REQUEST,
    payload: { refreshToken }
});
