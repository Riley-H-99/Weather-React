import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationCard from'./Components/LocationCard.js';
import WeatherCard from './Components/WeatherCard';
import axios from 'axios';


const App = () => {
  const [day, setDay] = useState([]);
  const [night, setNight] = useState([]);

  useEffect(() => {
    (async() => {
        let params = new URLSearchParams(window.location.search);
        //console.log([...params]);
        let lat, long;
        if (!params.length) {
          lat = localStorage.getItem("lattitude");
          long = localStorage.getItem("longitude");
        } else {
          lat = params.get('lattitude');
          long = params.get('longitude');
        }
        const res = await axios.get(`https://api.weather.gov/points/${lat},${long}`);
        const response = await axios.get(res.data.properties.forecast);
        const periods = response.data.properties.periods;
        let dayObjects = [];
        let nightObjects = [];
        periods.forEach(period => {
          if (period.isDaytime) {
            dayObjects.push(period);
          } else {
            nightObjects.push(period);
          }
        })
        if (!periods[0].isDaytime) {
          dayObjects.pop();
          nightObjects.shift();
        }
        setDay(dayObjects);
        setNight(nightObjects);
    }) ();
  }, []);

  return (
    <div>
      <header class="App-Header">
        <h1 class="test"> Weather Forecast </h1>
      </header>
      <body>
        <LocationCard />
        <table class="WeatherArray" id="container">
          <div class="WeatherArray">
            {day.map((card) => <WeatherCard temp= {card.temperature} name= {card.name}/>)}
          </div>
          <div class="WeatherArray">
            {night.map((card) => <WeatherCard temp= {card.temperature} name= {card.name}/>)}
          </div>
        </table>
      </body>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
//ReactDOM.render([<LocationCard />, <Weather />], document.querySelector('#root'));
