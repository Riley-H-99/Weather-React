import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './Components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationCard from'./Components/LocationCard.js';


const App = () => {
  return (
    <div>
      <header class="App-Header">
        <h1 class="test"> Weather Forecast </h1>
      </header>
      <body>
        <LocationCard />
        <div>
          <Weather />
        </div>
      </body>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
//ReactDOM.render([<LocationCard />, <Weather />], document.querySelector('#root'));
