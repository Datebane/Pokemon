import React from "react";
import PokemonApi from "../../api/index";
import SearchBar from "../../components/SearchBar/index";
import "./style.css";

const Home = () => {
  const limit = 100; // Вказуйте ліміт з API тут

  return (
    <>
      <div>
        <SearchBar />
        <PokemonApi limit={limit} />
      </div>
    </>
  );
};

export default Home;


