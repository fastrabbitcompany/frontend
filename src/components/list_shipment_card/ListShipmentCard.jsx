import React, {useState} from "react";
import {Button, Container, Row, Col, Form, Image, Card, Spinner, Collapse } from "react-bootstrap";
import {faPlaneDeparture, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ListShippmentCard.styles.css"


const ListShipmentCard = ({destino,tipo,fecha,isGrey}) => {
    const [open, setOpen] = useState(false);
    return(
        <Card style={{backgroundColor: isGrey ? "#F8F8F8" : "#FFF"}} >
            <Card.Body>
               <Container fluid>
                <Row>
                    <Col md={8} xs={8} >
                        <h6 style={{fontSize:"14px"}}>{tipo}</h6>
                        <Card.Title style={{marginBottom:0, marginTop:"6px"}}>Envio a {destino}</Card.Title>
                        <p style={{fontSize:"13px"}}>{fecha}</p>
                    </Col>
                    <Col md={4} xs={4} className="d-flex flex-nowrap align-items-center" >
                        <FontAwesomeIcon icon={faPlaneDeparture} className={"icon_shippment"}/>
                    </Col>
                </Row>
               </Container >
                <Button className={"prim mt-2"} variant="none"  onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
                        aria-expanded={open}>Consultar Envio</Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
};

export default ListShipmentCard;