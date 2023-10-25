"use client";
import Link from "next/link";
import { useState, useEffect, SetStateAction } from "react";

import PokemonList from "./PokemonList";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="absolute top-0  right-0 flex items-center justify-between w-full h-20 gap-2 p-2 bg-electric-l">
      <Link
        href="/"
        className="text-3xl p-2 font-bold text-center text-electric-d underline"
      >
        Pokedex
      </Link>
      

      
      <div className={`absolute top-20 right-0 flex flex-col max-w-xl h-fit bg-electric-l p-2 transition-opacity duration-300  gap-2 ${visible ? "w-full opacity-100" : "w-0 opacity-0 hidden"}` }>
        
        <input
          onChange={handleChange}
          name="search"
          value={search}
          type="text"
          placeholder="pokeName or #"
          className={`${visible ? "w-full" : "w-0"} h-10 p-2 bg-fire-l shadow-inner shadow-black/30 placeholder:text-black/30 text-center`}
        />
        <Link
          href={`/${search.replace(/[^a-zA-Z0-9-]/g, "")}`}
          onClick={() => setVisible(false)}
          className="h-10 p-2 bg-fire text-center shadow-md shadow-black/30"
        >
          Search
        </Link>

        <PokemonList />
      </div>
      <button
        onClick={() => setVisible(!visible)}
        className={`flex flex-col justify-center transition ${visible ? "gap-0" : "gap-1"} w-10 h-10 p-2 bg-fire rounded shadow-md shadow-black/30`}
        >
          <div className="w-full h-1 bg-black rounded"></div>
          <div className="w-full h-1 bg-black rounded"></div>
          <div className="w-full h-1 bg-black rounded"></div>
        </button>
    </nav>
  );
};

export default SearchBar;
