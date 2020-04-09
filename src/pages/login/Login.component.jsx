import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import InputForm from "../../components/inputs-form/InputForm.component";
import "./Login.styles.css"
import Logo from "../../assets/rabbit.png"


class Login extends Component {
    constructor() {
      super();
      this.state = {
        width: window.innerWidth
      };
    }
  
    componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      console.log(this.props)
      this.resize();
    }
  
    resize() {
      this.setState({ width: window.innerWidth });
    }
  
    render() {
      let clname = ""
      this.state.width >= 600 ? clname = "vertcen w-50" : clname = "vertcen";
      return (
        
          <Container>
            <Row>
              <Col className={clname}>
                <Image src={Logo} style={{ height: "300px" }} fluid/>
                <Form className="mt-3 ">
                  <InputForm type="email" placeholder="user" icon={faUser} />
                  <InputForm  type="password" placeholder="Password"  icon={faKey}/>
  
                  <Button className="w-100" type="submit"
                    style={{
                      backgroundColor: "#D65DB1",
                      borderColor: "#ffffff"
                    }}
                  >
                    Log In
                  </Button>
                  <Button
                    className="reg w-100 mt-2"
                    onClick = {() => this.props.history.push("/register")}
                  >
                    Sign Up
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
       
      );
    }
  }
  
  export default Login;