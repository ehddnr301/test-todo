import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Join from "./Routes/Join";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/join" exact component={Join} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
