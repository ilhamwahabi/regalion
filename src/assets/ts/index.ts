import { bulbasaur } from "./bulbasaur";
import { tyranitar } from "./tyranitar";
import { metagross } from "./metagross";
import { magmortar } from "./magmortar";
import { genesect } from "./genesect";

import { IPokemon } from "../../types";

const getInitialRandomPokemon = (): {
  randomPokemon: IPokemon[];
  currentPokemon: string;
} => {
  const initialPokemons = [
    bulbasaur,
    tyranitar,
    metagross,
    magmortar,
    genesect
  ];

  const randomPokemon = initialPokemons[Math.floor(Math.random() * 5)];

  return { randomPokemon, currentPokemon: randomPokemon[0].number };
};

export {
  bulbasaur,
  tyranitar,
  metagross,
  magmortar,
  genesect,
  getInitialRandomPokemon
};
