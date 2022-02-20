import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './Components/Weather';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <Weather />
      </body>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
