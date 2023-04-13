

import { Outlet } from "react-router-dom";
import Pokemons from "../pages/Pokemons";
const Layout = () => {
  return (
    <div>
      <Outlet />
      <Pokemons/>
    </div>
  );
};

export default Layout;
