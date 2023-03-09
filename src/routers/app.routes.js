import { Router } from 'express';
import loginRoutes from './login.routes.js';
import userRoutes from './user.routes.js';
import postRoutes from "./post.routes.js"


const router = Router();

router.use([loginRoutes, userRoutes, postRoutes]);

export default router;