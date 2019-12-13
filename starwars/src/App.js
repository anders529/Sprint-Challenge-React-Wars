import React, {Component} from 'react';
import './App.css';

// Grabbing API here.
const App = (Component) => {
  constructor() {
    super();
    this.state = {
      starWarsCharacters: [],
      url: 'https://swapi.co/api/people/?page=', current: 1,
      firstPage: 'https://swapi.co/api/people/',
    };
  }
  // Going to mount the getCharacters API
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/')
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
