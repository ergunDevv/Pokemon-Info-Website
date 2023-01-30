import React from "react";

const Header = () => {
  return (
    <div >
      <h1 className="font-semibold font-inter">POKEDEX</h1>
      <form className="flex justify-center w-full items-center my-12 mx-0">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <input
          type="text"
          className="m-2 py-2.5 px-5 font-semibold bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
        />
        <button className="m-2 py-2.5 px-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <i className="fa fa-search first-letter:" aria-hidden="true"></i>
        </button>
      </form>

    </div>
  );
};

export default Header;
