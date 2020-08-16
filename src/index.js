import React from "react";
import { render } from "react-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "ui/App";
import rootReducer from "reducers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";
import firebaseConfig from "configs/firebaseConfig";
import rrfConfig from 'configs/rrfConfig'

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: rootReducer,
});

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
