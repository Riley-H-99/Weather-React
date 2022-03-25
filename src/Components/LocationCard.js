import React from "react";
import 'reactstrap';
import './Form.css';


const LocationCard = () => {
    function newData() {
        localStorage.setItem("lattitude", document.getElementById("lattitude").value);
        localStorage.setItem("longitude", document.getElementById("longitude").value);
    }

    return (
        <div>
            <form onSubmit={newData}>
                <label class="default" for="lattitude">Lattitude:</label>
                <input type="number" id="lattitude" name="lattitude"></input>
                <label class="right" for="longitude">Longitude:</label>
                <input type="number" id="longitude" name="longitude"></input>
                <input type="submit" value="Submit" formmethod="get"></input>
            </form>
        </div>
    )
}

export default LocationCard;