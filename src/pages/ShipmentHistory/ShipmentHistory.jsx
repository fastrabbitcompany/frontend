import React from "react";
import ListShipmentContainer from "../../components/list_shipment_container/ListShipmentContainer";
import {withRouter} from 'react-router-dom';
import SideBar from "../../components/side-bar/SideBar";
import {faBox, faHistory, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Button, Container, Row, Col, Form, Image, Card, Spinner} from "react-bootstrap";
import Sticky from 'react-sticky-el';

class ShipmentHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        const data = [
            {
                destino: "USA",
                tipo: "AEREO",
                enProgreso: true,
                fecha: "21/08/2019",
            },
            {
                destino: "Medellin",
                enProgreso: true,
                tipo: "TERRESTRE",
                fecha: "17/04/2017",
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
            },

        ];
        this.setState({data: data})
    }

    render() {
        return (
            <div>
                <Sticky>
                    <SideBar handlerToggle={this.handleToggle} handler={this.handleSelect} data={[
                        {
                            name: "Cambiar estado Paquetes",
                            id: "reg",
                            icon: faBox
                        },
                        {
                            name: "Historial",
                            id: "hist",
                            icon: faHistory
                        },
                        {
                            name: "Sign Out",
                            id: "signOut",
                            icon: faSignOutAlt,
                        }
                    ]}/>
                </Sticky>
                <div style={{marginLeft: "70px"}}>
                    <ListShipmentContainer data={this.state.data}/>

                </div>
            </div>
        );
    }
}

export default withRouter(ShipmentHistory);