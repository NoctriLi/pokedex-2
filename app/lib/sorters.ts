import { Move } from "./types";

export const sortMovesByLevel = (moves: Move[]) => {
  const levelUpMoves = moves.filter((move) => {
    const svMoves = move.version_group_details.find(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield" ||
        obj.version_group.name === "sun-moon"
    );

    return svMoves && svMoves?.move_learn_method.name === "level-up";
  });

  const machineMoves = moves.filter((move) => {
    const svMoves = move.version_group_details.find(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield" ||
        obj.version_group.name === "sun-moon"
    );
    return svMoves && svMoves?.move_learn_method.name === "machine";
  });
  const tutorMoves = moves.filter((move) => {
    const svMoves = move.version_group_details.find(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield" ||
        obj.version_group.name === "sun-moon"
    );
    return svMoves && svMoves?.move_learn_method.name === "tutor";
  });

  const sortedMoves = levelUpMoves.sort((a, b) => {
    const aDetails = a.version_group_details.find(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield" ||
        obj.version_group.name === "sun-moon"
    );
    const bDetails = b.version_group_details.find(
      (obj) =>
        obj.version_group.name === "scarlet-violet" ||
        obj.version_group.name === "sword-shield" ||
        obj.version_group.name === "sun-moon"
    );
    return (
      (aDetails?.level_learned_at || 0) - (bDetails?.level_learned_at || 0)
    );
  });
  return [...sortedMoves, ...machineMoves, ...tutorMoves];
};
