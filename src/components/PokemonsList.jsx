import { Link } from "react-router-dom";

const PokemonsList = ({ pokemon }) => {
  return (
    <div className="contenedorListaPokemon">
    <ul className="listaPokemon">
      {pokemon.map((pokemon) => {
        return (
          <Link to={`/pokemons/${pokemon.id}`}>
            <div key={pokemon.id} className="pokemonCard">
              <div className="pokemonCardContent">
              <p className="idPokemon">#{pokemon.id}</p>
              <img src={pokemon.imagen} className="pokemonImage"/>
              </div>
              <h3 className="pokemonName">{pokemon.name}</h3>{" "}
            </div>
          </Link>
        );
      })}
    </ul>
    </div>
  );
};

export default PokemonsList;
