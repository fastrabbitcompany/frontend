import React from "react";
import { ListGroup, Container, Row, Col}  from "react-bootstrap";
import PackageUser from "./RowPackage.component";
import "./PackageList.css";

const PackageList = (props) => {
  console.log(props)
    const item = props.data.map((pack,i) => {
        return(
          <div onClick = {() => props.parentFunction(pack.id, props.parent)} >
            <PackageUser id = {pack.id} origen = {pack.origen} destino = {pack.destino} key = {i} />
          </div>
        )
        
    })
    return( 

  <ListGroup>
    <Container className = "lista">
      <Row className = "TitleList">
          <Col lg = {3}> Id Package</Col>
          <Col lg = {3}> Origen</Col>
          <Col lg = {3}> Destino</Col>
      </Row>
        {item}
    </Container>
  </ListGroup>
  
    );
}

//username,email,password,phonenumber,firstName,lastName,address
export default PackageList;
