import { get } from "http";
import { getEvolutionInfo } from "../lib/getters";

const EvolutionBox = async ({ name }: { name: string }) => {
  const evolutionsArray = await getEvolutionInfo(name);

  return (
    <div className=" flex flex-col items-center w-fit h-fit">
      {evolutionsArray?.map((obj, key) => {
        return (
          <div
            key={key}
            className="flex  items-center justify-center w-fit h-fit"
          >
            {obj.map((obj2, key2) => {
              return (
                <div
                  key={key2}
                  className="flex flex-col items-center justify-center w-fit h-fit"
                >
                    {obj2.evolutionDetails !== null && obj2.evolutionDetails.map(()) } 
                  <div className="flex flex-col items-center justify-center w-fit h-fit">
                    <img
                      src={obj2.picUrl}
                      alt={obj2.name}
                      className="object-contain h-full"
                    />
                    <p>{obj2.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default EvolutionBox;
