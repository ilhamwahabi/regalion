import { bulbasaur } from "./bulbasaur";
import { tyranitar } from "./tyranitar";
import { metagross } from "./metagross";
import { magmortar } from "./magmortar";
import { genesect } from "./genesect";

import { IPokemon } from "../../types";

const getRandomPokemon = (): IPokemon[] => {
  const initialPokemons = [
    bulbasaur,
    tyranitar,
    metagross,
    magmortar,
    genesect
  ];

  return initialPokemons[Math.floor(Math.random() * 5)];
};

export {
  bulbasaur,
  tyranitar,
  metagross,
  magmortar,
  genesect,
  getRandomPokemon
};
