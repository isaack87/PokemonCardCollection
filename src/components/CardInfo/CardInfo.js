
import styles from './CardInfo.module.css'
import React, {useState, useEffect} from 'react'


function CardInfo({clickedID}) {

    const [pokemonID, setPokemonID] = useState()
    const [id] = useState(clickedID)


    useEffect(() => {
        fetchPokemonID(clickedID)
      },[]);

    function fetchPokemonID(clickedID){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => setPokemonID(data));
      }

    return  (

<div className={styles.box}>
   <div >{pokemonID
        ? 
        <div>
 ADDD POKEMON
    </div>
        : 
        "Loading..."}
    </div>
</div>

    )

}

export default CardInfo;





        
// <div className={styles.image}> <img src={pokemonID.sprites.other.dream_world.front_default}/> 
// <ul>
//  <li>Pokemon Name: {pokemonID.name}</li>
//  <li>3</li>
//  <li>4</li>
//  <li>5</li>
//  <li>6</li>
//  <li>7</li>
// </ul> 
// </div>