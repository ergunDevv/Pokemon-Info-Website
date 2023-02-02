import React from "react";
import { colors } from "../components/constants";
const PokemonDetailPage = ({ pokemonData }) => {
  const { name, base_experience, height, id, weight } = pokemonData;
  const colorOfName = pokemonData.types[0].type.name;
  return (
    <>
      <div className="flex flex-col justify-center">
        <img
          className="w-96 flex justify-center m-auto p-2"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt=""
        />
        <h3 className={`font-semibold text-3xl text-white`}>
          {name.toUpperCase()}
        </h3>
      </div>

      <div className="flex flex-col justify-center mt-10">
        <div className=" sm:-mx-6 lg:-mx-8">
          <div className=" py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className=" overflow-hidden ">
              <table className=" min-w-full ">
                <tbody className="">
                  <tr className=" border-b transition duration-300 ease-in-out text-white  hover:bg-gray-100 hover:text-black">
                    <td className="w-1/2 text-sm  font-extrabold px-6 py-4 whitespace-nowrap ">
                      Hp
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {pokemonData.stats[0].base_stat}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Attack
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {pokemonData.stats[1].base_stat}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Defense
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {pokemonData.stats[2].base_stat}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black ">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Special-Attack
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {pokemonData.stats[3].base_stat}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Speed
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {pokemonData.stats[5].base_stat}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Experince
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {base_experience}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Height
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {height}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black" >
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Weight
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      {weight}
                    </td>
                  </tr>
                  <tr className=" border-b transition duration-300 ease-in-out hover:bg-gray-100 text-white hover:text-black">
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      Id
                    </td>
                    <td className="text-sm  font-extrabold px-6 py-4 whitespace-nowrap">
                      #{id.toString().padStart(3, "0")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailPage;
