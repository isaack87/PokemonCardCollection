
import './App.module.css';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards.js';
import React, {useState, useEffect} from 'react';

function App() {

const [pokeData, setPokeData] = useState([])

useEffect(() => {
  fetchAllPokemon()
}, []);

function fetchAllPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonDataURL(pokemon);
        })
    })
}

function fetchPokemonDataURL(pokemon){
    let url = pokemon.url 
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
      let rand1 = Math.floor(Math.random() * 30)
      let rand2 = Math.floor(Math.random() * 30 + 30)
      let defense = ['run', 'defense', 'growl', 'retreat', 'hide']
      let idx = Math.floor(Math.random() * 2)
      let atk1 = pokeData.abilities[0].ability.name
      let atk2 = defense[idx]
      if (!atk1) {
        atk1 = 'Scratch'
      }
   
      let data = {
        id: pokeData.id,
        name: pokeData.species.name,
        hp: pokeData.stats[0].base_stat,
        weight: pokeData.weight,
        type: pokeData.types[0].type.name,
        attack1: atk1,
        atkVal1: rand1,
        attack2:  atk2,
        atkVal2: rand2,
        height: pokeData.height,
        frontimg: pokeData.sprites.front_default,
        backimg: pokeData.sprites.back_default,
        shinyimg: pokeData.sprites.front_shiny,
      }
      setPokeData(prevState => [...prevState, data]);
    })
}


  return (

 
    <div className="App">
      <h1><NavBar /> </h1>
      <Cards pokedata={pokeData}/>
    </div>
  );
}

export default App;
