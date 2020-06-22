import React from 'react';
import Logo from '../../../assets/box.png';
import {
    faRulerVertical,
    faRulerHorizontal,
    faRulerCombined,
    faArrowLeft,
    faPlaneDeparture,
    faShip,
    faTruck,
    faMapMarkedAlt,
    faWeightHanging
} from "@fortawesome/free-solid-svg-icons";
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
            origen: 1,
            destino: 1,
            ancho: 0,
            alto: 0,
            largo: 0,
            peso:0,
            data_select: [],
            cotizado:false,
            progress:0,
            direccion:0,
            costo:0,
            distancia:0,
            tiempo:0,
            connectionTravel:0

        }
    }

    componentDidMount() {
        fetch("https://fastrabbitback.herokuapp.com/api/city/getall", {
            method: "POST",
            body: JSON.stringify({token:localStorage.getItem("token")}),
            headers: {
                "content-type": "application/json",
            }
        })
            .then((response) => {
                return response.json();
            })
            .then( (response) => {
                console.log(response);
                if(response.success){
                    this.setState({data_select: response.cities});
                }
            });




    }

    cotizar = () =>{
        const {type,envio,origen,destino,ancho,alto,largo,peso } = this.state;
        if(envio !== -1 && ancho && alto && largo && type && peso){
            let body = {
                type: type,
                envio: envio,
                origen:origen,
                destino:destino,
                volumen:ancho*alto*largo,
                peso:peso,
                token:localStorage.getItem("token")
            }
            let headers = {
                "content-type": "application/json",
            }
            console.log(body);
            fetch("https://fastrabbitback.herokuapp.com/api/connection/quote", {
                method: "post",
                body: JSON.stringify(body),
                headers: headers
            })
                .then((response) => {
                    return response.json();
                })
                .then( (response) => {
                    console.log(response)
                    if(response.success){
                        this.setState({
                            costo:response.price,
                            distancia:response.distance,
                            tiempo:response.time,
                            connectionTravel:response.connectionTravel,
                        })
                    } else {
                        swal("Un error ha ocurrido", response.message, "error");
                    }
                });
            console.log("here")
           this.setState({progress:50,cotizado:true})
        } else {
            swal("Datos Incorrectos", "Por favor diligencie todos los datos del formulario!", "error");
        }

    }

    enviarPedido = () => {
        const {type,envio,ancho,alto,largo, direccion, peso, costo, connectionTravel } = this.state;
        if(envio !== -1 && ancho && alto && largo && type && direccion && peso){
            let body = {
                shippingDescription:direccion,
                shippingWidth:ancho,
                shippingHeight:largo,
                shippingWeight:peso,
                shippingPrice:costo,
                shippingConnection:connectionTravel,
                token:localStorage.getItem("token")

            }
            let headers = {
                "content-type": "application/json",
            }
            console.log(body);
            body = JSON.stringify(body);
            fetch("https://fastrabbitback.herokuapp.com/api/shipping/createshipping", {
                method: "post",
                body,
                headers,
            }).then(res => res.json())
                .then(res => {
                    if(res.success){
                        swal("Orden Creada !!!", `Por favor lleve su producto a uno de los puntos y proporcione el ID: ${res.idShipping}`, "success");
                    } else {
                        swal("Error", "Ha ocurrido un error creando la orden", "error");
                    }
                    this.setState({progress:100,type:0,envio:-1,ancho:0,largo:0,alto:0,direccion:0,peso:0})
                })


        } else {
            swal("Datos Incorrectos", "Por favor diligencie todos los datos del formulario!", "error");
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
                                                <Button data-testid="choose-truck" variant={"none"} id="buttonTruck" className={"button-type"}
                                                        style={{"boxShadow": type === 2 ? "0 0 5px #7d3c98" : "none"}}
                                                        onClick={() => this.setState({type: 2})}>
                                                    <FontAwesomeIcon icon={faPlaneDeparture} className={"icon_create"}/>
                                                </Button>
                                            </Col>
                                            <Col xs={4} className="text-center colBot">
                                                <Button variant={"none"} id="buttonShip" className={"button-type"}
                                                        style={{"boxShadow": type === 1 ? "0 0 5px #7d3c98" : "none"}}
                                                        onClick={() => this.setState({type: 1})}>
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
                                                    data-testid="choose-nacional"
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
                                            <Form.Control data-testid="select-origen" size="sm" as="select"
                                                          onChange={(e) => this.setState({origen: e.target.value})}>
                                                {this.state.data_select!== undefined? this.state.data_select.map(city => (
                                                        <option key={city.cityId} value={city.cityId}>{city.cityName}</option>
                                                    )
                                                ):null}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label style={{fontSize: "20px"}}>Destino</Form.Label>
                                            <Form.Control data-testid="select-destino" size="sm" as="select"
                                                          onChange={(e) => this.setState({destino: e.target.value})}>
                                                {this.state.data_select!== undefined? this.state.data_select.map(city => (
                                                        <option key={city.cityId} value={city.cityId}>{city.cityName}</option>
                                                    )
                                                ):null}
                                            </Form.Control>
                                        </Form.Group>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <InputForm type="number"  placeholder="Ancho (Cm)" icon={faRulerCombined}
                                                           handler={(e) => this.setState({ancho: e.target.value})}/>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <InputForm type="number"  placeholder="Largo (Cm)" icon={faRulerHorizontal}
                                                           handler={(e) => this.setState({alto: e.target.value})}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <InputForm type="number"  placeholder="Alto (Cm)" icon={faRulerVertical}
                                                           handler={(e) => this.setState({largo: e.target.value})}/>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <InputForm type="number"  placeholder="Peso" icon={faWeightHanging}
                                                           handler={(e) => this.setState({peso: e.target.value})}/>
                                            </Col>
                                        </Row>
                                        <Button variant="none" className="reg w-100"
                                                aria-controls={"colapse_create"}
                                                aria-expanded={this.state.open}
                                                onClick={this.cotizar}
                                                data-testid="cotizar"
                                        >
                                            Cotizar </Button>
                                    </Form>
                                    <Form data-testid="formSegundoPaso" style={{display: this.state.cotizado ? "":"none"}}>
                                        <Button variant={"none"} className={"button-type"} style={{border:"0"}}
                                        onClick={() => this.setState({progress:0,cotizado:false})}>
                                            <FontAwesomeIcon icon={faArrowLeft} style={{fontSize:"1.5rem"}} />
                                        </Button>
                                        <Table striped bordered hover size="sm" className={"mt-2"}>
                                            <tbody>
                                            <tr>
                                                <td>Costo</td>
                                                <td>${this.state.costo}</td>
                                            </tr>
                                            <tr>
                                                <td>Distancia</td>
                                                <td>{Math.round(this.state.distancia)}Km</td>
                                            </tr>
                                            <tr>
                                                <td>Tiempo Estimado</td>
                                                <td>{this.state.tiempo} Dias</td>
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
