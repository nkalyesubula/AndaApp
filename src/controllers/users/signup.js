import userModel from "../../models/index";
import dotenv from "dotenv";
import Helper from "../../helpers/bcryptHash";
import validation from "../../helpers/validations/usersValidations";

dotenv.config();

const User = userModel.User;
class SignupClass {
  static signup(req, res) {
    // Validation
    const { error } = validation.signupValidation(req.body);
    if (error) {
      const err = [];
      error.details.map(e => err.push({ message: e.message }));
      return res.status(403).json({ status: 403, err });
    }

    const hashedPassword = Helper.hashPassword(req.body.password);
    const userSchema = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email.toLowerCase(),
      password: hashedPassword
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
            const { id, firstname, lastname, email } = user;
            const payload = { id, firstname, lastname, email };
            const token = Helper.generateToken(payload, process.env.SECRET_KEY);
            return res.status(201).json({
              status: 201,
              data: {
                token,
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
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
