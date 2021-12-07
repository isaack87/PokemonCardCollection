
import styles from './Card.module.css'
import React, {useState, useEffect} from 'react'
import CardInfo from '../CardInfo/CardInfo'
import '../../index.css'


function Cards({pokedata}) {

    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)
    const [showModel, SetShowModel] = useState(false)
    const [clickedID, setClickedID] = useState()


    useEffect(() => {
        setTimeout(handleLoading, 10000);
      }, []);


    function SwapBack(id){
      setClickedID(id)
      SetShowModel(true)
      if (showModel == true) {
        SetShowModel(false)
      } else {
        SetShowModel(true)
      }
    }
  
    const handleLoading = () => {
        setReady(true)
        setData(pokedata)
      }

    return !showModel ?  (
    <div>
        {pokedata.map(e => {

          let fire = "grid-individual-card card-background-redorange"
          let water = "grid-individual-card card-background-blue"
          let leaf = "grid-individual-card card-background-green"
          let lightning = "grid-individual-card card-background-yellow"
          let rock = "grid-individual-card card-background-rock"
          let poison = "grid-individual-card card-background-poison"
          let normal = "grid-individual-card card-background-normal"
          let psychic = "grid-individual-card card-background-psychic"
          let dragon = "grid-individual-card card-background-dragon"
          let ice = "grid-individual-card card-background-lice"
          let fairy =  "grid-individual-card card-background-fairy"
          let color = ""
         
          if (e.type == 'fire') {
            color = fire
          } else if (e.type == 'water') {
            color = water
          } else if (e.type == 'grass' ||e.type == 'leaf' || e.type == 'plant') {
            color = leaf
          } else if (e.type == 'electric' || e.type == 'lightning') {
            color = lightning
          } else if (e.type == 'rock' || e.type == 'ground' || e.type == 'fighting') {
            color = rock
          } else if (e.type == 'poison' || e.type == 'bug') {
            color = poison
          } else if (e.type == 'normal') {
            color = normal
          } else if (e.type == 'psychic' || e.type == 'ghost') {
            color = psychic
          } else if (e.type == 'dragon') {
            color = dragon
          } else if (e.type == 'ice') {
            color = ice
          } else if (e.type == 'fairy') {
            color = fairy
          } else {
            color = normal
          }
          
        return(
        <button className={styles.pokecard}  onClick={() => {SwapBack(e.id)}}>
<div class={color}>
    <div class="header-basic-pokemon">Basic Pokémon</div>
    <div class="header-pokemon-name">{e.name}</div>
    <div class="header-hp">{e.hp} HP</div>
    <div class="header-type-icon">☻</div>

    {color == water ? <div class="image-holderwater"> <img src={e.frontimg}/></div>
            : color == leaf ?  
            <div class="image-holderleaf"> <img src={e.frontimg}/></div> 
            :  color == fire ? <div class="image-holderfire"> <img src={e.frontimg}/></div>  
            :  color == lightning ? <div class="image-holderlightning"> <img src={e.frontimg}/></div> 
            :  color == rock ? <div class="image-holderrock"> <img src={e.frontimg}/></div> 
            :  color == poison ? <div class="image-holderpoison"> <img src={e.frontimg}/></div> 

            :  color == normal ? <div class="image-holdernormal"> <img src={e.frontimg}/></div> 
            :  color == psychic ? <div class="image-holderpsychic"> <img src={e.frontimg}/></div> 
            :  color == dragon ? <div class="image-holderdragon"> <img src={e.frontimg}/></div> 
            :  color == ice ? <div class="image-holderice"> <img src={e.frontimg}/></div> 
            :  color == fairy ? <div class="image-holderfairy"> <img src={e.frontimg}/></div> 
            :  null
    }

        
    <div class="description-below-image-empty"></div>
    <div class="description-below-image"><span class="description-below-image-background">{e.type} Type. Height: {e.height}", Weight: {e.weight} lbs.</span></div>
    <div class="description-below-image-empty"></div>
    <div class="attack-cost">☻</div>
    <div class="attack-description attack-center"><span class="attack-name">{e.attack1}</span></div>
    <div class="attack-damage">{e.atkVal1}</div>
    <div class="attack-cost">☻ ☻</div>
    <div class="attack-description"><span class="attack-name">{e.attack2}</span></div>
    <div class="attack-damage">{e.atkVal2}</div>
    <div class="weakness wrr-header">weakness</div>
    <div class="resistance wrr-header">resistance</div>
    <div class="retreat wrr-header">retreat cost</div>
    <div class="weakness wrr-cost">☻</div>
    <div class="resistance wrr-cost"></div>
    <div class="retreat wrr-cost">☻</div>
    <div class="description-above-copyright">
    
    </div>
    <div class="copyright"><strong>Illus. Mitsuhiro Arita</strong> ©1995, 96, 98 Nintendo Creatures, GAMEFREAK ©1999 Wizards. <strong>{e.id}/1118 ●</strong></div>
  </div>
        </button>
        ) 
        })}
    </div>
)
:     
(
    <div>
        <div onClick={() => {SwapBack()}}>
        <CardInfo clickedID={clickedID}/>
        </div>
        </div>
    ) 
}

export default Cards;
