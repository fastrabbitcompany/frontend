import React from "react";
import { ListGroup, Container}  from "react-bootstrap";
import RowUser from "./RowUser.component";

const UserList = (props) => {
    const item = props.data.map((person,i) => {
        return(
            <RowUser name = { person.UserEmployee.firstName + " " + person.UserEmployee.lastName }  rol = {person.RoleEmployee.roleName} username = {person.UserEmployee.username} key = {i} />
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
