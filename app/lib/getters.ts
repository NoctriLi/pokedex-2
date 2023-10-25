// import dummy from "../dummy.json";
// import dummy2 from "../dummy2.json";

import raltsDex from "../bulbasaurSpecies.json";
import raltsMain from "../bulbasaurMain.json";
import raltsEvo from "../bulbasaurEvo.json";
import bulbasaurEncounter from "../bulbasaurEncounter.json";
import pokemon from "../pokemon.json";
import { Pokemon, Move, EvolutionChains, EvolutionChain, EvolutionDetails, FilteredDetails } from "./types";


export const getAllPokemon = async () => {
    // const res = await fetch("https://pokeapi.co/api/v2/pokemon/37");
  // const pokemon = await res.json();
  const poke = await pokemon;

  return poke;
}

export const getPokemon = async (name: string) => {
  // const res = await fetch("https://pokeapi.co/api/v2/pokemon/37");
  // if(!res.ok) {
  //   return;
  // }
  // const pokemon = await res.json();

  const pokemon = await raltsMain;

  return pokemon;
};

export const getSpeciesInfo = async (name: string) => {
  const info = await raltsDex;
  const evos = getEvolutionInfo(name);
  return info;
};

export const getEvolutionInfo = async (name: string) => {
  const info: EvolutionChains = await raltsEvo;
  const evolutionChains = getEvolutionChains(info.chain);
  console.log(evolutionChains);
  return evolutionChains;
};

export const getEncounterInfo = async (num: number) => {

  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/encounters`);
  // const encounterInfo = await res.json();
  const encounterInfo = await bulbasaurEncounter;
  return encounterInfo;
}
export const getUrlNumber = (url: string) => {
  const urlArray = url.split("/");
  const urlNumber = urlArray[urlArray.length - 2];
  return urlNumber;
};

export const getPokePicFromNumber = (number: string) => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
  return url;
};






///in-house helpers 
const getEvolutionChains = (evolutionChain: EvolutionChain) => {


  const array: ({
    name: string; number: string; picUrl // import dummy2 from "../dummy2.json";
      : string; evolves_to: any[] | undefined; evolutionDetails: any[];
  }[] | { name: string; number: string; picUrl: string; evolutionDetails: null; }[])[] = []
  



  const getEvo = (evolutionChain:EvolutionChain ) => {
    if (!evolutionChain.evolves_to[0]) {
      console.log(array);
      return;
    }
    console.log(evolutionChain);
    
    const arr = evolutionChain.evolves_to.map((chain, i) => {
    const number = getUrlNumber(chain.species.url);
    const picUrl = getPokePicFromNumber(number);
       return {
        name: evolutionChain.evolves_to[i].species.name,
        number: number,
        picUrl: picUrl,
        evolves_to: getEvo(chain),
        evolutionDetails: filterEvolutionDetails(
          evolutionChain.evolves_to[i].evolution_details[0]
        ),
      }
    }
    );
    array.unshift(arr)
    return array;
  };
  const evolutionChainArray = getEvo(evolutionChain);
  array.unshift([{
      name: evolutionChain.species.name,
      number: getUrlNumber(evolutionChain.species.url),
      picUrl: getPokePicFromNumber(getUrlNumber(evolutionChain.species.url)),
      evolutionDetails: null,
    }])
  console.log(evolutionChainArray)
  return evolutionChainArray;
};


const filterEvolutionDetails = (evolutionDetails: EvolutionDetails) => {
  const filteredDetails: FilteredDetails = {
    gender: evolutionDetails.gender === 2 ? "Male" : evolutionDetails.gender === 1? "Female" : null,
    held_item: evolutionDetails.held_item?.name || null,
    item: evolutionDetails.item?.name || null,
    known_move:
      (evolutionDetails.known_move?.name &&
        "Know move: " + evolutionDetails.known_move) ||
      null,
    known_move_type:
      (evolutionDetails.known_move_type?.name &&
        "Know move type: " + evolutionDetails.known_move_type.name) ||
      null,
    location:
      (evolutionDetails.location?.name &&
        "Location: " + evolutionDetails.location.name) ||
      null,
    min_affection:
      (evolutionDetails.min_affection &&
        "Min affection: " + evolutionDetails.min_affection) ||
      null,
    min_beauty:
      (evolutionDetails.min_beauty &&
        "Min beauty: " + evolutionDetails.min_beauty) ||
      null,
    min_happiness:
      (evolutionDetails.min_happiness &&
        "Min happiness: " + evolutionDetails.min_happiness) ||
      null,
    min_level:
      (evolutionDetails.min_level &&
        "Min level: " + evolutionDetails.min_level) ||
      null,
    needs_overworld_rain:
      (evolutionDetails.needs_overworld_rain && "Needs overworld rain ") ||
      null,
    party_species:
      (evolutionDetails.party_species?.name &&
        "Party species: " + evolutionDetails.party_species.name) ||
      null,
    party_type:
      (evolutionDetails.party_type?.name &&
        "Party type: " + evolutionDetails.party_type.name) ||
      null,
    relative_physical_stats:
      (evolutionDetails.relative_physical_stats &&
        "Relative physical stats: " +
          evolutionDetails.relative_physical_stats) ||
      null,
    time_of_day:
      (evolutionDetails.time_of_day.length > 0 &&
        "Time of day: " + evolutionDetails.time_of_day) ||
      null,
    trade: (evolutionDetails.trade_species?.name && "Trade ") || null,
    turn_upside_down:
      (evolutionDetails.turn_upside_down && "Turn upside down ") || null,
  };
  const filteredKeys = Object.keys(filteredDetails) as (keyof typeof filteredDetails)[];
  const validKeys = filteredKeys.filter((key) => filteredDetails[key] !== null);
  const keyValues = validKeys.map((key) => filteredDetails[key]);
  const trigger =
    (evolutionDetails.trigger?.name &&
      evolutionDetails.trigger.name.replace("-", " ")) ||
    null;

  return [keyValues, trigger];
};
