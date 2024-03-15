import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { notifySuccess, notifyError } from "../shared/Notification/Notification";
import * as TYPES from "../actions/types";
import {API_BASE_URL} from "../helpers/constants";

function* login(action) {
    try {
        const { email, password } = action.payload;
        const response = yield call(axios.post, `${API_BASE_URL}/login`, { email, password });
        yield put({ type: TYPES.LOGIN_SUCCESS, payload: response.data });
        notifySuccess('Login successful');
    } catch (error) {
        yield put({ type: TYPES.LOGIN_FAILURE, error: error.response.data });
        notifyError('Login failed');
    }
}

export function* watchLogin() {
    yield takeLatest(TYPES.LOGIN_REQUEST, login);
}