"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const RandomPokemon = ({ pokemon }: { pokemon: any }) => {
  const [randomNum, setRandomPokemon] = useState(-1);

  const maxNum = 1017; // 1017 is the last actual pokemon, the api has extra forms as entries
  const minNum = 1; // 1 is the first pokemon

  ///This is so the random number is generated on page load
  ///instead of being generated with the static page
  ///useEffect prevents hydration errors resulting from timing issues
  useEffect(() => {
    const randomNumGenerator = () => {
      if (randomNum === 0) setRandomPokemon(1);
      else
        setRandomPokemon(
          Math.floor(Math.random() * (maxNum - minNum) + minNum)
        );
    };
    randomNumGenerator();
  }, []);
  if (randomNum === -1) return null;
  const randomPokemon = pokemon.results[randomNum - 1];
  const name = randomPokemon.name;
  const num = randomNum;

  let filteredName = name.replace("-", " ");

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    num +
    ".png";

  return (
    <Link href={`/${num}`} className="w-full h-full">
      <img className="w-full object-fill" src={imageUrl} alt={name} />
      <h1 className="text-3xl font-bold capitalize text-center">
        {filteredName}
      </h1>
    </Link>
  );
};
export default RandomPokemon;
