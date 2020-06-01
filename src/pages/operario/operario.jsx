import React from "react";
import {withRouter} from 'react-router-dom';
import "./operario.styles.css";
import SideBar from "../../components/side-bar/SideBar";
import {faSignOutAlt, faBox, faHistory} from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/operator-form/operatorForm.component"
import PackageList from "../../components/package-row/PackageList.component"


class Operario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toggle:false,
            data: [],
            idActive: "",
            locations:[],
        }
    }

    handleIdClick(id,locations,parent){
        parent.setState({
            idActive:id,
            locations:locations
        })
    }


    handleToggle = ()=> {
        this.setState({toggle:!this.state.toggle});
    }

    handleSelect = (key) => {
        if(key === "signOut"){
            this.props.handler("false");
            this.props.history.push("/")
        }
    }

    componentDidMount(){
        // const data = [
        //     {
        //         id: 1,
        //         origen: "Cali",
        //         destino: "Bogota"
        //     },
        //     {
        //         id: 2,
        //         origen: "Cali",
        //         destino: "Ibague"
        //     },
        //     {
        //         id: 3,
        //         origen: "Bogota",
        //         destino: "Pereira"
        //     },
        //     {
        //         id: 4,
        //         origen: "Ibague",
        //         destino: "Barranquilla"
        //     },
        //     {
        //         id: 5,
        //         origen: "Barranquilla",
        //         destino: "Pereira"
        //     },
        //
        // ]
        let body = {
            token:localStorage.getItem("token")
        }
        let headers = {
            "content-type": "application/json",
        }
        console.log(body);
        body = JSON.stringify(body);
        fetch("https://fastrabbitback.herokuapp.com/api/shipping/getshippings",{
            body,
            headers,
            method:"post"
        }).then(res => res.json())
            .then(res => {
                if(res.success){
                    console.log(res.shippings);
                    this.setState({data:res.shippings});
                }
            })
    }


    render() {

            var name = "";
            this.state.toggle ? name = "div-operario-expanded": name="div-operario";

        return(
            <div>
                <SideBar handlerToggle={this.handleToggle} handler={this.handleSelect} data={[
                    {
                        name:"Cambiar estado Paquetes",
                        id:"reg",
                        icon: faBox
                    },
                    {
                        name:"Historial",
                        id:"hist",
                        icon:faHistory
                    },
                    {
                        name:"Sign Out",
                        id:"signOut",
                        icon:faSignOutAlt,
                    }
                ]} />
                <div className={name}>
                    <h1 className = "TitlePage" >Operario</h1>
                </div>
                <div>
                    <PackageList parent = {this} data = {this.state.data} parentFunction={this.handleIdClick}/>   
                </div>
                <div>
                    <Form idToShow = {this.state.idActive} locations={this.state.locations}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Operario);