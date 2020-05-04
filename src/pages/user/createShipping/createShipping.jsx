import React from 'react';
import Logo from '../../../assets/box.png';
import {faRulerVertical,faRulerHorizontal, faRulerCombined, faArrowLeft, faPlaneDeparture, faShip, faTruck, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Button,
    Container,
    Row,
    Col,
    Form,
    Image,
    Card,
    ProgressBar,
    Table
} from "react-bootstrap";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./createShipping.style.css"
import SideBar from "../../../components/side-bar/SideBar";
import Tilt from "react-tilt";
import InputForm from "../../../components/inputs-form/InputForm.component";
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            envio: -1,
            origen: 0,
            destino: 0,
            ancho: 0,
            alto: 0,
            largo: 0,
            data_select: [],
            cotizado:false,
            progress:0,
            direccion:0

        }
    }

    componentDidMount() {
        const data_select = [
            {
                id: 0,
                name: "Bogota"
            },
            {
                id: 1,
                name: "Medellin"
            },
            {
                id: 2,
                name: "Barranquilla"
            },
            {
                id: 3,
                name: "Villavicencio"
            },

        ]
        this.setState({data_select: data_select});

    }

    cotizar = () =>{
        console.log(this.state);
        const {type,envio,origen,destino,ancho,alto,largo } = this.state;
        if(envio !== -1 && ancho && alto && largo && type){
            let body = {
                type: type,
                envio: envio,
                origen:origen,
                destino:destino,
                volumen:ancho*alto*largo
            }
            let headers = {
                "content-type": "application/json",
                "Authorization" : "123456"
            }
            body = JSON.stringify(body);
           this.setState({progress:50,cotizado:true})
        } else {
            swal("Datos Incorrectos", "Por favor diligencie todos los datos del formulario!", "error");
        }

    }

    enviarPedido = () => {
        const {type,envio,origen,destino,ancho,alto,largo, direccion } = this.state;
        if(envio !== -1 && ancho && alto && largo && type && direccion){
            let body = {
                type: type,
                envio: envio,
                origen:origen,
                destino:destino,
                volumen:ancho*alto*largo,
                direccion:direccion
            }
            let headers = {
                "content-type": "application/json",
                "Authorization" : "123456"
            }
            body = JSON.stringify(body);
            swal("Orden Creada !!!", "Por favor lleve su producto a uno de los puntos y proporcione el ID: 1477825", "success");
            this.setState({progress:100,type:0,envio:-1,ancho:0,largo:0,alto:0,direccion:0})
        } else {
            swal("Datos Incorrectos", "Por favor diligencie todos los datos del formulario!", "error");
        }
    }

    handleSelect = (key) => {
        if(key === "envpq"){
            this.props.history.push("/home");
        }
        if(key === "hist"){
            this.props.history.push("/ship");
        }
        if(key === "notf"){
            this.props.history.push("/notifications");
        }
        if(key === "signOut"){
            this.props.handler("false");
        }
    }


    render() {
        const type = this.state.type;
        return (
            <div className={"containerShipping"}>
                <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
                <Container className={"w-100 h-100"}>
                    <Row className={"h-100 w-100 justify-content-center"}>
                        <Col md={6} className={"align-self-center d-none d-md-block"}>
                            <Row className={"justify-content-center"}>
                                <h1 className="display-4 mb-0" style={{fontSize: "50px"}}>
                                    Where do you want your Fast
                                    Rabbit to go today?</h1>
                                <div>
                                    <Tilt className="Tilt mt-4" options={{max: 25}}>
                                        <Image className="img_box" src={Logo} fluid/>
                                    </Tilt>
                                </div>
                            </Row>
                        </Col>
                        <Col xs={12} sm={6} className={"align-self-center"}>
                            <Row className={"justify-content-center"}>
                                <Card className="p-3 w-100 mr-2 shadow-lg" style={{borderRadius: "35px"}}>
                                    <Form className="mt-3" style={{display: !this.state.cotizado ? "":"none"}}>
                                        <h3 style={{color: "#845ec2"}}>Tipo de Envio:</h3>
                                        <Row className={"mt-4"}>
                                            <Col xs={4} className="text-center colBot">
                                                <Button variant={"none"} id="buttonTruck" className={"button-type"}
                                                        style={{"boxShadow": type === 1 ? "0 0 5px #7d3c98" : "none"}}
                                                        onClick={() => this.setState({type: 1})}>
                                                    <FontAwesomeIcon icon={faPlaneDeparture} className={"icon_create"}/>
                                                </Button>
                                            </Col>
                                            <Col xs={4} className="text-center colBot">
                                                <Button variant={"none"} id="buttonShip" className={"button-type"}
                                                        style={{"boxShadow": type === 2 ? "0 0 5px #7d3c98" : "none"}}
                                                        onClick={() => this.setState({type: 2})}>
                                                    <FontAwesomeIcon icon={faTruck} className={"icon_create"}/>
                                                </Button>
                                            </Col>
                                            <Col xs={4} className="text-center colBot">
                                                <Button variant={"none"} id="buttonPlane" className={"button-type"}
                                                        style={{"boxShadow": type === 3 ? "0 0 5px #7d3c98" : "none"}}
                                                        onClick={() => this.setState({type: 3})}>
                                                    <FontAwesomeIcon icon={faShip} className={"icon_create"}/>
                                                </Button>
                                            </Col>
                                        </Row>
                                        <fieldset className={"mt-4"}>
                                            <Form.Group>
                                                <Form.Check
                                                    type="radio"
                                                    label="Envio Nacional"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    onClick={() => this.setState({envio: 1})}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Envio Internacional"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
                                                    onClick={() => this.setState({envio: 2})}
                                                />
                                            </Form.Group>
                                        </fieldset>
                                        <Form.Group className={"mt-2"} controlId="exampleForm.ControlSelect1">
                                            <Form.Label style={{fontSize: "20px"}}>Origen</Form.Label>
                                            <Form.Control size="sm" as="select"
                                                          onChange={(e) => this.setState({origen: e.target.value})}>
                                                {this.state.data_select.map(item => (
                                                        <option key={item.id} value={item.id}>{item.name}</option>
                                                    )
                                                )}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label style={{fontSize: "20px"}}>Destino</Form.Label>
                                            <Form.Control size="sm" as="select"
                                                          onChange={(e) => this.setState({destino: e.target.value})}>
                                                {this.state.data_select.map(item => (
                                                        <option key={item.id} value={item.id}>{item.name}</option>
                                                    )
                                                )}
                                            </Form.Control>
                                        </Form.Group>
                                        <Row>
                                            <Col xs={12} md={4}>
                                                <InputForm type="number" placeholder="Ancho" icon={faRulerCombined}
                                                           handler={(e) => this.setState({ancho: e.target.value})}/>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <InputForm type="number" placeholder="Largo" icon={faRulerHorizontal}
                                                           handler={(e) => this.setState({alto: e.target.value})}/>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <InputForm type="number" placeholder="Alto" icon={faRulerVertical}
                                                           handler={(e) => this.setState({largo: e.target.value})}/>
                                            </Col>
                                        </Row>
                                        <Button variant="none" className="reg w-100"
                                                aria-controls={"colapse_create"}
                                                aria-expanded={this.state.open}
                                                onClick={this.cotizar}
                                        >
                                            Cotizar </Button>
                                    </Form>
                                    <Form style={{display: this.state.cotizado ? "":"none"}}>
                                        <Button variant={"none"} className={"button-type"} style={{border:"0"}}
                                        onClick={() => this.setState({progress:0,cotizado:false})}>
                                            <FontAwesomeIcon icon={faArrowLeft} style={{fontSize:"1.5rem"}} />
                                        </Button>
                                        <Table striped bordered hover size="sm" className={"mt-2"}>
                                            <tbody>
                                            <tr>
                                                <td>Costo</td>
                                                <td>$145 000</td>
                                            </tr>
                                            <tr>
                                                <td>Distancia</td>
                                                <td>800 km</td>
                                            </tr>
                                            <tr>
                                                <td>Tiempo Estimado</td>
                                                <td>2.5d dias</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                        <InputForm type="text" placeholder="Direccion de Entrega" icon={faMapMarkedAlt}
                                                   handler={(e) => this.setState({direccion: e.target.value})}/>
                                        <Button variant="none" className="reg w-100"
                                                aria-controls={"colapse_create"}
                                                aria-expanded={this.state.open}
                                                onClick={this.enviarPedido}
                                        >
                                            Enviar Pedido </Button>
                                    </Form>
                                    <ProgressBar striped animated className={"mt-4"} now={this.state.progress} />
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default withRouter(Home);
