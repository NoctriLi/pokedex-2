import { Pokemon } from "../lib/types";
import { Move } from "../lib/types";


export const filterMovesCurrent = (data: Pokemon) => {
  const moves = data.moves.filter(
    (move) =>
      move.version_group_details.filter(
        (obj: { version_group: { name: string } }) =>
          obj.version_group.name === "scarlet-violet" ||
          obj.version_group.name === "sword-shield"
      ).length > 0
  );

  return moves;
};



export const filterSVMoves = (move : Move) => {
    const svMoveData = move.version_group_details.filter(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield"
    );

    return svMoveData[0];
  };

  export const filterNoiseFromDexEntry = (data: string) => {
    const string = data;
    console.log(string)
    const cleanEntry = string.replace('\f', '\n')
    .replace('\u00ad\n', '')
    .replace('\u00ad', '')
    .replace(' -\n', ' - ')
    .replace('-\n', '-')
    .replace('\n', ' ');
    console.log(cleanEntry)
    return cleanEntry;
  };
