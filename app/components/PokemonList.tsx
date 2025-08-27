"use client";
import { getAllPokemon, getUrlNumber } from "../lib/getters";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PokemonList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pokemon = getAllPokemon();
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const link = (num: number | string) => "/" + num;

  const PokemonList = useMemo(
    () =>
      pokemon.results.map((obj, key) => {
        const urlNum = parseInt(getUrlNumber(obj.url));
        if (urlNum > 1017) return;
        return (
          <ListItem
            title={urlNum + ". " + capitalize(obj.name)}
            href={link(urlNum)}
            key={key}
          />
        );
      }),
    [pokemon.results]
  );

  return (
    <div className="flex flex-col justify-center gap-3 p-2  h-fit w-full ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-evenly w-20 h-fit p-2 bg-fire-l rounded text-center cursor-pointer"
      >
        List{" "}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className="w-5 h-5"
          animate={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path
            suppressHydrationWarning
            fill="currentColor"
            d="M2.22 7.53a.75.75 0 0 0 1.06 0L6 4.81l2.72 2.72a.75.75 0 0 0 1.06-1.06L6.53 3.22a.75.75 0 0 0-1.06 0L2.22 6.47a.75.75 0 0 0 0 1.06Z"
          />
        </motion.svg>
      </div>
      <motion.ol

        transition={{ duration: 0.2 }}
        type="1"
        className="flex flex-col gap-3  h-96 max-h-96 md:w-[400px] lg:w-[500px] bg-electric-l/90 overflow-y-scroll"
        animate={isOpen ? "open" : "closed"}
        variants={{"open":{height:"24rem"}, "closed":{height: "0px"}}}
      >
        {PokemonList}
      </motion.ol>
    </div>
  );
};
export default PokemonList;

const ListItem = ({ href, title }: { href: string; title: string }) => (
  <li className="w-full h-fit py-1">
    <Link
      className="flex items-center justify-center h-full w-full select-none flex-col rounded-md bg-fire-l p-2 no-underline outline-none focus:shadow-md"
      href={href}
    >
      <div className="mb-2 text-lg font-medium">{title}</div>
    </Link>
  </li>
);
