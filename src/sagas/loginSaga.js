import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { notifySuccess, notifyError } from "../shared/Notification/Notification";
import * as TYPES from "../actions/types";
import {API_BASE_URL} from "../helpers/constants";
import {loginFailure, loginSuccess} from "../actions/loginActions";
import {verifyAccessTokenRequest, refreshTokenRequest} from "../actions/tokenActions";

function* login(action) {
    try {
        const response = yield call(axios.post, `${API_BASE_URL}/login`, action.payload);
        yield put(loginSuccess());
        yield put(verifyAccessTokenRequest(response.data.access_token));
        yield put(refreshTokenRequest(response.data.refresh_token));
        yield put(notifySuccess('Login successful'));
    } catch (error) {
        yield put(loginFailure(error.message));
        yield put(notifyError('Login failed'));
    }
}

export function* watchLogin() {
    yield takeLatest(TYPES.LOGIN_REQUEST, login);
}