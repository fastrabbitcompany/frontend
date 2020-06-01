import React from "react";
import {Form, Col, Button, Row, Card} from "react-bootstrap";
import swal from "sweetalert";
import "./UserForm.css";

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
            first_name: "",
            last_name: "",
            address: "",
            employeeRole:""
        }
    }

    handleRegister = (e) => {
        e.preventDefault();
        const {first_name,last_name,address,phone,email,password } = this.state;
        console.log(this.state)
        if( first_name && last_name && address && phone && email){
            if( password.length>5) {
                let body = {
                    username:email.split("@")[0],
                    email: email,
                    password: password,
                    phoneNumber: phone,
                    firstName: first_name,
                    lastName: last_name,
                    address: address,
                    employeeRole:""
                }
                let headers = {
                    "content-type": "application/json",
                }

                console.log(body)

                fetch("https://fastrabbitback.herokuapp.com/api/admin/createemployee", {
                    method: "post",
                    body: JSON.stringify(body),
                    headers: headers
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then( (response) => {
                        console.log(response);
                        if(response.success){
                            this.setState({
                                first_name: "",
                                last_name: "",
                                address: "",
                                phone: "",
                                email: "",
                                password: "",
                                employeeRole:""
                            });
                            swal("Usuario Registrado","", "success");
                        } else {
                            swal("Error al registra", response.message, "error");
                        }
                    });

            } else {
                swal("Contraseña Invalida", "La contraseña debe contener almenos 5 caracteres", "error");
            }
        } else {
            swal("Datos Incorrectos", "Por favor diligencie todos los datos del formulario!", "error");
        }
    }

    render() {
        return (
            <div className="registerForm justify-content-center align-items-center">
                <Card className="card-registerForm m-4 shadow-lg" style={{borderRadius: "35px"}}>
                    <Card.Body>
                        <Form className="my-4" onSubmit={this.handleRegister}>
                            <Row md={2} sm={1} xs={1}>
                                <Col>
                                    <Form.Group style={{textAlign: "left"}}>
                                        <Form.Label className="label-register">Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Jhon" required
                                                      onChange={(e) => this.setState({first_name: e.target.value})}
                                                      value={this.state.first_name}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group style={{textAlign: "left"}} >
                                        <Form.Label className="label-register">Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Doe" required
                                                      onChange={(e) => this.setState({last_name: e.target.value})}
                                                      value={this.state.last_name}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row md={2} sm={1} xs={1}>
                                <Col md={8} lg={8}>
                                    <Form.Group style={{textAlign: "left"}} >
                                        <Form.Label className="label-register">Dirección</Form.Label>
                                        <Form.Control type="text" placeholder="Cll 26a No. 24a-18" required
                                                      onChange={(e) => this.setState({address: e.target.value})}
                                                      value={this.state.address}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4} lg={4}>
                                    <Form.Group style={{textAlign: "left"}} >
                                        <Form.Label className="label-register">Número de Celular</Form.Label>
                                        <Form.Control type="number" placeholder="3104787326" required
                                                      onChange={(e) => this.setState({phone: e.target.value})}
                                                      value={this.state.phone}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group style={{textAlign: "left"}}>
                                <Form.Label className="label-register">Email</Form.Label>
                                <Form.Control type="email" placeholder="example@gmail.com" required
                                              onChange={(e) => this.setState({email: e.target.value})}
                                              value={this.state.email}
                                />
                            </Form.Group>


                            <Form.Group style={{textAlign: "left"}}>
                                <Form.Label className="label-register">Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" required
                                              onChange={(e) => this.setState({password: e.target.value})}
                                              value={this.state.password}
                                />
                            </Form.Group>

                            <Form.Group style={{textAlign: "left"}}>
                                <Form.Label className="label-register">Seleccione el rol </Form.Label>
                                <Form.Control as = "select" required>
                                    <option value ={1}>1. Administrador</option>
                                    <option value ={2}>2. Operario</option>    
                                        onChange={(e) => this.setState({employeeRole: e.target.value})}
                                        value={this.state.employeeRole}
                                </Form.Control>
                            </Form.Group>

                            <Button variant="none" className="reg w-100" type="submit"> Create user </Button>
                            
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
};

export default UpdateUserForm;
