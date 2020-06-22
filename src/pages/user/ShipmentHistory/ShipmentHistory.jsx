import React from "react";
import ListShipmentContainer from "../../../components/list_shipment_container/ListShipmentContainer";
import {withRouter} from 'react-router-dom';
import SideBar from "../../../components/side-bar/SideBar";
import Sticky from 'react-sticky-el';

class ShipmentHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        let body = {
            token: localStorage.getItem("token")
        }
        let headers = {
            "content-type": "application/json",
        }
        console.log(body);
        body = JSON.stringify(body);
        fetch("https://fastrabbitback.herokuapp.com/api/shipping/getshippingsuser", {
            body,
            headers,
            method: "post"
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    console.log(res.shippings);
                    this.setState({data: res.shippings});
                }
            })
        //this.setState({data: data})
    }

    render() {
        return (
            <div>
                <Sticky>
                    <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
                </Sticky>
                <div style={{marginLeft: "70px"}}>
                    <ListShipmentContainer data={this.state.data}/>

                </div>
            </div>
        );
    }
}

export default withRouter(ShipmentHistory);