import React from "react";
import ListShipmentContainer from "../../components/list_shipment_container/ListShipmentContainer";
import {withRouter} from 'react-router-dom';

class ShipmentHistory extends React.Component {
    render() {
        return(
            <ListShipmentContainer/>
        );
    }
}

export default withRouter(ShipmentHistory);