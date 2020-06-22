import React from "react";
import ReactDom from "react-dom"
import RowUser from "../RowUser.component";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const RowDataUser = [
    {
        id: "48",
        name: "Daniel",
        lastname: "Rodriguez",
        email: "d@unal.edu.co"
    },
    {
        id: "24",
        name: "Sandra",
        lastname: "Valbuena",
        email: "s@unal.edu.co"
    },
    {
        id: "12",
        name: "Laurianne",
        lastname: "Gomez",
        email: "l@unal.edu.co"
    },
    {
        id: "6",
        name: "Jean",
        lastname: "Castro",
        email: "j@unal.edu.co"
    },
]
configure({adapter: new Adapter()});
describe("Test RowUser", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<RowUser data={RowDataUser}/>, div);
    });


})