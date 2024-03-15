import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { notifySuccess, notifyError } from "../shared/Notification/Notification";
import * as TYPES from "../actions/types";
import {API_BASE_URL} from "../helpers/constants";

function* verifyAccessToken(action) {
    try {
        const { accessToken } = action.payload;
        yield call(axios.post, `${API_BASE_URL}/access-token`, null, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        yield put({ type: TYPES.VERIFY_ACCESS_TOKEN_SUCCESS });
        notifySuccess('Access token verified');
    } catch (error) {
        yield put({ type: TYPES.VERIFY_ACCESS_TOKEN_FAILURE, error: error.response.data });
        notifyError('Access token verification failed');
    }
}

function* refreshToken(action) {
    try {
        const { refreshToken } = action.payload;
        const response = yield call(axios.post, `${API_BASE_URL}/refresh-token`, { refreshToken });
        yield put({ type: TYPES.REFRESH_TOKEN_SUCCESS, payload: response.data });
        notifySuccess('Token refreshed');
    } catch (error) {
        yield put({ type: TYPES.REFRESH_TOKEN_FAILURE, error: error.response.data });
        notifyError('Token refresh failed');
    }
}

export function* watchVerifyAccessToken() {
    yield takeLatest(TYPES.VERIFY_ACCESS_TOKEN_REQUEST, verifyAccessToken);
}

export function* watchRefreshToken() {
    yield takeLatest(TYPES.REFRESH_TOKEN_REQUEST, refreshToken);
}