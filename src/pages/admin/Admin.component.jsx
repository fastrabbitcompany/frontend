import React from 'react';
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";
import UserList from "../../components/user-row/UserList.component";
import SearchBar from '../../components/search-bar/SearchBar';
import './admin.styles.css';

class admin extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        const data = [
            {
                name: "Juan",
                rol: "Operario",
                lugar: "Bogota"
            },
            {
                name: "Juan",
                rol: "Operario",
                lugar: "Bogota"
            },
            {
                name: "Juan",
                rol: "Operario",
                lugar: "Bogota"
            },
            {
                name: "Juan",
                rol: "Operario",
                lugar: "Bogota"
            },
            {
                name: "Juan",
                rol: "Operario",
                lugar: "Bogota"
            },

        ]
        this.setState({
            data: data 
        })
    }
    
    
    render(){
    return(
    <div className="ScreenAdmin">
        <Container>
            <Row>
                <Col className="TitleDelivery" fluid="lg" xs ={11}>
                Management deliverys men Dashboard
                </Col>
            </Row>
            <Row className = "row justify-content-center">
                <Col className = "Izq" lg={2}>
                <Button className="ButtDelivery" onClick={()=> this.props.history.push("/register")} size="md" >
                    Create transportator
                </Button>

                <Button className="ButtDelivery" onClick={()=> this.props.history.push("/login")} size="md">
                    Search transportator
                </Button>
                </Col>
                <Col lg={2}>
                <Button className="ButtDelivery" onClick={()=> this.props.history.push("/register")} size="md">
                    Update transportator
                </Button>

                <Button className="ButtDelivery" onClick={()=> this.props.history.push("/register")} size="md">
                    Delete transportator
                </Button>
                </Col>
            </Row>
            <Row>
                <Col className="TitleOperator" fluid="lg" xs ={11} >
                Management operators Dashboard
                </Col>
            </Row>
            <Row className = "row justify-content-center">
                <Col className = "Izq" lg={2} >
                <Button className="ButtOperator" onClick={()=> this.props.history.push("/register")} size="md">
                    Create Operator
                </Button>

                <Button className="ButtOperator" onClick={()=> this.props.history.push("/register")} size="md">
                    Search Operator
                </Button>
                </Col>
                <Col lg={2} >
                <Button className="ButtOperator" onClick={()=> this.props.history.push("/register")} size="md">
                    Update Operator
                </Button>

                <Button className="ButtOperator" onClick={()=> this.props.history.push("/register")} size="md">
                    Delete Operator
                </Button>
                </Col>
            </Row>
            <div>
                <UserList data = {this.state.data}/>

                <SearchBar />

            </div>
        </Container>

    </div>

    );
    }
    }

export default admin;