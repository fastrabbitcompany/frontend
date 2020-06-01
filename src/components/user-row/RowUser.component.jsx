import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';
import { Row, Col, Card, Container, Button, Modal}  from "react-bootstrap";
import { faUserCircle, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import UserForm from '../admin-control/UpdateUserForm.component';
import "./RowUser.css";


const RowUser = ({name, rol, username}) => {
  const [lgShow, setLgShow] = useState(false);


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
          username,
          employeeIsActive:"0"
      }   
      let headers = {
          "content-type": "application/json",
      }

      fetch("https://fastrabbitback.herokuapp.com/api/admin/updateemployee", {
          method: "post",
              body: JSON.stringify(body),
              headers: headers
      }).then(res => res.json())
      .then(res => {
          console.log(res)
          window.location.reload(false)
          if(res.success){
          }
      })
      
        swal("Poof! This user has been deleted", {
          icon: "success",
        });
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
          <Col className = "Info" lg = {4} xs={2}> {name} </Col>
          <Col className = "Info" lg = {3} xs={2}> {rol} </Col>
          <Col xs={3}>
          <Button variant = "light">
            <FontAwesomeIcon icon= { faEdit } onClick={() => setLgShow(true)} style = {{color: "green"  }}/>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Edit User
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserForm />
            </Modal.Body>
          </Modal>
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

