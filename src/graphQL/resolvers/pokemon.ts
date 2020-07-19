import pokemonData from "../../../data/PokemonDataset.json";

const baseUrl: string = process.env.VERCEL_URL;

interface PokemonDataset {
  Num: string;
  Name: string;
  Type1: string;
  Type2: string;
  HP: string;
  Attack: string;
  Defense: string;
  SpAtk: string;
  SpDef: string;
  Speed: string;
  Generation: string;
  Legendary: string;
}

interface Pokemon {
  id: number;
  image: string;
  name: string;
  types: string[];
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
  generation: number;
  legendary: boolean;
}

const parseData = (data: PokemonDataset): Pokemon => ({
  id: Number(data.Num),
  image: `${baseUrl}/images/${data.Name.toLocaleLowerCase()}.png`, // TODO: Better the get images of pokemons
  name: data.Name,
  types: [data.Type1, data.Type2],
  hp: Number(data.HP),
  attack: Number(data.Attack),
  defense: Number(data.Defense),
  spAtk: Number(data.SpAtk),
  spDef: Number(data.SpDef),
  speed: Number(data.Speed),
  generation: Number(data.Generation),
  legendary: data.Legendary === "True" ? true : false,
});

export const PokemonResolver = {
  Query: {
    pokemon: (): Pokemon[] => pokemonData.map((pokemon) => parseData(pokemon)),
    pokemonById: (id: number): Pokemon => {
      const pokemon = pokemonData.find((pokemon) => Number(pokemon.Num) == id);
      return parseData(pokemon);
    },
  },
};
