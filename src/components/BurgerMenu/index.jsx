import React, { useState } from "react";
import "./style.css";
import PokemonForm from "../PokemonForm/index";
import PokemonSortForm from "../PokemonSortForm";
import PokemonFilter from "../PokemonSortForm";

function Burger() {
  const [showForm, setShowForm] = useState(false);

  const handleItemClick = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="burger">
      <ul className="list-burger">
        <li onClick={handleItemClick}>
          How many Pokemon do you need?
        </li>
      </ul>

      {showForm && <PokemonForm onClose={handleCloseForm} />}
    </div>
  );
}

export default Burger;
