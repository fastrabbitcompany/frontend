import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Container, Button}  from "react-bootstrap";
import { faBox, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./PackageList.css";

const RowPackage = ({id, origen, destino}) => {

    return (
    <Card className = "UserRow" style={{backgroundColor: "#F8F8F8" }}>
      <Container>  
        <Row>
          <Col className = "Icono" xs={1}>
            <FontAwesomeIcon icon= { faBox } size = "1x" style = {{color: "#845ec2"  }}/>
          </Col>
          <Col className = "Info" xs={2}> {id} </Col>
          <Col className = "Info" lg ={3} xs={2}> {origen} </Col>
          <Col className = "Info" lg ={3} xs={2}> {destino} </Col>
          <Col className = "Icono"xs={1}> <FontAwesomeIcon icon= { faEdit } size = "1x" style = {{color: "#845ec2"  }}/> </Col>
        </Row>
      </Container>
    </Card>
    );
 
}

//onClick= {() => alerta()  }

export default RowPackage;

