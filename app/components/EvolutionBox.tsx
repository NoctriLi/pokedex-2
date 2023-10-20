import { get } from "http";
import { getEvolutionInfo } from "../lib/getters";

const EvolutionBox = async ({ name, className }: { name: string, className: string }) => {
  const evolutionsArray = await getEvolutionInfo(name);

  return (
    <div className={className}>
      {evolutionsArray?.map((obj, key) => {
        return (
          <div
            key={key}
            className="flex  items-center justify-center w-fit h-fit border border-black"
          >
            {obj.map((obj2, key2) => {
              return (
                <div
                  key={key2}
                  className="flex flex-col items-center justify-center w-fit h-fit p-5"
                >
                  {obj2.evolutionDetails !== null &&<div className="flex flex-col items-center justify-center w-fit h-fit">
                    <p className="">Trigger: </p>
                    <p className="text-sm capitalize">
                      
                        {obj2.evolutionDetails[1]}
                    </p>
                  </div>}
                  <div className="flex flex-col items-center justify-center w-fit h-fit p-2">
                    {obj2.evolutionDetails !== null && (
                      <>
                        <p>Conditions:</p>
                        {obj2.evolutionDetails[0].map((item) => (
                          <p className="text-sm">{item}</p>
                        ))}
                      </>
                    )}
                  </div>
                  <a href={`/pokemon/${obj2.number}`} className="flex flex-col items-center justify-center w-fit h-fit">
                      <p className="capitalize text-xl">{obj2.name}</p>
                    <img
                      src={obj2.picUrl}
                      alt={obj2.name}
                      className="object-contain h-full"
                    />
                  </a>
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
