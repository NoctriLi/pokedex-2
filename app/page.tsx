import { getAllPokemon } from "./lib/getters";

import RandomPokemon from "./components/RandomPokemon";

const styles = {
  main: `flex flex-col items-center justify-center gap-5 min-h-screen pt-20 px-10 bg-fire-l`,
  heading: `w-full max-w-2xl text-center text-lg sm:text-xl text-fire-d font-bold`,
  pokedexOuter: `flex flex-col w-60 sm:w-80 h-96 sm:h-[30rem] p-5 bg-fire-d shadow-md shadow-black/30 rounded overflow-hidden`,
  pokedexScreen: `flex flex-col items-center justify-center w-full h-full  p-2 bg-slate-300 rounded`,
  buttonWrapper: `flex items-center gap-2 w-full h-10 p-2`,
  pokedexFakeButton1: `w-6 h-6 bg-flying-l rounded-full border-2 border-white shadow-md shadow-black/30`,
  pokedexFakeButton2: `w-6 h-6 bg-electric rounded-full shadow-md shadow-black/30`,
};


export default async function Home() {
  const pokemonList = await getAllPokemon();
  let pokemon = pokemonList;
  

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        Search for a pokemon using the search bar above, or check out the random pokemon generated below!
      </h1>
      <a href="/" className="text-yellow-300 p-2 *:hover:text-yellow-400 border border-yellow-300 rounded bg-red-900 shadow-md">
        Random pokemon!
      </a>
      <div className={styles.pokedexOuter}>
        <div className={styles.buttonWrapper}>
          <div className={styles.pokedexFakeButton1}></div>
          <div className={styles.pokedexFakeButton2}></div>
        </div>
        <div className={styles.pokedexScreen}>
          <RandomPokemon pokemon={pokemon} />
        </div>
      </div>
    </main>
  );
}
