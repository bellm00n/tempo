import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "components/Pages/Home";
import Projects from "components/Pages/Projects";

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <br />
    <Link to="/project">Project</Link>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/project" exact component={Projects} />
      {/* <Route path="/login/" exact component={Login} />
    <Route path="/reg/" exact component={Reg} />
    <Route path="/project/:name" exact component={Project} />
    <Route component={Page404} /> */}
    </Switch>
  </Router>
);

export default App;
