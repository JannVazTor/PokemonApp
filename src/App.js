import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonView from './components/PokemonView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonView />
      </header>
    </div>
  );
}

export default App;
