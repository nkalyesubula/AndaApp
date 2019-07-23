import express from 'express';
import userController from '../controllers/users/signup'

const router = express.Router();

router.post('/api/signup', userController.signup);


export default router;