import Joi from "joi";

export const restrictions = () => {
  const validationOptions = {
    abortEarly: false,
    allowUnknown: true
  };
  return validationOptions;
};
 export const schema = {
    signupSchema: Joi.object().keys({
    firstname: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(50).required().trim(),
    lastname: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(50).required().trim(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required().trim(),
    password: Joi.string().required(),
    retypepassword: Joi.string().required().valid(Joi.ref("password")).options({language:{any: {allowOnly: 'Passwords do not match'}}}),
    role: Joi.string().valid("admin", "moderator", "ordinary")
  }),
  loggerSchema: Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }).required().trim(),
    password: Joi.string().required(),
  }),
  articleSchema: Joi.object().keys({
    title: Joi.string()
      .required()
      .trim(),
    categoryId: Joi.number().required(),
    body: Joi.string()
      .required()
      .trim(),
    summary: Joi.string().trim(),
    userId: Joi.number().required()
  })
 }

