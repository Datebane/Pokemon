import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import { useEffect } from "react";
// import PokemonContent from "../../pages/Home/PokemonContent";

// const SearchBar = ({ allPokemon }) => {
  
// const [inputValue, setInputValue] = useState("");
// const [filterPokemon, setFilterPokemon] = useState([]);

// useEffect(() => {
//   if (inputValue.length > 0)
//     setFilterPokemon(
//       allPokemon.filter((pokemon) => pokemon.name.includes(inputValue))
//     );
//   else setFilterPokemon(allPokemon);
// }, [inputValue]);
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
      navigate(`/about/${keyword}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar_input"
        value={keyword}
        placeholder="Search pokemon"
        onChange={(e) => setKeyword(e.target.value)}
      />
      {/* <input
        type="text"
        className="search-bar_input"
        placeholder="Search pokemon"
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      {/* {console.log(filterPokemon)} */}
      {/* <PokemonContent allPokemon={filterPokemon}/> */}
      <button className="search-bar_button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
