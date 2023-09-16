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

  type Movie{
  id:ID!
  name: String!
  year: Int!
  isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id:ID!):User!
    movies: [Movie!]!
    movie(name:String!):Movie!

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
