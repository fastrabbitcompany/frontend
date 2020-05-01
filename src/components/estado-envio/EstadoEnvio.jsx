import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faComments, faSpinner} from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "../map/GoogleMap";
import {Button, Spinner} from "react-bootstrap";

const EstadoEnvio = ({progress}) => {
    const listaEstados = progress.map((item,i) => {
        return (
            <div>
                <div className="d-flex bd-highlight" style={{backgroundColor:  i%2 === 1  ? "#F8F8F8":"#FFF"}}>
                    <div className="p-2 flex-grow-1 bd-highlight">{item.name}</div>
                    <div className="p-2 bd-highlight">
                        {item.completed &&
                        <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: "1.5rem", color: "green"}}/>
                        }
                        {!item.completed &&
                        <FontAwesomeIcon icon={faSpinner} style={{fontSize: "1.5rem", color: "grey"}}/>
                        }
                    </div>
                </div>
                <hr/>
            </div>
        );
    });
    return (
        <div>
            {listaEstados}
            <div style={{textAlign: "center"}}>
                <Button className={"btn-atencionCliente mt-2 mb-2"} variant="none">
                    Contactar Soporte
                    <FontAwesomeIcon icon={faComments} className={"ml-2"}/>
                </Button>
            </div>
            <GoogleMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw"}
                containerElement={<div style={{height: "400px"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
                loadingElement={<p>Cargando</p>}
            />
        </div>
    )

}

export default EstadoEnvio;