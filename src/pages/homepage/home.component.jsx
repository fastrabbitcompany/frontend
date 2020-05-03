import React, {Component} from 'react';
import css from './home.style.css';
import Logo from '../../assets/rabbitNL.png';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faHistory} from "@fortawesome/free-solid-svg-icons";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import box from "../../assets/box.png"
import recargar from "../../assets/recargar.png"
import circle from "../../assets/circle.png"
import cuadros from "../../assets/cuadros.png"

import {Button, Container, Row, Col, Form, Image, Card} from "react-bootstrap";

class home extends Component {
    constructor() {
        super();

    }

    render() {
        return (

            <div className="homepageMovil">
                <Card className="card-createShipping m-8 shadow-lg cardCrear" style={{borderRadius: "35px"}}>
                    <Card.Body>
                        <Container className="createShipping">
                            <Row xs="8" className="createRow"
                                 onClick={() => this.props.history.push("/createShipping")}>
                                <Col xs="6" className="text-center boxContainer">
                                    <Image className="box" src={box}/>
                                </Col>

                                <Col xs="6" className="text-center createText">
                                    <p className="textBanner"> Crear<br/> un<br/> nuevo<br/> envio<br/></p>
                                </Col>
                            </Row>
                            <Row className="tituloEnviosPasados">
                                <Col>
                                    <p className="textPastShippings"> Envios Anteriores</p>
                                </Col>
                            </Row>
                            <Row className="pastShippings">
                                <Col>
                                    <p className="enviosAnterioresTexto"> Envio a USA</p>
                                </Col>
                            </Row>
                            <Row className="pastShippings">
                                <Col>
                                    <p className="enviosAnterioresTexto"> Envio a casa mamá</p>
                                </Col>
                            </Row>
                            <Row className="pastShippings">
                                <Col>
                                    <p className="enviosAnterioresTexto"> Envio a puerto leguisiano</p>
                                </Col>
                            </Row>
                            <Row className="bottomMenu">
                                <Col>
                                    <Button variant="none"> <Image src={recargar}/> </Button>
                                </Col>
                                <Col>
                                    <Button variant="none"> <Image src={circle}/> </Button>
                                </Col>
                                <Col>
                                    <Button variant="none"> <Image src={cuadros}/> </Button>
                                </Col>
                            </Row>
                        </Container>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default home;
