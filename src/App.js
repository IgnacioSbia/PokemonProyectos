import { Routes, Route } from "react-router-dom";


import Pokemons from "./pages/Pokemons";
import Layout from "./components/Layout";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="pokemons/*" element={<Pokemons />} />
        <Route path="search" element={<SearchResult />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;
