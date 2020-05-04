import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row, Button }  from "react-bootstrap";
import SearchBar from "./SearchBar.component";
import './NavBar.css';

const NavBar = () => {
    return(
        <Container>
        <Row className = "CreateEmployee">
            <Col>
                <SearchBar></SearchBar>
            </Col>
            <Col className = "ButtonEmployee" >
                Add New Employee
                <Button variant="outline-light" className = "ButEmployee" >
                    <FontAwesomeIcon icon= { faPlusCircle } onClick = {() => this.props.history.push("/edit-worker")} style = {{color: "green"  }}/>
                </Button>
            </Col>
        </Row>
    </Container>
    );
}

export default NavBar;
