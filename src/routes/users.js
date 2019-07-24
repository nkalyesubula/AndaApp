import express from 'express';
import signupController from '../controllers/users/signup';


const router = express.Router();

router.post('/api/signup', signupController.signup);



export default router;