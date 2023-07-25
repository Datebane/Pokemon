// import React, { useState } from "react";
// import PokemonList from "./PokemonList/index";
// import "./style.css";
// import Pagination from "../../../components/Pagination/index";
// import PokemonPerPageSelector from "../../../components/PokemonPageSelector/index";

// function PokemonContent({ allPokemon, limit }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(10);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = allPokemon.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handlePostsPerPageChange = (newPostsPerPage) => {
//     setPostsPerPage(newPostsPerPage);
//     setCurrentPage(1); // При зміні кількості покемонів на сторінці, перехід на першу сторінку.
//   };

//   return (
//     <div className="content">
//       <PokemonPerPageSelector
//         postsPerPage={postsPerPage}
//         onChange={handlePostsPerPageChange}
//       />
//       <PokemonList allPokemon={currentPosts} />
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={allPokemon.length}
//         paginate={paginate}
//         currentPage={currentPage}
//         limit={limit}
//       />
//     </div>
//   );
// }

// export default PokemonContent;

import React, { useState } from "react";
import PokemonList from "./PokemonList/index";
import "./style.css";
import Pagination from "../../../components/Pagination/index";
import PokemonPerPageSelector from "../../../components/PokemonPageSelector/index";

function PokemonContent({ allPokemon }) {
  const [selectedType, setSelectedType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const filteredPokemon =
    selectedType === "all"
      ? allPokemon
      : allPokemon.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === selectedType)
        );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPokemon.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostsPerPageChange = (newPostsPerPage) => {
    setPostsPerPage(newPostsPerPage);
    setCurrentPage(1); // При зміні кількості покемонів на сторінці, перехід на першу сторінку.
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="content">
      <div className="pokemon-filter_form">
        <label htmlFor="type">Pokemon type by:</label>
        <select
          id="type"
          value={selectedType}
          onChange={handleTypeChange}
          className="pokemon-filter_form-input"
        >
          <option value="all">All</option>
          <option value="normal">Normal</option>
          <option value="fire">Fiery</option>
          <option value="water">Water</option>
          {/* Додайте інші типи покемонів, які ви хочете підтримати */}
        </select>
      </div>
      <div>
        <PokemonPerPageSelector
          postsPerPage={postsPerPage}
          onChange={handlePostsPerPageChange}
        />
        <PokemonList allPokemon={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPokemon.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default PokemonContent;
