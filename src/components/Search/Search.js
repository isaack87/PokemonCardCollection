
import React, {useState, useEffect} from 'react'
import styles from './Search.module.css'

function SearchBar({SearchPokemon}) {

  const [search, setSearch] = useState()
  function searching(e){
    console.log(e.target.value)
    SearchPokemon(e.target.value)
  }

  return (
    <div>
    <input className={styles.bar}
        type="text" 
        placeholder="Search Pokemon:" 
        value={search}
        onChange={(e) => searching(e)}
        />
    </div>
  );
}

export default SearchBar;
