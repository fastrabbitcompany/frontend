import React from "react";
import {MDBDataTable} from "mdbreact";

const TableEnvios = (props) => {
    return (
        <div>
            <MDBDataTable
                striped
                bordered
                small
                data={props.data}
            />
        </div>
    )
}

export default TableEnvios;