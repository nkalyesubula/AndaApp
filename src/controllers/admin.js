import Service from '../services/service';
import Util from '../middleware/util';
import helper from '../middleware/helper';
const util = new Util();

class AdminController {
  constructor() {
  }
  static async login(req, res) {
    console.log("welcome to login routes mr admin")
    try {
      console.log(req.body);
      const theUser = await Service.findOne('User','email',req.body.email);

      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${req.body.email}`);
      } else {
        const validPassword = await helper.comparePassword( theUser.password,req.body.password);
        if (!validPassword) {
          util.setError(401, 'Password is not correct.');
        } else {
          const token = await helper.generateToken(theUser.email,theUser.role);
          util.setSuccess(200, `welcome  back ${theUser.fisrstName}`, token);
        }
      }
      return util.send(res);
    } catch (error) {
      console.log(error)
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async reset(req, res) {
    try {
      const theUser = await Service.findOne('User','email',req.body.email);

      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${req.body.email}`);
      } else {
        const reset = await helper.hashPassword( theUser.fisrstName);
        theUser.password=reset
        const reseted = await Service.update(userTable,'id',theUser);
        util.setSuccess(200, `Your password has been resetted to your  firstname`); 
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async getAllUsers(req, res) {
    try {
      const allUsers = await Service.getAll('User');
      if (allUsers.length > 0) {
        util.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No User found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async createModulator(req, res) {
    
    try {
      req.body.role="Modulator"
     const newUser = req.body;
      const createdUser = await Service.create('User',newUser);
      util.setSuccess(201, 'Modulator Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async createAdmin(req, res) {
    req.body.role="Admin"
     const newUser = req.body;
     try {
       const createdUser = await Service.create('User',newUser);
       util.setSuccess(201, 'Admin Added!', createdUser);
       return util.send(res);
     } catch (error) {
       util.setError(400, error.message);
       return util.send(res);
     }
   }

  static async updateUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateUser = await Service.update('User','id',id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find User with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theUser = await Service.findOneById('User','id',id);

      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found User', theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const UserToDelete = await Service.deleteOne('User','id',id);

      if (UserToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async deletePost(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const PostToDelete = await Service.deleteOne('Articles','id',id);

      if (PostToDelete) {
        util.setSuccess(200, `Post with the id ${id} deleted successfully`);
      } else {
        util.setError(404, `Post with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default AdminController;