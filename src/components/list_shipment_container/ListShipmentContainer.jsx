import React from "react";
import ListShipmentCard from "../list_shipment_card/ListShipmentCard";
import {Button, Container, Row, Col, Form, Image, Card, Spinner} from "react-bootstrap";
import "./ListShipmentContainer.styles.css"
const ListShipmentContainer = (props) => {
    const items = props.data.map((shipment,i) => {
        return(
            <ListShipmentCard destino={shipment.destino} tipo={shipment.tipo} fecha={shipment.fecha} enProgreso={shipment.enProgreso} key={i} id={i} isGrey={i%2==1}/>
        );
    });
    return(
        <Container className={"containerListShip mt-2"}>
            {items}
        </Container>
    );
}

export default ListShipmentContainer;