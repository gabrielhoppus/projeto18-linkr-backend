import { Router } from 'express';
import { getUser, searchUser } from '../controllers/user.controller.js';
import { validateToken } from '../middlewares/token.middleware.js';

const router = Router();

router.get('/user/:id', validateToken, getUser)
router.get('/users', validateToken, searchUser)

export default router