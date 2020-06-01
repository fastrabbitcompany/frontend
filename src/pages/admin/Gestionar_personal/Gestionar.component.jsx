import React from 'react';
import UserList from "../../../components/user-row/UserList.component";
import Barra from '../../../components/bar-nav/NavBar.component';
import './admin.styles.css';
import SideBar from "../../../components/side-bar/SideBar";
import swal from "sweetalert";

class Gestionar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
            first_name: "",
            last_name: "",
            address: "",
            employeeIsActive:"",
            employeeRole:"",
            token:""
        }
    }


    componentDidMount(){
        let body = {
            token: localStorage.getItem("token")
        }   
        let headers = {
            "content-type": "application/json",
        }

        fetch("https://fastrabbitback.herokuapp.com/api/admin/getallemployee", {
            method: "post",
                body: JSON.stringify(body),
                headers: headers
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.success){
                this.setState({
                    data: res.users
                })
            }
        })
        
    }
    
    render(){
    return(
    <div className="ScreenAdmin">
        <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
        <div className={"mt-4"} style={{marginLeft:"70px"}}>
            <Barra/>
            <UserList data = {this.state.data}/>
        </div>

    </div>

    );
    }
    }

export default Gestionar;