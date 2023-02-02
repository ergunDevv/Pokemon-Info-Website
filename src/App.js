import React, { useState, useEffect } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { getAllPokemon, getPokemon } from "./components/PokemonFetch";
import PokemonCards from "./components/PokemonCards";
import "./styles/App.css";
import PokemonDetailPage from "./pages/PokemonDetailPage";


function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState("");
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);
  const nextData= async () =>{
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false)

  }
  const prevData= async () =>{
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false)

  }
  
  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data?.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>      

      <Routes>
        <Route path="/" element={<Home loading={loading}  pokemonData={pokemonData} prevData={prevData} nextData={nextData}/>}/>
        {pokemonData.map((item,index)=>{
          return  <Route key={index} path={`${item.name}`} element={<PokemonDetailPage pokemonData={item}/>}/>
        })}
        
      </Routes>

      <button onClick={prevData} class="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Previos Pokemons
        </button>
        <button onClick={nextData} class="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next Pokemons
        </button>
    </>
  );
}

export default App;
