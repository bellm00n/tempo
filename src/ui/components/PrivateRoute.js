import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import paths from "constants/paths";

const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: paths.signIn,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
