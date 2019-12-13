import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharList from './components/charlist.js';
import './App.css';

// Setting the state.
const App = () => {
  const [peepers, setPeepers] = useState([]);
// Grabbing the API with axios.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(rspnse => {
      console.log(rspnse);
      setPeepers(rspnse.data.results);
    })
    .catch(err => console.log({err}));
  },[])

  // Returning everything inside it's own card.
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {peepers.map((peeps, index) =>(
      <CharList
           key={index}
           name = {peeps.name}
           birth_year = {peeps.birth_year}
           gender = {peeps.gender}
      />
      ))}
    </div>
  );
}

export default App;
