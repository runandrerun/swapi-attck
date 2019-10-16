import React from 'react';
import CharactersContainer from './containers/CharactersContainer';
import Lightsaber from './_assets/img/lightsaber.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>swapi <img alt="Swapi Attck logo" className="attck-logo" src={Lightsaber} /> attck</div>
      </header>
      <CharactersContainer />
    </div>
  );
}

export default App;
