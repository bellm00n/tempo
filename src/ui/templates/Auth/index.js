import React from "react";
import logoImage from "assets/images/logo.svg";
import "ui/templates/Auth/auth.css";
import { Button } from "ui/uikit";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { Google } from "ui/uikit/Icons";
import paths from 'constants/paths';

const Auth = ({ children, title, type }) => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = (event) => {
    event.preventDefault();

    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push(paths.projects);
      });
  };

  return (
    <div className="auth dark">
      <form className="auth__box">
        <div className="auth__header">
          <div className="auth__logo">
            <img src={logoImage} alt="logo" className="auth__logo-image" />
          </div>
          <h1 className="auth__title">{title}</h1>
          <Button handler={signInWithGoogle} className="auth__button auth__button--google">
           <Google /> <span className="auth__button-label">{title} with Google</span>
          </Button>
          <div className="auth__type">{type}</div>
        </div>
        <div className="auth__body">{children}</div>
      </form>
    </div>
  );
};

export default Auth;
