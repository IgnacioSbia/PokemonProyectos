import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import weight from '../imagenes/Weight.svg'
import height from '../imagenes/Height.svg'
import arrow from '../imagenes/arrow-left.svg'
import { useNavigate } from "react-router-dom";
import arrowBack from '../imagenes/pokemonarrowleft.svg'
import arrowFoward from '../imagenes/pokemonarrowright.svg'



const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const [pokemonState, setPokemonState] =useState("Loading...")

  useEffect(() => {
    const obtainPokemon = async ()=>{
      try{
        const response = await Axios.get(`http://localhost:3000/pokemons/${parseInt(pokemonId)}`);
        setPokemon(response.data);
        
      }catch(error){
        setPokemonState("Pokemon Not Found")
      }
    }
    obtainPokemon();
  }, [pokemonId]);

  const handlePrevious = ()=>{
    if(pokemonId>1){
    const previousPokemonId = pokemonId - 1;
    navigate(`/pokemons/${previousPokemonId}`);
    }else{
      const previousPokemonId = parseInt(pokemonId) + 11;
    navigate(`/pokemons/${previousPokemonId}`)
    }
    
  };
  const handleNext = ()=>{
    if(pokemonId < 12){
    const nextPokemonId = parseInt(pokemonId) + 1 ;
    navigate(`/pokemons/${nextPokemonId}`);
    }else{
      const nextPokemonId = parseInt(pokemonId) - 11 ;
      navigate(`/pokemons/${nextPokemonId}`);
    }
  };
 
  

  return (
    <>
      {!pokemon ?  <em style={{color:"black", fontSize:"20px", fontWeight:"bolder"}}><Link to="/"><img src={arrow} className="pokemonDetailsArrowBackToList"/></Link>{pokemonState}</em>:
      (
        <>
        <div className="pokemonDetail" style={{backgroundColor:pokemon.color}}>
          <div className="pokemonDetailsTitle">
           <Link to="/"><img src={arrow} className="pokemonDetailsArrowBack"/></Link>
           <h3 className="pokemonDetailName">{pokemon.name}</h3>
           <p className="pokemonDetailId">#{pokemon.index}</p>
           <div style={{display:"flex", justifyContent: "space-around"}}>
            <button onClick={handlePrevious} className="pokemonDetailArrowBack"><img src={arrowBack}/></button>
            <button onClick={handleNext} className="pokemonDetailArrowFoward"><img src={arrowFoward}/></button>

           </div>
         
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
                      <progress
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          height: "5px",
                        }}
                        className="pokemonDetailBarHp"
                        max="200"
                        value={pokemon.stats.HP}
                      >
                          <style>
                            {`
                            progress::-webkit-progress-value {
                            background-color: ${pokemon.color};
                            border-radius: 9px;
                          }
                        `}
                        </style>
                      </progress>
                </div>

                <div className="pokemonDetailsAtk">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>ATK</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.ATK}</p>
                  <progress
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          height: "5px",
                        }}
                        className="pokemonDetailBarAtk"
                        max="200"
                        value={pokemon.stats.ATK}
                      >
                          <style>
                            {`
                            progress::-webkit-progress-value {
                            background-color: ${pokemon.color};
                            border-radius: 9px;
                          }
                        `}
                        </style>
                      </progress>
                </div>

                <div className="pokemonDetailsDef">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>DEF</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.DEF}</p>
                  <progress
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          height: "5px",
                        }}
                        className="pokemonDetailBarDef"
                        max="200"
                        value={pokemon.stats.DEF}
                      >
                          <style>
                            {`
                            progress::-webkit-progress-value {
                            background-color: ${pokemon.color};
                            border-radius: 9px;
                          }
                        `}
                        </style>
                      </progress>
                </div>

                <div className="pokemonDetailsSatk">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>SATK</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.SATK}</p>
                  <progress
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          height: "5px",
                        }}
                        className="pokemonDetailBarSatk"
                        max="200"
                        value={pokemon.stats.SATK}
                      >
                          <style>
                            {`
                            progress::-webkit-progress-value {
                            background-color: ${pokemon.color};
                            border-radius: 9px;
                          }
                        `}
                        </style>
                      </progress>
                </div>

                <div className="pokemonDetailsSdef">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>SDEF</p>
                  <p className="pokemonDetailsStatPokemonContent">{pokemon.stats.SDEF}</p>
                  <progress
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          height: "5px",
                        }}
                        className="pokemonDetailBarSdef"
                        max="200"
                        value={pokemon.stats.SDEF}
                      >
                          <style>
                            {`
                            progress::-webkit-progress-value {
                            background-color: ${pokemon.color};
                            border-radius: 9px;
                          }
                        `}
                        </style>
                      </progress>
                </div>

                <div className="pokemonDetailsSpd">
                  <p className="pokemonDetailsStatPokemon" style={{color:pokemon.color}}>SPD</p>
                  <p  className="pokemonDetailsStatPokemonContent">{pokemon.stats.SPD}</p>
                  <progress
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          height: "5px",
                        }}
                        className="pokemonDetailBarSpd"
                        max="200"
                        value={pokemon.stats.SPD}
                      >
                          <style>
                            {`
                            progress::-webkit-progress-value {
                            background-color: ${pokemon.color};
                            border-radius: 9px;
                          }
                        `}
                        </style>
                      </progress>
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
