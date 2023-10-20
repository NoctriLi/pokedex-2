import MoveTable from "../../components/MoveTable";
import { getPokemon, getSpeciesInfo, getEvolutionInfo } from "../../lib/getters";
import { filterNoiseFromDexEntry } from "@/app/lib/filters";
import { Main } from "@/app/components/ThemedElements";
import { decimetersToFeet, hectogramsToLbs } from "@/app/lib/math";
import EvolutionBox from "@/app/components/EvolutionBox";
export default async function () {
  const pokemon = await getPokemon();
  const dexInfo = await getSpeciesInfo(pokemon.name);
  const genus = dexInfo.genera.find((genus) => genus.language.name === "en")?.genus || "Unknown Pokemon";
  const dexEntry = filterNoiseFromDexEntry(dexInfo.flavor_text_entries.find((entry) => entry.language.name === "en")?.flavor_text || "Unknown Pokemon");
  const weight = hectogramsToLbs(pokemon.weight);
  const height = decimetersToFeet(pokemon.height);
  const types = pokemon.types.map((type) => type.type.name);
  if (types.length === 1) {
    types.push(types[0]);
  }
  console.log(types);
  const styles = {
    main: `flex justify-between min-h-screen h-fit px-20  bg-${types[0]}-l`,
    box1: `flex flex-col items-center justify-start py-20 w-1/2 min-h-screen  h-fit  bg-${types[0]} text-xl`,
    box2: `flex flex-col   w-1/2 min-h-screen h-fit  sm:mt-20  bg-${types[1]} text-white text-xl`,
    pokeName: ` text-5xl  capitalize w-full p-5    text-${types[0]}-l  bg-${types[0]}-d `,
    InfoBox: `flex flex-col items-center w-80 h-80 p-5 border-t border-black/50    text-${types[0]}-d bg-${types[0]}-l`,
    type1Box: `flex flex-col items-center justify-center w-1/2 h-1/2 p-5 text-2xl bg-${types[0]}-d text-${types[0]}-l capitalize `,
    type2Box: `flex flex-col items-center justify-center w-1/2 h-1/2 p-5 text-2xl bg-${types[1]}-d text-${types[1]}-l capitalize `,
    descriptionBox: `flex flex-col items-center justify-center w-full h-80 p-5 text-2xl bg-${types[1]}-d text-${types[1]}-l `,
  };

  const keys = Object.keys(pokemon);

  return (
    <main className={styles.main}>
      <div className={styles.box1}>
        <h1 className={styles.pokeName}>{pokemon.name + " #" + pokemon.id}</h1>
        <div className="flex flex-col items-center justify-center w-80 h-80">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="object-contain h-full "
          />
        </div>
        <div className={styles.InfoBox}>
          <p className="text-xl py-5">The {genus}</p>
          <div className="flex w-full">
            <p className={styles.type1Box}>{types[0]}</p>
            {types[1] !== types[0] ? <p className={styles.type2Box}>{types[1]}</p> : null}
          </div>
          <p className="text-xl">Weight: {weight}</p>
          <p className="text-xl">Height: {height}</p>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.descriptionBox}>

          <p>{dexEntry}</p>
        </div>
        <EvolutionBox name={pokemon.name} />
      </div>
      {/* <div className="flex flex-col items-center justify-center w-1/2 h-auto bg-gray-800 text-white text-xl">

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
        </div> */}
    </main>
  );
}

// <div className="flex justify-evenly items-center w-full h-1/4 text-white">
//   <div className="flex flex-col justify-center w-fit h-fit rounded bg-black p-5">
//     <h1 className=" font-bold text-5xl text-center">Kadabra #37</h1>
//   </div>
// </div>

// <div className="flex flex-col items-center justify-center w-full h-1/3 text-white">
//   <div className="flex flex-col justify-center w-1/4 container h-full rounded bg-pred border border-black p-5">
//     <img
//       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
//       alt="kadabra"
//       className="object-contain h-full bg-pbrown border border-black"
//     />
//   </div>
// </div>
