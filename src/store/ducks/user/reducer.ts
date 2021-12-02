import { Reducer } from "redux";
import { UserState, ActionTypesUser } from "./types";

const INITIAL_STATE: UserState = {
  data: {
    access_token: "",
    token_type: "Bearer",
  },
  error: false,
  loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypesUser.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ActionTypesUser.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, data: { ...action.payload } };
    case ActionTypesUser.USER_LOGIN_FAIL:
      return { ...state, loading: false };
    case ActionTypesUser.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
