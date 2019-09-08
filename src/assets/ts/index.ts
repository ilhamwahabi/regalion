import { bulbasaur } from "./bulbasaur";
import { tyranitar } from "./tyranitar";
import { metagross } from "./metagross";

import { IPokemon } from "../../types";

const getInitialRandomPokemon = (): {
  randomPokemon: IPokemon[];
  currentPokemon: string;
} => {
  const initialPokemons = [bulbasaur, tyranitar, metagross];

  const randomPokemon =
    initialPokemons[Math.floor(Math.random() * initialPokemons.length)];

  return { randomPokemon, currentPokemon: randomPokemon[0].number };
};

export { bulbasaur, tyranitar, metagross, getInitialRandomPokemon };
