import React from 'react';
import UserList from "../../components/user-row/UserList.component";
import Barra from '../../components/bar-nav/NavBar.component';
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
                name: "Jack",
                rol: "Transportador",
                lugar: "Ibague"
            },
            {
                name: "Gru",
                rol: "Operario",
                lugar: "Cali"
            },
            {
                name: "Kathe",
                rol: "Transportador",
                lugar: "Barranquilla"
            },
            {
                name: "Juliana",
                rol: "Operario",
                lugar: "Pereira"
            },

        ]
        this.setState({
            data: data 
        })
    }
    
    
    render(){
    return(
    <div className="ScreenAdmin"> 
        <Barra />
        <UserList data = {this.state.data}/>
    </div>

    );
    }
    }

export default admin;