import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonContent from "../pages/Home/PokemonContent";
import SearchBar from "../components/SearchBar";

const PokemonApi = ({ limit }) => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const pokemonPromises = result.data.results.map(async (item) => {
          const response = await axios(item.url);
          return response.data;
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setAllPokemon(pokemonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [limit]);

  return <PokemonContent allPokemon={allPokemon} />;
  // return <SearchBar allPokemon={allPokemon} />;
};

export default PokemonApi;
