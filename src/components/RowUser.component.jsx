import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ListGroup }  from "react-bootstrap";
import { faUser, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const RowUser = (props) => (

  <ListGroup horizontal >
    <ListGroup.Item><FontAwesomeIcon icon= { faUser } /></ListGroup.Item>
    <ListGroup.Item><h6> JUanito </h6> </ListGroup.Item>
    <ListGroup.Item><h6> Operario</h6></ListGroup.Item>
    <ListGroup.Item><h6> Bogta</h6></ListGroup.Item>
    <ListGroup.Item>
      <Button variant="light">
        <FontAwesomeIcon icon= { faEdit } onClick = {() => this.props.history.push("/edit-worker")} />
      </Button>
    </ListGroup.Item>  
    <ListGroup.Item>
      <Button variant="light">
        <FontAwesomeIcon icon= { faTrashAlt } onClick = {() => this.props.history.push("/delete-worker")} />
      </Button>
      </ListGroup.Item>
  </ListGroup>
  
);

export default RowUser;
