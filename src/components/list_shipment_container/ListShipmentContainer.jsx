import React from "react";
import ListShipmentCard from "../list_shipment_card/ListShipmentCard";
import {Container} from "react-bootstrap";
import "./ListShipmentContainer.styles.css"
import {
    faPlaneDeparture,
    faTruck,
    faShip,
} from "@fortawesome/free-solid-svg-icons";
const ListShipmentContainer = (props) => {
    const items = props.data.map((shipment,i) => {
        return(
            <ListShipmentCard destino={shipment.Destination} progress={shipment.ShippingStatusHistories} tipo={shipment.Connection.Modality.modalityName} fecha={new Date(shipment.date)}  key={i} id={shipment.shippingId} isGrey={i%2===1}/>
        );
    });
    return(
        <Container className={"containerListShip mt-2"}>
            {items}
        </Container>
    );
}

export default ListShipmentContainer;