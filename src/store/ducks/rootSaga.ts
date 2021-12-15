import { all, takeLatest, takeEvery } from "redux-saga/effects";

import { ActionTypesUser } from "./user/types";
import { ActionTypesMentions } from "./mentions/types";
import { ActionTypesCategory } from "./categorys/types";

import { sagaLogin } from "./user/sagas";
import { sagaGetMentions } from "./mentions/sagas";
import { sagaGetCategorys } from "./categorys/sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypesUser.USER_LOGIN_REQUEST, sagaLogin),
    takeEvery(ActionTypesMentions.GET_MENTIONS_REQUEST, sagaGetMentions),
    takeLatest(ActionTypesCategory.GET_GATEGORYS_REQUEST, sagaGetCategorys),
  ]);
}
