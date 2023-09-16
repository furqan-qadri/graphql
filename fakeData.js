const UserList = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    age: 30,
    nationality: "USA",
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        age: 25,
        nationality: "CANADA",
      },
      {
        id: 3,
        name: "David Johnson",
        username: "davidj",
        age: 35,
        nationality: "UK",
      }

    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    age: 25,
    nationality: "CANADA",
  },
  {
    id: 3,
    name: "David Johnson",
    username: "davidj",
    age: 35,
    nationality: "UK",
  },
  {
    id: 4,
    name: "Emily Brown",
    username: "emilyb",
    age: 28,
    nationality: "AUSTRALIA",
  },
  {
    id: 5,
    name: "Michael Lee",
    username: "michaellee",
    age: 32,
    nationality: "KOREA",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    username: "sophiam",
    age: 29,
    nationality: "MEXICO",
    friends: [
      {
        id: 3,
        name: "David Johnson",
        username: "davidj",
        age: 35,
        nationality: "UK",
      }
    ]
  },
  {
    id: 7,
    name: "Daniel Nguyen",
    username: "danieln",
    age: 31,
    nationality: "VIETNAM",
  },
];

// enum nationality{
//    USA
//    UK
//    MEXICO
//    KOREA
//    CANADA
//    VIETNAM
//    AUSTRALIA
// }

module.exports={UserList};
