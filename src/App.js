import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route exact path="/pokemons" render={(props) => <Pokemon {...props} />} />
        <Route exact path="/pokemons/:id" render={(props) => <PokemonDetails {...props} />} />  
      </BrowserRouter>
    </div>
  );
}

export default App;