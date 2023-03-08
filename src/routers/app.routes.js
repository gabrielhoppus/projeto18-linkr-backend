import { Router } from 'express';
import loginRoutes from './login.routes.js';
import userRoutes from '.user.routes.js';


const router = Router();

router.use([loginRoutes, userRoutes]);

export default router;