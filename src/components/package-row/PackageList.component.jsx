import React from "react";
import { ListGroup, Container, Row, Column }  from "react-bootstrap";
import PackageUser from "./RowPackage.component";

const PackageList = (props) => {
    const item = props.data.map((pack,i) => {
        return(
            <PackageUser id = {pack.id} origen = {pack.origen} destino = {pack.destino} key = {i} />
        )
        
    })
    return( 

  <ListGroup>
    <Container>
        {item}
    </Container>
  </ListGroup>
  
    );
}

//username,email,password,phonenumber,firstName,lastName,address
export default PackageList;
