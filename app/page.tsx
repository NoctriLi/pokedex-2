import Image from "next/image";
import dummy from "./dummy.json";
import MoveTable from "./components/MoveTable";
import { getPokemon } from "./lib/getters"
import { filterMovesCurrent } from "./lib/filters";
import { sortMovesByLevel } from "./lib/sorters";

export default async function Home() {
  const pokemon = await getPokemon();
  

  const keys = Object.keys(pokemon);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 bg-fire-l">
      <div className="flex flex-col items-center justify-start w-full h-screen bg-pgold ">
        <div className="flex justify-evenly items-center w-full h-1/4 text-white">
          <div className="flex flex-col justify-center w-fit h-fit rounded bg-black p-5">
            <h1 className=" font-bold text-5xl text-center">Kadabra #37</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-1/3 text-white">
          <div className="flex flex-col justify-center w-1/4 container h-full rounded bg-pred border border-black p-5">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
              alt="kadabra"
              className="object-contain h-full bg-pbrown border border-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 h-auto bg-gray-800 text-white text-xl">

            <MoveTable pokemon={pokemon} />

          <div className="flex w-full">
            <div className="flex flex-col items-center justify-center w-1/2 h-auto bg-black text-white text-xl">
              {keys.map((key, i) => (
                <p key={i}>{key}</p>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center w-1/2 h-auto bg-black text-white text-xl">
              {pokemon.moves[3].version_group_details.map((ability, i) => (
                <p key={i}>{ability.version_group.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}






