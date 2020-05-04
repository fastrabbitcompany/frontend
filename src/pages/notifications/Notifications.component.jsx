import React from "react";
import {withRouter} from 'react-router-dom'
import SideBar from "../../components/side-bar/SideBar";

class Notifications extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <SideBar handler={this.handleSelect} handler={this.props.handlerNav} data={this.props.sideBarData}/>
        );
    }
}

export default withRouter(Notifications);