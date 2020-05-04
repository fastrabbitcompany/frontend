import React from "react";
import { ListGroup, Container}  from "react-bootstrap";
import RowUser from "./RowUser.component";

const UserList = (props) => {
    const item = props.data.map((person,i) => {
        return(
            <RowUser name = {person.name} rol = {person.rol} lugar = {person.lugar} key = {i} />
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

export default UserList;
