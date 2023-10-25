
import { filterSVMoves, filterMovesCurrent } from "../lib/filters";
import { sortMovesByLevel } from "../lib/sorters";
import { Move, Pokemon } from "../lib/types";

const MoveTable = async ({ moves, type }: {moves: Move[], type: string}) => {
  
  const filteredMoves = sortMovesByLevel(filterMovesCurrent(moves));

  const styles = {
    main: `w-full h-fit p-10 text-center text-lg capitalize text-${type}-d bg-${type}-l shadow shadow-black/30 rounded`,
    row: `p-2  border-y-2 border-${type}-d `,
    tableHeading: `text-xl font-semibold p-1 sm:p-5`,
    caption: `text-3xl sm:text-5xl font-bold bg-${type}-d text-${type}-l`,
  };



  return (
    <>
      <table  className={styles.main}>
        <caption className={styles.caption}>Moves:</caption>
        <thead>
          <tr >
            <th className={styles.tableHeading}>Move</th>
            <th className={styles.tableHeading}>Method</th>
            <th className={styles.tableHeading}>Level</th>
          </tr>
        </thead>
        <tbody>

        {filteredMoves.map((obj, key) => {
          const latestMoves = filterSVMoves(obj);
          return (
            <tr className={styles.row} key={key}>
              <td className="p-2">{obj.move.name.replace("-", " ")}</td>
              <td>{latestMoves.move_learn_method.name.replace("-", " ")}</td>
              <td>
                {latestMoves.move_learn_method.name === "level-up" &&
                  latestMoves.level_learned_at}
              </td>
            </tr>
          );
        })}
</tbody>

      </table>
    </>
  );
};
export default MoveTable;
