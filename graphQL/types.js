const { gql } = require('apollo-server');

module.exports = gql`

  type Message {
    text: String
  }

  type Query {
    message: Message
  }

`;