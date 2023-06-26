import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TabBar from "./TabBar";
import Evolution from "./TabBar/Evolutione";
import "./style.css";

const AboutPokemonPages = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);
    };

    fetchPokemonData();
  }, [id]);

  const tabs = [
    {
      title: "Pokedex",
      content: (
        <ul className="pokedex-list">
          <li className="pokedex-list-element">
            Type: <span className="pokemon_stats-element">{pokemon.types?.map((type) => type.type.name).join(", ")}</span>
          </li>
          <li className="pokedex-list-element">Height: <span className="pokemon_stats-element">{pokemon.height}</span></li>
          <li className="pokedex-list-element">Weight: <span className="pokemon_stats-element">{pokemon.weight}</span></li>
          <li className="pokedex-list-element">
            Abilities:<span className="pokemon_stats-element">{" "}
            {pokemon.abilities
              ?.map((ability) => ability.ability.name)
              .join(", ")}</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Stats",
      content: (
        <ul className="pokedex-list">
          {pokemon.stats?.map((pokemonStat) => (
            <li className="stats-list">
              <p>{pokemonStat.stat.name}</p>
              <p className="pokemon_stats-element">{pokemonStat.base_stat}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Evolution",
      content: <Evolution pokemon={pokemon} />,
    },
  ];

  return (
    <>
      <div className="about-header">
        <div className="pod">
          <button onClick={() => navigate(-1)} className="navigate-button">
            Back
          </button>
          <div className="header_pokemon-name">{pokemon.name}</div>
        </div>
        <div className="header_pokemon-id">#{pokemon.id}</div>
      </div>
      <div className="about_pokemon-information">
        <img
          src={
            pokemon.sprites?.other?.dream_world?.front_default ||
            pokemon.sprites?.front_default
          }
          alt=""
          className="pokemon-image"
        />
        <div className="about_tab-bar">
          <TabBar tabs={tabs} />
        </div>
      </div>
    </>
  );
};

export default AboutPokemonPages;
