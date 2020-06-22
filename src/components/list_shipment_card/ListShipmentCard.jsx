import React, {useState} from "react";
import {Button, Container, Row, Col, Card, Collapse} from "react-bootstrap";
import {
    faPlaneDeparture,
    faTruck,
    faShip,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ListShippmentCard.styles.css"
import EstadoEnvio from "../estado-envio/EstadoEnvio";


const ListShipmentCard = ({destino, tipo, fecha, isGrey, id, enProgreso, progress}) => {
    const [open, setOpen] = useState(false);
    const id_colapse = `Envio${destino}${tipo}${id}`;
    const progreso = enProgreso ? "En Progreso" : "Finalizado"
    const consultar = enProgreso ? "Consultar Estado" : "Consultar Historia"
    const color = enProgreso ? "#845ec2" : "rgba(214,93,177,0.8)"
    let icon = faPlaneDeparture;
    if (tipo === "Maritimo") {
        icon = faShip;
    } else if (tipo === "Terrestre") {
        icon = faTruck;
    }
    let finalizado = "Finalizado";
    progress.forEach(item => {
        if(item.shippingStatusHistoryStatus === 0){
            finalizado = "En progreso";
        }
    });
    return (
        <Card key={id} style={{backgroundColor: isGrey ? "#F8F8F8" : "#FFF"}}>
            <Card.Body>
                <Container fluid className={"mt-2"}>
                    <Row>
                        <Col md={8} xs={8}>
                            <h6 className={"tipo_id"} style={{fontSize: "14px"}}>{tipo + "#" + id}</h6>
                            <Card.Title className={"destinoship"} style={{marginBottom: 0, marginTop: "6px"}}>Envio a {destino}</Card.Title>
                            <h6 className={"status_shippment"} style={{color: color}}>{finalizado}</h6>
                            <p style={{fontSize: "13px"}}>{fecha.toString()}</p>
                        </Col>
                        <Col md={4} xs={4} className="d-flex flex-nowrap align-items-center">
                            <FontAwesomeIcon icon={icon} className={"icon_shippment"}/>
                        </Col>
                    </Row>
                </Container>

                <Button className={"reg mt-2"} variant="none" onClick={() => setOpen(!open)} aria-controls={id_colapse}
                        aria-expanded={open}>{consultar}</Button>
                <Collapse in={open} className={"mt-2"}>
                    <div id={id_colapse}>
                        <hr/>
                        <EstadoEnvio  id={id} progress={progress}/>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default ListShipmentCard;