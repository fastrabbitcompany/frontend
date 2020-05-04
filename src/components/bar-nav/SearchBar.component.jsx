import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"

const SearchBar = (props) => (

    <div className = "SearchBar">
      <InputGroup className="mb-3">
        <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
        />
        <InputGroup.Append className = "Search">
            <Button variant = "secondary">
                <FontAwesomeIcon icon= { faSearch } onClick = {() => this.props.history.push("/edit-worker")}/>   
            </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
    );
    

export default SearchBar;