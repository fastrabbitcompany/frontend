import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login.component";
import Register from "./pages/register/Register.component";
import Home from "./pages/homepage/home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
    };
  }

  handleLoggedIn = (answer) => {
    this.setState({
      isLoggedIn: answer
    });
  }

  componentDidMount(){
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => this.state.isLoggedIn? <Home handler = {this.handleLoggedIn}/>:<Login handler = {this.handleLoggedIn}/> }/>
        <Route exact path="/register" render={() => <Register handler={this.handleLoggedIn}/>} />
      </Switch>
    );
  }
}

export default App;
