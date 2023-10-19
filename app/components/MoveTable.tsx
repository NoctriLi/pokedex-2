import React from "react";
import { filterSVMoves, filterMovesCurrent } from "../lib/filters";
import { sortMovesByLevel } from "../lib/sorters";
import { Move, Pokemon } from "../lib/types";

const MoveTable = ({ pokemon }: { pokemon: Pokemon }) => {
  const moves = sortMovesByLevel(filterMovesCurrent(pokemon));
  console.log(moves)
  const latestMoves = filterSVMoves(moves);
  return (
    <>
      {moves.map((obj, key) => {

        (
        <div
          key={key}
          className="flex justify-evenly w-full h-fit border-b border-white/50"
        >
          <p>{obj.move.name}</p>
          <p>{latestMoves.move_learn_method.name}</p>
          <p>
            {latestMoves.move_learn_method.name === "level-up" &&
              latestMoves.level_learned_at}
          </p>
        </div>
      )})}
    </>
  );
};
export default MoveTable;
