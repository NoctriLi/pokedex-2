// import dummy from "../dummy.json";
// import dummy2 from "../dummy2.json";

import bulbasaurDex from "../bulbasaurDex.json";
import bulbasaurMain from "../bulbasaurMain.json";

export const getPokemon = async () => {
    // const res = await fetch("https://pokeapi.co/api/v2/pokemon/37");
    // const pokemon = await res.json();
    const pokemon = await bulbasaurMain;
  
    return pokemon;
  };

export const getDexInfo = async (name: string) => {
  const info = await bulbasaurDex;
  return info;
}
