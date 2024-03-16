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
        const response = yield call(axios.post, `${API_BASE_URL}/password-reset`, {email: action.payload});

        yield put(passwordResetSuccess(response.data));
        notifySuccess("Password reset email sent. Please check your email to complete the process.");
    } catch (error) {
        const errorMessage = typeof error.response.data.detail === "string" ?
            error.response.data.detail : "Password reset failed";

        yield put(passwordResetFailure(error.message));
        notifyError(errorMessage);
    }
}

function* setPasswordSaga(action) {
    try {
        const response = yield call(axios.post, `${API_BASE_URL}/password-set`, action.payload);

        yield put(passwordSetSuccess(response.data));
        notifySuccess("Password reset successfully");
    } catch (error) {
        const errorMessage = typeof error.response.data.detail === "string" ?
            error.response.data.detail : "Password reset failed";

        yield put(passwordSetFailure(error.message));
        notifyError(errorMessage);
    }
}

export function* watchPasswordReset() {
    yield takeLatest(TYPES.PASSWORD_RESET_REQUEST, resetPasswordSaga);
}

export function* watchSetPassword() {
    yield takeLatest(TYPES.PASSWORD_SET_REQUEST, setPasswordSaga);
}