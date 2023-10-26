"use client";
import { getAllPokemon, getUrlNumber } from "../lib/getters";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import PokemonListItem from "./PokemonListItem";
import { Suspense } from "react";

const PokemonList = () => {
  const pokemon = getAllPokemon();
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const link = (num: number | string) => "/" + num;

  return (
    <div className="flex justify-center p-2 bg-fire-l h-full w-40 ">
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="bg-fire w-36">
              <NavigationMenuTrigger className="w-full">
                List
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 max-h-screen md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-electric-l/90 overflow-scroll">
                  {pokemon.results.map((obj, key) => {
                    const urlNum = getUrlNumber(obj.url);
                    return (
                      <ListItem
                        title={urlNum + ". " + capitalize(obj.name)}
                        href={link(urlNum)}
                        key={key}
                      />
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Suspense>
    </div>
  );
};
export default PokemonList;

const ListItem = ({ href, title }: { href: string; title: string }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-fire-l p-6 no-underline outline-none focus:shadow-md"
        href={href}
      >
        <div className="mb-2 text-lg font-medium">{title}</div>
      </a>
    </NavigationMenuLink>
  </li>
);
