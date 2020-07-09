const { gql } = require('apollo-server');

module.exports = gql`

  type Pokemon {
    id: ID!
    name: String
    types: [String]
    hp: Float
    attack: Float
    Defense: Float
    SpAtk: Float
    SpDef: Float
    Speed: Float
    Generation: Float
    Legendary: Boolean
  }

  type Query {
    pokemon: [Pokemon]
  }

`;