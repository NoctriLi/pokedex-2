
import { getAllPokemon, getUrlNumber } from "../lib/getters";

import PokemonListItem from "./PokemonListItem";
import { Suspense } from "react";

const PokemonList = async () => {
  const pokemon = await getAllPokemon();
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const imageUrl = (num: number | string) =>
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    num +
    ".png";

  return (
    <div className="p-2 bg-fire-l h-full overflow-scroll">
      <Suspense fallback={<div>Loading...</div>}>

      {/* {pokemon.results.map((obj, key) => {
        const urlNum = getUrlNumber(obj.url);
        return (
          <PokemonListItem name={capitalize(obj.name)} num={urlNum} link={imageUrl(urlNum)} key={key} />
          );
        })} */}
        </Suspense>
    </div>
  );
};
export default PokemonList;
