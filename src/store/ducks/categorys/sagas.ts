import { call, put, select, StrictEffect } from "redux-saga/effects";

import { categorys } from "@/helper/api";

import { State } from "@/store/index";

import { actionGetCategorysSuccess, actionGetCategorysFail } from "./actions";

export function* sagaGetCategorys(): Generator<StrictEffect, void, any> {
  try {
    const getUser = (state: State) => state.user;
    const { data }: ReturnType<typeof getUser> = yield select(getUser);
    const { access_token } = data;

    const response = yield call(categorys, access_token);

    yield put(actionGetCategorysSuccess(response));
  } catch (error) {
    yield put(actionGetCategorysFail());
  }
}
