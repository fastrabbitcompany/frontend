import React, { Component } from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login.component"
import Register from "./pages/register/Register.component"
import Home from "./pages/homepage/home"
import createShipping from "./pages/createShipping/createShipping"

const App = () => (
  <Switch>
    <Route exact path="/" component = {Login}/>
    <Route exact path="/register" component = {Register}/>
    <Route exact path="/home" component = {Home}/>
    <Route exact path="/createShipping" component = {createShipping}/>
  </Switch>
);
  


export default App;
