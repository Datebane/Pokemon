import React from "react";
import "./style.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="bob">
      <ol className="container">
        <div className="card">
          <div className="stop">
            <p>id: {pokemon.id}</p>
            <p>{pokemon.name}</p>
          </div>

          <li className="elem">
            <div className="pokemon_card">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
          </li>
          <li className="otstup">
            type:
            <div className="flex">
              {pokemon.types.map((pokemonType) => (
                <p className="pad">{pokemonType.type.name}</p>
              ))}
            </div>
          </li>
          <li className="elem3">weight: {pokemon.weight}</li>
          <li className="elem1">height: {pokemon.height}</li>
        </div>
      </ol>
    </div>
  );
}

export default PokemonCard;
