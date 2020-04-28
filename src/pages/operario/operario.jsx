import React from "react";
import {withRouter} from 'react-router-dom';
import "./operario.styles.css";
import SideBar from "../../components/side-bar/SideBar";
import {faSignOutAlt, faBox, faHistory} from "@fortawesome/free-solid-svg-icons";

class Operario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toggle:false
        }
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
                    <h1>Operario</h1>
                </div>
            </div>
        );
    }
}

export default withRouter(Operario);