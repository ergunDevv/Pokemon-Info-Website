import React from "react";
import { colors } from "../components/constants";
const PokemonDetailPage = ({ pokemonData }) => {
  const { name, base_experience, height, id, weight } = pokemonData;
  console.log(pokemonData);
  return (
    <div className="flex flex-col justify-center">
      <img
        className="w-96 flex justify-center m-auto p-2"
        src={pokemonData.sprites.other.dream_world.front_default}
        alt=""
      />
      <h3
        className={`font-semibold text-3xl text-${pokemonData.types[0].type.name}`}
      >
        {name.toUpperCase()}
      </h3>
      <p>Hp : {pokemonData.stats[0].base_stat}</p>
      <p>Attack : {pokemonData.stats[1].base_stat}</p>
      <p>Defense : {pokemonData.stats[2].base_stat}</p>
      <p>Special-Attack : {pokemonData.stats[3].base_stat}</p>
      <p>Speed : {pokemonData.stats[5].base_stat}</p>
      <table className="table-fixed mr-48">
        <thead>
          <tr >
            <th>Stats</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetailPage;
