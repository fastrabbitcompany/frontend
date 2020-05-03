import React, { Component } from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login.component"
import Register from "./pages/register/Register.component"
import Home from "./pages/homepage/home.component"
import createShipping from "./pages/createShipping/createShipping"
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login.component";
import Register from "./pages/register/Register.component";
import Home from "./pages/homepage/home";
import Operario from "./pages/operario/operario";
import ShipmentHistory from "./pages/ShipmentHistory/ShipmentHistory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
    };

  }

  handleLoggedIn = (answer) => {
    console.log("change", answer)
    this.setState({
      isLoggedIn: answer
    }, () => {
      if(answer === "false"){
        localStorage.removeItem("token");
        console.log("removed token");
      }
    });
  }

  componentDidMount(){
    let logged = "false";
    if(localStorage.getItem("token")){
      logged = "true";
    }
    this.setState({
      isLoggedIn: logged
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => this.state.isLoggedIn === "true"? <Home handler = {this.handleLoggedIn}/>:<Login handler = {this.handleLoggedIn}/> }/>
        <Route exact path="/register" render={() => <Register handler={this.handleLoggedIn}/>} />
        <Route exact path="/operario" render={() => <Operario handler={this.handleLoggedIn}/>} />
        <Route exact path="/ship" render={() => <ShipmentHistory handler={this.handleLoggedIn}/>} />
      </Switch>
    );
  }
}

export default App;
