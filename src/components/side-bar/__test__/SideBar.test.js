import React from "react";
import ReactDom from "react-dom"
import SideBar from "../SideBar";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {faBell, faBox, faHistory, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import ListShipmentCard from "../../list_shipment_card/ListShipmentCard";

let handlerButton1 = jest.fn();
let handlerButton2 = jest.fn();
let handlerButton3 = jest.fn();
let handlerButton4 = jest.fn();
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
const HandlerNavUser = (key) => {
    if (key === "envpq") {
        handlerButton1();
    }
    if (key === "hist") {
        handlerButton2()
    }
    if (key === "notf") {
        handlerButton3()
    }
    if (key === "signOut") {
        handlerButton4()
    }
}
configure({adapter: new Adapter()});
describe("Test Side Bar", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<SideBar data={sideBarDataUser}  handler={HandlerNavUser}/>, div);
    });
    it("renders buttons correctly", () => {
        const component = mount(<SideBar data={sideBarDataUser}  handler={HandlerNavUser}/>);
        let btn1 = component.find('#btn-text').first();
        let btn2 = component.find('#btn-text').at(1);
        let btn3 = component.find('#btn-text').at(2);
        let btn4 = component.find('#btn-text').at(3);
        expect(btn1.text()).toBe("Enviar Paquete");
        expect(btn2.text()).toBe("Historial de envios");
        expect(btn3.text()).toBe("Centro de Notificaciones");
        expect(btn4.text()).toBe("Cerrar Sesión");
    });


    it("Calls the respective buttons correctly", () => {
        const component = mount(<SideBar data={sideBarDataUser}  handler={HandlerNavUser}/>);
        component.find('#btn-click-test').at(0).simulate("click");
        expect(handlerButton1.mock.calls.length).toBe(1);
        component.find('#btn-click-test').at(0).simulate("click");
        component.find('#btn-click-test').at(0).simulate("click");
        expect(handlerButton1.mock.calls.length).toBe(3);
    });

})