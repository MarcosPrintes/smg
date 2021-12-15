import { combineReducers } from "redux";

import user from "./user/reducer";
import mentions from "./mentions/reducer";
import categorys from "./categorys/reducer";

export default combineReducers({
  user,
  mentions,
  categorys,
});
