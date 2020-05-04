import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText }  from './StyledSideNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components';
import {Image} from "react-bootstrap";
import Logo from "../../assets/rabbitNL.png";
import BackgroundUser from "../../assets/s1.jpg";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


const navWidthCollapsed = 64;
const navWidthExpanded = 310;

const NavHeader = styled.div`
    display: ${props => (props.expanded ? 'block' : 'none')};
    white-space: nowrap;    
    color: #fff;
    > * {
        color: inherit;
        background-color: inherit;
    }
`;

// height: 20px + 10px + 10px = 40px
const NavTitle = styled.div`
    font-size: 1.5em;
    line-height: 20px;
    padding: 8px 0;
`;

const NavInfoPane = styled.div`
    float: left;
    width: 100%;
    padding: 5px 20px;
    background-color: rgb(214,93,177,0.5);
`;

const Separator = styled.div`
    clear: both;
    position: relative;
    margin: .8rem 0;
    background-color: #ddd;
    height: 1px;
`;


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    render() {
        const { expanded } = this.state;
        const navItems = this.props.data.map((row) => {
            return (
                <NavItem eventKey={row.id} key={row.id} className={"mt-4"}>
                    <NavIcon>
                        <FontAwesomeIcon icon={row.icon} style={{fontSize: "1.5em"}}/>
                    </NavIcon>
                    <NavText style={{color: "#000"}}>
                        {row.name}
                    </NavText>
                    <Separator />

                </NavItem>
            );
        });
        return (
            <SideNav

                style={{ minWidth: expanded ? navWidthExpanded : navWidthCollapsed  }}
                onSelect={(selected) => {
                    this.props.handler(selected);
                }}
                onToggle={() => {
                    this.setState({ expanded: !expanded });
                }}

            >
                <Toggle style={{backgroundColor: expanded ? "rgba(132,94,194,0.05)" : "rgba(132,94,194)", height:"50px"}} />
                <NavHeader expanded={expanded} style={{backgroundColor:"rgba(132,94,194,0.5)"}}>
                    <NavTitle>
                        <p style={{display:"inline"}} className={"mt-2"}> Fast Rabbit </p>
                        <i><Image className={"ml-2 mb-1"} src={Logo} style={{height: "30px"}} fluid/></i>

                    </NavTitle>

                    <NavInfoPane style={{backgroundImage:`url(${BackgroundUser})`,backgroundPosition:"center left"}}>
                        <FontAwesomeIcon icon={faUserCircle} style={{fontSize: "3em", marginTop:"15px"}}/>
                        <p className={"mt-3"} style={{fontWeight:"bold"}}> Juan Camilo Gomez </p>
                        <p style={{marginTop:"-15px"}}> jcgomezlo@unal.edu.co </p>
                    </NavInfoPane>
                </NavHeader>
                <Nav defaultSelected="home">
                    {navItems}
                </Nav>
            </SideNav>



        );
    }
}

export default SideBar;