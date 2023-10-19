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
  console.log(moves);
  return moves;
};



export const filterSVMoves = (move : Move) => {
    const svMoveData = move.version_group_details.filter(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield"
    );
    console.log(svMoveData[0]);
    return svMoveData[0];
  };
