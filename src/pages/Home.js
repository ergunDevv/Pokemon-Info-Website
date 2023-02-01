import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, Route, Router, Routes } from "react-router-dom";
import { getAllPokemon, getPokemon } from "../components/PokemonFetch";
import PokemonCards from "../components/PokemonCards";
import "../styles/App.css";
const Home = ({pokemonData,loading}) => {

  return (
    <div>
        <div className="App">
        <Header />

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
  )
}

export default Home