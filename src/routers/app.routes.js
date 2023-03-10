import { Router } from 'express';
import loginRoutes from './login.routes.js';
import userRoutes from './user.routes.js';
import postRoutes from "./post.routes.js"
import hashTagRoutes from './hashtag.routes.js'
import likeRoutes from './like.routes.js'



const router = Router();


router.use([loginRoutes, userRoutes , postRoutes ,hashTagRoutes, likeRoutes]);


export default router;