import React from "react";
import ReactDom from "react-dom"
import EstadoEnvio from "../EstadoEnvio";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const testValues = [{
    Route: {Location: {City: {cityName: "test"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test2"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test3"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test4"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test5"}}},
    shippingStatusHistoryStatus: 0
}];

const testValues2 = [{
    Route: {Location: {City: {cityName: null}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test2"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test3"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test4"}}},
    shippingStatusHistoryStatus: 1
}, {
    Route: {Location: {City: {cityName: "test5"}}},
    shippingStatusHistoryStatus: 0
}];

configure({adapter: new Adapter()});
describe("Test Estado de envio", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<EstadoEnvio progress={testValues}/>, div);
    });
    it("renders city names correctly", () => {
        const component = mount(<EstadoEnvio progress={testValues}/>);
        let title = component.find('#test').first();
        let title2 = component.find('#test').at(1);
        let title3 = component.find('#test').at(2);
        let title4 = component.find('#test').at(3);
        let title5 = component.find('#test').at(4);
        expect(title.text()).toBe("test");
        expect(title2.text()).toBe("test2");
        expect(title3.text()).toBe("test3");
        expect(title4.text()).toBe("test4");
        expect(title5.text()).toBe("test5");
    });
    it("renders status correctly", () => {
        const component = mount(<EstadoEnvio progress={testValues}/>);
        let title = component.find('#test-completed').first();
        let title2 = component.find('#test-progress').first();
        const titleStatus = title.prop('hidden');
        const title2Status = title2.prop('hidden');
        expect(titleStatus).toBe(1);
        expect(title2Status).toBe(0);
    });
    it("Deals with null values correctly", () => {
        const component = mount(<EstadoEnvio progress={testValues2}/>);
        let title = component.find('#test').first();
        expect(title.text()).toBe("Error Getting Name");
    });
})