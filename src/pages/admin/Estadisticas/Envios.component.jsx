import React from 'react';
import SideBar from "../../../components/side-bar/SideBar";
import {MDBDataTable} from "mdbreact";
import TableEnvios from "./TableEnvios";

class Envios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    parseData = (envios) => {
        let data = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Origen',
                    field: 'origen',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Destino',
                    field: 'destino',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Actual',
                    field: 'actual',
                    sort: 'asc',
                    width: 270
                }
            ],
            rows: []
        };
        envios.forEach(envio => {
            data.rows.push({
                id: envio.shippingId,
                origen: envio.Origen,
                destino: envio.Destination,
                actual: this.findCurrent(envio.ShippingStatusHistories),
            })
        });
        return data;
    };

    findCurrent = (shippments) => {
        console.log(shippments)
        let current;
        let anterior = shippments[0].Route.Location.City.cityName;
        let flag = false;
        let este;
        console.log("Anterior ", anterior);
        shippments.forEach((shipment, i) => {
            current = shipment.Route.Location.City.cityName;
            console.log("current ", current);
            console.log(shipment.shippingStatusHistoryStatus)
            if (shipment.shippingStatusHistoryStatus === 0) {
                console.log("Salio con ", anterior);
                if (!flag) {
                    este = anterior;
                    flag = true;
                }
            }
            anterior = shipment.Route.Location.City.cityName;
            console.log("Anterior ", anterior);
        });
        if (flag) {
            return este;
        } else {
            return current;
        }
    }

    componentDidMount() {
        let body = {
            token: localStorage.getItem("token")
        }
        let headers = {
            "content-type": "application/json",
        }
        console.log(body);
        body = JSON.stringify(body);
        fetch("https://fastrabbitback.herokuapp.com/api/shipping/getshippings", {
            body,
            headers,
            method: "post"
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    console.log(res.shippings);
                    let data = this.parseData(res.shippings);
                    this.setState({data: data});
                }
            })
    }


    render() {
        return (
            <div className="ScreenAdmin">
                <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
                <div className={"mt-4"} style={{marginLeft: "70px"}}>
                    <h1>Lista de Envios</h1>
                    <TableEnvios data={this.state.data}/>
                </div>

            </div>

        );
    }
}

export default Envios;