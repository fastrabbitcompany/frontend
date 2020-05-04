import React, { Component } from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login.component"
import Register from "./pages/register/Register.component"
import Home from "./pages/createShipping/createShipping"
import Operario from "./pages/operario/operario";
import ShipmentHistory from "./pages/ShipmentHistory/ShipmentHistory";
import {faBell, faBox, faHistory, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

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
    const sideBarDataUser = [
      {
        name: "Enviar Paquete",
        id: "envpq",
        icon: faBox
      },
      {
        name: "Historial de envios",
        id: "hist",
        icon: faHistory
      },
      {
        name: "Centro de Notificaciones",
        id: "notf",
        icon: faBell
      },
      {
        name: "Sign Out",
        id: "signOut",
        icon: faSignOutAlt,
      }
    ]
    return (
      <Switch>
        <Route exact path="/" render={() => this.state.isLoggedIn === "true"? <Home handler = {this.handleLoggedIn}/>:<Login handler = {this.handleLoggedIn}/> }/>
        <Route exact path="/register" render={() => <Register handler={this.handleLoggedIn}/>} />
        <Route exact path="/operario" render={() => <Operario handler={this.handleLoggedIn}/>} />
        <Route exact path="/ship" render={() => <ShipmentHistory handler={this.handleLoggedIn} sideBarData={sideBarDataUser}/>} />
        <Route exact path="/home" render={() => <Home handler={this.handleLoggedIn} sideBarData={sideBarDataUser}/>} />
      </Switch>
    );
  }
}

export default App;
