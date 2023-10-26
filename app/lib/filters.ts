import { Pokemon } from "./types";
import { Move } from "./types";

export const filterMovesCurrent = (moves: Move[]) => {
  if (!moves) {
    return [];
  }
  const filteredMoves = moves.filter(
    (move) =>
      move.version_group_details.filter(
        (obj: { version_group: { name: string } }) =>
          obj.version_group.name === "scarlet-violet" ||
          obj.version_group.name === "sword-shield"
      ).length > 0
  );

  return filteredMoves;
};

export const filterSVMoves = (move: Move) => {
  const svMoveData = move.version_group_details.filter(
    (obj) =>
      obj.version_group.name === "scarlet-violet" ||
      obj.version_group.name === "sword-shield"
  );

  return svMoveData[0];
};

export const filterNoiseFromDexEntry = (data: string) => {
  const string = data;

  const cleanEntry = string
    .replace("\f", "\n")
    .replace("\u00ad\n", "")
    .replace("\u00ad", "")
    .replace(" -\n", " - ")
    .replace("-\n", "-")
    .replace("\n", " ");

  return cleanEntry;
};
