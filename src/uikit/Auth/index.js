import React from "react";
import logoImage from "assets/images/logo.svg"
import "uikit/Auth/auth.css"

const Auth = ({children, title, type}) => {
    return <div className="auth dark">
        <div className="auth__box">
            <div className="auth__header">
                <div className="auth__logo">
                    <img src={logoImage} alt="logo" className="auth__logo-image"/>
                </div>
                <h1 className="auth__title">{title}</h1>
                <div className="auth__type">{type}</div>
            </div>
            <div className="auth__body">
                {children}
            </div>
        </div>
    </div>;
};

export default Auth;