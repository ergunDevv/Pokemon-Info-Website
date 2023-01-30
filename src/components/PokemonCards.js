import React from 'react'

const PokemonCards = () => {
  console.log("hey")
  fetch('https://pokeapi.co/api/v2/pokemon/33')
  .then((response) => response.json())
  .then((data) => console.log(data));
  return (
    <div className="border-solid border-black border-8">
      {/* Pokemon Card Div */}
      <div className=''>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" />
        <h4>Bulbasaur</h4>
        <p>Id #001</p>
        <p>Type: Grass</p>
      </div>
    </div>
  )
}

export default PokemonCards