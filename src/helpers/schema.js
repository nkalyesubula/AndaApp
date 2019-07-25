const Joi = require('joi');



// accepts name only as letters and converts to uppercase
const name = Joi.string().regex(/^[A-Z]+$/).uppercase();

const email= Joi.string().email({minDomainAtoms : 2});
const  option = Joi.bool().valid([1,0]).required();
const  role = Joi.bool().valid(['normal','modelator']).required();
const amount = Joi.number().positive().greater(1).precision(2);
const userID = Joi.string().guid();
const password = Joi.string().min(7).required().strict();



 const newUserDataSchema = Joi.object().keys({
    email:email.required(),
    first_name: name.required(),
    last_name: name.required(),
    location:name.required(),
    password: password,
    confirmPassword: password.valid(Joi.ref('password')).required().strict(),
    role: role.required(),
});

const postDataSchema = Joi.object().keys({
    title: name.required(),
    body:name.required(),

});
 const loginDataSchema =Joi.object().keys({
    email:email.required(),
    password: password.required(),
});

 const passwordResetDataSchema = Joi.object().keys({
    email:email.required(),
});

 const commentDataSchema =Joi.object().keys({
    parentid:userID.required(),
    body: amount.required(),
});

 const FlagDataSchema =Joi.object().keys({
    reason: name.valid('wired', 'wrong information', 'others').required(),
    description: name.required(),
});



module.exports = {
    '/auth/signup':newUserDataSchema, 
    '/admin/moderator':newUserDataSchema, 
    '/auth/login':loginDataSchema,
    '/admin/login':loginDataSchema,
    '/auth/reset':passwordResetDataSchema,
    '/admin/reset':passwordResetDataSchema,
    '/post/publish':postDataSchema,
    '/post/:postid/update':postDataSchema,
    '/post/:postid/flag':FlagDataSchema,
    '/:commentid/comment':commentDataSchema,
    '/post/:postid/comment':commentDataSchema,
    ':commentid/update':commentDataSchema  
};