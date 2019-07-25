import Joi from "joi";

const restrictions = () => {
  const validationOptions = {
    abortEarly: false,
    allowUnknown: true
  };
  return validationOptions;
};

class UserValidations {
  static signupValidation(userSchema) {
    const Schema = Joi.object().keys({
      firstname: Joi.string()
        .regex(/^[a-zA-Z]+$/)
        .min(3)
        .max(50)
        .required()
        .trim(),
      lastname: Joi.string()
        .regex(/^[a-zA-Z]+$/)
        .min(3)
        .max(50)
        .required()
        .trim(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .trim(),
      password: Joi.string().required(),
      retypepassword: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .options({
          language: { any: { allowOnly: "Passwords do not match" } }
        }),
      role: Joi.string().valid("admin", "moderator", "ordinary")
    });
    const scanErrors = restrictions();
    return Joi.validate(userSchema, Schema, scanErrors);
  }
  static signinValidation(userSchema) {
    const loggerSchema = {
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .trim(),
      password: Joi.string().required()
    };
    return Joi.validate(userSchema, loggerSchema, restrictions());
  }
}

export default UserValidations;
