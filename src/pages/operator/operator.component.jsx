import React, {Component} from 'react';
import { Button, Container, Row, Col, Form, InputGroup, Card } from "react-bootstrap";
import './operator.css'

class operator extends Component{
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group>
                    <Row>
                        <Col className = "titlePackage">
                            Update package
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <InputGroup className="idPackage">
                            <InputGroup.Prepend>
                            <InputGroup.Text>
                                package's ID:
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control />
                        </InputGroup>    
                        </Col>
                    </Row>
                    <Row>
                        <Col className = "statusPackage">
                        <Form.Control as = "select">
                            <option>Change status of this delivery</option>
                            <option>Finish this delivery</option>
                        </Form.Control>                
                        </Col>
                        
                    </Row>
                    <Row>
                    <Col className = "UpdatePackage">
                            <Button variant="dark">
                                Update    
                            </Button>
                        </Col>
                    </Row>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default operator;