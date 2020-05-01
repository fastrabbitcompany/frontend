import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, Container, Row, Column }  from "react-bootstrap";
import RowUser from "./RowUser.component";

const UserList = (props) => (

  <ListGroup>
    <Container>
        <Row>
            <RowUser></RowUser>
        </Row>
        <Row>
            <RowUser></RowUser>
        </Row>
        <Row>
            <RowUser></RowUser>
        </Row>
        <Row>
            <RowUser></RowUser>
        </Row>

    </Container>
  </ListGroup>
  
);

export default UserList;
