"use client"
import Link from "next/link";

const RandomPokemon = ({ name, num } : {name: string, num: number}) => {
    let filteredName = name.replace("-", " ");

    const imageUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      num +
      ".png";
  
    return (
      <Link  href={`/${num}`} className="w-full h-full">
        <img className="w-full object-fill" src={imageUrl} alt={name} />
        <h1 className="text-3xl font-bold capitalize text-center">{filteredName}</h1>
      </Link>
    );
  };
export default RandomPokemon;