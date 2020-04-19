import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Image, Card } from "react-bootstrap";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import InputForm from "../../components/inputs-form/InputForm.component";
import "./Login.styles.css"
import Logo from "../../assets/rabbit.png"
import Tilt from 'react-tilt';
import { withRouter } from 'react-router-dom';




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName : "",
      password : "",
    }

    
  }


  handleChangeName = (e) =>{
    this.setState({
      userName: e.target.value
    });
  };

  handleChangePass = (e) =>{
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let user = this.state.userName;
    let pass = this.state.password;
    console.log(user,pass)
    let answer = true;
    this.props.handler(answer);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="login h-100">
        <Container className="widthChange h-100">
          <Row className="h-100 d-flex justify-content-center align-items-center">
            <Col>
              <Card className="p-4 shadow-lg" style={{ borderRadius: "35px" }}>
                <Tilt className="Tilt" options={{ max: 25 }} >
                  <Image src={Logo} style={{ height: "300px" }} fluid />
                </Tilt>
                <Form className="mt-3" onSubmit={this.handleSubmit}>
                  <InputForm type="email" placeholder="User" icon={faUser} handler={this.handleChangeName}/>
                  <InputForm type="password" placeholder="Password" icon={faKey} handler={this.handleChangePass}/>

                  <Button variant="none" className="prim w-100" type="submit"> Log In </Button>
                  <Button
                    variant="none"
                    className="reg w-100 mt-2"
                    onClick={() => this.props.history.push("/register")}
                  >
                    Sign Up
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
