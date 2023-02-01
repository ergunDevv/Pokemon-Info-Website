import { colors } from "./constants";
import "../styles/PokemonCard.css";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const PokemonCards = ({ pokemon }) => {
  const colorOfPokemon = colors[pokemon.types[0].type.name];
  return (
    <div className="inline-flex">
      <div className="grid grid-rows grid-flow-col gap-4  p-3 justify-center">
        {/* Pokemon Card Div */}
        <div className="Card" style={{ backgroundColor: colorOfPokemon }}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            className="Card__img h-24 "
            alt="pokemon"
          />

          <h4 className=" Card__name">
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </h4>
          <p className=" Card__name">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
          <p className=" Card__types">
            Type:{" "}
            {pokemon.types[0].type.name[0].toUpperCase() +
              pokemon.types[0].type.name.slice(1)}
          </p>
          <Link
            to={`/${pokemon.name}`}
            className={`flex items-center bg-transparent justify-center hover:bg-pink-500 text-blue-700 font-semibold hover:text-white py-2 mx-auto my-2 w-28 border border-blue-500 hover:border-transparent rounded`}
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCards;
