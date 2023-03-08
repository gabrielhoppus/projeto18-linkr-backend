import { Router } from 'express';
import { getUser } from '../controllers/user.controller.js';
import { validateToken } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/user/:id', validateToken, getUser)

export default router