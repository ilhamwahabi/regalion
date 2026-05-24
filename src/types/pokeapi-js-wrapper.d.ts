declare module "pokeapi-js-wrapper" {
  export interface PokedexConfig {
    protocol?: string;
    hostName?: string;
    versionPath?: string;
    cache?: boolean;
    timeout?: number;
    cacheImages?: boolean;
    swLocation?: string;
  }

  export class Pokedex {
    static init(config?: PokedexConfig): Promise<Pokedex>;

    getPokemonByName(
      nameOrId: string | number | Array<string | number>
    ): Promise<unknown>;
    getPokemonSpeciesByName(
      nameOrId: string | number | Array<string | number>
    ): Promise<unknown>;
    getEvolutionChainById(
      id: number | Array<number>
    ): Promise<unknown>;
    resource(path: string | string[]): Promise<unknown>;
  }
}
