import React, {useState, useEffect} from 'react';
import CharList from './components/charlist';
import Style from './components/styles';
import './App.css';

// Grabbing API here.
const App = () => {
  const [peopers, setPeopers] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=')
    .then(response =>
      )
  })

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <CharList characters={this.state.starWarsCharacters}/> */}
    </div>
  );
}

export default App;
