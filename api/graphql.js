const {ApolloServer} = require('apollo-server-micro');
const typeDefs = require('../graphQL/types');
const pokemonResolver = require('../graphQL/resolvers/pokemon');

const server = new ApolloServer({
  typeDefs,
  resolvers: Object.assign(
    pokemonResolver,
  ),
  introspection: true,
	playground: true,
});

module.exports = (req, res) => server.createHandler({ path: '/api/graphql'})(req, res);
