import "dotenv/config";
import Helper from "../helpers/bcryptHash";

const hashedPassword = process.env.ADMIN_PASSWORD;
const hash = Helper.hashPassword(hashedPassword);

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstname: "admin",
          lastname: "admin",
          email: "admin@gmail.com",
          password: hash,
          role: "admin",
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
