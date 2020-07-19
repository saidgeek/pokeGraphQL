import { NowRequest, NowResponse } from "@vercel/node";

import { ApolloServer } from "apollo-server-micro";
import { types as typeDefs } from "../src/graphQL/types";
import { PokemonResolver } from "../src/graphQL/resolvers/pokemon";

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers: Object.assign(PokemonResolver),
  introspection: true,
  playground: true,
});

module.exports = (req: NowRequest, res: NowResponse): any =>
  server.createHandler({ path: "/api/graphql" })(req, res);
