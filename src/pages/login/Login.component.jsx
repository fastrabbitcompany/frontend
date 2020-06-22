import React, {Component} from "react";
import {Button, Container, Row, Col, Form, Image, Card, Spinner} from "react-bootstrap";
import {faUser, faKey} from "@fortawesome/free-solid-svg-icons";
import InputForm from "../../components/inputs-form/InputForm.component";
import "./Login.styles.css"
import Logo from "../../assets/rabbit.png"
import Tilt from 'react-tilt';
import {withRouter} from 'react-router-dom';
import swal from 'sweetalert';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.username,
            password: props.password,
            showSpinner: false,
        }
    }


    handleChangeName = (e) => {
        this.setState({
            userName: e.target.value
        });
    };

    handleChangePass = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    toggleSpinner = (toggle) => {

    };

    handleSubmit = (e) => {
        this.setState({
            showSpinner: true
        });
        e.preventDefault();
        let user = this.state.userName;
        let pass = this.state.password;
        let body = {
            email: user,
            password: pass,
        }
        let headers = {
            "content-type": "application/json",
        }
        console.log(body)

        fetch("https://fastrabbitback.herokuapp.com/api/auth/login", {
            method: "post",
            body: JSON.stringify(body),
            headers: headers
        })
            .then((response) => {
                return response.json();
            })
            .then( (response) => {
                console.log(response);
                this.setState({
                    showSpinner: false
                });
                if(response.success){
                    localStorage.setItem("token",response.token);
                    localStorage.setItem("username",response.username);
                    localStorage.setItem("email",response.email);
                    const role = response.role;
                    if(role){
                        localStorage.setItem("role", role);
                    } else {
                        localStorage.setItem("role", "User");
                        //User, Admin, Operario
                    }
                    console.log(localStorage.getItem("role"));
                    this.props.handler("true");
                } else {
                    swal("Error", "", "error");
                }
            });

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="login h-100">
                <Container className="widthChange h-100">
                    <Row className="h-100 d-flex justify-content-center align-items-center">
                        <Col>
                            <Card className="p-4 shadow-lg" style={{borderRadius: "35px"}}>
                                <Tilt className="Tilt" options={{max: 25}}>
                                    <Image src={Logo} style={{height: "300px"}} fluid/>
                                </Tilt>
                                <Form className="mt-3" id={"form"} onSubmit={this.handleSubmit}>
                                    <InputForm type="email" placeholder="Email" icon={faUser}
                                               handler={this.handleChangeName}/>
                                    <InputForm type="password" placeholder="Contraseña" icon={faKey}
                                               handler={this.handleChangePass}/>
                                    <Button variant="none" id={"btnclick"}  className="prim w-100" type="submit">
                                        {this.state.showSpinner &&
                                        <Spinner ref="spinner" as="span" className="mr-2" animation="grow" size="sm"/>
                                        }
                                        Iniciar Sesión </Button>
                                    <Button
                                        variant="none"
                                        className="reg w-100 mt-2"
                                        onClick={() => this.props.history.push("/registro")}
                                    >
                                        Resgitrarse
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
