import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { notifySuccess, notifyError } from "../shared/Notification/Notification";
import * as TYPES from "../actions/types";
import {API_BASE_URL} from "../helpers/constants";
import {
    passwordResetFailure,
    passwordResetSuccess,
    passwordSetSuccess,
    passwordSetFailure
} from "../actions/restorePasswordActions";

function* resetPasswordSaga(action) {
    try {
        const response = yield call(axios.post, `${API_BASE_URL}/password-reset`, action.payload);
        yield put(passwordResetSuccess(response.data));
        yield put(notifySuccess('Password reset email sent. Please check your email to complete the process.'));
    } catch (error) {
        yield put(passwordResetFailure(error.message));
        yield put(notifyError('Password reset failed'));
    }
}

function* setPasswordSaga(action) {
    try {
        const response = yield call(axios.post, `${API_BASE_URL}/password-set`, action.payload);
        yield put(passwordSetSuccess(response.data));
        yield put(notifySuccess('Password reset successfully'));
    } catch (error) {
        yield put(passwordSetFailure(error.message));
        yield put(notifyError('Password reset failed'));
    }
}

export function* watchPasswordReset() {
    yield takeLatest(TYPES.PASSWORD_RESET_REQUEST, resetPasswordSaga);
}

export function* watchSetPassword() {
    yield takeLatest(TYPES.PASSWORD_SET_REQUEST, setPasswordSaga);
}