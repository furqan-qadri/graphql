const { UserList , MovieList} = require("../fakeData");
const _ = require ("lodash");

const resolvers = {
  Query: {
    users:() => {
      return UserList;
    },
    user: (parent,args) =>{
        const id= args.id;
        const user=_.find(UserList, {id: Number(id)});
        return user;
    },
    //all movies
    movies:() => {
        return MovieList;
    },

      movie:()=>{}
  },
};

module.exports ={resolvers}