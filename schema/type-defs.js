const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
  }


  enum Nationality{
    USA
    CANADA
    UK
    AUSTRALIA
    KOREA
    MEXICO
    VIETNAM
    }
`;


module.exports={typeDefs};
