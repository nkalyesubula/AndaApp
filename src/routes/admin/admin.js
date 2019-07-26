import express from 'express';
import auth from "../../middleware/auth"
import authorise from "../../middleware/authorize"
import  AdminController from'../../controllers/admin';

const router = express.Router();
const isAdmin=authorise("admin")
console.log("welcome to admin routes")
router.post('/login', AdminController.login);
router.post('/modulator',auth,isAdmin,AdminController.createModulator); 
router.post('/admin',auth,isAdmin,AdminController.createAdmin); 
router.patch('/reset',isAdmin,AdminController.reset);
router.patch('/Update',isAdmin,AdminController.updateUser);
router.get('/users',auth,isAdmin,AdminController.getAllUsers);
router.delete('/post/:id',auth,isAdmin,AdminController.deletePost)
router.delete('/user/:id',auth,isAdmin,AdminController.deleteUser)

module.exports = router;