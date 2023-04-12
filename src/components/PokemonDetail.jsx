import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import weight from '../imagenes/Weight.svg'
import height from '../imagenes/Height.svg'
import arrow from '../imagenes/arrow-left.svg'



const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3000/pokemons/${pokemonId}`).then(
      (res) =>setPokemon(res.data)
    );
  }, [pokemonId]);

  return (
    <>
      {!pokemon && <em>Loading...</em>}
      {pokemon && (
        <>
        <div className="pokemonDetail" style={{backgroundColor:pokemon.color}}>
          <div className="pokemonDetailsTitle">
           <Link to="/pokemons"><img src={arrow} className="pokemonDetailsArrowBack"/></Link>
           <h3 className="pokemonDetailName">{pokemon.name}</h3>
           <p className="pokemonDetailId">#{pokemon.id}</p>
         </div>
          <div className="pokemonDetailContent">
            <img className="pokemonDetailImg" src={pokemon.imagen} alt={pokemon.name} />
            <div className="pokemonDetailsTypes">
            <p className="pokemonDetailType" style={{backgroundColor:pokemon.color}}>{pokemon.mainType}</p><p className="pokemonDetailType" style={{backgroundColor:pokemon.secondaryColor}}>{pokemon.SecondaryType}</p>
            </div>
            <div>
              <p className="pokemonDetailsAbout" style={{color:pokemon.color}}>About</p>
              <div className="pokemonDetailsInfo">
                <div className="pokemonDetailsWeight">
                  <img className="pokemonDetailsWeightImg" src={weight} alt="weight"/>
                  <p className="pokemonDetailsWeightInfo">{pokemon.weight}</p>
                  <p className="pokemonDetailsStatsAbout">Weight</p>
                </div>
                <div className="pokemonDetailsHeight">
                  <img className="pokemonDetailsHeightImg" src={height} alt="height"/>
                  <p className="pokemonDetailsHeightInfo">{pokemon.height}</p>
                  <p className="pokemonDetailsStatsAbout">Height</p>
                </div>
                <div className="pokemonDetailsMoves">
                  <p className="pokemonDetailsMainAbility">{pokemon.MainAbility}</p>
                  <p className="pokemonDetailsSecondaryAbility">{pokemon.SecondaryAbility}</p>
                  <p className="pokemonDetailsStatsAbout">Moves</p>
                </div>
              </div>
              <div className="pokemonDetailsDescription">
                <p className="description">{pokemon.description}</p>
              </div>
              <p style={{color:pokemon.color}} className="pokemonDetailsBaseStats">Base Stats</p>
              <div className="pokemonDetailsStatsBar">
                <div className="pokemonDetailsHp">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>HP</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.HP}</p>
                  <div className="pokemonDetailBarHp" style={{background:pokemon.color}}><div className="pokemonDetailsStatBarContent" style={{background:pokemon.color, width:`${pokemon.stats.HP}%`} }></div></div>
                </div>

                <div className="pokemonDetailsAtk">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>ATK</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.ATK}</p>
                  <div className="pokemonDetailBarAtk" style={{background:pokemon.color}}><div className="pokemonDetailsStatBarContent" style={{background:pokemon.color, width:`${pokemon.stats.ATK}%`} }></div></div>
                </div>

                <div className="pokemonDetailsDef">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>DEF</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.DEF}</p>
                  <div className="pokemonDetailBarDef" style={{background:pokemon.color}}><div className="pokemonDetailsStatBarContent" style={{background:pokemon.color, width:`${pokemon.stats.DEF}%`} }></div></div>
                </div>

                <div className="pokemonDetailsSatk">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>SATK</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.SATK}</p>
                  <div className="pokemonDetailBarSatk" style={{background:pokemon.color}}><div className="pokemonDetailsStatBarContent" style={{background:pokemon.color, width:`${pokemon.stats.SATK}%`} }></div></div>
                </div>

                <div className="pokemonDetailsSdef">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>SDEF</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.SDEF}</p>
                  <div className="pokemonDetailBarSdef" style={{background:pokemon.color}}><div className="pokemonDetailsStatBarContent" style={{background:pokemon.color, width:`${pokemon.stats.SDEF}%`} }></div></div>
                </div>

                <div className="pokemonDetailsSpd">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>SPD</p>
                  <p  className="pokemonDetailsStatPokemonContent">{pokemon.stats.SPD}</p>
                  <div className="pokemonDetailBarSpd" style={{background:pokemon.color}}><div className="pokemonDetailsStatBarContent" style={{background:pokemon.color, width:`${pokemon.stats.SPD}%`} }></div></div>
                </div>


              </div>


            </div>





          </div>
         </div>
        </>
      )}
    </>
  );
};

export default PokemonDetail;
