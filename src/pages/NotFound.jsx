import { Link } from "react-router-dom";
import arrow from '../imagenes/arrow-left.svg'

const NotFound = () => {
  return (
    <>
      <Link to="/"><img src={arrow} className="pokemonDetailsArrowBackNotFound"/></Link>
      <h2>404 not Found</h2>
    </>
  );
};

export default NotFound;
