import React from "react";
import "ui/templates/Main/main.css";
import { Header, Menu } from 'ui/uikit';


const Main = ({ children }) => {

  return (
      <div className="container">
        <Header/>
        <Menu />
        <main className="main">
          {children}
        </main>
      </div>
  );
};

export default Main;
