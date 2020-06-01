import React from "react";
import { ListGroup, Container, Row, Column }  from "react-bootstrap";
import PackageUser from "./RowPackage.component";

const PackageList = (props) => {
  console.log(props)
    const item = props.data.map((pack,i) => {
        return(
          <div onClick = {() => props.parentFunction(pack.id, props.parent)} >
            <PackageUser id = {pack.id} origen = {pack.origen} destino = {pack.destino} key = {i} />
          </div>
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
