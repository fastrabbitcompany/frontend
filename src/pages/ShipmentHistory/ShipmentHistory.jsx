import React from "react";
import ListShipmentContainer from "../../components/list_shipment_container/ListShipmentContainer";
import {withRouter} from 'react-router-dom';
import SideBar from "../../components/side-bar/SideBar";
import {faBox, faHistory, faSignOutAlt, faBell} from "@fortawesome/free-solid-svg-icons";
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
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Medellin",
                enProgreso: true,
                tipo: "TERRESTRE",
                fecha: "17/04/2017",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
            },
            {
                destino: "Villavicencio",
                enProgreso: false,
                tipo: "MARITIMO",
                fecha: "29/06/2015",
                progress:[
                    {
                        name:"Entregado Paquete en Cll 26A No.34C18",
                        completed:true
                    },
                    {
                        name:"En Camino a Aereoupuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"Entregado en Areopuerto el Dorado",
                        completed:true
                    },
                    {
                        name:"En Camino a Berlin/Alemania",
                        completed:true
                    },
                    {
                        name:"Entregado Aereopuerto Internacional Berlin",
                        completed:true
                    },
                    {
                        name:"En Camino Punto Av Hittler/48",
                        completed:false
                    },
                ]
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
                            name: "Enviar Paquete",
                            id: "envpq",
                            icon: faBox
                        },
                        {
                            name: "Historial de envios",
                            id: "hist",
                            icon: faHistory
                        },
                        {
                            name: "Centro de Notificaciones",
                            id: "notf",
                            icon: faBell
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