import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';
import { Row, Col, Card, Container, Button, Modal}  from "react-bootstrap";
import { faUserCircle, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import UserForm from '../admin-control/UpdateUserForm.component';
import "./RowUser.css";


const RowUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function alerta(){
    swal({
      title: "Are you sure?",
      text: "You going to delete this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        let body = {
          username:props.username,
          employeeIsActive:0
      }   
      let headers = {
          "content-type": "application/json",
      }
        console.log("body delete",body)
      fetch("https://fastrabbitback.herokuapp.com/api/admin/updateemployee", {
          method: "post",
              body: JSON.stringify(body),
              headers: headers
      }).then(res => res.json())
      .then(res => {
        if(res.success){
          console.log(res)
          swal("Poof! This user has been deleted", {
            icon: "success",
          });
          window.location.reload(false)
        } else {
          swal("error","No se pudo eliminar","error");
        }
      })

      } else {
        swal("This user was not deleted!");
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
          <Col className = "Info" lg = {4} xs={2}> {props.name} </Col>
          <Col className = "Info" lg = {3} xs={2}> {props.role} </Col>
          <Col xs={3}>
          <Button variant = "light">
            <FontAwesomeIcon icon= { faEdit } onClick={handleShow} style = {{color: "green"  }}/>
          </Button>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
                animation={false}
                style={{opacity:1}}
                fade={false}
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Edit User
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <UserForm data={props}/>
              </Modal.Body>
            </Modal>
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

