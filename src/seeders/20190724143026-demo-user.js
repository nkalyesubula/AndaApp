"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstname: "christiandjkshdsjkhv",
          lastname: "HABINEZA ",
          email: "CHRISTIANAjbjddfAhhj@gmail.com",
          password: "ASqw12",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "minegashyaj",
          lastname: "jkdjjd",
          email: "minega@gmail.com",
          password: "12345",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: "salvidddd",
          lastname: "dddddd",
          email: "salviddd@gmail.com",
          password: "12345",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
