import { getAllPokemon } from "./lib/getters";

import RandomPokemon from "./components/RandomPokemon";

export default async function Home() {
  const pokemon = await getAllPokemon();
  const maxNum = 1017; // 1017 is the last actual pokemon, the api has extra forms as entries
  const randomNumGenerator = () => Math.floor(Math.random() * maxNum);
  let randomNum = randomNumGenerator();
  if (randomNum === 0) randomNum = 1;

  const randomPokemon = pokemon.results[randomNum - 1];

  const keys = Object.keys(pokemon);

  return (
    <main className="flex flex-col items-center justify-center gap-5 min-h-screen pt-20 px-10 bg-fire-l">
      <h1 className="w-full max-w-2xl text-center text-lg sm:text-xl text-fire-d font-bold">
        Search for a pokemon using the methods above, or click below for a
        random pokemon!
      </h1>
      <div className="flex flex-col w-60 sm:w-80 h-96 sm:h-[30rem] p-5 bg-fire-d rounded overflow-hidden">
        <div className="flex items-center gap-2 w-full h-10 p-2">
          <div className="w-6 h-6 bg-flying-l rounded-full border-2 border-white shadow-md shadow-black/30"></div>
          <div className="w-6 h-6 bg-electric rounded-full shadow-md shadow-black/30"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full  p-2 bg-slate-300 rounded">
          <RandomPokemon name={randomPokemon.name} num={randomNum} />
        </div>
      </div>
    </main>
  );
}
