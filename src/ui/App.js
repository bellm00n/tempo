import React from "react";
import { Route, Switch } from "react-router-dom";
import paths from "constants/paths";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import Modals from 'ui/components/Modals';
import Preloader from "ui/uikit/Preloader";
import Home from "ui/pages/Home";
import Projects from "ui/pages/Projects";
import Account from "ui/pages/Account";
import Counter from "ui/pages/Counter";
import SignUp from "ui/pages/SignUp";
import SignIn from "ui/pages/SignIn";
import Page404 from "ui/pages/Page404";
import PrivateRoute from "ui/components/PrivateRoute";

import "normalize.css/normalize.css";
import "ui/theme/theme.css";
import "ui/theme/fonts.css";
import "ui/theme/globalStyle.css";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Preloader />;
  return children;
}

const App = () => {
  return (
    <div className="app">
      <AuthIsLoaded>
        <Switch>
          <Route path={paths.home} exact component={Home} />
          <PrivateRoute path={paths.counter}>
            <Counter />
          </PrivateRoute>
          <PrivateRoute path={paths.projects}>
            <Projects />
          </PrivateRoute>
          <PrivateRoute path={paths.account}>
            <Account />
          </PrivateRoute>
          <Route path={paths.signUp} exact component={SignUp} />
          <Route path={paths.signIn} exact component={SignIn} />
          <Route component={Page404} />
        </Switch>
      </AuthIsLoaded>
      <Modals />
    </div>
  );
};

export default App;
