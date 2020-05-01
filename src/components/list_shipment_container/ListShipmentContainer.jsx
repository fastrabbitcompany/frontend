import React from "react";
import ListShipmentCard from "../list_shipment_card/ListShipmentCard";
import {Button, Container, Row, Col, Form, Image, Card, Spinner} from "react-bootstrap";
import "./ListShipmentContainer.styles.css"
const ListShipmentContainer = (props) => {
    const data = [
        {
            destino: "USA",
            tipo:"AEREO",
            fecha:"21/08/2019",
        },
        {
            destino: "Medellin",
            tipo:"TERRESTRE",
            fecha:"17/04/2017",
        },
        {
            destino: "Villavicencio",
            tipo:"MARITIMO",
            fecha:"29/06/2015",
        },
        {
            destino: "Villavicencio",
            tipo:"MARITIMO",
            fecha:"29/06/2015",
        },
        {
            destino: "Villavicencio",
            tipo:"MARITIMO",
            fecha:"29/06/2015",
        },
        {
            destino: "Villavicencio",
            tipo:"MARITIMO",
            fecha:"29/06/2015",
        },
        {
            destino: "Villavicencio",
            tipo:"MARITIMO",
            fecha:"29/06/2015",
        },
        {
            destino: "Villavicencio",
            tipo:"MARITIMO",
            fecha:"29/06/2015",
        },

    ];
    const items = data.map((shipment,i) => {
        return(
            <ListShipmentCard destino={shipment.destino} tipo={shipment.tipo} fecha={shipment.fecha} key={i} isGrey={i%2==1}/>
        );
    });
    return(
        <Container className={"containerListShip mt-2"}>
            {items}
        </Container>
    );
}

export default ListShipmentContainer;