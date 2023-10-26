import { getEvolutionInfo } from "../lib/getters";
import { Key } from "react";
import EvolutionItem from "./EvolutionItem";

const EvolutionBox = async ({
  evoChainNum,
  className,
}: {
  evoChainNum: string | number;
  className: string;
}) => {
  const evolutionsArray = await getEvolutionInfo(evoChainNum);

  return (
    <div className={className}>
      <h1 className="py-5 font-bold text-3xl sm:text-5xl">Evolutions:</h1>
      {!evolutionsArray && (<h1>None</h1>)}
      {evolutionsArray?.map((obj, key) => {
        return (
          <div
            key={key}
            className="flex items-start justify-center w-fit h-fit overflow-hidden"
          >
            <EvolutionItem evolution={obj} num={key}/>

          </div>
        );
      })}
    </div>
  );
};

export default EvolutionBox;



