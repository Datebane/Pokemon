import React, { useState } from "react";
import PokemonApi from "../../api/index";
import SearchBar from "../../components/SearchBar/index";
import "./style.css";
import Burger from "../../components/BurgerMenu";

const Home = () => {
  const [limit, setLimit] = useState(100); // Встановлюємо дефолтне значення 100

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit);
  };

  return (
    <div>
      <div className="header-pokemon">
        <div className="burger-menu" onClick={handleClick}>
          ☰
        </div>
        {showBurgerMenu && <Burger />}
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <PokemonApi
        limit={
          new URLSearchParams(window.location.search).get("limit") || limit
        }
      />
    </div>
  );
};

export default Home;

