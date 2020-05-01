import React from "react";
import {
    GoogleMap as GoogleMaps,
    withScriptjs,
    withGoogleMap,

} from "react-google-maps";


const GoogleMap = (props) => {
    return(
       < GoogleMaps
           defaultZoom={10}
         defaultCenter={{lat:-34.97,lng:150.664}}
        />

    );
}

export default withScriptjs(
    withGoogleMap(
        GoogleMap
    )
);