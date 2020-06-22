import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faComments, faSpinner} from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "../map/GoogleMap";
import {Button} from "react-bootstrap";

const EstadoEnvio = ({progress}) => {
    const listaEstados = progress.map((item,i) => {
        return (
            <div key={i}>
                <div className="d-flex bd-highlight" style={{backgroundColor:  i%2 === 1  ? "#F8F8F8":"#FFF"}}>
                    <div id={"test"} className="cityName p-2 flex-grow-1 bd-highlight">{item.Route.Location.City.cityName !== null?item.Route.Location.City.cityName:"Error Getting Name"}</div>
                    <div className="p-2 bd-highlight">
                        {(item.shippingStatusHistoryStatus === 1) &&
                        <FontAwesomeIcon id={"test-completed"} hidden={item.shippingStatusHistoryStatus == 1?1:0} icon={faCheckCircle} style={{fontSize: "1.5rem", color: "green"}}/>
                        }
                        {(item.shippingStatusHistoryStatus === 0) &&
                        <FontAwesomeIcon id={"test-progress"} hidden={item.shippingStatusHistoryStatus == 1?1:0} icon={faSpinner} style={{fontSize: "1.5rem", color: "grey"}}/>
                        }
                    </div>
                </div>
                <hr/>
            </div>
        );
    });
    return (
        <div>
            <GoogleMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw"}
                containerElement={<div style={{height: "250px"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
                loadingElement={<p>Cargando</p>}
            />
            <hr className={"mt-2"}/>
            {listaEstados}
            <div style={{textAlign: "center"}}>
                <Button className={"btn-atencionCliente mt-2 mb-2"} variant="none">
                    Contactar Soporte
                    <FontAwesomeIcon icon={faComments} className={"ml-2"}/>
                </Button>
            </div>
        </div>
    )

}

export default EstadoEnvio;