import { gql } from "apollo-server";

export const types = gql`
  type Pokemon {
    id: ID!
    image: String
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
    pokemonById(id: ID!): Pokemon
  }
`;
