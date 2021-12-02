import { all, takeLatest } from "redux-saga/effects";
import { sagaLogin } from "./user/sagas";
import { ActionTypesUser } from "./user/types";

export default function* rootSaga() {
  yield all([takeLatest(ActionTypesUser.USER_LOGIN_REQUEST, sagaLogin)]);
}
