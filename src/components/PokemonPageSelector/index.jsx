import React from "react";
import "./style.css";

const PokemonPerPageSelector = ({ postsPerPage, onChange }) => {
  const handlePostsPerPageChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <div className="posts-per-page-form">
      <label>
        The pokemons on the page
        <select value={postsPerPage} onChange={handlePostsPerPageChange} className="post-per-page-input"> 
          <option value={10} className="hover">10</option>
          <option value={20} className="hover">20</option>
          <option value={50} className="hover">50</option>
        </select>
      </label>
    </div>
  );
};

export default PokemonPerPageSelector;