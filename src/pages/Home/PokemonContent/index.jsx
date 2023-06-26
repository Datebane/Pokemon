import React, { useState } from "react";
import PokemonList from "./PokemonList/index";
import "./style.css";
import Pagination from "../../../components/Pagination/index";
// import SearchBar from "../../../components/SearchBar";

function PokemonContent({ allPokemon, limit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPokemon.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="content">
      {/* <SearchBar allPokemon={allPokemon}/> */}
      <PokemonList allPokemon={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allPokemon.length}
        paginate={paginate}
        currentPage={currentPage}
        limit={limit}
      />
    </div>
  );
}

export default PokemonContent;

