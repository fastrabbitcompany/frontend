import React, {Component} from 'react';
import { Button, Container, Row, Col, Form, InputGroup, Table } from "react-bootstrap";
import './operatorForm.css'

class operatorForm extends Component{
    
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group>
                    <Row>
                        <Col>
                        <Table className="idPackage" striped bordered hover>
                            <thead>
                                <tr>
                                <th className = "UpdateTitle" colSpan="2" > Update Package</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>package's ID:</th>
                                <th>Status</th>
                                </tr>
                                <tr>
                                <td>
                                    <p>{this.props.idToShow}</p>
                               
                                </td>
                                <td>
                                <Form.Control as = "select">
                                    <option>Change status of this delivery</option>
                                    <option>Finish this delivery</option>
                                </Form.Control>      
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                        
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

export default operatorForm;