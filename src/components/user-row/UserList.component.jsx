import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import RowUser from "./RowUser.component";

const UserList = (props) => {
    const item = props.data.map((person, i) => {
        return (
            <RowUser modal_address={person.UserEmployee.address} modal_email={person.UserEmployee.email}
                     modal_firstName={person.UserEmployee.firstName}
                     modal_lastName={person.UserEmployee.lastName}
                     modal_password={person.UserEmployee.password}
                     modal_phoneNumber={person.UserEmployee.phoneNumber}
                     name={person.UserEmployee.firstName + " " + person.UserEmployee.lastName}
                     rol={person.RoleEmployee.roleName} username={person.UserEmployee.username} key={i}/>
        )

    })
    return (

        <ListGroup>
            <Container>
                {item}
            </Container>
        </ListGroup>

    );
}

export default UserList;
