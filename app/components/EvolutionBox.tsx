import { get } from "http";
import { getEvolutionInfo } from "../lib/getters";
import {
  Key,
} from "react";

const EvolutionBox = async ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  const evolutionsArray = await getEvolutionInfo(name);

  return (
    <div className={className}>
      <h1 className="font-bold text-3xl sm:text-5xl">Evolutions:</h1>
      {evolutionsArray?.map((obj, key) => {
        return (
          <div
            key={key}
            className="flex items-start justify-center w-fit h-fit overflow-hidden"
          >
            {obj.map(
              (
                obj2: {
                  evolutionDetails: any[][] | null;
                  number: number | string;
                  name: string | undefined;
                  picUrl: string | undefined;
                },
                key2: Key | null | undefined
              ) => {
                return (
                  <div
                    key={key2}
                    className="flex flex-col items-center justify-between w-fit h-full "
                  >
                    {obj2.evolutionDetails !== null && (
                      <div className="flex flex-col items-center justify-center w-fit h-fit">
                        {key > 0 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="w-10 h-10"
                          >
                            <g fill="none">
                              <path
                                fill="currentColor"
                                d="M12.75 4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v16h1.5V4h-1.5Z"
                                opacity=".5"
                              />
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m18 14l-6 6l-6-6"
                              />
                            </g>
                          </svg>
                        )}                      
                        <a
                      href={`/pokemon/${obj2.number}`} className="capitalize text-xl font-bold p-2 underline">
                        {obj2.name}
                      </a>
                        <h2 className="text-lg font-semibold">Trigger: </h2>
                        <p className="text-sm capitalize">
                          {obj2.evolutionDetails[1]}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-col items-center justify-center w-fit h-fit p-2">
                      {obj2.evolutionDetails !== null && (
                        <>
                          <h2 className="text-lg font-semibold">Conditions:</h2>
                          {obj2.evolutionDetails[0].map((item) => (
                            <p className="text-sm capitalize">{item.replace("-", " ")}</p>
                          ))}
                        </>
                      )}
                    </div>

                    <a
                      href={`/pokemon/${obj2.number}`}
                      className="flex flex-col items-center justify-center w-full  h-auto "
                    >

                      <img
                        src={obj2.picUrl}
                        alt={obj2.name}
                        className="object-contain h-full w-80"
                      />
                    </a>
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EvolutionBox;
