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


    render() {

            var name = "";
            this.state.toggle ? name = "div-operario-expanded": name="div-operario";

        return(
            <div>
                <SideBar handlerToggle={this.handleToggle} handler={this.props.handler} data={[
                    {
                        name:"Registrar",
                        id:"registar",
                        icon: faBox
                    },
                    {
                        name:"Historial",
                        id:"historial",
                        icon:faHistory
                    },
                    {
                        name:"Sign Out",
                        id:"sign out",
                        icon:faSignOutAlt,
                    }
                ]} />
                <div className={name}>
                    <h1>Hello</h1>
                </div>

            </div>
        );
    }
}

export default withRouter(Operario);