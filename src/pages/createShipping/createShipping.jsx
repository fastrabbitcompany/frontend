import React from 'react';
import css from './createShipping.style.css';
import truck from '../../assets/truck.svg';
import ship from '../../assets/ship.png';
import plane from '../../assets/plane.webp';
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
import { Button, Container, Row, Col, Form, Image, Card } from "react-bootstrap";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./createShipping.style.css"
function createShipping(){
		
  return(
		<Container>
			<Card className="card-createShipping m-8 shadow-lg cardCrear" style={{borderRadius: "35px"}}>
				<Card.Body>
					<Card.Title className="title-createShipping tituloTexto">Tipo de transporte:</Card.Title>
					<Row >
						<Col xs="sm-4" className="text-center colBot">
							<button className="botonIcono">
		          	<Image className="img-responsive imagenTransporte" src={truck}/>          
							</button>
						</Col>
						<Col xs="sm-4" className="text-center colBot">
							<button className="botonIcono">
		          	<Image className="imagenTransporte" src={ship}/>          
							</button>
						</Col>
						<Col xs="sm-4" className="text-center colBot">
							<button className="botonIcono">
		          	<Image className="imagenTransporte" src={plane}/>          
							</button>
						</Col>
					</Row>
					<Form className="my-4">
						<Form.Group className="inputCrear" style={{ textAlign: "left" }}>
							<Form.Control className="inputTexto" placeholder="Origen" required/>
						</Form.Group>
						<Form.Group className="inputCrear" style={{ textAlign: "left" }}>
							<Form.Control className="inputTexto" placeholder="Destino" required/>
						</Form.Group>
						<Form.Group className="inputCrear" style={{ textAlign: "left" }}>
							<Form.Control className="inputTexto" placeholder="Tamaño (m^2)" required/>
						</Form.Group>
						<Form.Group className="inputCrear" style={{ textAlign: "left" }}>
							<Form.Control className="inputTexto" placeholder="Peso (Kg)" required/>
						</Form.Group>
						<Button variant="none" className="reg w-100 inputTexto1" type="submit"> Crear Envio </Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
);
}
  

export default createShipping;
