import { combineReducers } from "redux";

import counter from "./counter";
import user from "./user";
import events from "./event";

export default combineReducers({
  counter,
  user,
  events,
});
