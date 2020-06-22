import React from "react";
import ReactDom from "react-dom"
import SideBar from "../SideBar";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {faBell, faBox, faHistory, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

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
configure({adapter: new Adapter()});
describe("Test Side Bar", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<SideBar data={sideBarDataUser}/>, div);
    });


})