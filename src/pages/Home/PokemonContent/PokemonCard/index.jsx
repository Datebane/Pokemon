import React from "react";
import "./style.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <ol className="pokemon-card_list">
        <div className="pokemon-card_element">
          <div className="pokemon-card_header">
            <p>id: {pokemon.id}</p>
            <p>{pokemon.name}</p>
          </div>

          <li className="pokemon-card_body">
            <div className="pokemon-card_img">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
          </li>
          <li className="pokemon-card_description">
            type:
            <div className="pokemon-type_flex">
              {pokemon.types.map((pokemonType) => (
                <p className="pokemon-type">{pokemonType.type.name}</p>
              ))}
            </div>
          </li>
          <li className="pokemon-weight">weight: {pokemon.weight}</li>
          <li className="pokemon-height">height: {pokemon.height}</li>
        </div>
      </ol>
    </div>
  );
}

export default PokemonCard;


