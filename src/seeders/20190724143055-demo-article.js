"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          title: "Anda app",
          categoryId: 1,
          body: "<p>Hello world</p>",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Museveni",
          categoryId: 2,
          body: "<p>Hello world</p>",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Matooke",
          categoryId: "3",
          body: "<p>Hello world</p>",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Rice",
          categoryId: 1,
          body: "<p>Hello world</p>",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "YZ",
          categoryId: 4,
          body: "<p>Hello world</p>",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  }
};
