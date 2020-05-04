import React, { Component } from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login.component"
import Register from "./pages/register/Register.component"
import Admin from "./pages/admin/Admin.component"
import Home from "./pages/createShipping/createShipping"
import Operario from "./pages/operario/operario";
import ShipmentHistory from "./pages/ShipmentHistory/ShipmentHistory";
import {faBell, faBox, faHistory, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Notifications from "./pages/notifications/Notifications.component";
import {withRouter} from 'react-router-dom'

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

   HandlerNavUser = (key) =>{
    if(key === "envpq"){
      this.props.history.push("/home");
    }
    if(key === "hist"){
      this.props.history.push("/history");
    }
    if(key === "notf"){
      this.props.history.push("/notifications");
    }
    if(key === "signOut"){
      this.handleLoggedIn("false");
    }
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
        name: "Cerrar Sesión",
        id: "signOut",
        icon: faSignOutAlt,
      }
    ]
    console.log(this.state)
    return (
      <Switch>
        <Route exact path="/" render={() => this.state.isLoggedIn === "true"? <Home handler = {this.handleLoggedIn}/>:<Login handler = {this.handleLoggedIn}/> }/>
        <Route exact path="/registro" render={() => <Register handler={this.handleLoggedIn}/>} />
        <Route exact path="/operario" render={() => <Operario handler={this.handleLoggedIn}/>} />
        <Route exact path="/history" render={() => <ShipmentHistory handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser} sideBarData={sideBarDataUser}/>} />
        <Route exact path="/home" render={() => <Home handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser} sideBarData={sideBarDataUser}/>} />
        <Route exact path="/notifications" render={() => <Notifications handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser} sideBarData={sideBarDataUser}/>} />
        <Route exact path="/admin" component = {Admin}/>
      </Switch>
    );
  }
}

export default withRouter(App);
