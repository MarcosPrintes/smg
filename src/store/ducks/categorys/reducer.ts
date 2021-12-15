import { Reducer } from "redux";
import { categorysSate, ActionTypesCategory } from "./types";

const INITIAL_STATE: categorysSate = {
  list: [],
  error: false,
  loading: false,
  last_page: 0,
  page: 0,
  total: 0,
};

const reducer: Reducer<categorysSate> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypesCategory.GET_GATEGORYS_REQUEST:
      return { ...state, loading: true };
    case ActionTypesCategory.GET_GATEGORYS_SUCCESS:
      return {
        list: action.payload.data,
        page: action.payload.page,
        total: action.payload.total,
        last_page: action.payload.total,
        loading: false,
        error: false,
      };
    case ActionTypesCategory.GET_GATEGORYS_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
