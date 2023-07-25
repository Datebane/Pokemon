import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonContent from "../../pages/Home/PokemonContent";
import "./style.css";

const PokemonFilter = ({ limit }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );
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

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="pokemon-filter_form">
      <label htmlFor="type">Pokemon type by:</label>
      <select
        id="type"
        value={selectedType}
        onChange={handleTypeChange}
        className="pokemon-filter_form-input"
      >
        <option value="all">All</option>
        <option value="normal">Normal</option>
        <option value="fire">Fiery</option>
        <option value="water">Water</option>
        {/* можна додати інші типи, за потреби*/}
      </select>

      {/* Передайте масив allPokemon у компонент PokemonContent */}
      <PokemonContent allPokemon={allPokemon} />
    </div>
  );
};

export default PokemonFilter;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PokemonContent from "../../pages/Home/PokemonContent";
// import "./style.css";

// const PokemonFilter = ({ limit }) => {
//   const [allPokemon, setAllPokemon] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios(
//           `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
//         );
//         const pokemonPromises = result.data.results.map(async (item) => {
//           const response = await axios(item.url);
//           return response.data;
//         });

//         const pokemonData = await Promise.all(pokemonPromises);
//         setAllPokemon(pokemonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [limit]);

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   return (
//     <div className="pokemon-filter_form">
//       <label htmlFor="type">Pokemon type by:</label>
//       <select
//         id="type"
//         value={selectedType}
//         onChange={handleTypeChange}
//         className="pokemon-filter_form-input"
//       >
//         <option value="all">All</option>
//         <option value="normal">Normal</option>
//         <option value="fire">Fiery</option>
//         <option value="water">Water</option>
//         {/* можна додати інші типи, за потреби*/}
//       </select>

//       {/* Pass the selectedType as a prop to PokemonContent */}
//       <PokemonContent allPokemon={allPokemon} selectedType={selectedType} />
//     </div>
//   );
// };

// export default PokemonFilter;
