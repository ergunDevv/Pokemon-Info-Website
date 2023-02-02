import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, Route, Router, Routes } from "react-router-dom";
import { getAllPokemon, getPokemon } from "../components/PokemonFetch";
import PokemonCards from "../components/PokemonCards";
import "../styles/App.css";

const Home = ({
  pokemonData,
  loading,
  prevData,
  nextData,
  searchItems,
  filteredResults,
  searchInput,
}) => {

  return (
    <div>
      <div className="App">
        <Header searchItems={searchItems} />
        <button
          onClick={prevData}
          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previos Pokemons
        </button>
        <button
          onClick={nextData}
          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Pokemons
        </button>

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid-container">
            {searchInput !== ""
              ? filteredResults.map((pokemon, idx) => {
                  return <PokemonCards key={idx} pokemon={pokemon} />;
                })
              : pokemonData.map((pokemon, idx) => {
                  return <PokemonCards key={idx} pokemon={pokemon} />;
                })}
          </div>
        )}
        <button
          onClick={prevData}
          className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previos Pokemons
        </button>
        <button
          onClick={nextData}
          className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Pokemons
        </button>
      </div>
    </div>
  );
};

export default Home;
