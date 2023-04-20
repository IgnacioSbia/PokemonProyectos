import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import PokemonsList from "../components/PokemonsList";
import { useNavigate } from "react-router-dom";
import logo from "../imagenes/pngegg.png";
import sortName from '../imagenes/sortbyname.svg'
import sortId from '../imagenes/sortById.svg'


import Axios from "axios";
const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [sortPokemon, setSortPokemon] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    Axios.get("http://localhost:3000/pokemons").then((res) =>
      setPokemon(res.data)
    );
  }, []);

  const filteredPokemon = pokemon.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const sortPokemonByName = ()=>{
    const sortetPokemon = [...pokemon].sort((a,b)=>
      a.name.localeCompare(b.name)
    );
    setPokemon(sortetPokemon)

    setSortPokemon(true)
  }

  const reversePokemonSort =()=>{
    const originalPokemon = [...pokemon].sort((a,b)=>
    a.index - b.index
    );
    setPokemon(originalPokemon)
    setSortPokemon(false)
  }

  return (
    <>
    <img className="logo" src={logo} />
    
        <input
          className="searchBarPokemon"
          type="text"
          placeholder="Search"
          Value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchSortBy" onClick={sortPokemon ? reversePokemonSort : sortPokemonByName}>{sortPokemon? <img src={sortId} /> : <img src={sortName} />}</button>
      
      <Routes>
        <Route index element={<PokemonsList pokemon={filteredPokemon} />} />
        
      </Routes>
    </>
  );
};

export default Pokemons;
