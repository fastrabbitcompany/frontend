import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Container }  from "react-bootstrap";
import { faUserCircle, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./RowUser.css";

const RowUser = ({name, rol, lugar}) => {

    return (
    <Card className = "UserRow" style={{backgroundColor: "#F8F8F8" }}>
      <Container>  
        <Row>
          <Col>
            <FontAwesomeIcon icon= { faUserCircle } />
          </Col>
          <Col>
          {name}
          </Col>
          <Col>
          {rol}
          </Col>
          <Col>
          {lugar}
          </Col>
          <Col>
            <FontAwesomeIcon icon= { faEdit } onClick = {() => this.props.history.push("/edit-worker")} style = {{color: "red"  }}/>
            <FontAwesomeIcon icon= { faTrashAlt } onClick = {() => this.props.history.push("/delete-worker")} />
          </Col>
        </Row>
      </Container>
    </Card>
    );
 
}

export default RowUser;

