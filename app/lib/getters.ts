import dummy from "../dummy.json";

export const getPokemon = async () => {
    // const res = await fetch("https://pokeapi.co/api/v2/pokemon/37");
    // const pokemon = await res.json();
    const pokemon = dummy;
  
    return pokemon;
  };