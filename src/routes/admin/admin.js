const express = require('express');
const router = express.Router();
import auth from "../../middleware/auth"
import authorise from "../../middleware/authorize"

import  {login,createModulator,reset,getUser,deleteUser,deletePost} from'../Controllers/user';
import SchemaValidator from "../middlewares/schemaValidator";
const validateRequest = SchemaValidator(true,"admin");
const isAdmin=authorise("admin")

router.post('/login',validateRequest, login);
router.post('/modulator',validateRequest,auth,isAdmin,createModulator); 
router.patch('/reset',validateRequest,isAdmin,reset);
router.get('/users',validateRequest,auth,isAdmin,getUser);
router.delete('/post/:id',validateRequest,auth,isAdmin,deletePost)
router.delete('/user/:id',validateRequest,auth,isAdmin,deleteUser)

module.exports = router;