import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



const SideBar = (props) => {
    const navItems = props.data.map((row) => {
        return(
        <NavItem eventKey={row.id} key={row.id}>
            <NavIcon>
                <FontAwesomeIcon icon={row.icon} />
            </NavIcon>
            <NavText>
                {row.name}
            </NavText>
        </NavItem>
        );
    });

    return(
        <SideNav
            onSelect={(selected) => {
                if(selected === "sign out"){
                    props.handler("false");
                }

            }}
            onToggle={()=>{props.handlerToggle()}}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                {navItems}
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideBar;