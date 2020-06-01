import React, {Component} from 'react';
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import './operatorForm.css'
import swal from "sweetalert";

class operatorForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderId: -1
        }
    }

    updateState = () => {
        const {orderId} = this.state;
        if(orderId !== -1 && this.props.idToShow){
            let body = {
                token:localStorage.getItem("token"),
                shippingStatusHistoryShipping:this.props.idToShow,
                shippingStatusHistoryRoute:parseInt(orderId)
            }
            let headers = {
                "content-type": "application/json",
            }
            console.log("update",body);
            body = JSON.stringify(body);
            fetch("https://fastrabbitback.herokuapp.com/api/shipping/changestate",{
                body,
                headers,
                method:"post"
            }).then(res => res.json())
                .then(res => {
                    if(res.success){
                        swal("Orden Actualizada", `ID: ${this.props.idToShow}`, "success");
                    }
                })
        }
    }

    render() {
        console.log("render form",this.props.locations);
        const item = this.props.locations.map((location, i) => {
            return (
                <option value={location.Route.routeId}>{location.Route.Location.City.cityName}</option>
            )

        })
        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Table className="idPackage" striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th className="UpdateTitle" colSpan="2"> Update Package</th>
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
                                            <Form.Control as="select"
                                                          onChange={e => this.setState({orderId: e.target.value})}>
                                                {item}
                                            </Form.Control>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>

                        <Row>
                            <Col className="UpdatePackage">
                                <Button variant="dark" onClick={this.updateState}>
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