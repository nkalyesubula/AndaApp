import userModel from "../../models/index";
import dotenv from "dotenv";
import Helper from "../../helpers/bcryptHash";

dotenv.config();

const User = userModel.User;
class SignupClass {
  static signup(req, res) {
    const hashedPassword = Helper.hashPassword(req.body.password);
    const userSchema = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email.toLowerCase(),
      password: hashedPassword,
      role: 'ordinary'
    };

    User.findOne({ where: { email: userSchema.email } }).then((email) =>{
      if (email) {
        return res
          .status(409)
          .json({
            status: 409,
            message: "That email has been already taken, try another one"
          });
      } else {
        User.create(userSchema)
          .then(user => {
            const { email } = user;
            const payload = { email };
            const token = Helper.generateToken(payload, process.env.SECRET_KEY);
            return res.status(201).json({
              status: 201,
              data: {
                token,
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
              }
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: 500,
              message: " server error"
            });
          });
      }
    });
  }
}

export default SignupClass;
