import MoveTable from "../../components/MoveTable";
import {
  getPokemon,
  getSpeciesInfo,
  getEvolutionInfo,
} from "../../lib/getters";
import { filterNoiseFromDexEntry } from "@/app/lib/filters";
import { decimetersToFeet, hectogramsToLbs } from "@/app/lib/math";
import EvolutionBox from "@/app/components/EvolutionBox";
import AbilitiesBox from "@/app/components/AbilitiesBox";
import HeldItemsBox from "@/app/components/HeldItemsBox";
import StatsBox from "@/app/components/StatsBox";
export default async function () {
  const pokemon = await getPokemon();
  const dexInfo = await getSpeciesInfo(pokemon.name);
  const genus =
    dexInfo.genera.find((genus) => genus.language.name === "en")?.genus ||
    "Unknown Pokemon";
  const dexEntry = filterNoiseFromDexEntry(
    dexInfo.flavor_text_entries.find((entry) => entry.language.name === "en")
      ?.flavor_text || "Unknown Pokemon"
  );
  const weight = hectogramsToLbs(pokemon.weight);
  const height = decimetersToFeet(pokemon.height);
  const types = pokemon.types.map((type) => type.type.name);
  if (types.length === 1) {
    types.push(types[0]);
  }

  console.log(types);

  const styles = {
    main: `flex flex-col gap-10 justify-between min-h-screen h-fit sm:px-10 lg:px-20  bg-${types[0]}-l`,
    wrapper: `flex flex-col md:flex-row w-full h-fit`,
    box1: `flex flex-col items-center justify-start  w-full md:w-1/2 min-h-screen h-fit  pb-10 md:py-20 bg-${types[0]} text-xl shadow-md shadow-black/30`,
    box2: `flex flex-col items-center gap-10 w-full md:w-1/2 min-h-screen h-fit pb-10  md:mt-20  bg-${types[1]} text-xl shadow-md shadow-black/30`,

    imageBox: `flex flex-col items-center justify-center sm:w-80 h-80`,
    image: `object-contain h-full `,
    pokeName: ` text-5xl  capitalize w-full p-5    text-${types[0]}-l  bg-${types[0]}-d `,
    infoBox: `flex flex-col items-center w-full sm:w-80 h-80 p-5 border-t border-black/50    text-${types[0]}-d bg-${types[0]}-l`,
    infoDesc: `text-xl py-5`,
    typeWrapper: `flex w-full`,
    infoBoxText: `text-xl`,
    type1Box: `flex flex-col items-center justify-center w-1/2 h-1/2 p-5 text-2xl bg-${types[0]}-d text-${types[0]}-l capitalize `,
    type2Box: `flex flex-col items-center justify-center w-1/2 h-1/2 p-5 text-2xl bg-${types[1]}-d text-${types[1]}-l capitalize `,
    descriptionBox: `flex flex-col items-center justify-center w-full h-80 p-5 text-2xl bg-${types[1]}-d text-${types[1]}-l `,
    evoBox: `flex flex-col items-center justify-center w-fit h-fit p-5 text-base bg-${types[1]}-l text-${types[1]}-d rounded`,
    moveTableWrapper: `flex flex-col items-center justify-center w-full max-w-5xl h-auto mx-auto text-xl`,
  };

  const keys = Object.keys(pokemon);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.box1}>
          <h1 className={styles.pokeName}>
            {pokemon.name + " #" + pokemon.id}
          </h1>
          <div className={styles.imageBox}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className={styles.image}
            />
          </div>
          <div className={styles.infoBox}>
            <p className={styles.infoDesc}>The {genus}</p>
            <div className={styles.typeWrapper}>
              <p className={styles.type1Box}>{types[0]}</p>
              {types[1] !== types[0] ? (
                <p className={styles.type2Box}>{types[1]}</p>
              ) : null}
            </div>
            <p className={styles.infoBoxText}>Weight: {weight}</p>
            <p className={styles.infoBoxText}>Height: {height}</p>
          </div>
          <StatsBox stats={pokemon.stats} type={types[0]} />
        </div>
        <div className={styles.box2}>
          <div className={styles.descriptionBox}>
            <p>{dexEntry}</p>
          </div>
          <AbilitiesBox abilities={pokemon.abilities} type={types[1]} />
          <HeldItemsBox heldItems={pokemon.held_items} type={types[1]} />
          <EvolutionBox className={styles.evoBox} name={pokemon.name} />
        </div>
      </div>
      <div className={styles.moveTableWrapper}>
        <MoveTable moves={pokemon.moves} type={types[1]} />
      </div>
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
