
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";

const render = (status) => {
    return <h1>{status}</h1>;
}


const Map = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState();
  
    React.useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);
  
    return (
      <>
        <div ref={ref} />
      </>
    );
}

const MapCard = () => {
    return (
        <div>
            <Wrapper apiKey={"AIzaSyAM42H7PC1baB8DRDmCscJC8wFXrQD320w"} render={render}>
                <Map />
            </Wrapper>
        </div>
    );
}


export default MapCard;
