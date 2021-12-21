import { Reducer } from "redux";
import { MentionsState, ActionTypesMentions } from "./types";

const INITIAL_STATE: MentionsState = {
  list: [],
  last_page: 0,
  page: 0,
  total: 0,
  error: false,
  loading: false,
};

const reducer: Reducer<MentionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypesMentions.GET_MENTIONS_REQUEST:
      return { ...state, loading: true };
    case ActionTypesMentions.GET_MENTIONS_SUCCESS:
      return {
        page: action.payload.page,
        loading: false,
        error: false,
        list: action.payload.list,
        last_page: action.payload.last_page,
        total: action.payload.total,
      };
    case ActionTypesMentions.GET_MENTIONS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
