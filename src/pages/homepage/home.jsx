import React from 'react';
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
import { Button, Container, Row, Col, Form, Image, Card } from "react-bootstrap";

function homepage(){
  return(

  <React.Fragment>
      <div className="Homecontainer">
        <div className="HomeHeader">
          <FontAwesomeIcon className = "HomeArrow" icon = {faArrowLeft} size = "2x"/>
          <FontAwesomeIcon className = "HomeSearch" icon = {faSearch} size = "2x"/>
          <Button >Sign Out</Button>
        </div>
        
        <div className = "HomeUser">
          <FontAwesomeIcon className = "HomeHelp" icon = {faQuestionCircle} size = "2x"/>
          <FontAwesomeIcon className = "HomeUser" icon = {faUserCircle} size = "2x"/>
        </div>

        <div className="HomeSideBar">
          <img className = "HomeLogo" src = {Logo} alt="Logo" />
          <li>
            <FontAwesomeIcon className = "HomeCalendar" icon = {faCalendarAlt}  size = "2x"/>
          </li>
          <li>
            <FontAwesomeIcon className = "HomeHistory" icon = {faHistory} size = "2x"/>
          </li>          
        </div>
        <div className = "HomeSettings" >
          <FontAwesomeIcon className = "HomeSetting" icon = {faCog} size = "2x"/>
        </div>

        <div className="HomeMain">
          <div className = "HomeTitleMain">
            Current Deliveries  
          </div> 

          <div className="HomeListDelivery">
            <div className = "HomeDeliveryTitle">
              <ul>User </ul>
              <ul>Origin</ul>
              <ul>Destination</ul>
              <ul>Vehicle</ul>
              <ul>Premium</ul>
            </div>
            <div className = "HomeDelivery">
              <ul>User1 </ul>
              <ul>Origin1</ul>
              <ul>Destination1</ul>
              <ul>Vehicle1</ul>
              <ul><FontAwesomeIcon className = "HomeStar" icon = {faStar} /></ul>
            </div>

            <div className = "HomeDelivery">
              <ul>User2 </ul>
              <ul>Origin2</ul>
              <ul>Destination2</ul>
              <ul>Vehicle2</ul>
              <ul>No</ul>
            </div>  

            <div className = "HomeDelivery">
              <ul>User3 </ul>
              <ul>Origin3</ul>
              <ul>Destination3</ul>
              <ul>Vehicle1</ul>
              <ul><FontAwesomeIcon className = "HomeStar" icon = {faStar} /></ul>
            </div>
          </div> 

        </div>
      </div>  
	<div className="homepageMovil">
		<Container className="createShipping">
			<Row className="createRow">
				<Col xs="6" className="boxContainer">
					<Image  className ="box" src={box} />
				</Col>	
				
				<Col xs="6" className="createText">
					<p className="textBanner"> Crear un nuevo envio</p>
				</Col>
			</Row>	
			<Row>
				<Col>
					<p className="textPastShippings"> Envios Anteriores</p>
				</Col>
			</Row>
			<Row className="pastShippings">

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
	</div>
    </React.Fragment>
  );
}
  

export default homepage;
