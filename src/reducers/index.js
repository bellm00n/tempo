import { combineReducers } from "redux";
import authReducer from "features/auth/authSlice";
import modalsReducer from "features/modals/modalsSlice";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  auth: authReducer,
  modals: modalsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
