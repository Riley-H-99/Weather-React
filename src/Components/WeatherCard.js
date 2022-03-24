import React from "react";
import 'reactstrap'


const WeatherCard = props => {
    return (
        <div class="container p-5 my-5 bg-dark text-white">
            <h2> {props.name} </h2>
            <h2> {props.temp} </h2>
        </div>
    )
}

export default WeatherCard;