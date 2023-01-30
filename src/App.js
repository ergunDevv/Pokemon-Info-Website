import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import {getAllPokemon,getPokemon} from './components/PokemonFetch';
import PokemonCards from './components/PokemonCards';

function App() {
  const [pokemonData,setPokemonData] = useState([]);
  const [nextUrl,setNextUrl] = useState('');
  const [prevUrl,setPrevUrl] = useState('');
  const [loading,setLoading] = useState('');
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(()=>{
    async function fetchData(){
        let response = await getAllPokemon(initialUrl);
        console.log(response);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await loadingPokemon(response.results);
        setLoading(false);
    }
    fetchData();
  },[])
  const loadingPokemon = async (data) =>{
    let _pokemonData = await Promise.all(data?.map(async pokemon=>{
      let pokemonRecord = await getPokemon(pokemon.url)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData)
    
  }

  return (
    <div className="App">
          <Header/>
          {loading ? <h1>Loading...</h1> : (
            <>
            <div className='flex flex-row flex-wrap'>
            {pokemonData.map((pokemon,idx)=>{
              return (
                
                  <PokemonCards key={idx} pokemon={pokemon}/>
                
              )
            })}
            </div>
            </>
          )}
          
          

    </div>
  );
}

export default App;
