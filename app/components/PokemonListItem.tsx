"use client";

import { Suspense } from "react";

const PokemonListItem = ({
  name,
  link,
  num,
}: {
  name: string;
  link: string;
  num: string | number;
}) => {
  return (
    <div className="w-full h-10">
      <a href={link} className="w-full h-full">
        {num + ". " + name}
      </a>
    </div>
  );
};
export default PokemonListItem;
