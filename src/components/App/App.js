
import './App.module.css';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards.js';
import SearchBar from '../Search/Search.js'
import React, {useState, useEffect} from 'react';
import styles from './App.module.css'

function App() {

const [pokeData, setPokeData] = useState([])
const [term, setTerm] = useState(0)
const [searchActive, setSearchActive] = useState(false)
const [current, setCurrent] = useState([])
const [loaded, setLoaded] = useState(true)


useEffect(() => {
  if (loaded) {
    fetchAllPokemon()
    setLoaded(false)
  }
 
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

  function SearchPokemon(pokemon){
    setTerm(pokemon)
    pokeData.map(e => {

      if (e.name.includes(term) && term.length >=4 ) {
        console.log('found' + term)
        let currentData = pokeData
        let current = currentData.slice(e.id-1, e.id)
        setCurrent(current)
        setSearchActive(true)
      } 

      if (term.length <=3) {
        setSearchActive(false)
      }
    })
  }

  return (

 
    <div className="App">


      <h2><NavBar /> </h2>
            <h1 className={styles.title}> PokeMon Card Collection </h1>
      <h1><SearchBar SearchPokemon={SearchPokemon}/></h1>
      {!searchActive ? <Cards pokedata={pokeData}/> : <Cards pokedata={current}/>}
    </div>
  );
}

export default App;
