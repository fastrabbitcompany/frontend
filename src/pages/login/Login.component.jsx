import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import InputForm from "../../components/inputs-form/InputForm.component";
import "./Login.styles.css"
import Logo from "../../assets/rabbit.png"
import Tilt from 'react-tilt';



class Login extends Component {
    constructor() {
      super();
     
    }
  
    componentDidMount() {
     
    }
  
    
  
    render() {
      return (
          <div className="login h-100">
          <Container className="widthChange h-100">
            <Row className="h-100 d-flex justify-content-center align-items-center">
              <Col>
              <Tilt className="Tilt" options={{ max : 25 }} >
              <Image src={Logo} style={{ height: "300px"}} fluid/>
            </Tilt>
                
                
                <Form className="mt-3 ">
                  <InputForm type="email" placeholder="User" icon={faUser} />
                  <InputForm  type="password" placeholder="Password"  icon={faKey}/>
  
                  <Button variant="none" className="prim w-100" type="submit"> Log In </Button>
                  <Button
                    variant = "none"
                    className="reg w-100 mt-2"
                    onClick = {() => this.props.history.push("/register")}
                  >
                    Sign Up
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
          </div>
      );
    }
  }
  
  export default Login;