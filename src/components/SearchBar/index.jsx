import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Список підказок
  const navigate = useNavigate();

  const fetchPokemonNames = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
      const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
      setSuggestions(pokemonNames);
    } catch (error) {
      console.log("Error fetching Pokémon names:", error);
    }
  };

  useEffect(() => {
    fetchPokemonNames();
  }, []); // Викликаємо один раз при завантаженні компонента

  const fetchPokemonData = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = response.data;
      return pokemonData;
    } catch (error) {
      return null; // Return null if the Pokémon is not found
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
      const pokemonData = await fetchPokemonData(keyword.toLowerCase());
      if (pokemonData) {
        navigate(`/about/${keyword}`);
      } else {
        console.log(`Pokémon with the name "${keyword}" does not exist.`);
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar_input"
        value={keyword}
        placeholder="Search pokemon"
        list={keyword.trim() !== "" ? "suggestions" : undefined} // Виводимо підказки лише якщо введено значення
        onChange={(e) => setKeyword(e.target.value.toLowerCase())}
      />

      <datalist id="suggestions">
        {suggestions.map((suggestion) => (
          <option key={suggestion} value={suggestion} />
        ))}
      </datalist>

      <button className="search-bar_button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

