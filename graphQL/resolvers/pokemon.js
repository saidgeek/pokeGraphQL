const pokemonData = require('../../data/PokemonDataset.json');

const parseData = (data) => ({
  id: Number(data.Num),
  image: `https://dev-poke-graphql.saidgeek.land/images/${data.Name.toLocaleLowerCase()}.png`,
  name: data.Name,
  types: [data.Type1, data.Type2],
  hp: Number(data.HP),
  attack: Number(data.Attack),
  Defense: Number(data.Defense),
  SpAtk: Number(data.SpAtk),
  SpDef: Number(data.SpDef),
  Speed: Number(data.Speed),
  Generation: Number(data.Generation),
  Legendary: data.Legendary === 'True' ? true : false,
});

module.exports = {
  Query: {
    pokemon: () => pokemonData.map((pokemon) => parseData(pokemon)),
    pokemonById: (id) => {
      const pokemon = pokemonData.find((pokemon) => pokemon.id == id);
      return parseData(pokemon);
    }
  }
};