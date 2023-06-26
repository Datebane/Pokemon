import React, { useState, useEffect } from "react";
import "./style.css";

function Evolution({ pokemon }) {
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    async function getEvolutionChain() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`
      );
      const data = await response.json();
      const evolutionChainResponse = await fetch(data.evolution_chain.url);
      const evolutionChainData = await evolutionChainResponse.json();
      const chain = parseEvolutionChain(evolutionChainData.chain);
      setEvolutionChain(chain);
    }

    getEvolutionChain();
  }, [pokemon]);

  function parseEvolutionChain(chain) {
    let evolutionChain = [];

    if (chain.species) {
      evolutionChain.push({
        name: chain.species.name,
        id: getIdFromUrl(chain.species.url),
      });
    }

    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution) => {
        const nextEvolutions = parseEvolutionChain(evolution);
        evolutionChain = [...evolutionChain, ...nextEvolutions];
      });
    }

    return evolutionChain;
  }

  function getIdFromUrl(url) {
    const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/(\d+)\//;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  return (
    <div className="evolution-chain">
      {evolutionChain.map((evolution, index) => (
        <React.Fragment key={index}>
          <div className="evolution">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.id}.png`}
              alt={evolution.name}
            />
            <p className="evolution-name">{evolution.name}</p>
          </div>
          {index < evolutionChain.length - 1 && (
            <div className="evolution-arrow">&#8594;</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Evolution;
