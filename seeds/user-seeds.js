const { User } = require("../models");
//passwords are password, just hashed
const userData = [
  {
    userName: "Dan",
    email: "dan@gmail.com",
    password: "$2b$10$C08HB3ziezpMoFxl/bmhlOuE7HU0NVvzngaN57XI3S9HJFPQLQKai",
  },
  {
    userName: "Daniel",
    email: "daniel@gmail.com",
    password: "$2b$10$C08HB3ziezpMoFxl/bmhlOuE7HU0NVvzngaN57XI3S9HJFPQLQKai",
  },
  {
    userName: "Lillith",
    email: "lillith@gmail.com",
    password: "$2b$10$C08HB3ziezpMoFxl/bmhlOuE7HU0NVvzngaN57XI3S9HJFPQLQKai",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
