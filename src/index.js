import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './Components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationCard from'./Components/LocationCard.js';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather Forecast </h1>
      </header>
      <body>
        <Weather />
      </body>
    </div>
  );
}

//ReactDOM.render(<LocationCard />, document.querySelector('#root'));
ReactDOM.render([<LocationCard />, <Weather />], document.querySelector('#root'));
