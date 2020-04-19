import React from "react";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import "./Register.styles.css";

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
  return(
    <div className="register justify-content-center align-items-center">
      <Card className="card-register m-4 shadow-lg" style={{borderRadius:"35px"}}>
        <Card.Body>
          <Card.Title className="title-register">Create Account</Card.Title>
          <Form className="my-4">
            <Row md={2} sm={1} xs={1}>
              <Col>
                <Form.Group style={{ textAlign: "left" }} controlId="formBasicEmail">
                  <Form.Label className="label-register">First Name</Form.Label>
                  <Form.Control type="text" placeholder="Jhon" required/>
                </Form.Group>
              </Col>
              <Col >
                <Form.Group style={{ textAlign: "left" }} controlId="formBasicEmail">
                  <Form.Label className="label-register">Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Doe" required/>
                </Form.Group>
              </Col>
            </Row>
            
            <Row md={2} sm={1} xs={1}>
              <Col  md={8} lg={8}>
                <Form.Group style={{ textAlign: "left" }} controlId="formBasicEmail">
                  <Form.Label className="label-register">Address</Form.Label>
                  <Form.Control type="text" placeholder="Cll 26a No. 24a-18" required />
                </Form.Group>
              </Col>
              <Col md={4} lg={4}>
                <Form.Group style={{ textAlign: "left" }} controlId="formBasicEmail">
                  <Form.Label className="label-register">Phone number</Form.Label>
                  <Form.Control type="number" placeholder="3104787326" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group style={{ textAlign: "left" }} controlId="formBasicEmail">
              <Form.Label className="label-register">E-mail</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" required/>
            </Form.Group>

            

            <Form.Group style={{ textAlign: "left" }} controlId="formBasicEmail">
              <Form.Label className="label-register">Password</Form.Label>
              <Form.Control type="password" placeholder="password" required/>
            </Form.Group>

            <Button variant="none" className="reg w-100" type="submit"> Register </Button>
            <div className="d-flex  justify-content-center align-items-center">
            <small>Already have an account?</small>
            <Button variant="link" size="sm"
            onClick = {() => this.props.history.push("/")}>Sign In</Button>
            </div>
           

          </Form>
        </Card.Body>
      </Card>
    </div>
  );
  }
};

export default Register;
