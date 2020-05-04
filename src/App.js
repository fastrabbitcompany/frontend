import React, {Component} from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login.component"
import Register from "./pages/register/Register.component"
import Gestionar from "./pages/admin/Gestionar_personal/Gestionar.component"
import Estadisticas from "./pages/admin/Estadisticas/Estadisticas.component";
import Home from "./pages/user/createShipping/createShipping"
import Operario from "./pages/operario/operario";
import ShipmentHistory from "./pages/user/ShipmentHistory/ShipmentHistory";
import {faBell, faBox, faHistory, faSignOutAlt, faUserClock, faChartLine} from "@fortawesome/free-solid-svg-icons";
import Notifications from "./pages/user/notifications/Notifications.component";
import {withRouter} from 'react-router-dom'
import {ProtectedRoute} from "./ProtectedComponent";

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
            if (answer === "false") {
                localStorage.removeItem("token");
                console.log("removed token");
            } else {
                const role = localStorage.getItem("role");
                this.props.history.push(`${role.toLowerCase()}/home`);
            }
            this.forceUpdate();
        });
    }

    componentDidMount() {
        let logged = "false";
        if (localStorage.getItem("token")) {
            logged = "true";
        }
        this.setState({
            isLoggedIn: logged
        },() => {
            if(logged==="true" && this.props.location.pathname==="/"){
                const role = localStorage.getItem("role");
                this.props.history.push(`${role.toLowerCase()}/home`);
            }
        });
    }

    HandlerNavUser = (key) => {
        if (key === "envpq") {
            this.props.history.push("/user/home");
        }
        if (key === "hist") {
            this.props.history.push("/user/history");
        }
        if (key === "notf") {
            this.props.history.push("/user/notifications");
        }
        if (key === "signOut") {
            this.handleLoggedIn("false");
        }
    }

    HandlerNavAdmin = (key) => {
        if (key === "gest") {
            this.props.history.push("/admin/home");
        }
        if (key === "estadis") {
            this.props.history.push("/admin/estadisticas");
        }
        if (key === "signOut") {
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
        const sideBarDataAdmin = [
            {
                name: "Gestion de Personal",
                id: "gest",
                icon: faUserClock
            },
            {
                name: "Estadisticas",
                id: "estadis",
                icon: faChartLine
            },
            {
                name: "Cerrar Sesión",
                id: "signOut",
                icon: faSignOutAlt,
            }
        ]
        // console.log(this.state)
        return (
            <Switch>
                <Route exact path="/" render={() => <Login handler={this.handleLoggedIn}/>}/>
                <Route exact path="/registro" render={() => <Register handler={this.handleLoggedIn}/>}/>

                {/*   Vistas Usuario        */}
                <ProtectedRoute exact path="/user/home" component={Home} typeRole = "User"
                                handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser}
                                sideBarData={sideBarDataUser}/> />
                <ProtectedRoute exact path="/user/history" logged={this.state.isLoggedIn} component={ShipmentHistory} typeRole = "User"
                                handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser}
                                sideBarData={sideBarDataUser}/> />
                <ProtectedRoute exact path="/user/notifications" logged={this.state.isLoggedIn} component={Notifications} typeRole = "User"
                                handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser}
                                sideBarData={sideBarDataUser}/> />
                {/*Vistas Operario*/}
                <ProtectedRoute exact path="/operario/home" logged={this.state.isLoggedIn} component={Operario} typeRole = "Operario"
                                handler={this.handleLoggedIn} handlerNav={this.HandlerNavUser}
                                sideBarData={sideBarDataUser}/> />

                {/*Vistas Administrador*/}
                <ProtectedRoute exact path="/admin/home" logged={this.state.isLoggedIn} component={Gestionar} typeRole = "Admin"
                                handler={this.handleLoggedIn} handlerNav={this.HandlerNavAdmin}
                                sideBarData={sideBarDataAdmin}/> />
                <ProtectedRoute exact path="/admin/estadisticas" logged={this.state.isLoggedIn} component={Estadisticas} typeRole = "Admin"
                                handler={this.handleLoggedIn} handlerNav={this.HandlerNavAdmin}
                                sideBarData={sideBarDataAdmin}/> />
                <Route path="*" component={() => "404 NOT FOUND"} />

            </Switch>
        );
    }
}

export default withRouter(App);
