"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "technology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "politics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "health",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "entertainment",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
