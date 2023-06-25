import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard";
import "./style.css";

function PokemonList({ allPokemon }) {
  const [isCard, setCard] = useState([]);

  return (
    <div className="displey">
      <ol>
        {allPokemon.map((pokemon, index) => (
          <Link to={`/about/${pokemon.id}`}>
            <li
              id="item"
              key={index}
              className="table"
              onMouseOver={() => {
                setCard(pokemon);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="pokemon">
                <img
                  src={pokemon.sprites.front_default}
                  className="icon"
                  alt=""
                />
                <p className="text">id: {pokemon.id}</p>
              </div>
              <p className="text">{pokemon.name.toUpperCase()}</p>
            </li>
          </Link>
        ))}
      </ol>

      {isCard.length === 0 ? null : <PokemonCard pokemon={isCard} />}
    </div>
  );
}

export default PokemonList;
