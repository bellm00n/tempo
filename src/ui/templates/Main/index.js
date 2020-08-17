import React from "react";
import "ui/templates/Main/main.css";
import { Header, Menu } from "ui/uikit";

const Main = ({ children, className }) => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <main className={`main ${className}`}>{children}</main>
    </div>
  );
};

export default Main;
