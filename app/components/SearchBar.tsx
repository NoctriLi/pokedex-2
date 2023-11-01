"use client";
import Link from "next/link";
import { motion, useAnimate, stagger } from "framer-motion";
import { useState, useEffect, SetStateAction, JSX, SVGProps } from "react";

import PokemonList from "./PokemonList";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
    ]);
  }, [isOpen]);

  return scope;
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const scope = useMenuAnimation(visible);
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  return (
    <nav
      ref={scope}
      className="absolute top-0  right-0 z-10 flex items-center justify-between w-full h-20 gap-2 p-2 bg-electric-l"
    >
      <div className="flex items-center z-10 justify-between w-full h-20 gap-2 p-2 bg-electric-l">
        <Link
          href="/"
          className="text-3xl p-2 font-bold text-center text-electric-d underline"
        >
          Pokedex
        </Link>
        <button
          onClick={() => setVisible(!visible)}
          className={`flex flex-col justify-center transition ${
            visible ? "gap-0" : "gap-1"
          } w-10 h-10 p-2 bg-fire rounded shadow-md shadow-black/30`}
        >
          <svg width="23" height="18" viewBox="0 0 23 18">
            <Path
              d="M 2 2.5 L 20 2.5"
              className="top"
              fill="var(--electric-d)"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              fill="black"
              opacity="1"
              className="middle"
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              className="bottom"
              fill="black"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </div>
      <motion.div
        layout
        animate={visible ? "open" : "closed"}
        variants={{
          open: { y: 0 },
          closed: { y: -1000 },
        }}
        transition={{ duration: 0.2 }}
        className={`absolute top-20 right-0  flex flex-col  gap-2 w-full max-w-xl h-fit bg-electric-l p-2  `}
      >
        <input
          onChange={handleChange}
          name="search"
          value={search}
          type="text"
          placeholder="pokeName or #"
          className={`${"w-full"} h-10 p-2 bg-fire-l shadow-inner shadow-black/30 placeholder:text-black/30 text-center`}
        />

        <Link
          href={`/${search.replace(/[^a-zA-Z0-9-]/g, "")}`}
          onClick={() => setVisible(false)}
          className={
            visible
              ? "h-10 p-2 bg-fire text-center shadow-md shadow-black/30"
              : "h-0 overflow-hidden"
          }
        >
          Search
        </Link>

        <PokemonList />
      </motion.div>
    </nav>
  );
};

export default SearchBar;

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);
