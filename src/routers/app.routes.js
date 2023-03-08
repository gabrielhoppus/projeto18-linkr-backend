import { Router } from 'express';
import loginRoutes from './login.routes.js';
import userRoutes from './user.routes.js';
import hashTagRoutes from './hashtag.routes.js'


const router = Router();

router.use([loginRoutes, userRoutes , hashTagRoutes]);

export default router;