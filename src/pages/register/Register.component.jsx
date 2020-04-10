import React from "react";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import "./Register.styles.css";

const Register = (props) => {
  return (
    <div className="register h-100 d-flex justify-content-center align-items-center">
      <Form className="mx-4 ">
     
  <Form.Group controlId="formGroupEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
 
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

      </Form>
    </div>
  );
};

export default Register;
