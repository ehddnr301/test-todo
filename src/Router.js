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
import Detail from "./Routes/Detail";
import User from "./Routes/User";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/join" exact component={Join} />
        <Route path="/todo/:id" component={Detail}></Route>
        <Route path="/user/:id" component={User}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
