import { action } from "typesafe-actions";
import {
  ActionTypesMentions,
  MentionData,
  MentionsRequestParams,
} from "./types";

export const actionsGetMentions = (payload: MentionsRequestParams) =>
  action(ActionTypesMentions.GET_MENTIONS_REQUEST, payload);

export const actionsGetMentionsSuccess = (payload: MentionData) =>
  action(ActionTypesMentions.GET_MENTIONS_SUCCESS, payload);

export const actionsGetMentionsFail = () =>
  action(ActionTypesMentions.GET_MENTIONS_FAIL);
