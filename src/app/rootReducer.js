import { combineReducers } from "redux";
import authReducer from "features/auth/todosSlice";

export default combineReducers({
  auth: authReducer,
});
