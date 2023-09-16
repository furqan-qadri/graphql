const { UserList } = require("../fakeData");
// const _ = require("lodash");

const resolvers = {
  Query: {
    users:() => {
      return UserList;
    },
  },
};

module.exports ={resolvers}