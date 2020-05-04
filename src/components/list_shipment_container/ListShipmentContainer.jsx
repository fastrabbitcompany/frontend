import React from "react";
import ListShipmentCard from "../list_shipment_card/ListShipmentCard";
import {Container} from "react-bootstrap";
import "./ListShipmentContainer.styles.css"
const ListShipmentContainer = (props) => {
    const items = props.data.map((shipment,i) => {
        return(
            <ListShipmentCard destino={shipment.destino} progress={shipment.progress} tipo={shipment.tipo} fecha={shipment.fecha} enProgreso={shipment.enProgreso} key={i} id={i} isGrey={i%2===1}/>
        );
    });
    return(
        <Container className={"containerListShip mt-2"}>
            {items}
        </Container>
    );
}

export default ListShipmentContainer;