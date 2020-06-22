import React from "react";
import Login from "../login/Login.component";
import Home from "../user/createShipping/createShipping";
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'


const handleLoginSuccess = jest.fn();
const handleLoginFail = jest.fn();

describe("Login module", () => {
    test("initial state", () => {
        render(<BrowserRouter>
            <Login/>
        </BrowserRouter>)

        const emailField = screen.getByPlaceholderText('Email');
        expect(emailField).toHaveValue('');
        const passwordField = screen.getByPlaceholderText('Contraseña');
        expect(passwordField).toHaveValue('');

        const button = screen.getByText("Iniciar Sesión");
        expect(button).not.toBeDisabled();
        expect(button).toHaveTextContent('Iniciar Sesión');

    });

    test("succesful login", async () => {
        jest
            .spyOn(window, 'fetch')
            .mockResolvedValueOnce({json: () => ({token: '123', success: true})});

        render(<BrowserRouter>
            <Login handler={handleLoginSuccess}/>
        </BrowserRouter>)

        const emailField = screen.getByPlaceholderText('Email');
        const passwordField = screen.getByPlaceholderText('Contraseña');
        const button = screen.getByText("Iniciar Sesión");
        fireEvent.change(emailField, {target: {value: 'test@email.com'}});
        fireEvent.change(passwordField, {target: {value: 'password'}});
        fireEvent.click(button);

        expect(button).toBeDisabled();
        expect(button).toHaveTextContent("Loading...");
        await waitFor(() => {
            expect(handleLoginSuccess).toHaveBeenCalledTimes(1);
            const errorText = screen.getByTestId("error-message")
            expect(errorText).not.toBeVisible();
        });
    });

    test("error login", async () => {
        jest
            .spyOn(window, 'fetch')
            .mockResolvedValueOnce({json: () => ({message: 'invalid password', success: false})});
        render(<BrowserRouter>
            <Login handler={handleLoginFail}/>
        </BrowserRouter>)
        jest
            .spyOn(window, 'fetch')
            .mockResolvedValueOnce({json: () => ({token: '123', success: true})});

        const emailField = screen.getByPlaceholderText('Email');
        const passwordField = screen.getByPlaceholderText('Contraseña');
        const button = screen.getByText("Iniciar Sesión");
        fireEvent.change(emailField, {target: {value: 'test@email.com'}});
        fireEvent.change(passwordField, {target: {value: 'password'}});
        fireEvent.click(button);

        expect(button).toBeDisabled();
        expect(button).toHaveTextContent("Loading...");
        await waitFor(() => {
            expect(handleLoginFail).toHaveBeenCalledTimes(0);
            expect(button).not.toBeDisabled();
            expect(button).toHaveTextContent('Iniciar Sesión');
            const errorText = screen.getByTestId("error-message");
            expect(errorText).toBeVisible();
            expect(errorText).toHaveTextContent("invalid password");
        });
    })

});
describe("Home module", () => {
    test("success", async () => {
        jest
            .spyOn(window, 'fetch')
            .mockResolvedValueOnce({
                json: () => ({
                    price: 4888,
                    distance: 15555,
                    time: 1.5,
                    connectionTravel: [],
                    cities: [{cityId: 1, cityName: "test"}, {cityId: 2, cityName: "test"}, {
                        cityId: 3,
                        cityName: "test"
                    }, {cityId: 4, cityName: "test"},],
                    success: true
                })
            });
        render(<BrowserRouter>
            <Home sideBarData={[]}/>
        </BrowserRouter>)

        const formSegundoPaso = screen.getByTestId("formSegundoPaso");
        expect(formSegundoPaso).not.toBeVisible();
        const buttonTipo = screen.getByTestId("choose-truck");
        fireEvent.click(buttonTipo);
        const buttonNacional = screen.getByTestId("choose-truck");
        fireEvent.click(buttonNacional);
        fireEvent.change(screen.getByTestId("select-origen"), {
            target: {value: 2},
        });
        fireEvent.change(screen.getByTestId("select-destino"), {
            target: {value: 4},
        });

        const ancho = screen.getByPlaceholderText('Ancho (Cm)');
        const largo = screen.getByPlaceholderText('Largo (Cm)');
        const alto = screen.getByPlaceholderText('Alto (Cm)');
        const peso = screen.getByPlaceholderText('Peso');
        fireEvent.change(ancho, {target: {value: 15}});
        fireEvent.change(largo, {target: {value: 20}});
        fireEvent.change(alto, {target: {value: 15}});
        fireEvent.change(peso, {target: {value: 5}});

        const cotizarBtn = screen.getByTestId("cotizar");
        fireEvent.click(cotizarBtn);
    });
})