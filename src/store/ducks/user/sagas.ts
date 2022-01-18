import { call, put } from "redux-saga/effects";

import { login } from "@/helper/api";

import { LoginResponse } from "./types";
import {
  actionLoginFail,
  actionLoginRequest,
  actionLoginSuccess,
} from "./actions";

export function* sagaLogin({
  payload,
}: ReturnType<typeof actionLoginRequest>): Generator {
  try {
    const response = yield call(login, payload);
    yield put(actionLoginSuccess(response as LoginResponse));
  } catch (error) {
    yield put(actionLoginFail());
  }
}
