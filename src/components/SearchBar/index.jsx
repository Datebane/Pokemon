import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
      <button className="search-bar_button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

