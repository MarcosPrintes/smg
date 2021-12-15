import { call, put, select, StrictEffect } from "redux-saga/effects";

import { mentions } from "@/helper/api";

import {
  actionsGetMentions,
  actionsGetMentionsFail,
  actionsGetMentionsSuccess,
} from "./actions";
import { State } from "@/store/index";
import { MentionData } from "./types";

export function* sagaGetMentions({
  payload,
}: ReturnType<typeof actionsGetMentions>): Generator<StrictEffect, void, any> {
  try {
    const getUser = (state: State) => state.user;
    const { data }: ReturnType<typeof getUser> = yield select(getUser);
    const { access_token } = data;

    const response = yield call(mentions, access_token, payload);

    const reducerPayload: MentionData = {
      list: response.data,
      last_page: response.last_page,
      page: response.page,
      total: response.total,
    };

    yield put(actionsGetMentionsSuccess(reducerPayload));
  } catch (error) {
    yield put(actionsGetMentionsFail());
  }
}
