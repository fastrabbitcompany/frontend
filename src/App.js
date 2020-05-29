import React, { Component } from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login.component"
import Register from "./pages/register/Register.component"
import Admin from "./pages/admin/Admin.component"
import Operator from "./pages/operator/operator.component"

const App = () => (
  <Switch>
    <Route exact path="/" component = {Login}/>
    <Route exact path="/register" component = {Register}/>
    <Route exact path="/admin" component = {Admin}/>
    <Route exact path="/operator" component = {Operator}/>
  </Switch>
);
  


export default App;
