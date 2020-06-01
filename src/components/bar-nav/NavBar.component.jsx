import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row, Button, Modal }  from "react-bootstrap";
import SearchBar from "./SearchBar.component";
import UserForm from '../admin-control/CreateUserForm.component';
import './NavBar.css';

const NavBar = () => {
    const [lgShow, setLgShow] = useState(false);

    return(
        <Container>
        <Row className = "CreateEmployee">
            <Col>
                <SearchBar></SearchBar>
            </Col>
            <Col className = "ButtonEmployee" >
                Add New Employee
                <Button variant="outline-light" className = "ButEmployee" >
                    <FontAwesomeIcon icon= { faPlusCircle } onClick={() => setLgShow(true)} style = {{color: "green"  }}/>
                    <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" >
                        Create User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UserForm />
                    </Modal.Body>
                    </Modal>
                </Button>
            </Col>
        </Row>
    </Container>
    );
}

export default NavBar;
