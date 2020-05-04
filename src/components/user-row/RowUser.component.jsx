import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';
import { Row, Col, Card, Container, Button}  from "react-bootstrap";
import { faUserCircle, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./RowUser.css";


const RowUser = ({name, rol, lugar}) => {

  function alerta(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  } 

    return (
    <Card className = "UserRow" style={{backgroundColor: "#F8F8F8" }}>
      <Container>  
        <Row>
          <Col className = "Icono" xs={1}>
            <FontAwesomeIcon icon= { faUserCircle } size = "2x"/>
          </Col>
          <Col className = "Info" xs={2}> {name} </Col>
          <Col className = "Info" xs={2}> {rol} </Col>
          <Col className = "Info" xs={2}> {lugar} </Col>
          <Col xs={3}>
          <Button variant = "light">
            <FontAwesomeIcon icon= { faEdit } onClick = {() => this.props.history.push("/edit-worker")} style = {{color: "green"  }}/>
          </Button>
          <Button variant = "light">
            <FontAwesomeIcon icon= { faTrashAlt } onClick= {() => alerta()  } style = {{color: "red "  }}/>
            
          </Button>
          </Col>
        </Row>
      </Container>
    </Card>
    );
 
}

export default RowUser;

