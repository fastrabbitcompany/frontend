import React from "react";
import ListShipmentContainer from "../../../components/list_shipment_container/ListShipmentContainer";
import {withRouter} from 'react-router-dom';
import SideBar from "../../../components/side-bar/SideBar";
import Sticky from 'react-sticky-el';

class ShipmentHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        let body = {
            token:localStorage.getItem("token")
        }
        let headers = {
            "content-type": "application/json",
        }
        console.log(body);
        body = JSON.stringify(body);
        fetch("https://fastrabbitback.herokuapp.com/api/shipping/getshippingsuser",{
            body,
            headers,
            method:"post"
        }).then(res => res.json())
            .then(res => {
                if(res.success){
                    console.log(res.shippings);
                    this.setState({data:res.shippings});
                }
            })
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
        //this.setState({data: data})
    }

    render() {
        return (
            <div>
                <Sticky>
                    <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
                </Sticky>
                <div style={{marginLeft: "70px"}}>
                    <ListShipmentContainer data={this.state.data}/>

                </div>
            </div>
        );
    }
}

export default withRouter(ShipmentHistory);