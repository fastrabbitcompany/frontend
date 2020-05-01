import React from "react";
import ListShipmentContainer from "../../components/list_shipment_container/ListShipmentContainer";
import {withRouter} from 'react-router-dom';
import SideBar from "../../components/side-bar/SideBar";
import {faBox, faHistory, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Button, Container, Row, Col, Form, Image, Card, Spinner} from "react-bootstrap";

class ShipmentHistory extends React.Component {
    render() {
        return(
            <div>
            <SideBar handlerToggle={this.handleToggle} handler={this.handleSelect} data={[
                {
                    name:"Cambiar estado Paquetes",
                    id:"reg",
                    icon: faBox
                },
                {
                    name:"Historial",
                    id:"hist",
                    icon:faHistory
                },
                {
                    name:"Sign Out",
                    id:"signOut",
                    icon:faSignOutAlt,
                }
            ]} />
            <div style={{marginLeft:"70px"}}>
                <ListShipmentContainer/>

            </div>
            </div>
        );
    }
}

export default withRouter(ShipmentHistory);