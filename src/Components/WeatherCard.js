import React from "react";
import 'reactstrap';
import './Form.css';


const WeatherCard = props => {
    return (
        <tr class={`WeatherCard ${props.temp>70 ? "hot" : ""} ${props.temp<40 ? "cold" : ""}`} id="container">
            <td class="test2" valign="top">
                <h2 class="name"> {props.name} </h2>
            </td>
            <td class="test">
                <h2 class="temperature"> {props.temp} </h2>
            </td>
        </tr>
    )
}

export default WeatherCard;