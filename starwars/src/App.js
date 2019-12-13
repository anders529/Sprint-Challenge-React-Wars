import React, {useState, useEffect} from 'react';
import CharList from './components/charlist';
import Style from './components/styles';
import './App.css';

// Setting the state.
const App = () => {
  const [peepers, setPeepers] = useState([]);
// Grabbing the API with axios.
  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=')
    .then(response => {
      console.log(response);
      setPeepers(response.data.results);
    })
    .catch(err => console.log({err}));
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <CharList characters={this.state.starWarsCharacters}/> */}
    </div>
  );
}

export default App;
