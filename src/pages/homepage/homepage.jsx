import React from 'react';
import css from './homepage.css';
import Logo from './rabbitNL.png';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faHistory} from "@fortawesome/free-solid-svg-icons";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function homepage(){
  return(
    <React.Fragment>
      <div className="container">
        <div className="Header">
          <FontAwesomeIcon className = "Arrow" icon = {faArrowLeft} />
             
              <FontAwesomeIcon className = "Search" icon = {faSearch} />
            
        </div>
        
        <div className = "User">
          <FontAwesomeIcon className = "Help" icon = {faQuestionCircle} />
          <FontAwesomeIcon className = "User" icon = {faUserCircle} />
        </div>

        <div className="SideBar">
          <img className = "Logo" src = {Logo} alt="Logo" />
          <li>
            <FontAwesomeIcon className = "Calendar" icon = {faCalendarAlt}  />
          </li>
          <li>
            <FontAwesomeIcon className = "History" icon = {faHistory} />
          </li>          
        </div>
        <div className = "Settings" >
          <FontAwesomeIcon className = "Setting" icon = {faCog} />
        </div>

        <div className="Main">
          <div className = "TitleMain">
            Current Deliveries  
          </div> 

          <div className="ListDelivery">
            <div className = "DeliveryTitle">
              <ul>User </ul>
              <ul>Origin</ul>
              <ul>Destination</ul>
              <ul>Vehicle</ul>
              <ul>Premium</ul>
            </div>
            <div className = "Delivery">
              <ul>User1 </ul>
              <ul>Origin1</ul>
              <ul>Destination1</ul>
              <ul>Vehicle1</ul>
              <ul>Si</ul>
            </div>
              
          </div> 

        </div>
      </div>  
    </React.Fragment>
  );
}
  

export default homepage;
