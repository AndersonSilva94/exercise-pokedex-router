import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import Header from './Header';
import Pokedex from './Pokedex';
//import Pokemon from './Pokemon';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        {/* <Route exact path="/pokemons" render={(props) => <Pokemon {...props} />} /> */}
        <Route exact path="/about" component={ About } />
        <Route exact path="/pokemons/:idPoke" render={(props) => <PokemonDetails {...props}  pokemons={ pokemons } />} />  
      </div>
    </BrowserRouter>
  );
}

export default App;