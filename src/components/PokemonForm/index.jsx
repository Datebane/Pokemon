import React, { useState } from "react";
import "./style.css";

const PokemonForm = ({ onClose }) => {
  const [inputLimit, setInputLimit] = useState(""); // Значення поля вводу

  const handleFormClose = () => {
    onClose();
  };

  const handleLimitChange = (event) => {
    setInputLimit(event.target.value);
  };

  const handleFormSubmit = () => {
    const newLimit = parseInt(inputLimit, 10);
    if (!isNaN(newLimit) && newLimit >= 0) {
      window.location.search = `?limit=${newLimit}`;
    }
  };

  return (
    <div className="pokemonForm">
      <button className="pokemonForm_button-close" onClick={handleFormClose}>
        Х
      </button>
      <input
        className="pokemonForm_input"
        placeholder="How many Pokemon do you need?"
        value={inputLimit}
        onChange={handleLimitChange}
      />
      <button className="pokemonForm_button-loading" onClick={handleFormSubmit}>
        Loading
      </button>
    </div>
  );
};

export default PokemonForm;
