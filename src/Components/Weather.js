import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Weather = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        (async() => {
            const lat = 36.356766;
            const long = -94.236638;
            const res = await axios.get(`https://api.weather.gov/points/${lat},${long}`);
            //const resJson = await res.json();
            const response = await axios.get(res.data.properties.forecast);
            //const finalJson = await response.json();
            setWeather(response.data.properties.periods);
        }) ();
    }, []);

    return (
        weather.map((card) => <WeatherCard temp= {card.temperature} name= {card.name} />)
    )
}

export default Weather;