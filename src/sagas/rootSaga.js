import {all} from "redux-saga/effects";
import {watchVerifyAccessToken, watchRefreshToken} from "./tokenSaga";
import {watchPasswordReset, watchSetPassword} from "./resetPasswordSaga";
import {watchLogin} from "./loginSaga";

export default function* rootSaga() {
    yield all([
        watchVerifyAccessToken(),
        watchRefreshToken(),
        watchPasswordReset(),
        watchSetPassword(),
        watchLogin()
    ]);
}
