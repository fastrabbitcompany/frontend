import React from "react";
import ReactDom from "react-dom"
import ListShipmentCard from "../ListShipmentCard";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {faPlaneDeparture, faShip, faTruck,} from "@fortawesome/free-solid-svg-icons";

const testValues = {
    destino: "", tipo: "Maritimo", fecha: "", isGrey: true, id: 1, enProgreso: 1, progress: [{
        Route: {Location: {City: {cityName: "test"}}},
        shippingStatusHistoryStatus: 1
    }, {
        Route: {Location: {City: {cityName: "test2"}}},
        shippingStatusHistoryStatus: 0
    }]
};
const testValues2 = {
    destino: "", tipo: "Terrestre", fecha: "", isGrey: true, id: 1, enProgreso: 1, progress: [{
        Route: {Location: {City: {cityName: "test6"}}},
        shippingStatusHistoryStatus: 1
    }, {
        Route: {Location: {City: {cityName: "test7"}}},
        shippingStatusHistoryStatus: 1
    }]
};
const testValues3 = {
    destino: "test", tipo: "Aereo", fecha: "", isGrey: true, id: 1, enProgreso: 1, progress: []
};

configure({adapter: new Adapter()});
describe("Test List of Shippments", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<ListShipmentCard {...testValues}/>, div);
    });
    it("renders according to props", () => {
        const component = mount(<ListShipmentCard {...testValues3}/>);
        let tipoid = component.find('.tipo_id').first();
        let destinoship = component.find('.destinoship').first();
        expect(tipoid.text()).toBe("Aereo#1");
        expect(destinoship.text()).toBe("Envio a test");
    });
    it("renders ship icon", () => {
        const component = mount(<ListShipmentCard {...testValues}/>);
        let icon4 = component.find('.icon_shippment').first();
        const iconSrc = icon4.prop('icon');
        expect(iconSrc).toBe(faShip);
    });
    it("renders plane icon", () => {
        const component = mount(<ListShipmentCard {...testValues3}/>);
        let icon = component.find('.icon_shippment').first();
        const iconSrc = icon.prop('icon');
        expect(iconSrc).toBe(faPlaneDeparture);
    });
    it("renders truck icon", () => {
        const component = mount(<ListShipmentCard {...testValues2}/>);
        let icon2 = component.find('.icon_shippment').first();
        const iconSrc = icon2.prop('icon');
        expect(iconSrc).toBe(faTruck);
    });
    it("updates status of shippment to ´en progreso´", () => {
        const component = mount(<ListShipmentCard {...testValues}/>);
        let icon3 = component.find('.status_shippment').first();
        expect(icon3.text()).toBe("En progreso");
    });
    it("updates status of shippment to 'Finalizado'", () => {
        const component = mount(<ListShipmentCard {...testValues2}/>);
        let icon = component.find('.status_shippment').first();
        expect(icon.text()).toBe("Finalizado");
    });
})