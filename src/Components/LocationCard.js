import React from "react";
import 'reactstrap';
import './Form.css';


const LocationCard = () => {
    return (
        <div>
            <form>
                <label for="lattitude">Lattitude:</label>
                <input type="number" id="lattitude" name="lattitude"></input>
                <label for="longitude">Longitude:</label>
                <input type="number" id="longitude" name="longitude"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default LocationCard;