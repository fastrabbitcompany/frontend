import React from "react";
import {MDBDataTable} from "mdbreact";
import {render} from "@testing-library/react";

const TableEnvios = (props) => {
    return(
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