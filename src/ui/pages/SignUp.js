import React from "react";
import { Auth, Input, Button, Link } from "ui/uikit";

const SignUp = () => {
  return (
    <Auth title="Sign Up" type="By Email">
      <Input className="auth__input" type="text" label="Name" />
      <Input className="auth__input" type="email" label="Email" />
      <Input className="auth__input" label="Password" />
      <div className="auth__footer">
        <Button className="auth__button"> Sign Up</Button>
        <div className="auth__help">
          <span className="auth__bottom-span">Already have account?</span>
          <Link href="/">Sign In</Link>
        </div>
      </div>
    </Auth>
  );
};

export default SignUp;
