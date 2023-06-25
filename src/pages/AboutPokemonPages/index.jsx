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
        <ul className="ul">
          <li className="lip">
            Type: <span className="stats">{pokemon.types?.map((type) => type.type.name).join(", ")}</span>
          </li>
          <li className="lip">Height: <span className="stats">{pokemon.height}</span></li>
          <li className="lip">Weight: <span className="stats">{pokemon.weight}</span></li>
          <li className="lip">
            Abilities:<span className="stats">{" "}
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
        <ul className="ul">
          {pokemon.stats?.map((pokemonStat) => (
            <li className="list">
              <p>{pokemonStat.stat.name}</p>
              <p className="stats">{pokemonStat.base_stat}</p>
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
    <div className="bup">
      <div className="box">
        <div className="pod">
          <button onClick={() => navigate(-1)} className="button">
            Back
          </button>
          <div className="name">{pokemon.name}</div>
        </div>
        <div className="ids">#{pokemon.id}</div>
      </div>
      <div className="block">
        <img
          src={
            pokemon.sprites?.other?.dream_world?.front_default ||
            pokemon.sprites?.front_default
          }
          alt=""
          className="pokemon-image"
        />
        <div className="about">
          <TabBar tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default AboutPokemonPages;
