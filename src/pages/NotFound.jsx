import { Link } from "react-router-dom";
import logo from "../imagenes/pokebola.png";
import "animate.css";
const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="pokebola">
          <Link to="/">
            {" "}
            <img src={logo} className="avatar" />
          </Link>
        </div>
        <div className="container animate__hinge">
          <h1 className=" text ">404 not Found</h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;