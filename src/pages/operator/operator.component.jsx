import React, {Component} from 'react';
import { Button, Container, Row, Col, InputGroup, Card } from "react-bootstrap";
import Form from "../../components/operator-form/operatorForm.component"
import PackageList from "../../components/package-row/PackageList.component"

class operator extends Component{
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const data = [
            {
                id: 1,
                origen: "Cali",
                destino: "Bogota"
            },
            {
                id: 2,
                origen: "Cali",
                destino: "Ibague"
            },
            {
                id: 3,
                origen: "Bogota",
                destino: "Pereira"
            },
            {
                id: 4,
                origen: "Ibague",
                destino: "Barranquilla"
            },
            {
                id: 5,
                origen: "Barranquilla",
                destino: "Pereira"
            },

        ]
        this.setState({
            data: data 
        })
    }
    
    render() {
        return (
            <Container> 
                <PackageList data = {this.state.data} />   
                <Form />
            </Container>
        );      
    } 
}

export default operator;