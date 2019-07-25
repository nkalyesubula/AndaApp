import database from '../src/models';

class UserService {
  static async getAllUser() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async findOneUser(email) {
    try {
      return await database.User.findOne({
        where: { id: String(email)}
      });
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const UserToUpdate = await database.User.findOne({
        where: { id: Number(id) }
      });

      if (UserToUpdate) {
        await database.User.update(updateUser, { where: { id: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getOneUser(id) {
    try {
      const theUser = await database.User.findOne({
        where: { id: Number(id) }
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const UserToDelete = await database.User.findOne({ where: { id: Number(id) } });

      if (UserToDelete) {
        const deletedUser = await database.User.destroy({
          where: { id: Number(id) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async getUserByCol(col) {
    try {
      const UserToDelete = await database.$User.findAll({ where: { id: String(col) } });

      if (UserToDelete) {
        const deletedUser = await database.User.destroy({
          where: { id: Number(id) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;