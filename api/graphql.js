const {ApolloServer} = require('apollo-server-micro');
const typeDefs = require('../graphQL/types');
const messageResolver = require('../graphQL/resolvers/message');

const server = new ApolloServer({
  typeDefs,
  resolvers: Object.assign(
    messageResolver,
  ),
  introspection: true,
	playground: true,
});

module.exports = (req, res) => server.createHandler({ path: '/api/graphql'})(req, res);
