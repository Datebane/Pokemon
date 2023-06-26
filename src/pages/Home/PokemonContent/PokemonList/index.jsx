import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard";
import "./style.css";

function PokemonList({ allPokemon }) {
  const [isCard, setCard] = useState([]);

  return (
    <div className="list-pokemon">
      <ol>
        {allPokemon.map((pokemon, index) => (
          <Link to={`/about/${pokemon.id}`}>
            <li
              key={index}
              className="list-pokemon_element"
              onMouseOver={() => {
                setCard(pokemon);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="pokemon-element">
                <img
                  src={pokemon.sprites.front_default}
                  className="list-pokemon_img"
                  alt=""
                />
                <p className="list-pokemon_description">id: {pokemon.id}</p>
              </div>
              <p className="list-pokemon_description">{pokemon.name.toUpperCase()}</p>
            </li>
          </Link>
        ))}
      </ol>

      {isCard.length === 0 ? null : <PokemonCard pokemon={isCard} />}
    </div>
  );
}

export default PokemonList;
