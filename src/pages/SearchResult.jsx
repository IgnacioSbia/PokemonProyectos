import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "axios";

const SearchResult = () => {
  
  const [pokemon, setPokemon] = useState([]);
  



  useEffect(() => {const searchTerm = window.location.search.slice(3);
    const regex = new RegExp(`^${searchTerm}$`, "i");Axios.get(`http://localhost:3000/pokemons?name=${regex}`).then((res) => {
      setPokemon(res.data);}).catch((err) => {console.error(err);});},[window.location]);

  console.log(pokemon)
  

  return (
    <></>
  );
};

export default SearchResult;
