import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, Route, Router, Routes } from "react-router-dom";
import { getAllPokemon, getPokemon } from "../components/PokemonFetch";
import PokemonCards from "../components/PokemonCards";
import "../styles/App.css";

const Home = ({ pokemonData, loading ,prevData,nextData}) => {
  return (
    <div>
      <div className="App">
        <Header />
        <button onClick={prevData} class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Previos Pokemons
        </button>
        <button onClick={nextData} class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next Pokemons
        </button>

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid-container">
            {pokemonData.map((pokemon, idx) => {
              return <PokemonCards key={idx} pokemon={pokemon} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
