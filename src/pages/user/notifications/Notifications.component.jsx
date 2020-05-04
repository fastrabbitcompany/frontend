import React from "react";
import {withRouter} from 'react-router-dom'
import SideBar from "../../../components/side-bar/SideBar";

class Notifications extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <SideBar  handler={this.props.handlerNav} data={this.props.sideBarData}/>
                <div style={{marginLeft:"70px"}}>
                    <h1>Notifications</h1>
                </div>
            </div>
        );
    }
}

export default withRouter(Notifications);