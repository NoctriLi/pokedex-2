"use client";
import Link from "next/link";
import { useState, useEffect, SetStateAction } from "react";

import PokemonList from "./PokemonList";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between w-full h-20 gap-2 p-2 bg-electric-l">
      <Link
        href="/"
        className="text-3xl p-2 font-bold text-center text-electric-d underline"
      >
        Pokedex
      </Link>
      <PokemonList />

      <div className="flex w-fit gap-2">
        <input
          onChange={handleChange}
          name="search"
          value={search}
          type="text"
          placeholder="pokeName or #"
          className="h-10 p-2 bg-fire-l shadow-inner shadow-black/30 placeholder:text-black/30 text-center"
        />
        <Link
          href={`/pokemon/${search.replace(/[^a-zA-Z0-9-]/g, "")}`}
          type="submit"
          className="h-10 p-2 bg-fire text-center shadow-md shadow-black/30"
        >
          Search
        </Link>
      </div>
    </nav>
  );
};

export default SearchBar;
