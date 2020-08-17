import { combineReducers } from "redux";
import authReducer from "features/auth/authSlice";
import modalsReducer from "features/modals/modalsSlice";
import projectsReducer from "features/projects/projectsSlice";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  auth: authReducer,
  modals: modalsReducer,
  projects: projectsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
