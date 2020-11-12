import React from 'react'
import Pokedex from './Pokemons/Pokedex'
import pokemons from './Pokemons/data'
import './App.css'


class App extends React.Component {
  render() {
    return (
        <div className="hero-container">
          <h1>PokeDex</h1>
          <Pokedex data={pokemons} />
        </div>
    )
  }
}


export default App;
