import { colors } from './constants'
const PokemonCards = ({pokemon}) => {
console.log(pokemon)
  return (
    <>
    <div className="flex flex-row flex-wrap w-full p-3">
      {/* Pokemon Card Div */}
      <div className='w-72 p-2.5 m-5 rounded-2xl ' style={{backgroundColor:colors[pokemon.types[0].type.name]}}>
        <img 
        src={pokemon.sprites.other.dream_world.front_default}
        className=' w-7/12 my-2.5 mx-auto  '
        alt="pokemon" />
        <h4 className='text-2xl my-1 mx-auto'>{pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</h4>
        <p className='my-1 mx-auto'>#{pokemon.id.toString().padStart(3, "0")}</p>
        <p className='my-1 mx-auto'>Type: {pokemon.types[0].type.name[0].toUpperCase()+pokemon.types[0].type.name.slice(1)}</p>
      </div>
    </div>
    </>
    
  )
}

export default PokemonCards