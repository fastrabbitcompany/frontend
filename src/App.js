import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login.component";
import Register from "./pages/register/Register.component";
import Home from "./pages/homepage/home";
import Cookies from 'universal-cookie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
    };

    this.cookies = new Cookies();
  }

  handleLoggedIn = (answer) => {
    console.log("change", answer)
    this.setState({
      isLoggedIn: answer
    },()=>{
     this.cookies.set('IsLoggedIn', this.state.isLoggedIn);
    });
  }

  componentDidMount(){
    let IsLoggedIn = this.cookies.get('IsLoggedIn');
    console.log(IsLoggedIn)
    this.setState({
      isLoggedIn: IsLoggedIn
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
