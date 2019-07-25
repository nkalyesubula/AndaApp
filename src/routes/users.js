import express from 'express';
import signupController from '../controllers/users/signup';
import {login} from '../controllers/users/login';
import { schema } from '../helpers/validations/schemas';
import validate from '../middleware/validationMiddleware';


const router = express.Router();

router.post('/api/signup',[validate(schema.signupSchema)],signupController.signup);
router.post('/api/login', validate(schema.loggerSchema), login);



export default router;