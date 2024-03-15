import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { notifySuccess, notifyError } from "../shared/Notification/Notification";
import * as TYPES from "../actions/types";
import {API_BASE_URL} from "../helpers/constants";

function* passwordReset(action) {
    try {
        const { email } = action.payload;
        yield call(axios.post, `${API_BASE_URL}/password-reset`, { email });
        yield put({ type: TYPES.PASSWORD_RESET_SUCCESS });
        notifySuccess('Password reset email sent. Please check your email to complete the process.');
    } catch (error) {
        yield put({ type: TYPES.PASSWORD_RESET_FAILURE, error: error.response.data });
        notifyError('Password reset failed');
    }
}

function* setPassword(action) {
    try {
        const { token, secret, password } = action.payload;
        yield call(axios.post, `${API_BASE_URL}/password-set`, { token, secret, password });
        yield put({ type: TYPES.PASSWORD_SET_SUCCESS });
        notifySuccess('Password set successfully');
    } catch (error) {
        yield put({ type: TYPES.PASSWORD_SET_FAILURE, error: error.response.data });
        notifyError('Password set failed');
    }
}

export function* watchPasswordReset() {
    yield takeLatest(TYPES.PASSWORD_RESET_REQUEST, passwordReset);
}

export function* watchSetPassword() {
    yield takeLatest(TYPES.PASSWORD_SET_REQUEST, setPassword);
}