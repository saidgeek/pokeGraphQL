const pokemonData = require('../../data/PokemonDataset.json');

module.exports = {
  Query: {
    pokemon: () => {
      return pokemonData.map((pokemon) => {
        return {
          id: Number(pokemon.Num),
          name: pokemon.Name,
          types: [pokemon.Type1, pokemon.Type2],
          hp: Number(pokemon.HP),
          attack: Number(pokemon.Attack),
          Defense: Number(pokemon.Defense),
          SpAtk: Number(pokemon.SpAtk),
          SpDef: Number(pokemon.SpDef),
          Speed: Number(pokemon.Speed),
          Generation: Number(pokemon.Generation),
          Legendary: pokemon.Legendary === 'True' ? true : false,
        };
      });
    },
  }
};