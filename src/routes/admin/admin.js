const express = require('express');
const router = express.Router();
import auth from "../../middleware/auth"
import authorise from "../../middleware/authorize"

import  AdminController from'../../controllers/admin';
import SchemaValidator from "../middlewares/schemaValidator";
const validateRequest = SchemaValidator(true,"admin");
const isAdmin=authorise("admin")

router.post('/login',validateRequest, admlogin);
router.post('/modulator',validateRequest,auth,isAdmin,AdminController.createModulator); 
router.post('/admin',validateRequest,auth,isAdmin,AdminController.createAdmin); 
router.patch('/reset',validateRequest,isAdmin,AdminController.reset);
router.patch('/Update',validateRequest,isAdmin,AdminController.updateUser);
router.get('/users',validateRequest,auth,isAdmin,AdminController.getAllUsers);
router.delete('/post/:id',validateRequest,auth,isAdmin,AdminController.deletePost)
router.delete('/user/:id',validateRequest,auth,isAdmin,AdminController.deleteUser)

module.exports = router;