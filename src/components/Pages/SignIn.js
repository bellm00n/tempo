import React from "react";
import { Auth, Input, Button, Link } from "uikit";

const SignIn = () => {
  return (
    <Auth title="Sign In" type="By Email">
      <Input className="auth__input" type="email" label="Email" />
      <Input className="auth__input" type="password" label="Password" />
      <div className="auth__footer">
        <Button className="auth__button">Sign In</Button>
        <div className="auth__help">
          <span className="auth__bottom-span">Don't have an account?</span>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </Auth>
  );
};

export default SignIn;
